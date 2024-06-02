import "./MenuIcon.css";

const MenuIcon = (props) => {
  return (
    <svg className="menu-icon" width="25" height="7" viewBox="0 0 25 7" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={props.openNavbar}>
      <rect
        width="25"
        height="1"
        fill={props.color} />
      <rect
        y="6"
        width="25"
        height="1"
        fill={props.color} />
    </svg>
  )
}

export default MenuIcon;