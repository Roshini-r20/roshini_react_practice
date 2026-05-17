import React from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="text-white flex justify-start items-center flex-1 m-3"
        >
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {stat.value}
          </h4>
          <span className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient ml-3">
            {stat.title}
          </span>
        </div>
      ))}
    </section>
  );
};

export default Stats;
