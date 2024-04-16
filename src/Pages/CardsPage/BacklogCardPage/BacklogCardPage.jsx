import React from "react";

import BacklogCards from "../../../Components/CardsPages/BacklogCard/BacklogCards";

const BacklogCardPage = ({ task }) => {
  return (
    <div>
      <BacklogCards task={task} />
    </div>
  );
};

export default BacklogCardPage;
