import React, { useState } from "react";

const Content = () => {
  const [likeCount, like] = useState(0);
  return (
    <div className="halfScreen">
      {likeCount}
      <button onClick={() => like(likeCount+1)}>Like</button>
    </div>
  );
};

export default Content;
