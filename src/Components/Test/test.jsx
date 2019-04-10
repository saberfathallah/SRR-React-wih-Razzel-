import React from 'react';
import Helmet from 'react-helmet';
import testWrapper from './testWrapper';

const Test = ({ className }) => (
  <div className={className}>
    <Helmet
      title={'titleTest'}
      meta={[
        { name: 'description', content: 'seoDescriptionTest' },
      ]}
    />
    <p className='pp'>Test</p>
  </div>
);

export default testWrapper(Test);

