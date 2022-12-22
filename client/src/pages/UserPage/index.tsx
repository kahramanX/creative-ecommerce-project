import React from "react";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "assets/styles/components/userPage/userPage.scss";

const UserPage = () => {
  return (
    <>
      <Helmet>
        <title>User👤 | Mr.SCRUBBER</title>
      </Helmet>
      <div className="userpage">
        <div className="page-title">
          <h1>User 👤</h1>
        </div>
        <div className="page-content">
          <Tabs>
            <TabList>
              <Tab>Title 1</Tab>
              <Tab>Title 2</Tab>
            </TabList>

            <TabPanel>
              <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default UserPage;
