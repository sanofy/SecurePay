// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Logo3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Logo3Icon(props: Logo3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 45 25"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.189 12.394c0-3.96 2.086-7.47 5.291-9.743C20.124.998 17.15 0 13.906 0 6.219 0 0 5.543 0 12.394s6.219 12.394 13.905 12.394c3.245 0 6.22-.998 8.575-2.651-3.205-2.238-5.291-5.784-5.291-9.743zm27.811 0c0 6.851-6.22 12.394-13.906 12.394-3.245 0-6.219-.998-8.575-2.651 3.245-2.272 5.292-5.784 5.292-9.743 0-3.96-2.086-7.47-5.292-9.743C24.875.998 27.849 0 31.094 0 38.781 0 45 5.577 45 12.394z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Logo3Icon;
/* prettier-ignore-end */
