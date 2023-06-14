import React, { forwardRef } from 'react';

type ScrollableContainerProps = {
  children: React.ReactNode;
};

const ScrollableContainer = forwardRef<HTMLDivElement, ScrollableContainerProps>(
  ({ children }, ref) => {
    return (
      <div ref={ref}>
        {children}
      </div>
    );
  }
);

export default ScrollableContainer;