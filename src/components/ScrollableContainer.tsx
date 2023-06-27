import React, { forwardRef } from "react";

type ScrollableContainerProps = {
  children: React.ReactNode;
};

const ScrollableContainer = forwardRef<
  HTMLDivElement,
  ScrollableContainerProps
>(({ children }, ref) => {
  return (
    <div ref={ref} className="w-full bg-gray-50 font-montserrat">
      {children}
    </div>
  );
});

export default ScrollableContainer;
