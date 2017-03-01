var angular = require('angular');
require('angular-animate');
require('angular-aria');
require('angular-ui-bootstrap');
require('angular-ui-router/release/angular-ui-router');

var AppConfig = require('./app.config');
var AppComponent = require('./components/app.component');
var HomeComponent = require('./components/home.component');
var DemoComponent = require('./components/demo.component');

var App = angular.module('App', ['ui.bootstrap', 'ui.router'])
	.config(AppConfig)
	.component('app', AppComponent)
	.component('home', HomeComponent)
	.component('demo', DemoComponent);

module.exports = App;
