import React from "react";

const Title = ({ title1, title2, titleStyle, paraStyle }) => {
  return (
    <div className={`flexCenter flex-col pb-1`}>
      <h2 className={`${titleStyle} h2`}>
        {title1}
        <span className="text-secondary font-light"> {title2}</span>
      </h2>
      <p className={`${paraStyle}`}>Our food products are crafted with finest ingredients to deliver exceptional and quality</p>
    </div>
  );
};

export default Title;
