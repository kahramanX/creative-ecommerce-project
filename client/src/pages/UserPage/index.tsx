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
              <Tab>User</Tab>
              <Tab>Address</Tab>
              <Tab>Orders</Tab>
            </TabList>

            <TabPanel>
              <div className="tab-content">
                <table>
                  <tr>
                    <td className="table-title">User ID:</td>
                    <td>321321312321</td>
                  </tr>
                  <tr>
                    <td className="table-title">Name:</td>
                    <td>Efe</td>
                  </tr>
                  <tr>
                    <td className="table-title">Surname:</td>
                    <td>Kahraman</td>
                  </tr>
                  <tr>
                    <td className="table-title">E-mail:</td>
                    <td>mustafaka335@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="table-title">Phone:</td>
                    <td>0 542 677 22 25</td>
                  </tr>
                  <tr>
                    <td className="table-title">Gender:</td>
                    <td>Male</td>
                  </tr>
                </table>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="address-tab">
                <div className="add-address">
                  <span className="material-symbols-outlined">add</span>
                </div>
                <div className="attached-address">
                  <div className="address-title">My Home</div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Any content 3</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default UserPage;
