function DemoCtrl() {
	this.welcome = 'Welcome!';
}

var DemoComponent = {
	controller: DemoCtrl,
	controllerAs: 'demo',
	template: `
		<h1>Demo</h1>
		<h2>{{ demo.welcome }}</h2>
	`
};

module.exports = DemoComponent;
