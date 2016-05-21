import com.lazybones.angular.Star

class BootStrap {

    def init = { servletContext ->

	   new Star(name: 'Aldebaran', constellation: 'Taurus', bd: 'Alpha Tauri', distance: 65).save()
	   new Star(name: 'Betelgeuse', constellation: 'Orion', bd: 'Alpha Orionis', distance: 640).save()
	   new Star(name: 'Regulus', constellation: 'Leo', bd: 'Alpha Leonis', distance: 79).save()
	   new Star(name: 'Spica', constellation: 'Virgo', bd: 'Alpha Virginis', distance: 260).save()

    }
    def destroy = {
    }
}
