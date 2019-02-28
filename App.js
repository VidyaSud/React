import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import MyComponent from './myComponent';

class App extends Component {
  state={
    toDoCount:0,
    toDoResult:[]
    }
  NewTodoHandler = () => {
    const toDoCount= this.state.toDoCount
    const updatedCount= toDoCount + 1 ;
    const toDoResult=[...this.state.toDoResult];
    const newToDoResult=toDoResult.concat({
                                  id: new Date(),
                                  value:updatedCount
                                  });
    console.log(newToDoResult); 

    this.setState({ toDoCount:updatedCount,toDoResult:newToDoResult});
  }

  DeleteLinkHandler (index) {
    const deletedItems =[...this.state.toDoResult];
    deletedItems.splice(index,1);
   this.setState({toDoResult:deletedItems})
  } 

       

  render() {
    // Add to list
    // const outPutofTodo= this.state.toDoResult.map( res =>{
    //   return (
    //     <div>
    //     <li key={res.id}>{res.value}</li>  <button class="button center">Delete</button>
    //     </div>
    //   )     
    // });
if(this.state.toDoResult.length>0){
    var trHead = <thead>
    <tr>
      <th>Todo Task</th>
    </tr>
  </thead>;

  var trRow = this.state.toDoResult.map( (result,index) => {
  return(
    <tr>
    <td><div>
    <span>Task{result.value}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
    </div></td>
    <td><div>
    <span></span>
    </div></td>
    <td><div>
    <button onClick={()=>this.DeleteLinkHandler(index)} class="Deletebutton">Delete</button>
    </div></td>  
  </tr>   
  )
  });
}
   
    return (
      // <div className="App">
      // <h1 className="App-header" >Welcome to new React</h1>
      // </div>
      <div class="container center">
      <h1 class="center title">My TODO App</h1>
      <div class="flow-right controls">
        <span>Item count: <span id="item-count">{this.state.toDoCount}</span></span>
        <span>Unchecked count: <span id="unchecked-count">0</span></span>
      </div>
      <button class="button center" onClick={this.NewTodoHandler}>New TODO</button>
      {/* <ul id="todo-list" class="todo-list">
      {outPutofTodo}
      </ul> */}
      <table class="todotable center">
      {trHead}
      {trRow}
      </table>
      
    </div>
    );
  }
}

export default App;
