// ビルド
// jsx --watch js build
/* React + JSX */
$(function () {

    // chrome tab example
    chrome.tabs.getSelected(null, function(tab) {

        var Component = React.createClass({
          render : function() {
            return (
              <div class="Component-inner">
                <h1 className="commentForm">Hello, React!</h1>
                <p id="title" className="commentForm">{ tab.title }</p>
                <p id="url" className="commentForm">{ tab.url }</p>
              </div>
            )
          }
        });

        React.render(
          <Component />,
          document.getElementById('wrap')
        );

    });

});
