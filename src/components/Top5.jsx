import React from "react";
import { topFive } from "../data/topFive";

const Top5 = () => {
  return (
    <div className="top5">
      <h1>List of the users who did the most tasks:</h1>
      {topFive.map((top) => (
        <div>
          {top.id}. {top.name}
        </div>
      ))}
    </div>
  );
};

export default Top5;
