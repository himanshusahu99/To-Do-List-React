import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Tasks from "./Tasks";
import "../App.scss";

const Content = () => {
  const [selectedTab, setselectedTab] = useState("INBOX"); // INBOX, NEXT_7, TODAY
  return (
    <>
      <section className="content">
        <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab} />
        <Tasks selectedTab={selectedTab} />
      </section>
    </>
  );
};

export default Content;
