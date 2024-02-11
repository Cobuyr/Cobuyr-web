import React from "react";
import dash from "/dash.jpg";
import "./Components.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function TabBox() {
  return (
    <Tabs className="vertical">
      <TabList aria-orientation="vertical">
        <Tab className="Tab">Group Buy Payments</Tab>
        <Tab className="Tab">Single Multicard Payments</Tab>
        <Tab className="Tab">Unified Data Integration</Tab>
        <Tab className="Tab">Connected Customer Intelligence</Tab>
        <Tab className="Tab">Advanced Analytics</Tab>
      </TabList>

      <TabPanel>
        <div>
          <h3>Group Buy Payments</h3>
          <p>
            Cobuyr gives your customers the ability to invite their family and
            friends to split the cost of purchasing products and services.
          </p>
          <div className="panelImage">
            <img
              src={dash}
              alt="new category of multi-party payment transactions"
            />
          </div>
        </div>
      </TabPanel>

      <TabPanel>
        <div>
          <h3>Single Multicard Payments</h3>
          <p>
            Cobuyr enables your customers to use multiple payment cards when
            paying online.
          </p>
          <div className="panelImage">
            <img
              src={dash}
              alt="new category of multi-party payment transactions"
            />
          </div>
        </div>
      </TabPanel>

      <TabPanel>
        <div>
          <h3>Unified Data Integration</h3>
          <p>
            Cobuyr automatically integrates your systems and data so you have a
            single, enriched view of your customers.
          </p>
          <div className="panelImage">
            <img
              src={dash}
              alt="new category of multi-party payment transactions"
            />
          </div>
        </div>
      </TabPanel>

      <TabPanel>
        <div>
          <h3>Connected Customer Intelligence</h3>
          <p>
            Cobuyr provides you with pre-built dashboards, so you have a single
            view of customers including all payments, customer relationships and
            behaviors.
          </p>
          <div className="panelImage">
            <img
              src={dash}
              alt="new category of multi-party payment transactions"
            />
          </div>
        </div>
      </TabPanel>

      <TabPanel>
        <div>
          <h3>Advanced Analytics</h3>
          <p>
            Cobuyr has created a new category of insights, Connected Customer
            Intelligence, which enables you to understand and sell into the
            social networks of your customers.
          </p>
          <div className="panelImage">
            <img
              src={dash}
              alt="new category of multi-party payment transactions"
            />
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
}
