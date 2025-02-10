// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse7Icon(props: Ellipse7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 226 202"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g opacity={".1"}>
        <ellipse
          cx={"113"}
          cy={"100.717"}
          rx={"113"}
          ry={"100.717"}
          fill={"currentColor"}
          fillOpacity={".28"}
        ></ellipse>

        <path
          d={
            "M208 100.717c0 43.792-40.53 82.718-95 82.718s-95-38.926-95-82.718S58.53 18 113 18s95 38.925 95 82.717z"
          }
          stroke={"currentColor"}
          strokeOpacity={".28"}
          strokeWidth={"36"}
        ></path>
      </g>
    </svg>
  );
}

export default Ellipse7Icon;
/* prettier-ignore-end */
