// api faching
import React, { useEffect, useState } from "react";

function Api() {
  const [resoursetype, setresoursetype] = useState("posts");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resoursetype}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  });
  return (
    <div className="flex flex-col">
      <button onClick={() => setresoursetype("posts")} className="">
        posts
      </button>
      <button onClick={() => setresoursetype("users")} className="">
        users
      </button>
      <button onClick={() => setresoursetype("comments")} className="">
        comments
      </button>
      {resoursetype}
    </div>
  );
}

export default Api;
