
var remoteUtils = {

	 getJson : function(id,success,error){
	 	var url = 'https://api.github.com/users/' + id + '/starred';

		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'jsonp',
			success: function(data, textStatus, xhr) {
				success(data);
			},
			error: error
		});

	}

}

module.exports = remoteUtils;