import React from "react";
import { topFive } from "../../data/topFive";

const Top5 = () => {
  return (
    <div className="top5">
      <h1>Our top achievements for the last month:</h1>
      {topFive.map((top) => (
        <div key={top.id} className="top5-container">
          {top.name}
          <span>
            {top.numberOfTasks}{" "}
            {top.numberOfTasks === 1 ? <span>Task</span> : <span>Tasks</span>}{" "}
            done in the last month{" "}
          </span>
          <img src={top.images} width={50} alt="topfive" />
        </div>
      ))}
    </div>
  );
};

export default Top5;
