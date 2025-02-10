// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ColorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ColorIcon(props: ColorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"5"} cy={"5"} r={"5"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default ColorIcon;
/* prettier-ignore-end */
