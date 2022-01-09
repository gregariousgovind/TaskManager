import React from 'react';
import './Section.scss';

const Section = (props) => {
  return <section className="section">{props.children}</section>;
};

export default Section;
