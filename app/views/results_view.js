var template = require('./templates/results-view'),
modules = require('modules/remoteUtils');

var RepoResultsView = Backbone.View.extend({
	template: template,
	id: '#app',
	initialize: function(){
		// this.render();
		this.prepareView();
	},

	prepareView: function(){
		console.log('create general interface');
	},

	show: function(id){
		console.log(id);
		modules.getJson(id,this.postJson);

	},

	postJson: function(data){
		console.log(data);
	},

	render: function(){
		$(this.id).html(this.template({
			title: 'test a'
		}))
	}
});


module.exports = RepoResultsView;