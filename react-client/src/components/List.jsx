import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => {

  var remove = (id) => {
    props.onRemove(id);
  }

  return (
    <div>
      <h4> List Component </h4>
      There are { props.items.length } items.
        <table>
          <thead>
            <tr>
              <th>Medication</th>
              <th>Exp. Date</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {props.items.map(item => <ListItem item={item} key={item._id} onRemove={remove}/>)}
          </tbody>
        </table>
    </div>
  )
}

export default List;