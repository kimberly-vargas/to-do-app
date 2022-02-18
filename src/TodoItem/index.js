import React from 'react';
import './TodoItem.css';
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

function TodoItem(props){
    return (
        <li className="TodoItem">
          <AiFillCheckCircle 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick = {props.onComplete}
          />
          <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.text}
          </p>
          <AiFillCloseCircle 
            className="Icon Icon-delete"
            onClick = {props.onDelete}
          />
        </li>
      );
}

export { TodoItem };