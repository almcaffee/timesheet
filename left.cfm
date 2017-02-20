<cfparam name="url.employeeid" default="00001">

<cfquery name="getEmployees" datasource="proj">
  select * from employees
  where supervisor = <cfqueryparam cfsqltype="cf_sql_bigint" value="#url.employeeid#">
</cfquery>

<cfquery name="getEmployee" datasource="proj">
  select * from employees
  where employees.employeeid = <cfqueryparam cfsqltype="cf_sql_bigint" value="#url.employeeid#">
</cfquery>

<cfoutput query="getEmployee">
    <div class="form-group">
        <div class="displayfield">#displayname# <cfif employeeid NEQ "00001"><span class="glyphicon glyphicon-triangle-top up-level" data-supervisor="#supervisor#"></span></cfif></div>
    </div>
</cfoutput>

<cfif getEmployees.recordcount GT 0>
    <div class="form-group">
		<cfoutput>#getEmployees.recordcount#</cfoutput> Direct Reports
        <select class="select-id" name="select-employee">
            <option value="0" selected>------</option>
            <cfoutput query="getEmployees">
            	<option value="#employeeid#">#displayname#</option> 
            </cfoutput>
        </select>
    </div>
</cfif>

<cfoutput query="getEmployee">
    <div class="form employee-mobile">
        <div class="form-group">
            <label class="id">Start</label>
            <input type="text" class="form-control date form-left left-date" name="date" data-provide="datepicker" data-date-end-date="0d" value="#DateFormat(url.date,"mm/dd/yyyy")#">
        </div>
        <div class="form-group">
            <label>View</label>
            <select class="form-control form-left select-small left-view" name="view">
                <option value="bw" <cfif url.view EQ "bw"> selected</cfif>>Bi-Weekly</option>
                <option value="ww" <cfif url.view EQ "ww"> selected</cfif>>Weekly</option>
                <option value="mm" <cfif url.view EQ "mm"> selected</cfif>>Monthly</option>
            </select>
        </div>
        <div class="form-group">
        	<button class="btn btn-primary submit submit-params" data-form="mobile">Submit</button>
        </div>
    </div>
</cfoutput>


 

