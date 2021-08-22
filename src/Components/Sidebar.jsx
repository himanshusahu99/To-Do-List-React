import React from "react";
import "../App.scss";
import { FaInbox, FaRegCalendarAlt, FaRegCalendar } from "react-icons/fa";

function Sidebar({ selectedTab, setselectedTab }) {
  console.log(selectedTab);
  return (
    <div className="sidebar">
      <div
        className={selectedTab === "INBOX" ? "active" : ""}
        onClick={() => {
          setselectedTab("INBOX");
        }}
      >
        <FaInbox className="icon" />
        inbox
      </div>
      <div
        className={selectedTab === "TODAY" ? "active" : ""}
        onClick={() => {
          setselectedTab("TODAY");
        }}
      >
        <FaRegCalendarAlt className="icon" />
        Today{" "}
      </div>
      <div
        className={selectedTab === "NEXT_7" ? "active" : ""}
        onClick={() => {
          setselectedTab("NEXT_7");
        }}
      >
        <FaRegCalendar className="icon" />
        Next 7 days
      </div>
    </div>
  );
}

export default Sidebar;
