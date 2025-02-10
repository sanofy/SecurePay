// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoIcon(props: LogoIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 45 28"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.189 13.905c0-4.441 2.086-8.381 5.291-10.93A13.82 13.82 0 0013.906 0C6.219 0 0 6.219 0 13.905c0 7.687 6.219 13.906 13.905 13.906a13.82 13.82 0 008.575-2.974 13.885 13.885 0 01-5.291-10.931zm27.811 0c0 7.687-6.22 13.906-13.906 13.906a13.82 13.82 0 01-8.575-2.974 13.826 13.826 0 005.292-10.931c0-4.442-2.086-8.382-5.292-10.932A13.82 13.82 0 0131.094 0C38.781 0 45 6.257 45 13.905z"
        }
        fill={"currentColor"}
        fillOpacity={".2"}
      ></path>
    </svg>
  );
}

export default LogoIcon;
/* prettier-ignore-end */
