import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Add from './components/Add.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  add (entry) {

  }

  render () {
    return (<div>
      <h1>My Medicine Cabinet</h1>
      <List items={this.state.items}/>
      <Add onAdd={this.add.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));