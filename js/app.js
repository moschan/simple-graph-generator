$(function () {
    // chrome tab example
    chrome.tabs.getSelected(null, function(tab) {
        $('#title').text(tab.title);
        $('#url').text(tab.url);
    });

    /* React + JSX */
    React.render(
      <h1>Hello, React!</h1>,
      document.getElementById('heading')
    );
});
