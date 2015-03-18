$(function () {
    // chrome tab example
    chrome.tabs.getSelected(null, function(tab) {
        /* React + JSX */
        React.render(
          React.createElement("h1", null, "Hello, React!"),
          document.getElementById('heading')
        );

        React.render(
          React.createElement("p", null,  tab.title),
          document.getElementById('title')
        );

        React.render(
          React.createElement("p", null,  tab.url),
          document.getElementById('url')
        );
    });

});
