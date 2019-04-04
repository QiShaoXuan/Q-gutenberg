import React from 'react';
import GutenbergEditor from '../src/main';

class App extends React.Component {
  state = {
    value: {
      title: 'Test title',
      content:
        '<!-- wp:paragraph {"className":"has-text-color"} -->\n' +
        '<p class="has-text-color"><em>It’s a whole new way to use WordPress. Try it right here!</em></p>\n' +
        '<!-- /wp:paragraph -->',
    }
  };

  _onChange = (e) => {
    const { value } = e.target;
    // console.log('value:->', value);
  };

  _onSetNewData = (e) => {
    this.setState({
      value: {
        title: 'Test title' + Date.now(),
        content:
          '<!-- wp:paragraph {"className":"has-text-color"} -->\n' +
          '<p class="has-text-color"><em>New data, Try it right here!</em></p>\n' +
          '<!-- /wp:paragraph -->'
      }
    });
  };

  render() {
    return (
      <div className="app">
        <GutenbergEditor value={this.state.value} onChange={this._onChange} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
