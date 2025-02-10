// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DotsVertical2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DotsVertical2Icon(props: DotsVertical2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.333 8a.667.667 0 101.334 0 .667.667 0 00-1.334 0zm0 4.667a.667.667 0 101.334 0 .667.667 0 00-1.334 0zm0-9.334a.667.667 0 101.334 0 .667.667 0 00-1.334 0z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"1.25"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DotsVertical2Icon;
/* prettier-ignore-end */
