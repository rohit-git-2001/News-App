import { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll detection function
  const toggleVisibility = () => {
    if (window.pageYOffset > 1000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          style={{
            position: 'fixed',
            bottom: '70px',
            right: '20px',
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          <i className="bi bi-arrow-bar-up"></i>
        </button>
      )}
    </>
  );
}
