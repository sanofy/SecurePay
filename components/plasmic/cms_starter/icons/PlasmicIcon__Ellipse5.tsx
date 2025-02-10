// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse5Icon(props: Ellipse5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 226 259"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g opacity={".1"}>
        <ellipse
          cx={"113"}
          cy={"129.082"}
          rx={"113"}
          ry={"129.082"}
          fill={"currentColor"}
          fillOpacity={".29"}
        ></ellipse>

        <path
          d={
            "M208 129.082c0 63.673-44.708 111.081-95 111.081s-95-47.408-95-111.081S62.708 18 113 18s95 47.409 95 111.082z"
          }
          stroke={"currentColor"}
          strokeOpacity={".38"}
          strokeWidth={"36"}
        ></path>
      </g>
    </svg>
  );
}

export default Ellipse5Icon;
/* prettier-ignore-end */
