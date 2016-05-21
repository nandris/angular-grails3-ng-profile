package main

class UrlMappings {

    static mappings = {
'/api/dashboard'(resources:'dashboard')
'/api/listusers'(resources:'listusers')
'/api/star'(resources:'star')
'/api/angdemo'(resources:'angdemo')
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view: '/index')
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
