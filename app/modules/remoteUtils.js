
var remoteUtils = {

	getPaginatedJson : function(id,success){
	 	var page = 1;
	 	getJson();
 		var parsedData = [];
	 	function getJson() {
	 		var url = '/starred/data/starred-'+ page + '.json';
	 		// var url = 'https://api.github.com/users/' + id + '/starred?page=' + page;
			$.ajax({
				url: url,
				type: 'GET',
				dataType: 'json',
				success: function(data, textStatus, xhr) {
					if(data.data.length > 0) {
						parsedData = parsedData.concat(data.data);
						getJson(++page);
					} else{
						success(parsedData);
					}
				},
				// error: error
				error: function(){
					console.log('error');
				}
			});
		}
	}

}

module.exports = remoteUtils;