import { Moon, Sun } from "@phosphor-icons/react";

function ThemeController() {
  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" className="theme-controller" value="light" />

      {/* sun icon */}
      <Sun size={24} className="swap-off fill-current" />

      {/* moon icon */}
      <Moon size={24} className="swap-on fill-current" />
    </label>
  );
}

export default ThemeController;
