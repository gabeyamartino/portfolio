import React, { forwardRef } from "react";

type ScrollableContainerProps = {
  children: React.ReactNode;
};

const ScrollableContainer = forwardRef<
  HTMLDivElement,
  ScrollableContainerProps
>(({ children }, ref) => {
  return (
    <div ref={ref} className="bg-gray-50 font-montserrat">
      {children}
    </div>
  );
});

export default ScrollableContainer;
