import React from "react";

const Single = (e) => {
  console.log(e);
  const handleBook = (e) => {
    setToggle((prevToggle) => !prevToggle);
  };
  return (
    <div>
      <p className="link" onClick={handleBook}>
        Back
      </p>
      <img src={images[data.picture]} className="covers" alt="cover" />
    </div>
  );
};

export default Single;
