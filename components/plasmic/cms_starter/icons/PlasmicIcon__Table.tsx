// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TableIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TableIcon(props: TableIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        clipPath={"url(#D3Q8uKnRQfM0a)"}
        stroke={"currentColor"}
        strokeWidth={"1.75"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      >
        <path
          d={
            "M2.5 4.167A1.667 1.667 0 014.167 2.5h11.666A1.666 1.666 0 0117.5 4.167v11.666a1.666 1.666 0 01-1.667 1.667H4.167A1.667 1.667 0 012.5 15.833V4.167zm0 4.166h15M8.333 2.5v15"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"D3Q8uKnRQfM0a"}>
          <path fill={"currentColor"} d={"M0 0h20v20H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default TableIcon;
/* prettier-ignore-end */
