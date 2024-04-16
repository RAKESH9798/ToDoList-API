import React from "react";
import ToDoCards from "../../../Components/CardsPages/ToDoCard/ToDoCards";

const ToDoCardPage = ({ task }) => {
  return (
    <div>
      <ToDoCards task={task} />
    </div>
  );
};

export default ToDoCardPage;
