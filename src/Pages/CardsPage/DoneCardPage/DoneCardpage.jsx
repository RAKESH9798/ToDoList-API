import React from "react";
import DoneCard from "../../../Components/CardsPages/DoneCard/DoneCards";

const DoneCardpage = ({ task }) => {
  return (
    <div>
      <DoneCard task={task} />
    </div>
  );
};

export default DoneCardpage;
