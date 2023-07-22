import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

const IconDone = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M8 1.833c-3.667 0-6.667 3-6.667 6.667s3 6.667 6.667 6.667c3.666 0 6.666-3 6.666-6.667s-3-6.667-6.666-6.667Zm0 12A5.34 5.34 0 0 1 2.667 8.5 5.34 5.34 0 0 1 8 3.167 5.34 5.34 0 0 1 13.333 8.5 5.34 5.34 0 0 1 8 13.833Zm3.06-8.28L6.667 9.947 4.94 8.227l-.94.94 2.667 2.666L12 6.5l-.94-.947Z"
    />
  </svg>
);

export default IconDone;
