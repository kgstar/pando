var React = require('react');

var Home = React.createClass({

  render: function() {

    return (
      <div className="hero-unit">
        <h1>This is my first Grunt</h1>
        <p>You now have</p>
        <ul>
            <li>Rederplate</li>
        </ul>
      </div>
    );
  }
});

module.exports = Home;
