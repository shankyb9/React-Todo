var React = require('react');
var createReactClass = require('create-react-class')
var ReactDOM = require('react-dom');
require('./css/index.css');
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';

// Module requires
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');

var App = createReactClass({
  render:function(){
    return(
      <HashRouter >
      <div>
        <Route exact path={'/'} component={TodoComponent}/>
        <Route path={"/about"} component={About}/>
      </div>
      </HashRouter>
    );
  }
});


//<!-one single parent tag is required  in the render -->
// Create Component
var TodoComponent = createReactClass({

  getInitialState: function(){
    return {
      todos:['wash up','eat some cheese','buy rose'],
    }
  },

  render: function(){
    // var ager = setTimeout(function(){
    //   this.setState({
    //     age: 35
    //   })
    // }.bind(this),5000);
    var todos = this.state.todos;
    todos = todos.map(function(item,index){
      // return(
      //   <li>{item}</li>
      // );
      return(
        <TodoItem item={item} key={index} onDelete={this.onDelete}/>
      );
    }.bind(this));
    return(
      <div id="todo-list">
      <Link to={'/about'}>About</Link>
        <p >The busiest people have the most leisure...</p>
        <ul>{todos}</ul>
        <AddItem onAdd={this.onAdd} />
      </div>
    );
  },

  // Custom functions
  onDelete: function(item){
    var updatedTodos = this.state.todos.filter(function(val,index){
      return item !== val;
    });
    this.setState({
      todos:updatedTodos
    });
  },

  onAdd: function(item){
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    });
  },

  // Lifecycle functions
  componentWillMount: function(){
    console.log('willmount');
  },

  componentDidMount: function(){
    console.log('didmount');
  },

  componentWillUpdate: function(){
    console.log('willupdate');
  },


});




// var TodoComponent = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <h1>Hello</h1>
//         <p>Hey ya</p>
//         <p>{this.props.mssg}</p>
//         <p><strong>Cheese name: </strong> {this.props.cheese.name}</p>
//         <p><strong>Cheese price: </strong> {this.props.cheese.price}</p>
//       </div>
//     );
//   }
// });
// var myCheese = {name:'Camembert',smellFactor:'Extreme pong',price: '3.50'};

// Put component in html page
// ReactDOM.render(<TodoComponent mssg="i like cheese" cheese={myCheese}/>,document.getElementById('todo-wrapper'));
// {} to reference variables
// ReactDOM.render(<TodoComponent />,document.getElementById('todo-wrapper'));
ReactDOM.render(<App />,document.getElementById('todo-wrapper'));
