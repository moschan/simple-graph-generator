// ビルド
// jsx --watch js build
/* React + JSX */
$(function () {

    // chrome tab example
    chrome.tabs.getSelected(null, function(tab) {

        var Component_title = React.createClass({displayName: "Component_title",
          render : function() {
            return (
                React.createElement("p", {id: "title"},  tab.title)
            )
          }
        });

        var Component_url = React.createClass({displayName: "Component_url",
          render : function() {
            return (
                React.createElement("p", {id: "url"},  tab.url)
            )
          }
        });

        var Component = React.createClass({displayName: "Component",
          render : function() {
            return (
              React.createElement("div", {class: "Component-inner"}, 
                React.createElement("h1", {className: "commentForm"}, "Hello, React!"), 
                React.createElement(Component_title, null), 
                React.createElement(Component_url, null)
              )
            )
          }
        });

        React.render(
          React.createElement(Component, null),
          document.getElementById('wrap')
        );

    });

});
