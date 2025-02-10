// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse3Icon(props: Ellipse3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 226 214"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g opacity={".1"}>
        <ellipse
          cx={"113"}
          cy={"106.859"}
          rx={"113"}
          ry={"106.859"}
          fill={"currentColor"}
          fillOpacity={".29"}
        ></ellipse>

        <path
          d={
            "M208 106.859c0 48.141-41.572 88.858-95 88.858S18 155 18 106.859C18 58.718 59.572 18 113 18s95 40.718 95 88.859z"
          }
          stroke={"currentColor"}
          strokeOpacity={".38"}
          strokeWidth={"36"}
        ></path>
      </g>
    </svg>
  );
}

export default Ellipse3Icon;
/* prettier-ignore-end */
