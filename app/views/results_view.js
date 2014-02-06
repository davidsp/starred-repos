var template = require('./templates/results-view'),
modules = require('modules/remoteUtils');

var RepoResultsView = Backbone.View.extend({
	template: template,

	id: '#app',
	initialize: function(opts){
		// this.render();
		this.prepareView();
	},

	prepareView: function(){
		console.log('create general interface');
	},

	show: function(id){
		//XXX: look further if it supports IE8-9
		// modules.getPaginatedJson(id,this.postJson.bind(this));
		modules.getPaginatedJson(id,_.bind(this.postJson, this));

	},

	postJson: function(data){
		this.model = data;
		this.renderData();
	},

	renderData: function(){
		$(this.id).html(this.template({
			titulo: 'title',
			model: this.model
		}))
	}
});


module.exports = RepoResultsView;