import React, { Fragment } from "react";

interface IProps {
  day: string;
  altText: string;
  dayTemperature: number;
  nightTemperature: number;
  icon: string;
}
const WDayCard: React.FC<IProps> = ({
  day,
  icon,
  altText,
  dayTemperature,
  nightTemperature,
}) => {
  return (
    <div className="bg-white rounded-xl p-5 px-8 min-w-full  text-center">
      <Fragment>
        <p className="font-bold">{day}</p>
        <img
          className="mt-4 h-18 w-18 mx-auto"
          src={icon}
          alt={altText}
        />
        <p className="mt-4">
          {dayTemperature}°/
          <span className="text-gray-500">{nightTemperature}°</span>
        </p>
      </Fragment>
    </div>
  );
};

export default WDayCard;
