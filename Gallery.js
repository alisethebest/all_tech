import React from "react";

function Gallery({ data }) {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <ul className="gallery">
      {data.map((item, index) => (
        <li key={index}>
          <a href={item.url}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
}

export default Gallery;
