// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group3Icon(props: Group3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        clipRule={"evenodd"}
        d={
          "M16.5 1l-3.667 5.124s1.467 4.484 0 8.328l3.667 5.764 3.667-5.764s-1.467-3.203 0-8.328L16.5 1z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.3"}
        strokeLinejoin={"bevel"}
      ></path>

      <path
        d={"M0 6.36h12.833m6.967 0H33M0 14.203h12.833m6.967 0H33"}
        stroke={"currentColor"}
        strokeWidth={"1.3"}
        strokeLinejoin={"bevel"}
      ></path>
    </svg>
  );
}

export default Group3Icon;
/* prettier-ignore-end */
