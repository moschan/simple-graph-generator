$(function () {
    // chrome tab example
    chrome.tabs.getSelected(null, function(tab) {
        $('#title').text(tab.title);
        $('#url').text(tab.url);
    });

    /* React + JSX */
    React.render(
      React.createElement("h1", null, "Hello, React!"),
      document.getElementById('heading')
    );
});
