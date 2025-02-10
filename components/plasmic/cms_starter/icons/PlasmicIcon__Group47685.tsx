// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group47685IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group47685Icon(props: Group47685IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 2.944c.023-.103.043-.208.07-.31a2.19 2.19 0 012.101-1.632c3.197-.003 6.392-.003 9.588 0 1.214 0 2.165.97 2.18 2.2.005.428 0 .853 0 1.279v.164c.291.04.542.142.721.374.145.185.222.413.218.648V8.02c0 .568-.294.924-.857 1.038-.024.005-.047.013-.083.023 0 .449.004.898 0 1.348.001.174-.013.348-.042.52a2.176 2.176 0 01-2.15 1.783c-1.236.005-2.47 0-3.705 0H3.215a2.194 2.194 0 01-2.141-1.618c-.026-.107-.05-.218-.074-.324V2.944zm13.135 1.71c0-.582 0-1.138-.003-1.694a.713.713 0 00-.05-.21c-.201-.599-.734-.966-1.406-.966h-9.53a1.405 1.405 0 00-1.36 1.407c-.004 2.446-.004 4.892 0 7.337.001.155.027.308.076.455.196.59.725.948 1.384.948h9.444c.048 0 .095 0 .143-.003.655-.029 1.25-.56 1.296-1.213.038-.54.015-1.083.018-1.625 0-.008-.01-.016-.023-.038H9.807a2.754 2.754 0 01-.377-.02c-1.206-.167-2.1-1.302-1.789-2.718.218-.989 1.068-1.654 2.094-1.658 1.41-.006 2.819 0 4.228 0l.172-.002zM12.26 8.287h2.54c.234 0 .29-.057.291-.291V5.73c0-.222-.06-.285-.286-.285H9.78c-.947 0-1.588.811-1.386 1.74.143.666.68 1.094 1.38 1.099.83.006 1.659.004 2.487.004h0z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".315"}
      ></path>

      <path
        d={
          "M9.844 6.223c.37.002.631.257.63.613a.632.632 0 11-1.264.007.625.625 0 01.634-.62z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".315"}
      ></path>
    </svg>
  );
}

export default Group47685Icon;
/* prettier-ignore-end */
