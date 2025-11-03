/**
 * @figmaId 21:9
 */
import * as React from "react";
import { Button } from "../ui/button";

export default function ButtonFigma(props: {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  children?: React.ReactNode;
  disabled?: boolean;
  asChild?: boolean;
}) {
  return (
    <Button
      variant={props.variant}
      size={props.size}
      disabled={props.disabled}
      asChild={props.asChild}
    >
      {props.children}
    </Button>
  );
}

