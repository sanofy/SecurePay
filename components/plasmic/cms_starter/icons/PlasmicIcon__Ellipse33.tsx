// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse33IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse33Icon(props: Ellipse33IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 28"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"13.869"}
        cy={"13.869"}
        fill={"currentColor"}
        r={"13.869"}
      ></circle>
    </svg>
  );
}

export default Ellipse33Icon;
/* prettier-ignore-end */
