// ビルド
// jsx --watch js build
/* React + JSX */
$(function () {

    // chrome tab example
    chrome.tabs.getSelected(null, function(tab) {

        var Component = React.createClass({displayName: "Component",
          render : function() {
            return (
              React.createElement("div", {class: "Component-inner"}, 
                React.createElement("h1", {className: "commentForm"}, "Hello, React!"), 
                React.createElement("p", {id: "title", className: "commentForm"},  tab.title), 
                React.createElement("p", {id: "url", className: "commentForm"},  tab.url)
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
