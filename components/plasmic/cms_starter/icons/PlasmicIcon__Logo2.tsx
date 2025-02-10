// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Logo2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Logo2Icon(props: Logo2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 45 27"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.189 13.15c0-4.2 2.086-7.927 5.291-10.337C20.124 1.059 17.15 0 13.906 0 6.219 0 0 5.88 0 13.15 0 20.419 6.219 26.3 13.905 26.3c3.245 0 6.22-1.06 8.575-2.813-3.205-2.374-5.291-6.137-5.291-10.337zm27.811 0c0 7.269-6.22 13.15-13.906 13.15a14.33 14.33 0 01-8.575-2.813c3.245-2.41 5.292-6.137 5.292-10.337s-2.086-7.927-5.292-10.337C24.875 1.059 27.849 0 31.094 0 38.781 0 45 5.917 45 13.15z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Logo2Icon;
/* prettier-ignore-end */
