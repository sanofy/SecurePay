// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse8Icon(props: Ellipse8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 226 244"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g opacity={".1"}>
        <ellipse
          cx={"113"}
          cy={"121.663"}
          rx={"113"}
          ry={"121.663"}
          fill={"currentColor"}
          fillOpacity={".28"}
        ></ellipse>

        <path
          d={
            "M208 121.663c0 58.527-43.762 103.663-95 103.663S18 180.19 18 121.663C18 63.136 61.762 18 113 18s95 45.136 95 103.663z"
          }
          stroke={"currentColor"}
          strokeOpacity={".28"}
          strokeWidth={"36"}
        ></path>
      </g>
    </svg>
  );
}

export default Ellipse8Icon;
/* prettier-ignore-end */
