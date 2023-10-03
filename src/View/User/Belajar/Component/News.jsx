import React from "react";
import { useNewsQuery } from "../../../../Helpers/ReactQuery/useFetchQuery";


const News = () => {
  const { data: newsData, isLoading } = useNewsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>News</h2>
      <ul>
        {newsData.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
