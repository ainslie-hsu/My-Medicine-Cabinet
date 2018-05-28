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
      success: (data) => {
        this.setState({
          items: data,
        })
      },
      error: (err) => {
        console.log('Error at componentDidMount! ', err);
      }
    });
  }

  add(name, exp) {
    $.ajax({
      type: 'POST',
      url: '/cabinet',
      data: {name: name, exp: exp},
      success: function(data) {
        console.log('Medication successfully added! ', data);
      },
      error: function (error) {
        console.error('Medication failed to submit! ', error);
      }
    });
  }

  remove(id) {
    $.ajax({
      type: 'DELETE',
      url: '/cabinet',
      data: {id: id},
      success: function(data) {
        console.log('Medication successfully removed! ', data);
      },
      error: function (error) {
        console.error('Medication failed to delete! ', error);
      }
    });
    $.ajax({
      url: '/cabinet',
      success: (data) => {
        this.setState({
          items: data,
        })
      },
      error: (err) => {
        console.log('Error at remove! ', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>My Medicine Cabinet</h1>
      <List items={this.state.items} onRemove={this.remove.bind(this)}/>
      <Add onAdd={this.add.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));