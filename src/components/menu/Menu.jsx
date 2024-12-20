import { DropHalfBottom, House, Nut, Thermometer } from "@phosphor-icons/react";

function Menu() {
  return (
    <ul className="menu menu-horizontal bg-base-200 sticky bottom-3 rounded-box z-50 w-fit mx-auto">
      <li>
        <a className="tooltip" href="/" data-tip="Dashboard">
          <House size={24} weight="fill" />
        </a>
      </li>
      <li>
        <a className="tooltip" href="/ldr" data-tip="ldr">
        <Thermometer size={24} weight="fill" />
        </a>
      </li>
      <li>
        <a className="tooltip" href="/ir" data-tip="ir">
        <DropHalfBottom size={24} weight="fill" />
        </a>
      </li>
      <li>
        <a className="tooltip" href="/aktuator" data-tip="Aktuator">
        <Nut size={24} weight="fill" />
        </a>
      </li>
    </ul>
  );
}

export default Menu;
