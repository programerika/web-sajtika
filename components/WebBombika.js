import { useEffect } from "react";
import "@mdi/font/css/materialdesignicons.css";

export default () => {
  useEffect(async () => {
    const createBombikaModule = await import("@programerika/web-bombika");
    createBombikaModule.default("#bombika");
  });
  return <div id="bombika"></div>;
};
