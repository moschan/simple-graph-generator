// ビルド
// jsx --watch js build
//
$(function () {
    // chrome tab example
    chrome.tabs.getSelected(null, function(tab) {
        /* React + JSX */
        React.render(
          <h1>Hello, React!</h1>,
          document.getElementById('heading')
        );

        React.render(
          <p>{ tab.title }</p>,
          document.getElementById('title')
        );

        React.render(
          <p>{ tab.url }</p>,
          document.getElementById('url')
        );
    });

});
