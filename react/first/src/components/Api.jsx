// api faching
import React, { useEffect, useState } from "react";

function Api() {
  const [resoursetype, setresoursetype] = useState("posts");
  const [item,setItem]=useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resoursetype}`)
      .then((response) => response.json())
      .then((json) => setItem(json));
  },[resoursetype]);
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
      <pre>
        {/* json object to  string  to use all in capital */}
        {JSON.stringify(item)}
        <br />
      </pre>
    </div>
  );
}

export default Api;
