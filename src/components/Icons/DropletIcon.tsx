import { SVGProps } from "react";
import IconBase from "./IconBase";

const DropletIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <IconBase {...props}>
      <path
        d="M17.25 14.0714C17.25 16.9315 14.8995 19.25 12 19.25C9.10051 19.25 6.75 16.9315 6.75 14.0714C6.75 11.2114 12 4.75 12 4.75C12 4.75 17.25 11.2114 17.25 14.0714Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </IconBase>
  );
};

export default DropletIcon;
