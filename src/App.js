import React from 'react';
import Todo from './components/Todo';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      newItem: '',
      currentFilter: {
        isAll: true,
        isActive: false, 
        isCompleted: false,
      },
      todoItems: [
        {title: 'Javascrip', isComplete: true},
        {title: 'Html/css'},
        {title: 'Sass'}
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  //-----1----- xử lý sự kiện check items
  handleCheckItem(item)  {
    const {todoItems} = this.state;
    return (event) => {
      this.setState({
        todoItems : todoItems.map(i => i !== item ? {...i} : {...i, isComplete: !i.isComplete})
      })
    }
  }
  // end -----1-----
  //-----2----- xử lý sự kiện delte items
  handleDeleteItem(item){
    const {todoItems} = this.state;
    const index = todoItems.indexOf(item);
    return (event) => {
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          ...todoItems.slice(index + 1)
        ]
      })
    }
  }
  //end ----2----
  //-----3----- xử lý các sự kiện input
  onKeyUp(event) {
    const {todoItems} = this.state;
    if(event.keyCode === 13){ // enter key
      let text = event.target.value;
      text = text.trim(); 
      if (!text || text==='') {
        return;
      }
      this.setState({// chu y: binding this
        newItem: '',
        todoItems: [
          ...todoItems,
          {title: text, isComplete: false}
        ]
      });
    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }
  // end -----3-----
  //----4---- xử lý sự kiện filter todo item
  handleAllItems = () => {
    this.setState({
      currentFilter: {
        isAll: true,
        isActive: false,
        isCompleted: false,
      }
    })
  }
  handleActive = () => {
    this.setState({
      currentFilter: {
        isAll: false,
        isActive: true,
        isCompleted: false,
      }
    })
  }
  handleCompleted = () => {
    this.setState({
      currentFilter: {
        isAll: false,
        isActive: false,
        isCompleted: true,
      }
    })
  }
  //end -----4-----
  
  render(){
    const {todoItems, newItem, currentFilter} = this.state;

    let ItemsActive = [];
    let ItemsCompleted = [];
    if(todoItems.length){
      ItemsActive = todoItems.filter(item => !item.isComplete);
      ItemsCompleted = todoItems.filter(item => item.isComplete);
    }

    if(todoItems.length){
      return (
        <div className="App">
          <h1>Danh sách công việc</h1>
          <Header 
            newItem={newItem}
            keyUp={this.onKeyUp}
            change={this.onChange}
          />

          {
            currentFilter.isActive === true &&
            currentFilter.isAll === false &&
            currentFilter.isCompleted === false ? ItemsActive.map((item, index) => 
              <Todo 
                key={index} 
                item={item} 
                checkItem={this.handleCheckItem(item)}
                deleteItem={this.handleDeleteItem(item)}
              />
            )
            : currentFilter.isActive === false &&
              currentFilter.isAll === false &&
              currentFilter.isCompleted === true ? ItemsCompleted.map((item, index) => 
              <Todo 
                key={index} 
                item={item} 
                checkItem={this.handleCheckItem(item)}
                deleteItem={this.handleDeleteItem(item)}
              />
            )
            : todoItems.map((item, index) => 
              <Todo 
                key={index} 
                item={item} 
                checkItem={this.handleCheckItem(item)}
                deleteItem={this.handleDeleteItem(item)}
              />
            )
          }

          <Footer 
            Amount={todoItems.length}
            allItems={this.handleAllItems}
            onActive={this.handleActive}
            onCompleted={this.handleCompleted}
            currentFilter={currentFilter}
          />
        </div>
      );
    }else {
      return (
        <div className="App">
          <h1>Danh sách công việc</h1>
          <Header 
            newItem={newItem}
            keyUp={this.onKeyUp}
            change={this.onChange}
          />

          {
            <div className="Todo Todo-empty">
              Không có công việc nào!
            </div>
          }

          <Footer 
            Amount={todoItems.length}
            allItems={this.handleAllItems}
            onActive={this.handleActive}
            onCompleted={this.handleCompleted}
            currentFilter={currentFilter}
          />  
        </div>
      );
    }
  }
}

export default App;
