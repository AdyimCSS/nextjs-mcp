/**
 * @figmaId 21:8
 * @component Button
 * 
 * Figma Link: https://www.figma.com/design/J2LLnfBQi1MCjF2DREqdrD/nextjs-mcp?node-id=21-8
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

