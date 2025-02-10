// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 23"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        clipRule={"evenodd"}
        d={
          "M16.5 1l-3.667 5.75s1.467 5.03 0 9.342L16.5 22.56l3.667-6.468s-1.467-3.593 0-9.343L16.5 1z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.3"}
        strokeLinejoin={"bevel"}
      ></path>

      <path
        d={"M0 7.013h12.833m6.967 0H33m-33 8.8h12.833m6.967 0H33"}
        stroke={"currentColor"}
        strokeWidth={"1.3"}
        strokeLinejoin={"bevel"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
