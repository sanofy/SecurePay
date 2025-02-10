// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChevronIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChevronIcon(props: ChevronIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.734 9.956a.473.473 0 01-.669-.016L4.912 6.63a.473.473 0 010-.652l3.153-3.31a.473.473 0 01.685.652L5.908 6.304 8.75 9.288c.18.19.173.488-.016.668z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChevronIcon;
/* prettier-ignore-end */
