import React from 'react';
import './TaskItem.scss';

const TaskItem = (props) => {
  return <li className="task">{props.children}</li>;
};

export default TaskItem;
