import React from 'react';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      exp: ''
    }
  }

  onChangeName(event) {
    this.setState({
      name: event.target.value
    });
  }

  onChangeExp(event) {
    this.setState({
      exp: event.target.value
    });
  }

  add(event) {
    this.props.onAdd(this.state.name, this.state.exp);
    this.form.reset();
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">Enter medication </label>
          <input id="name" name="name" type="text" value={this.state.names} onChange={this.onChangeName.bind(this)} />
          <br/>
          <label htmlFor="exp">Enter expiration date </label>
          <input id="exp" name="exp" type="date" value={this.state.exps} onChange={this.onChangeExp.bind(this)} />
          <br/>
          <button onClick={this.add.bind(this)}>Add</button>
        </form>
      </div>
    )
  }

}

export default Add;