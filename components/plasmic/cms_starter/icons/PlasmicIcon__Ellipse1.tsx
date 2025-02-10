// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse1Icon(props: Ellipse1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 226 273"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".1"}
        d={
          "M208 136.5c0 68.778-45.566 118.5-95 118.5s-95-49.722-95-118.5C18 67.722 63.566 18 113 18s95 49.722 95 118.5z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"36"}
      ></path>
    </svg>
  );
}

export default Ellipse1Icon;
/* prettier-ignore-end */
