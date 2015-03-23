// ビルド
// jsx --watch js build
/* React + JSX */
// var Dispatcher = require('flux').Dispatcher;
$(function () {

    // chrome tab example
    chrome.tabs.getSelected(null, function(tab) {

        var Component_title = React.createClass({displayName: "Component_title",
          render : function() {
            return (
                React.createElement("p", {id: "title"},  this.props.title)
            )
          }
        });

        var Component_url = React.createClass({displayName: "Component_url",
          render : function() {
            return (
                React.createElement("p", {id: "url"},  this.props.url)
            )
          }
        });

        var Component = React.createClass({displayName: "Component",
          render : function() {
            return (
              React.createElement("div", {class: "Component-inner"}, 
                React.createElement("h1", {className: "commentForm"}, "Hello, React!"), 
                React.createElement(Component_title, {title: this.props.tab.title}), 
                React.createElement(Component_url, {url: this.props.tab.url})
              )
            )
          }
        });

        React.render(
          React.createElement(Component, {tab: tab}),
          document.getElementById('wrap')
        );

    });

});
