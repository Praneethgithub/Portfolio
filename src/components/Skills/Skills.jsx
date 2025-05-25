import React, { useState } from 'react';
import "./Skills.css";

export const Skills = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSkills = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="skills">
      <h2 onClick={toggleSkills} style={{ cursor: 'pointer' }}>Skills</h2>
      {isExpanded && (
        <div className="skills-content">
          <div className="skills-category">
            <h3>Programming and Analytics</h3>
            <p>
              {['CSS', 'HTML', 'Java', 'ReactJS', 'MySQL', 'Python', 'Snowflake', 'AWS', 'Tableau', 'Salesforce', 'API integrations'].map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </p>
          </div>
          
          <div className="skills-category">
            <h3>Data Skills</h3>
            <p>
              {['Data Validation', 'Data Visualization', 'Data Mining', 'Data Modelling', 'Dashboard development'].map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </p>
          </div>

          <div className="skills-category">
            <h3>Statistical Skills</h3>
            <p>
              {['Hypothesis tests', 'A/B Testing', 'Correlation', 'Forecasting', 'Risk analysis', 'Impact analysis'].map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </p>
          </div>

          <div className="skills-category">
            <h3>Project Management / Tools</h3>
            <p>
              {['Agile methodologies', 'Scrum management', 'JIRA', 'Confluence', 'Radar', 'Miro', 'Figma', 'Trello', 'Microsoft office'].map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </p>
          </div>

          <div className="skills-category">
            <h3>Soft Skills</h3>
            <p>
              {['Problem solving', 'Understanding customer needs', 'Customer service', 'Communication skills', 'Organizational skills', 'Stakeholder management'].map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}; 