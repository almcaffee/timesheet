<cftry>

<cfquery name="q_alltime" datasource="">
    select *, DATE_FORMAT(date, '%Y-%m-%d') as dayformat
    from time
    where time.employeeid = '#url.employeeid#'
 </cfquery>

<input type="hidden" id="first-day" value="<cfoutput>#url.date#</cfoutput>">
<input type="hidden" id="first-view" value="<cfoutput>#url.view#</cfoutput>">
<div id="calendar" data-first="<cfoutput>#HTMLEditFormat(DateFormat(firstDay,"mm/dd/yyyy"))#</cfoutput>" data-last="<cfoutput>#HTMLEditFormat(DateFormat(lastDay,"mm/dd/yyyy"))#</cfoutput>">

<cfloop from="1" to="#viewDays#" index="dayIndex">
  <cfset thisDate = DateAdd("d",dayIndex-1,firstDay)>
  <cfset lastDate = DateAdd("d",-1,thisDate)>
  <cfset nextDate = DateAdd("d",1,thisDate)>
  <cfset thisDay = DayOfWeek(thisDate)>
  
  <cfquery name="q_time" dbtype="query">
    select *
    from q_alltime
    where dayformat = '#DateFormat(thisDate,"yyyy-mm-dd")#'
 </cfquery>
  
  <cfset l_types = ValueList(q_time.timetype)>
  <cfset l_hours = ValueList(q_time.hours)>
  
  <cfif thisDay EQ 1>
    <cfset thisWeek = (dayIndex - 1)/7>
    <div class="week<cfif url.view EQ "mm">-mm</cfif>" <cfif thisWeek GT 0>data-last="<cfoutput>wk-#thisWeek#</cfoutput>"</cfif> <cfif viewDays - dayIndex GT 6>data-next="<cfoutput>wk-#thisWeek#</cfoutput>"</cfif>>
  </cfif>
  <a id="<cfoutput>#DateFormat(thisDate,"yymmdd")#</cfoutput>" class="dayDay" data-target="<cfoutput>#DateFormat(thisDate,"yymmdd")#</cfoutput>-form" <cfif thisDate NEQ firstDay>data-prev="<cfoutput>#DateFormat(lastDate,"yymmdd")#</cfoutput>"</cfif> <cfif thisDate NEQ lastDay> data-next="<cfoutput>#HTMLEditFormat(DateFormat(nextDate,"yymmdd"))#</cfoutput>"</cfif> data-show="<cfoutput>#DayOfWeekAsString(thisDay)# #Day(thisDate)#</cfoutput>"  data-date="<cfoutput>#DateFormat(thisDate,"yyyy-mm-dd")#</cfoutput>">
  <div class="innerDate">
      <div class="dayView"><div class="outerDay<cfif q_time.recordcount GT 0> updated</cfif><cfif ListContains(l_types,"Administrative")> al</cfif><cfif ListContains(l_types,"Regular")> re</cfif><cfif ListContains(l_types,"Vacation")> va</cfif><cfif ListContains(l_types,"Other")> ot</cfif>"<cfoutput>>#HTMLEditFormat(DayOfWeekAsString(thisDay))#</cfoutput> <cfif q_time.recordcount NEQ 0><cfoutput> #HTMLEditFormat(Day(thisDate))#</cfoutput></cfif></div>
      <div class="innerDay<cfif q_time.recordcount NEQ 0> no-pad</cfif>" data-day="<cfoutput>#HTMLEditFormat(Day(thisDate))#</cfoutput>">
      	  <cfif q_time.recordcount EQ 0><span class="day"><cfoutput>#HTMLEditFormat(Day(thisDate))#</cfoutput></span></cfif>
          <div class="re-time box"><span class="head">Regular</span>
            <cfif ListContains(l_types,"Regular")>
            <cfset l_index = ListContains(l_types,"Regular")>
            <span class="re hours" data-type="re" data-hours="<cfoutput>#ListGetAt(l_hours,l_index)#</cfoutput>"><cfoutput>#ListGetAt(l_hours,l_index)#</cfoutput></span>
            </cfif>
          </div>
          <div class="al-time box"><span class="head">Administrative</span>
            <cfif ListContains(l_types,"Administrative")>
                <cfset l_index = ListContains(l_types,"Administrative")>
                <span class="al hours" data-type="al" data-hours="<cfoutput>#ListGetAt(l_hours,l_index)#</cfoutput>"><cfoutput>#ListGetAt(l_hours,l_index)#</cfoutput></span>
            </cfif>
          </div>
          <div class="va-time box"><span class="head">Vacation</span>
            <cfif ListContains(l_types,"Vacation")>
                <cfset l_index = ListContains(l_types,"Vacation")>
                <span class="va hours" data-type="va" data-hours="<cfoutput>#ListGetAt(l_hours,l_index)#</cfoutput>"><cfoutput>#ListGetAt(l_hours,l_index)#</cfoutput></span>
            </cfif>
          </div>
          <div class="ot-time box"><span class="head">Other</span>
            <cfif ListContains(l_types,"Other")>
                <cfset l_index = ListContains(l_types,"Other")>
                <span class="ot hours" data-type="ot" data-hours="<cfoutput>#ListGetAt(l_hours,l_index)#</cfoutput>"><cfoutput>#ListGetAt(l_hours,l_index)#</cfoutput></span>
          </cfif>
          </div>
      </div>
      </div>
  </div>
  <div class="innerTime">
      <input class="form-control time-input" type="number" id="<cfoutput>#HTMLEditFormat(DateFormat(thisDate,"yymmdd"))#</cfoutput>-time" data-update="<cfoutput>#HTMLEditFormat(DateFormat(thisDate,"yymmdd"))#</cfoutput>" data-day="<cfoutput>#HTMLEditFormat(DatePart("d",thisDate))#</cfoutput>" data-wday="<cfoutput>#HTMLEditFormat(DayOfWeekAsString(thisDay))#</cfoutput>" min="0" max="24" placeholder="0.0">

      <select class="form-control type-select" id="<cfoutput>#HTMLEditFormat(DateFormat(thisDate,"yymmdd"))#</cfoutput>-type" data-input="<cfoutput>#HTMLEditFormat(DateFormat(thisDate,"yymmdd"))#</cfoutput>-time">
        <option value="re">Regular</option>
        <option value="va">Vacation</option>
        <option value="al">Administrative</option>
        <option value="ot">Holiday</option>
     </select>
  </div>
  </a>
  <cfif thisDay EQ 7>
    </div>
  </cfif>
</cfloop>

</div>


<cfcatch>
<cfdump var="#CFCATCH#"></cfcatch>
</cftry>
