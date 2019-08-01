import React from 'react';
import classNames from 'classnames';
import './Todo.css';
import check from '../img/check.svg';
import checkComplete from '../img/checkComplete.svg';
import deleteI from '../img/delete.svg';

class Todo extends React.Component {
   render() {
      const {item, checkItem, deleteItem} = this.props;
      let url = check;
      
      if(item.isComplete){
         url = checkComplete;
      }
      return (
         <div className= {classNames('Todo',{
            'Todo-complete': item.isComplete
         })}>
            <img 
               onClick={checkItem}
               src={url} 
               alt="img"
               width={32}
               height={32}
            />
            <p>{item.title}</p>
            <img 
               className="deleteImg"
               src={deleteI} 
               alt="delete img"  
               width="8" 
               onClick={deleteItem}
            />
         </div>
      );
   }
}
export default Todo;