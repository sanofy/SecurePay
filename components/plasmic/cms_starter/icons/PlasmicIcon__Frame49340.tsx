// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame49340IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame49340Icon(props: Frame49340IconProps) {
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

      <circle cx={"8"} cy={"8"} r={"4"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Frame49340Icon;
/* prettier-ignore-end */
