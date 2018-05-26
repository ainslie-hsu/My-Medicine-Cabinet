import React from 'react';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  onSubmit (e) {
    this.setState({
      term: e.target.value
    });
  }

  add() {
    this.props.onAdd(this.state.name, this.state.exp);
  }

  render() {
    return (<div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Enter medication </label>
        <input id="name" name="name" type="text" />
        <br></br>
        <label htmlFor="exp">Enter expiration date </label>
        <input id="exp" name="exp" type="date" />
        <button onClick={this.add.bind(this)}>Add</button>
      </form>
    </div>)
  }
}

export default Add;