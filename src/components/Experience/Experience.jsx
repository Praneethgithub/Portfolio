import React from 'react';
import "./Experience.css";
import HireArcLogo from "../../assets/logos/HireArc.png";
import AppleLogo from "../../assets/logos/104490_apple_icon.png";
import AmazonLogo from "../../assets/logos/294695_amazon_icon.png";
import GenZLogo from "../../assets/logos/GenZ.png";

export const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-content">
        <div className="experience-item parallax">
          <div className="experience-header">
            <div className="header-content">
              <img src={HireArcLogo} alt="Hire Arc Logo" className="company-logo" />
              <div>
                <h3>Product Manager Intern</h3>
                <span className="company">The Hire Arc</span>
                <span className="duration">May 2024 - August 2024</span>
              </div>
            </div>
          </div>
          <ul className="experience-details">
            <li>Documented business requirements and product roadmap for an early-stage startup.</li>
            <li>Monitored and evaluated processes to find areas of improvement, significantly improving the user experience by 32% by translating customer needs to business requirements.</li>
            <li>Built product roadmap, userstories, and acceptance criteria, enabling a 30% faster development cycle and improved cross-team alignment.</li>
            <li>Integrated third-party APIs, designed a user-friendly product mockup in Figma, and implemented features to enhance usability and product understanding.</li>
            <li>Monitored product KPIs(user engagement, error rates), driving a 33% improvement in performance and reducing downtime by 15%.</li>
          </ul>
        </div>
        <div className="experience-item parallax">
          <div className="experience-header">
            <div className="header-content">
              <img src={AppleLogo} alt="Apple Logo" className="company-logo" />
              <div>
                <h3>Software Engineer</h3>
                <span className="company">Apple, AppleCare Digital</span>
                <span className="duration">2021 - 2023</span>
              </div>
            </div>
          </div>
          <ul className="experience-details">
            <li>Led end-to-end release projects for AppleCare Digital, supporting a customer-facing website and app with 17M+ weekly users.</li>
            <li>Improved User Acceptance Test (UAT) coverage and product reliability by executing Behavior-Driven Development (BDD) framework using Java, automating user journey, customer support solutions and API debugging.</li>
            <li>Performed weekly ETL on Snowflake using data from Adobe Analytics to generate product insights and support data-driven decision making, with help of dashboards on Tableau.</li>
            <li>Enhanced Customer Experience (CXO) by analyzing user behavior data to redirect traffic toward more cost-effective solutions, improving efficiency and reducing operational costs.</li>
          </ul>
        </div>
        <div className="experience-item parallax">
          <div className="experience-header">
            <div className="header-content">
              <img src={AmazonLogo} alt="Amazon Logo" className="company-logo" />
              <div>
                <h3>Associate</h3>
                <span className="company">Amazon</span>
                <span className="duration">2020 - 2021</span>
              </div>
            </div>
          </div>
          <ul className="experience-details">
            <li>Delivered internal customer support and issue resolution to 1K+ Amazon employees.</li>
            <li>Consolidated and analyzed employee feedback using Sales force CRM to support HR decision-making and streamline operational workflows.</li>
          </ul>
        </div>
        <div className="experience-item parallax">
          <div className="experience-header">
            <div className="header-content">
              <img src={GenZLogo} alt="GenZ Marketing Logo" className="company-logo" />
              <div>
                <h3>Co-founder</h3>
                <span className="company">GenZ Marketing</span>
                <span className="duration">2020 - 2023</span>
              </div>
            </div>
          </div>
          <ul className="experience-details">
            <li>Founded a multimedia marketing startup to support B2B and B2C companies with Go-To-Market strategy, digital advertising campaigns (Google Ads, Facebook Ads) and sales execution to drive customer acquisition.</li>
            <li>Delivered customer-specific websites using CSS, HTML and ReactJS to enhance product marketing reach and increase revenue streams.</li>
            <li>Successfully managed multiple projects over a span of two years, achieving exceptional client satisfaction, which led to generating over 25,000 USD in sales and reaching more than 50K customers traction.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}; 

