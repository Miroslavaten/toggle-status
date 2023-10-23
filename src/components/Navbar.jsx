import ToggleLogo from "../assets/icons/ToggleLogo";

function Navbar() {
  return (
    <header className="header">
      <div className="header__left">
        <ToggleLogo width="8em" />
        <p>Status</p>
      </div>
      <div className="header__right">
        <p>Log in</p>
      </div>
    </header>
  );
}

export default Navbar;
