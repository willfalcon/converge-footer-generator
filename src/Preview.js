import React from 'react';
import getCopyText from './getCopyText';

const Preview = props => {
  return (
    <div
      className="preview"
      dangerouslySetInnerHTML={{
        __html: getCopyText(props),
      }}
    />
  );
};

export default Preview;
