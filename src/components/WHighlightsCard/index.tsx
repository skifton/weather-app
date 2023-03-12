import React from "react";

interface IProps {
  title: string;
  children: React.ReactNode;
}
const WHighlightsCard: React.FC<IProps> = ({ title, children }) => {
  return (
    <div className="bg-white w-min-full rounded-xl p-5">
      <p className="text-gray-600 font-semibold">{title}</p>
      {children}
    </div>
  );
};

export default WHighlightsCard;
