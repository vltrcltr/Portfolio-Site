import React from "react";
import { AppMobile, AppDesktop } from "./Final"
import { useViewport } from "../Hooks/viewportCheck";

export const Final = () => {
  const { width } = useViewport();
  const tablet = 768;

  return width < tablet ? <AppMobile /> : <AppDesktop />;
}
