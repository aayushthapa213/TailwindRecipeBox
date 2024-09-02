import { useEffect } from "react";

export default function Toogle({ menu, burger }) {
  useEffect(() => {
    if (burger && menu) {
      const toggleMenu = () => {
        if (menu.classList.contains("hidden")) {
          menu.classList.remove("hidden");
        } else {
          menu.classList.add("hidden");
        }
      };

      burger.addEventListener("click", toggleMenu);

      // Cleanup the event listener on component unmount
      return () => {
        burger.removeEventListener("click", toggleMenu);
      };
    }
  }, [menu, burger]);

  return null;
}
