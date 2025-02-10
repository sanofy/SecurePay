// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group2Icon(props: Group2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        clipRule={"evenodd"}
        d={
          "M16.5 1l-3.667 5.437s1.467 4.757 0 8.835l3.667 6.116 3.667-6.116s-1.467-3.398 0-8.835L16.5 1z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.3"}
        strokeLinejoin={"bevel"}
      ></path>

      <path
        d={"M0 6.687h12.833m6.967 0H33M0 15.008h12.833m6.967 0H33"}
        stroke={"currentColor"}
        strokeWidth={"1.3"}
        strokeLinejoin={"bevel"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
