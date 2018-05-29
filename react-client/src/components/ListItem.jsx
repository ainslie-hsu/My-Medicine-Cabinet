import React from 'react';

const ListItem = (props) => {

  var utc = new Date(props.item.exp);
  var date = utc.toLocaleDateString();

  var remove = (event) => {
    props.onRemove(props.item._id);
  }

  return (
    <tr>
      <td>{props.item.name}</td>
      <td>{date}</td>
      <td><button onClick={remove} className="remove-button">X</button></td>
    </tr>
  )
}

export default ListItem;