import React from "react";
import AddSection from "../components/ActionSection/AddSection";
import Header from "../components/header/Header";
import styledash from "../assets/styles/styledash.module.css";
import BoardWeeks from "../components/boardweeks/BoardWeeks";

function DashboardMain() {
  return (
    <div className={styledash.bodyDashboar}>
      <Header />
      <AddSection />
      <BoardWeeks/>
    </div>
  );
}

export default DashboardMain;
