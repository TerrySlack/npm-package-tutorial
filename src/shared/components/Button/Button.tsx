import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode | ReactNode[];
}
export const Button = ({ className, children }: Props) => (
  <button className={`button ${className ? className : ""}`}>{children}</button>
);
