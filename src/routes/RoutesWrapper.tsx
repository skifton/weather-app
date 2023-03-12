import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const MainPage = React.lazy(() => import("../views/MainPage/MainPage"));
const Error = React.lazy(() => import("../views/Error/Error"));

const RoutesWrapper: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/weather" />} />
      <Route path="/weather" element={<MainPage />}/>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RoutesWrapper;
