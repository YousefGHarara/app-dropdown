import { useEffect, useRef, useState } from "react";
import "./App.css";
import yousef from "./assets/youset.jpeg";
import user from "./assets/user.png";
import edit from "./assets/edit.png";
import setting from "./assets/setting-lines.png";
import inbox from "./assets/mail-inbox-app.png";
import DropDown from "./Components/DropDown/dropDown";

function App() {
  const [selected, setSelected] = useState("Choose one");
  const [open, setOpen] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        console.log(menuRef.current.contains(e.target));
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return() => {
      document.removeEventListener("mousedown", handler);
    }
  });

  return (
    <div className="section">
      <div className="App">
        <DropDown selected={selected} setSelected={setSelected} />
      </div>
      <hr />
      <div className="App2">
        <div className="menu-container" ref={menuRef}>
          <div className={`menu-trigger`} onClick={() => setOpen(!open)}>
            <img src={yousef} alt="yousef" />
          </div>

          <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
            <h3>
              Si Harara <br />
              <span>WebDesigner</span>{" "}
            </h3>
            <ul>
              <DropdownItem
                img={user}
                text={"My Profile"}
                open={open}
                setOpen={setOpen}
              />
              <DropdownItem
                img={edit}
                text={"Edit"}
                open={open}
                setOpen={setOpen}
              />
              <DropdownItem
                img={setting}
                text={"Setting"}
                open={open}
                setOpen={setOpen}
              />
              <DropdownItem
                img={inbox}
                text={"E-mail"}
                open={open}
                setOpen={setOpen}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <img src={props.img} alt="" />
      <p>{props.text}</p>
    </li>
  );
}

export default App;
