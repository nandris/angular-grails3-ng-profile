package com.lazybones.angular

import com.lazybones.angular.Star

class StarController extends PagedRestfulController {
    StarController() {
        super(Star)           // Star domain is passed to PagedRestfulController

        // PagedRestfulConttroller then calls .createCriteria() on the Star 'resource'
        //
        // extracted data is the passed to the view via the star list controller...
    }
}
