<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title><g:layoutTitle default="Grails"/></title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

  		<asset:stylesheet src="application2.css"/>

        <asset:script type="text/javascript">
            angular.module('main.core.constants')
                .constant('rootUrl', '${grailsApplication.config.angular.rootUrl}')
                .constant('pageSize', '${grailsApplication.config.angular.pageSize}')
                .constant('dateFormat', '${grailsApplication.config.angular.dateFormat}');
        </asset:script>

        <asset:javascript src="/main/main.js"/>
        <asset:javascript src="ui-bootstrap-tpls.js"/>

  <!-- NEEDED fr login button styling -->  
  <asset:stylesheet src="semantic/dist/components/site.css"/>
  <asset:stylesheet src="semantic/dist/components/button.css"/>

        <asset:deferredScripts />
		<g:layoutHead/>
	</head>

   <body ng-app="main">

         <!--- BEGIN NAV BAR --->

    <nav class="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation" >

    <div class="container-fluid">
         <div class="navbar-header">
            <g:link uri="/" class="navbar-brand">LazyBones</g:link>
         </div>

		   <form 
            class="navbar-form navbar-right" 
            autocomplete="off">
         
            <div id="logincluster">
            <sec:ifLoggedIn>   
               <li><g:link controller='logout' class="ui inverted red button">Log out</g:link></li>
            </sec:ifLoggedIn>  
            </div>
		   </form>              <!-- navbar-right form -->
	   </div>                  
   </div>                    

  </ul>
  <!--                                                         BEGIN LOGIN REVEAL                        --> 
 </div>  
</nav>

<!--- END NAV BAR --->

   <div class="container-fluid">
      <div class="row">
         <div class="col-md-12">

            <div class="col-md-2">
               <div>
				      <ul class="nav nav-pills nav-stacked" id="bluepills">
                     <li menu-item="{'home' : 'active'}"><a ui-sref="home"><i class="fa fa-home"></i> Home</a></li>
						      <g:each var="c" in="${grailsApplication.controllerClasses.findAll{ it.grep('Artefact > Star') || it.grep('Artefact > Angdemo') || it.grep('Artefact > Listusers') || it.grep('Artefact > Dashboard') }}">
							      <li menu-item="{'${c.logicalPropertyName}.*' : 'active'}"><a ui-sref="${c.logicalPropertyName}.list" ><i class="fa fa-database"></i> ${c.logicalPropertyName.capitalize()}</a></li>
						      </g:each>
					   </ul>
				   </div>
			   </div>

		      <div class="col-md-10">
            	<div class="animate-view" ui-view id="mainview"></div>
			   </div>

         </div>
      </div>
   </div>

   </body>
</html>
