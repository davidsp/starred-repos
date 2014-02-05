var application = require('application'),
Results  = require('views/results_view')


module.exports = Backbone.Router.extend({
    routes: {
        '': 'home',
        'results': 'results'
    },
    
    home: function() {
        $('body').html(application.homeView.render().el)
    },
    results: function(){
    	var results = new Results();
    	results.show('davidsp');
    }

})
