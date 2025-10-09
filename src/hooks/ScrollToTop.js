import React from 'react'

const ScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // smooth scroll animation
  });
}

export default ScrollToTop