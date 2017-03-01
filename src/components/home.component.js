function HomeCtrl() {
	this.message = 'Good Bye!';
}

var HomeComponent = {
	bindings: {
		message: '<'
	},
	controller: HomeCtrl,
	controllerAs: 'home',
	template: `
		<h1>{{ home.message }}</h1>
		<div class="btn-group" uib-dropdown is-open="status.isopen">
			<button id="single-button" type="button" class="btn btn-primary" uib-dropdown-toggle ng-disabled="disabled">
				Button dropdown <span class="caret"></span>
			</button>
			<ul class="dropdown-menu" uib-dropdown-menu role="menu" aria-labelledby="single-button">
				<li role="menuitem"><a href="#">Action</a></li>
				<li role="menuitem"><a href="#">Another action</a></li>
				<li role="menuitem"><a href="#">Something else here</a></li>
				<li class="divider"></li>
				<li role="menuitem"><a href="#">Separated link</a></li>
			</ul>
		</div>
	`
};

module.exports = HomeComponent;
