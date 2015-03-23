// ビルド
// jsx --watch js build
/* React + JSX */
// var Dispatcher = require('flux').Dispatcher;
$(function () {

    // chrome tab example
    chrome.tabs.getSelected(null, function(tab) {

        var Component_title = React.createClass({
          render : function() {
            return (
                <p id="title">{ this.props.title }</p>
            )
          }
        });

        var Component_url = React.createClass({
          render : function() {
            return (
                <p id="url">{ this.props.url }</p>
            )
          }
        });

        var Component = React.createClass({
          render : function() {
            return (
              <div class="Component-inner">
                <h1 className="commentForm">Hello, React!</h1>
                <Component_title title={this.props.tab.title} />
                <Component_url url={this.props.tab.url} />
              </div>
            )
          }
        });

        React.render(
          <Component tab={tab} />,
          document.getElementById('wrap')
        );

    });

});
