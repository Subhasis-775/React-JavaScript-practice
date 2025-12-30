import { useEffect, useState } from "react";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="backToTop">
      <h1>Back To Top</h1>
      {[...Array(40)].map((_, i) => (
        <p key={i}>This is paragraph {i+1}</p>
      ))}
      <div className="container" />
      {isVisible && (
        <button
          className="backtotop-btn"
          onClick={scrollToTop}
          data-testid="back-to-top-btn"
        >
          Back to Top
        </button>
      )}
    </div>
  );
}

export default BackToTop;
