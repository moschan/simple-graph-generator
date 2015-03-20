// ビルド
// jsx --watch js build
/* React + JSX */
$(function () {

    // chrome tab example
    chrome.tabs.getSelected(null, function(tab) {

        var Component_title = React.createClass({
          render : function() {
            return (
                <p id="title">{ tab.title }</p>
            )
          }
        });

        var Component_url = React.createClass({
          render : function() {
            return (
                <p id="url">{ tab.url }</p>
            )
          }
        });

        var Component = React.createClass({
          render : function() {
            return (
              <div class="Component-inner">
                <h1 className="commentForm">Hello, React!</h1>
                <Component_title />
                <Component_url />
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
