import { useEffect } from "react";
import "@mdi/font/css/materialdesignicons.css";
//import dynamic from "next/dynamic";
//import createBombika from "bombika";
//import "bombika/dist/fonts/";
// const createBombika = dynamic(
//   () => {
//     return import("bombika");
//   },
//   { ssr: false }
// );

export default () => {
  useEffect(async () => {
    //console.log(createBombika.render());
    const createBombikaModule = await import("bombika");
    createBombikaModule.default("#bombika");
  });
  return <div id="bombika"></div>;
};
