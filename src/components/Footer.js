import React from 'react';
import classNames from 'classnames';
import './Footer.css';
class Footer extends React.Component {
   render() {
      const {Amount, allItems, onActive, onCompleted,currentFilter} = this.props;

      return (
         <div className="Footer">
            <div className="AmountItem">{Amount || 0} item</div>
            <div className="Filter">
               <button 
                  className={classNames({'activeBtn': currentFilter.isAll})} 
                  onClick={allItems}> All </button>
               <button 
                  className={classNames({'activeBtn': currentFilter.isActive})} 
                  onClick={onActive}>Active </button>
               <button 
                  className={classNames({'activeBtn': currentFilter.isCompleted})} 
                  onClick={onCompleted}>Completed</button>
            </div>
         </div>
      );
   }
}

export default Footer;