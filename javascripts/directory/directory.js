BustinBash.Directory.View = function() {}

BustinBash.Directory.View.prototype = {

	hideAndShowDOM: function(data) {
		this.clearDom();

		if(data != undefined){
			$(data.Show).show();
		}
	},

	clearDom: function() {
		$('.directory .row .column ul:not(.countries)').hide()
	},

	appendCurrentFolder: function(data) {
		$('.current-folder').text(data)
	}
}

BustinBash.Directory.Controller = function(view) {
	this.view = view;
	this.current_level = ''
}

BustinBash.Directory.Controller.prototype = {
	init: function() {
		this.bindListeners();
	},
	bindListeners: function() {
		$(document).on('changeLevel', function(e,l,previousLevel) {
			this.view.hideAndShowDOM(previousLevel)
		}.bind(this));

		$(document).on('success', function() {
			if(this.data.ID <= 12 ){
				this.checkLevel(this.data)
			}
		}.bind(this));
	},

	checkLevel: function(data) {
		this.view.hideAndShowDOM(data);
	},

}
