var createReactClass = require('create-react-class')
var React = require('react');
require('./css/todoItem.css');
// Create TodoItem Component
var TodoItem = createReactClass({
  render:function(){
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className='item-delete' onClick={this.handleDelete}> X </span>
        </div>
      </li>
    );
  },

  // Custom functions
  handleDelete: function(){
    this.props.onDelete(this.props.item);
  }
});


module.exports = TodoItem;
