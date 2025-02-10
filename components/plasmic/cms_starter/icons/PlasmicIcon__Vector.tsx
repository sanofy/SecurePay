// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.429 6.286h-5.55v3.928c0 .209-.117.409-.325.556-.208.147-.49.23-.785.23-.294 0-.576-.083-.785-.23-.208-.147-.325-.347-.325-.556V6.286H1.11c-.293 0-.576-.083-.784-.23C.117 5.908 0 5.708 0 5.5c0-.208.117-.408.325-.556.208-.147.49-.23.785-.23h5.55V.786c0-.209.116-.409.324-.556.209-.147.49-.23.785-.23.295 0 .577.083.785.23.208.147.325.347.325.556v3.928h5.55c.294 0 .576.083.784.23.209.148.326.348.326.556 0 .208-.117.408-.326.556-.208.147-.49.23-.784.23z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
