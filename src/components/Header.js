import React from 'react';
import './Header.css';
import tick from '../img/tick.svg';
class Header extends React.Component {
   render() {
      const {keyUp, change, newItem} = this.props;
      return (
         <div className="Header">
            <img src={tick}  width="24" height="24" alt="img"/>
            <input 
               type="text" 
               placeholder="Thêm công việc"
               value={newItem}
               onKeyUp={keyUp}     
               onChange={change}
            />
          </div>
      );
   }
}

export default Header;