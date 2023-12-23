import React from "react";
import CountUp, { useCountUp } from "react-countup";

function CounterSection(props) {
  const { containerStyle, title, icon, count, isMoreCount, counterRef } = props;

  useCountUp({ ref: counterRef, end: count, duration: 5 });

  return (
    <div className="col-sm-6 col-xl-3">
      <div
        className={`d-flex justify-content-center align-items-center p-4 rounded-3 ${containerStyle}`}
      >
        {icon}

        <div className="ms-4 h6 fw-normal mb-0">
          <div className="d-flex">
            <h5 className="purecounter mb-0 fw-bold" id={counterRef}>
              {count}
            </h5>
            <span className="mb-0 h5">K{isMoreCount && "+"}</span>
          </div>
          <p className="mb-0">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default CounterSection;