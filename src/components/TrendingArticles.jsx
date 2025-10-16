import React from "react";
import { Link } from "react-router-dom";
import { trendingArticles } from "../data/mockData";

const TrendingSection = () => {
  // Split articles into two halves: left and right
  const leftArticles = trendingArticles.slice(0, 3);
  const rightArticles = trendingArticles.slice(3, 6);

  const renderArticle = (article, index) => (
    <Link
      key={article.id}
      to={`/article/${article.id}`}
      className="flex gap-4 mb-3 items-start text-black hover:underline"
    >
      {/* Left Number */}
      <span className="text-gray-500 font-bold text-lg w-8 flex-shrink-0 text-right leading-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Article Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1 mb-1">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-5 h-5 rounded-full object-cover"
          />
          <span className="text-xs font-medium truncate">{article.author.name}</span>
        </div>

        <h3 className="font-bold text-base leading-[1.3] mb-1 line-clamp-2">
          {article.title}
        </h3>

        <div className="text-xs text-gray-500 flex gap-1 flex-wrap">
          <span>{article.publishedDate}</span> · <span>{article.readTime} min read</span>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="border-b border-gray-200 py-16">
      <div className="max-w-[1336px] mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-1 mb-3">
          <span className="text-2xl">🔥</span>
          <span className="text-sm font-semibold tracking-[0.5px]">
            TRENDING ON OPENDESK
          </span>
        </div>

        {/* Two-column layout */}
        <div className="flex gap-4 flex-wrap">
          {/* Left Column */}
          <div className="flex-1 min-w-0">
            {leftArticles.map((article, index) => renderArticle(article, index))}
          </div>

          {/* Right Column */}
          <div className="flex-1 min-w-0">
            {rightArticles.map((article, index) => renderArticle(article, index + 3))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;
