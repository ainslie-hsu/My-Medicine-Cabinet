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
      url: '/cabinet',
      type: 'GET',
      success: (data) => {
        console.log('THIS IS THE DATA', data);
        this.setState({
          items: data,
        })
      },
      error: (err) => {
        console.log('Error at componentDidMount', err);
      }
    });
  }

  add(name, exp) {
    $.ajax({
      type: 'POST',
      url: 'http://127.0.0.1:3000/cabinet',
      data: {'name': name, 'exp': exp},
      success: function(data) {
        console.log('Success! ', data);
      },
      error: function (error) {
        console.error('Error! ', error);
      }
    });
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