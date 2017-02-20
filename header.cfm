<cfparam name="url.employeeid" default="00001">

<cfquery name="getEmployee" datasource="proj">
  select * from employees
  where employees.employeeid = <cfqueryparam cfsqltype="cf_sql_bigint" value="#url.employeeid#">
</cfquery>

<cfoutput query="getEmployee">
    <div class="form-inline employee col-xs-11">
        <div class="form-group">
            <label class="id">Pay Period</label>
            <input type="text" class="form-control date form-head head-date" name="date" data-provide="datepicker" data-date-end-date="0d" value="#DateFormat(url.date,"mm/dd/yyyy")#">
            <span class="glyphicon glyphicon-option-vertical"></span>
            <input type="text" class="form-control date2" value="">
        </div>
        <div class="form-group">
            <label>Frequency</label>
            <select class="form-control form-head head-view" name="view">
            <option value="bw" <cfif url.view EQ "bw"> selected</cfif>>Bi-Weekly</option>
            <option value="ww" <cfif url.view EQ "ww"> selected</cfif>>Weekly</option>
            <option value="mm" <cfif url.view EQ "mm"> selected</cfif>>Monthly</option>
            </select>
        </div>
        <div class="form-group">
        <button class="btn btn-secondary submit submit-params-mobile">View</button>
        </div>
    </div>

    <span class="glyphicon glyphicon-menu-hamburger toggle"></span>
    <div class="settings">
        <div class="dropdown ">
         <div class="dropdown-toggle" id="settingsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" alt="Settings">
          <span class="glyphicon glyphicon-cog"></span>
          <small><span class="text-muted glyphicon glyphicon-triangle-bottom"></span></small>
            </div>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="settingsDropdown">
            <a class="dropdown-item logout" >Logout</a>
          </div>
        </div>
    </div>
</cfoutput>


