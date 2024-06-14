import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';



const tabsContent = {
  Domains: [
    { extension: '.COM', price: '$5.99/yr', originalPrice: '$10.99/yr' },
    { extension: '.AI', price: '$55.99/yr', originalPrice: '$10.99/yr' },
    { extension: '.NET', price: '$7.99/yr', originalPrice: '$10.99/yr' },
    { extension: '.HEALTH', price: '$7.99/yr', originalPrice: '$10.99/yr' },
    { extension: '.CO.UK', price: '$3.99/yr', originalPrice: '$10.99/yr' },
    { extension: '.ORG', price: '$15.99/yr', originalPrice: '$10.99/yr' },
    { extension: '.CO', price: '$26.33/yr', originalPrice: '$10.99/yr' },
    { extension: '.SEA', price: '$26.33/yr', originalPrice: '$10.99/yr' },
  ],
 
};

const TabsComponent = () => (
  <Tabs>
    <TabList >
      <Tab>Domains</Tab>
      <Tab>Web Hosting</Tab>
      <Tab>Dedicated Servers</Tab>
      <Tab>Virtual Cloud Servers</Tab>
      <Tab>WordPress Hosting</Tab>
      <Tab>Email Hosting</Tab>
      <Tab>VPS Hosting Servers</Tab>
      <Tab>Free Hosting</Tab>
    </TabList>

    <TabPanel>
      <div className="cards-container">
        {tabsContent.Domains.map((item, index) => (
          <div className="tabs" key={index}>
            <h3>{item.extension}</h3>
            <p>{item.price}</p>
            <p>Instead of {item.originalPrice}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </TabPanel>

  
  </Tabs>
);

export default TabsComponent;
