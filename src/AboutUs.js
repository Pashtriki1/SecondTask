
import React, { useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";


const articles = [
  {
    question: "How does Parkname separate itself from other domain name parking companies?",
    answer: "Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio."
    
  },
  {
    question: "Is Parkname Parking actually free?",
    answer: "Yes, Parkname Parking is actually free."
  },
  {
    question: "What you do?",
    answer: "We provide a platform for managing and monetizing your domain names."
  },
  {
    question: "When was Parkname first founded?",
    answer: "Parkname was first founded in 2010."
  }
];

const AboutUs = () => {
  const [showArticles, setShowArticles] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const toggleArticles = () => {
    setShowArticles(!showArticles);
    setSelectedArticle(null); 
  };

  const selectArticle = (index) => {
    setSelectedArticle(selectedArticle === index ? null : index);
  };

  return (
    <div className='Aboutus-btn'>
          <div className="about-us-header" onClick={toggleArticles}>
        <div className="icon">
          <img src="http://pluspng.com/img-png/user-png-icon-download-icons-logos-emojis-users-2240.png" alt="User Icon" />
        </div>
        <div className="about-us-content">
          <h2>About Us</h2>
          <p>4 articles in this Topic</p>
        </div>
      </div>
      
    
      {showArticles && (
        <div className="articles">
          {articles.map((article, index) => (
            
            <div key={index} className="article">
                <hr></hr>
              <div
                onClick={() => selectArticle(index)}
                className="article-question"
                
              >
                {article.question}
                <span className="arrow-icon">
                  {selectedArticle === index ? '▲' : '▼'}
                </span>
              </div>
              {selectedArticle === index && (
                <div className="article-answer">{article.answer}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AboutUs;
