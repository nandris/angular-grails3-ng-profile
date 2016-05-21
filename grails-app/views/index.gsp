<!DOCTYPE html>
<html lang="en">
	<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <title>Welcome to Grails</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <style type="text/css">
        [ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
            display: none !important;
        }
    </style>

    <asset:stylesheet src="application2.css"/>

  <!-- NEEDED fr login button styling -->  
  <asset:stylesheet src="semantic/dist/components/site.css"/>
  <asset:stylesheet src="semantic/dist/components/button.css"/>

    <asset:link rel="icon" href="favicon.ico" type="image/x-ico" />

    <script type="text/javascript">
        window.contextPath = "${request.contextPath}";
    </script>

	</head>

   <body ng-app="main">

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
               <li><g:link controller='login' class="ui inverted green button">Log in</g:link></li>
            </sec:ifLoggedIn>  
            </div>
		   </form>              

      </div>  
    </nav>

   <div class="container-fluid">
      <div class="row">
         <div class="col-md-12">

            <div class="col-md-2">
               <div>
				   </div>
			   </div>

		      <div class="col-md-10" >
            <br/>
            <br/>
            <br/>

            <h1>Welcome to Grails</h1>

            <p>
                Congratulations, you have successfully started your first Grails application! At the moment
                this is the default page, feel free to modify it to either redirect to a controller or display
                whatever content you may choose. Below is a list of controllers that are currently deployed in
                this application, click on each to execute its default action:
            </p>

            <div id="controllers" role="navigation">
                <h2>Available Controllers:</h2>

                <ul>
                    <g:each var="c" in="${grailsApplication.controllerClasses.findAll{ it.grep('Artefact > UserWelcome') }}">
                        <li class="controller">
                            <g:link controller="${c.logicalPropertyName}">${c.fullName}</g:link>
                        </li>
                    </g:each>
                </ul>
            </div>

			   </div>

         </div>
      </div>
   </div>

    <div class="footer" role="contentinfo"></div>

    <div id="spinner" class="spinner" style="display:none;">
        <g:message code="spinner.alt" default="Loading&hellip;"/>
    </div>

    <asset:javascript src="/main/main.js" />
</body>
</html>

