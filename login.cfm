<cfparam name="url.email" default="">
<cfparam name="url.password" default="">
<cfparam name="url.logout" default="">

<cfset FORM.email = url.email>
<cfset FORM.password = url.password>
<cfset SESSION.empid = url.password>

<cfif IsDefined("url.logout") AND url.logout EQ true>

<cfset SESSION.loggedin = false>
<cfset SESSION.logout = true>
<cflocation url="/timesheet/time.cfm" addtoken="no">

<cfelse>

<cfquery name="getUser" datasource="proj">
  select * from employees
  where email = '#url.email#'
  and employeeid = '#url.password#'
</cfquery>

<cfif getUser.recordcount GT 0>

 <cfset SESSION.loggedin = true>
 <cflocation url="/timesheet/time.cfm" addtoken="no">
 
<cfelse>

 <cfset SESSION.loggedin = false>
 <cflocation url="/timesheet/time.cfm" addtoken="no">
 
</cfif>

</cfif>

