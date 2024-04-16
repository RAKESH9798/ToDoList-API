import React from "react";
import InProgressCards from "../../../Components/CardsPages/InProgress/InProgressCards";

const InProgressCardPage = ({ task }) => {
  return (
    <div>
      <InProgressCards task={task} />
    </div>
  );
};

export default InProgressCardPage;
