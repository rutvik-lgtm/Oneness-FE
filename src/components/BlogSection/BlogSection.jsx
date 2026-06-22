import React from 'react';
import './BlogSection.css';
import { Link } from 'react-router-dom';
// Importing the assets specified by the user
import btnBg from '../../assets/homepage/Rectangle 35.png';
import publisherLogo from '../../assets/homepage/Group 79 (1).png';
import cardImage from '../../assets/homepage/Rectangle 37 (1).png';

// Reusing title divider from bazaar section
import titleDivider from '../../assets/homepage/Group 5 (7).png';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      publisher: 'The Times of India',
      title: 'Jaipur Oneness festival: अगले 3 दिन जयपुर में दुनियाभर से जुटेंगे 500 स्पीकर,......',
      description: 'सुबह 10 बजे वेदांता फ्रंट लॉन में फेस्टिवल की शुरुआत \'मॉर्निंग म्यूजिक नादा बिटवीन साउंड्स एंड साइलेंस\' से होगी, इस सत्र में कर्नाटक संगीत की प्रस्तुति के जरिए ध्वनि और मौन के बीच के संतुलन को प्रस्तुत किया जाएगा......',
    },
    {
      id: 2,
      publisher: 'The Times of India',
      title: 'Jaipur Oneness festival: अगले 3 दिन जयपुर में दुनियाभर से जुटेंगे 500 स्पीकर,......',
      description: 'सुबह 10 बजे वेदांता फ्रंट लॉन में फेस्टिवल की शुरुआत \'मॉर्निंग म्यूजिक नादा बिटवीन साउंड्स एंड साइलेंस\' से होगी, इस सत्र में कर्नाटक संगीत की प्रस्तुति के जरिए ध्वनि और मौन के बीच के संतुलन को प्रस्तुत किया जाएगा......',
    },
    {
      id: 3,
      publisher: 'The Times of India',
      title: 'Jaipur Oneness festival: अगले 3 दिन जयपुर में दुनियाभर से जुटेंगे 500 स्पीकर,......',
      description: 'सुबह 10 बजे वेदांता फ्रंट लॉन में फेस्टिवल की शुरुआत \'मॉर्निंग म्यूजिक नादा बिटवीन साउंड्स एंड साइलेंस\' से होगी, इस सत्र में कर्नाटक संगीत की प्रस्तुति के जरिए ध्वनि और मौन के बीच के संतुलन को प्रस्तुत किया जाएगा......',
    }
  ];

  return (
    <section className="blog-section">
      <div className="blog-container">
        {/* Title Block */}
        <div className="blog-header">
          <span className="blog-year">2026</span>
          <h2 className="blog-title">ONENESS UPDATES AND BLOGS</h2>
          <img src={titleDivider} alt="" className="blog-title-divider" />
        </div>

        {/* Cards Layout */}
        <div className="blog-cards-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <div className="blog-card-img-wrapper">
                <img src={cardImage} alt="Jaipur Palace" className="blog-card-img" />
              </div>
              <div className="blog-card-body">
                <div className="blog-publisher-row">
                  <img src={publisherLogo} alt="Publisher Logo" className="blog-publisher-logo" />
                  <span className="blog-publisher-name">{blog.publisher}</span>
                </div>
                <h3 className="blog-card-title">{blog.title}</h3>
                <p className="blog-card-description">{blog.description}</p>
                <a href="#readmore" className="blog-readmore-btn">
                  READ MORE <span className="arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Button Block */}
        <div className="blog-footer-btn-container">
          <Link className="blog-explore-button" to="/blog">
            {/* <span className="btn-star">★</span> */}
            EXPLORE OUR LATEST BLOGS
            {/* <span className="btn-star">★</span> */}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
