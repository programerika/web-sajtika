import { useEffect } from "react";

export default function WebBombika() {
  useEffect(() => {
    async function mountBombika() {
      const createBombika = (await import("@programerika/web-bombika")).default;
      createBombika("#bombika");
    }
    mountBombika();
  });
  return <div id="bombika"></div>;
}
