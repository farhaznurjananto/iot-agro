import ThemeController from "../themeController/ThemeController";

function Navbar() {
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Smart Farming Lab</a>
      </div>
      <div className="flex-none">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <ThemeController />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
