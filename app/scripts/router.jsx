var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Layout = require('./components/layout');
var FormHeader = require('./components/FormHeader');
var FormHeaderEdit = require('./components/FormHeaderEdit');

React.render(<FormHeader />, document.getElementById('FormHeader'));
React.render(<FormHeaderEdit />, document.getElementById('FormHeaderEdit'));
