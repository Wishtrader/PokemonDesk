import React from 'react';

interface IHeading {
    tag: 'p' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
}

const Heading: React.FC<IHeading> = ({ tag = 'p', children }) => {
    return React.createElement(tag, null, children);
};

export default Heading;