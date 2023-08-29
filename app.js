import React, { useState, useEffect, Suspense } from "react";
import { createResource } from "./helper";
import Gallery from "./Gallery";
import Spinner from "./Spinner";

import './styles.css'; // Adjust the path accordingly if you place it elsewhere.

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(createResource("your_search_term"));
  }, []);

  return (
    <div className="app">
      <h1>Music Library</h1>
      <Suspense fallback={<Spinner />}>
        {data ? <Gallery data={data.result.read()} /> : null}
      </Suspense>
    </div>
  );
}

export default App;
