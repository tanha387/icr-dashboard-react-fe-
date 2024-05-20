import React, { useState, useEffect } from "react";
import EventsMeetings from "./EventsMeetings";

const SidebarTabs = () => {
  const [activeTab, setActiveTab] = useState("events");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case "events":
        return (
          <div className="">
            <EventsMeetings />
          </div>
        );
      case "contacts":
        return (
          <div className="p-4">
            {loading ? "Loading Contacts..." : "Contacts Content"}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col mt-5 ">
      <div className="flex border-b">
        <button
          className={`py-2 rounded-t-lg`}
          style={{
            borderBottom: activeTab === "events" ? "2px solid orange" : "none",
          }}
          onClick={() => setActiveTab("events")}
        >
          Events & Meetings
        </button>
        <button
          className={`px-4 py-2 ml-1 rounded-t-lg`}
          style={{
            borderBottom:
              activeTab === "contacts" ? "2px solid orange" : "none",
          }}
          onClick={() => setActiveTab("contacts")}
        >
          Contacts
        </button>
      </div>

      <div className="mt-1 rounded-b-lg">{renderContent()}</div>
    </div>
  );
};

export default SidebarTabs;
