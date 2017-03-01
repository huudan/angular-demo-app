function AppCtrl() {
	this.message = 'Hello, World!!!';
}

var AppComponent = {
	controller: AppCtrl,
	controllerAs: 'app',
	template: `
		<div class="container">
			<a class="btn btn-primary" ui-sref="home">Home</a>
			<a class="btn btn-default" ui-sref="demo">Demo</a>
			<ui-view></ui-view>
		</div>
	`
};

module.exports = AppComponent;
