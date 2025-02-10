// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlusIcon(props: PlusIconProps) {
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
        clipPath={"url(#btG78x-U7nFma)"}
        stroke={"currentColor"}
        strokeWidth={"1.75"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      >
        <path d={"M10 4.167v11.666M4.167 10h11.666"}></path>
      </g>

      <defs>
        <clipPath id={"btG78x-U7nFma"}>
          <path fill={"currentColor"} d={"M0 0h20v20H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default PlusIcon;
/* prettier-ignore-end */
