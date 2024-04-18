import React from "react";
import './Articles.css';

const Articles = ({ ArtcilesContent }) => {
  return (
    <div className="card w-50 mx-auto" id="MainContainer">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        {ArtcilesContent.map((items, id) => (
          <tbody key={id}>
            <tr data-testid="article" key="article-index">
              <td data-testid="article-title">{items.title}</td>
              <td data-testid="article-upvotes">{items.upvotes}</td>
              <td data-testid="article-date">{items.date}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Articles;
