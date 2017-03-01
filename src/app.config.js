function AppConfig($stateProvider, $urlRouterProvider) {
	'ngInject';

	$stateProvider.state({
		name: 'home',
		url: '/',
		template: `
			<home message="app.message"></home>
		`
	}).state({
		name: 'demo',
		url: '/demo',
		template: `
			<demo></demo>
		`
	});

	$urlRouterProvider.otherwise('/');
}

module.exports = AppConfig;
