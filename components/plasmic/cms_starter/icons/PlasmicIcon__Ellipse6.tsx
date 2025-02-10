// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse6Icon(props: Ellipse6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 4"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <ellipse
        cx={"2"}
        cy={"1.891"}
        rx={"2"}
        ry={"1.891"}
        fill={"currentColor"}
      ></ellipse>
    </svg>
  );
}

export default Ellipse6Icon;
/* prettier-ignore-end */
