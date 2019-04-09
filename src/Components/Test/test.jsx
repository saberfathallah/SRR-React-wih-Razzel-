import React from 'react';
import testWrapper from './testWrapper';

const Test = ({ className }) => (<p className={className}>Test</p>);

export default testWrapper(Test);
