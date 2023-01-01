import React, { FC } from "react";

type FlexDirection =
  | "flex-col"
  | "flex-col-reverse"
  | "flex-row"
  | "flex-row-reverse";

interface FlexProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  direction: FlexDirection;
  gap?: string;
}

const Flex: FC<FlexProps> = ({ id, className, children, direction, gap }) => {
  return (
    <div id={id} className={`flex ${direction} ${gap} ${className}`}>
      {children}
    </div>
  );
};

export default Flex;
