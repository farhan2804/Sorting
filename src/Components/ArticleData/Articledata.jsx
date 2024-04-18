import React, { useState } from "react";
import Articles from "../Artciles/Articles";
import "./Articledata.css";
const Articledata = () => {
  const data = [
    {
      title: "A message to our customers",
      upvotes: 12,
      date: "2020-01-24",
    },
    {
      title: "Alphabet earnings",
      upvotes: 22,
      date: "2019-11-23",
    },
    {
      title: "Artificial Mountains",
      upvotes: 2,
      date: "2019-11-22",
    },
    {
      title: "Scaling to 100k Users",
      upvotes: 72,
      date: "2019-01-21",
    },
    {
      title: "the Emu War",
      upvotes: 24,
      date: "2019-10-21",
    },
    {
      title: "What's SAP",
      upvotes: 1,
      date: "2019-11-21",
    },
    {
      title: "Simple text editor has 15k monthly users",
      upvotes: 7,
      date: "2010-12-31",
    },
  ];
  const [value, setvalue] = useState(data);
  const handleRecent = () => {
    const sorted = data.slice().sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    setvalue(sorted);
  };

  const handleUpvoted = () => {
    const sorted = [...data].sort((a, b) => {
      return b.upvotes - a.upvotes;
    });
    setvalue(sorted);
  };

  return (
    <>
      <div className="SortContainer">
        <h1 id="sortHeading" style={{ color: "rgb(128, 123, 123)" }}>Sort By</h1>
        <button id="upvotedButton" onClick={handleUpvoted}>Most upvoted</button>
        <button id="recentButton" onClick={handleRecent}>Most Recent</button>
      </div>
      <Articles ArtcilesContent={value} />
    </>
  );
};

export default Articledata;
