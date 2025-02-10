// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EyeOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EyeOffIcon(props: EyeOffIconProps) {
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

      <path
        d={
          "M1.4 1.399a.473.473 0 00-.046.616l.046.053L3.943 4.61a6.296 6.296 0 00-2.494 3.625.473.473 0 10.918.23 5.352 5.352 0 012.257-3.174l1.14 1.14A2.522 2.522 0 009.33 9.999l3.732 3.732a.473.473 0 00.715-.615l-.046-.053-3.854-3.855-4.38-4.38-.714-.714L2.068 1.4a.473.473 0 00-.668 0zm6.165 2.068a6.3 6.3 0 00-1.821.268l.78.78a5.36 5.36 0 016.24 3.954.473.473 0 00.918-.23 6.306 6.306 0 00-6.117-4.772zm.123 2.212l2.396 2.396A2.523 2.523 0 007.688 5.68z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EyeOffIcon;
/* prettier-ignore-end */
