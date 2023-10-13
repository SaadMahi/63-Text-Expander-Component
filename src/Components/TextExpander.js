import React, { useState } from 'react';

const TextExpander = ({
  children,
  collapsedNumWords = 10,
  expandButtonText = 'Show more',
  collapseButtonText = 'Show less',
  buttonColor = 'blue',
  expanded = true,
  className,
}) => {
  const [expand, setExpand] = useState(expanded);

  //   * display inner text on condition
  const displayText = expand
    ? children
    : children.split(' ').splice(0, collapsedNumWords).join(' ') + '...';
  //   //console.log(displayText);

  //   * resetting button styles
  const showBtn = {
    border: 'none',
    background: 'none',
    marginLeft: '10px',
    cursor: 'pointer',
    color: buttonColor,
  };

  return (
    <div className={className}>
      {displayText}
      <button onClick={() => setExpand((prev) => !prev)} style={showBtn}>
        {expand ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
};

export default TextExpander;
