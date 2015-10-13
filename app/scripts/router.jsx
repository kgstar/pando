var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Layout = require('./components/layout');
var FormHeader = require('./components/FormHeader');
var FormHeaderEdit = require('./components/FormHeaderEdit');
var ExpenseField = require('./components/ExpenseField');
var Activities = require('./components/Activities');

React.render(<FormHeader />, document.getElementById('FormHeader'));
React.render(<FormHeaderEdit />, document.getElementById('FormHeaderEdit'));
React.render(<ExpenseField />, document.getElementById('ExpenseField'));
React.render(<Activities />, document.getElementById('Activities'));
