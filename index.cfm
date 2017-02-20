<cfparam name="url.title" default="Timesheet Application">
<cfparam name="url.date" default="#DateFormat(Now(),"yyyy-mm-dd")#">
<cfparam name="url.view" default="bw">

<cfif IsDefined("SESSION.empid")>
  <cfparam name="url.employeeid" default="#SESSION.empid#">
<cfelse> 
  <cfparam name="url.employeeid" default="00001">
</cfif>

<cftry>

<!DOCTYPE html>
<html lang="en">
<head>
<title><cfoutput>#url.title#</cfoutput></title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta name="description" content="Timesheet Application built with Coldfusion, Bootstrap, MySQL and jQuery.">


<!-- Bootstrap -->
<link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap-custom.css">
<link rel="stylesheet" type="text/css" href="/css/time.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap-datepicker.css">

<!---<cfinclude template="/scripts/cf_extjs.cfm">--->

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries --> 
<!-- WARNING: Respond.js doesn't work if you view the page via file:// --> 
<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) --> 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>

<!--- Misc --->
<script src="https://cdnjs.cloudflare.com/ajax/libs/1000hz-bootstrap-validator/0.11.5/validator.js">
<script src="/js/jquery.number.js"></script>
<script src="/js/bootstrap-datepicker.js"></script>
<script src="/js/numeral.js"></script>

</head>

<body>

<cfif IsDefined("SESSION.loggedin") AND SESSION.loggedin EQ true>

<cfif url.view EQ "mm">
  <cfset firstDay = DateAdd("d",1-DayOfWeek(CreateDate(DatePart("yyyy",url.date),DatePart("m",url.date),1)),CreateDate(DatePart("yyyy",url.date),DatePart("m",url.date),1))>
<cfelse>
  <cfset firstDay = DateAdd("d",1-DayOfWeek(url.date),url.date)>
</cfif>

<cfset payDays = 0>
<cfif url.view EQ "mm">
  <cfset payDays = DaysInMonth(url.date)>
  <cfelseif url.view EQ "ww">
  <cfset payDays = 7>
  <cfelseif url.view EQ "bw">
  <cfset payDays = 14>
</cfif>
<cfif url.view EQ "mm">
  <cfset lastDay = DateAdd("d",7-DayOfWeek(CreateDate(DatePart("yyyy",url.date), DatePart("m",url.date),DaysInMonth(url.date))),CreateDate(DatePart("yyyy",url.date),DatePart("m",url.date),DaysInMonth(url.date)))>
  <cfelseif url.view EQ "ww">
  <cfset lastDay = DateAdd("d",7-DayOfWeek(url.date),url.date)>
  <cfelseif url.view EQ "bw">
  <cfset lastDay = DateAdd("d",payDays-1,firstDay)>
</cfif>
<cfset viewDays = DateDiff("d",firstDay,lastDay)+1>
    
  <nav class="nav">
      <cfinclude template="/timesheet/header.cfm">
  </nav>
  <div class="left">
    <div class="left-extra">
    <cfinclude template="/timesheet/left.cfm">
    </div>
  </div>
  <div class="right">
    <div class="mobile-next container-fluid no-pad">
      <div class="previous-day<cfif url.date NEQ firstDay> previous-day-gray</cfif> col-xs-2"  data-show="<cfoutput>#DateFormat(DateAdd("d", -1, url.date),"yymmdd")#</cfoutput>" data-prev="<cfoutput>#DateFormat(DateAdd("d", -1,url.date),"dddd d")#</cfoutput>"><span class="glyphicon glyphicon-chevron-left"></span></div>
      <div class="dayDate col-xs-8 text-center" data-show="<cfoutput>#DateFormat(url.date,"yymmdd")#</cfoutput>"><span class="text"><cfoutput>#DateFormat(url.date,"dddd dd")#</cfoutput></span> <small class="text-muted "><span class="glyphicon glyphicon-triangle-bottom"></span></small></div>
      <div class="<cfif url.date NEQ lastDay>next-day  <cfelse>next-day-gray </cfif>col-xs-2  text-right" data-show="<cfoutput>#DateFormat(DateAdd("d", 1, url.date),"yymmdd")#</cfoutput>" data-next="<cfoutput>#DateFormat(DateAdd("d", 1, url.date),"dddd d")#</cfoutput>"><span class="glyphicon glyphicon-chevron-right"></span></div>
    </div>
    <div class="mobile-calendar">
    <div class="mobile-week mobile-days">
      <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
    </div>
    <cfloop from="1" to="#viewDays#" index="dayIndex">
	  <cfset thisDate = DateAdd("d",dayIndex-1,firstDay)>
      <cfset thisDay = DayOfWeek(thisDate)>
      
      <cfif thisDay EQ 1>
        <cfset thisWeek = (dayIndex - 1)/7>
        <div class="mobile-week">
      </cfif>
      <a class="calendar-link <cfoutput>#DateFormat(thisDate,"yymmdd")#</cfoutput>-link" data-show="<cfoutput>#DateFormat(thisDate,"yymmdd")#</cfoutput>">
      <cfoutput>#HTMLEditFormat(Day(thisDate))#</cfoutput></a>
      <cfif thisDay EQ 7>
        </div>
      </cfif>
    </cfloop>
    
    </div>
    <div class="time container-fluid">
      <cfinclude template="/timesheet/days.cfm">
    </div>
  <div class="disable"></div>
  <span class="startDate hidden" data-start="<cfoutput>#HTMLEditFormat(DateFormat(url.date,"yymmdd"))#</cfoutput>"></span>
	<div class="time-totals alert alert-info alert-dismissible fade in" role="alert">
       <div class="re-total">Regular: <input type="number" class="form-control total" disabled></div>
       <div class="al-total">Administrative: <input type="number" class="form-control total" disabled></div>
       <div class="va-total">Vacation: <input type="number" class="form-control total" disabled></div>
       <div class="ot-total">Other: <input type="number" class="form-control total" disabled></div>
       <div class="all-total"><div class="displayfield hours-total"></div></div>
       <div><button class="btn btn-secondary submit-time">Submit</button></div>
    </div>
  </div>
  
  <cfquery name="q_time" datasource="proj">
    select * from time
    where time.employeeid = '#url.employeeid#'
    and time.date >= '#DateFormat(firstDay,"yyyy-mm-dd")#'
    and time.date <= '#DateFormat(lastDay,"yyyy-mm-dd")#'
  </cfquery>
    
    <cfif q_time.recordcount GT 0>
		<script>
        	$(document.body).addClass('has-time');
        </script>
        <cfquery name="q_dates" datasource="proj">
            select distinct DATE_FORMAT(date, '%Y-%m-%d') as date
            from time
            where time.employeeid = '#url.employeeid#'
            and time.date >= '#DateFormat(firstDay,"yyyy-mm-dd")#'
            and time.date <= '#DateFormat(lastDay,"yyyy-mm-dd")#'
        </cfquery>
        <cfset l_dates = ValueList(q_dates.date)>
        <div class="saved-time">
        <p>You have previously submitted time during this date range. Submitting changes will overwite this data.</p>  
        <table class="table table-striped table-condensed">
        <thead>
            <th>Date</th>
            <th>Type</th>
            <th>Hours</th>
        </thead>
            <tbody>
                <cfloop list="#l_dates#" index="l_date">
                
                <cfquery dbtype="query" name="q_times">
                    select * from q_time
                    where date = '#l_date#'
                </cfquery>
                <tr>
                    <td><cfoutput>#DateFormat(l_date, "mmmm d")#</cfoutput></td>  
                    <td colspan="2">
                        <div class="container-fluid">
                        <cfoutput query="q_times">
                        <div class="row"><span class="col-xs-6">#timetype#</span> <span class="col-xs-6">#hours#</span></div>
                        </cfoutput>
                        </div>
                    </td>
                </tr>
                </cfloop>
            </tbody>
        </table>
        <div class="text-center">
            <button class="btn btn-secondary close-time">Continue</button></div>
        </div>
    <cfelse>
        <div class="saved-time">
        	<p>You must enter a value to submit this timesheet.</p>  
        	<div class="text-center"><button class="btn btn-secondary close-time">Continue</button></div>
        </div>
    </cfif>
    
    <input type="hidden" class="input-date" value="">
	<input type="hidden" class="employee-start" data-start="<cfoutput>#DateFormat(firstDay,"mm/dd/yy")#</cfoutput>" data-end="<cfoutput>#DateFormat(lastDay,"mm/dd/yy")#</cfoutput>" data-time="<cfoutput>#url.employeeid##DateFormat(firstDay,"yymmdd")##DateFormat(lastDay,"yymmdd")#</cfoutput>" data-empid="<cfoutput>#url.employeeid#</cfoutput>">

<cfelseif IsDefined("SESSION.loggedin") AND SESSION.loggedin EQ false AND IsDefined("SESSION.logout") AND SESSION.logout EQ false>

    <cfquery name="qrand" datasource="proj">
        SELECT * 
        FROM employees 
        ORDER BY RAND()
        LIMIT 1
    </cfquery>

	<div style="display: block; clear: both; max-width: 450px; margin-left: auto; margin-right: auto;">
        <div class="alert alert-info alert-dismissible text-left" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <strong><span class="glyphicon glyphicon-info-sign"></span> 8:12 PM EST 11/27/2016</strong>, This web application is officially fully functional. Please send any comments to <a href="mailto:ollie@olletinsley.com">ollie@olletinsley.com</a><br><br>
          <strong>Updates:</strong> Working on cleaning up the code to post to GitHub....  <strong>12:20 AM EST 11/28/2016</strong>, bug issue with some smartphone session variables preventing login....
        </div>
	</div>

    <div class="container center login" action="/timesheet/login.cfm">
      <img class="login-img" src="/timesheet/login.svg">
      
      <div class="login-form"> 
        <div class="form-group has-warning">
          <label for="email" class="col-form-label">Email</label>
          <input type="email" class="form-control" id="email" name="email" placeholder="Email">
        </div>
        <div class="form-group has-warning">
          <label for="password" class="col-form-label">Password</label>
          <input type="password" class="form-control" id="password" name="password" placeholder="Password">
           <small class="form-text text-muted">Login, failed. Try using the login provided below.</small>
        </div>
        <div class="form-group">
            <button type="submit" class="submit btn btn-primary elogin">Sign in</button>
        </div>
      </div>
      <div class="form-label-warning"><strong>Random Login</strong> <br><b>Email:</b> <cfoutput>#qrand.email# | <b>Password:</b> #qrand.employeeid#</cfoutput></div>
    </div>

<cfelse>

    <div class="container center login">
      <cfquery name="qrand" datasource="proj">  
        SELECT * 
        FROM employees 
        ORDER BY RAND()
        LIMIT 1
     </cfquery>
    
      <img class="login-img" src="/timesheet/login.svg">
      
      <div class="login-form"> 
        <div class="form-group">
          <label for="email" class="col-form-label">Email</label>
          <input type="email" class="form-control" id="email" name="email" placeholder="Email">
        </div>
        <div class="form-group">
          <label for="password" class="col-form-label">Password</label>
          <input type="password" class="form-control" id="password" name="password" placeholder="Password">
        </div>
        <div class="form-group">
            <button type="submit" class="submit btn btn-primary elogin">Sign in</button>
        </div>
      </div>
      <div class="form-label-warning"><strong>Random Login</strong> <br> <b>Email:</b> <cfoutput>#qrand.email# | <b>Password:</b> #qrand.employeeid#</cfoutput></div>
    </div>

</cfif>

<script src="/timesheet/timesheet.js"></script>

<cfcatch>
	<cfdump var="#CFCATCH#">
</cfcatch>
</cftry>
