import react from "react";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHippo,
  faPlus,
  faMinus,
  faArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  const [state, changeButtonState] = useState(true);

  // if the state is already true(login)  it will change to Loading and if it is false(loading) it will change to login
  const changeState = () => {
    if (state) {
      changeButtonState(false);
    } else {
      changeButtonState(true);
    }
  };

  return (
    <header
      className="my-0 mr-auto ml-auto fixed inset-x-0 top-0 py-2 pb-4 lin-grad"
      style={{
        zIndex: 1,
      }}
    >
      <nav className="w-4/6  flex justify-between my-0 mx-auto items-center	">
        <div className="flex">
          <FontAwesomeIcon icon={faPlus} className="pr-2 mt-1.5 text-2xl" />
          <p class="medical">MEDICAL</p>
        </div>
        <div className="mt-1.5 font-semibold">
          <a
            href="#"
            className="mr-7  hover:text-orange-400 transition-all duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="mr-7  hover:text-orange-400 transition-all duration-300"
          >
            Services
          </a>
          <a
            href="#"
            className="mr-7  hover:text-orange-400 transition-all duration-300"
          >
            Find a Doctor
          </a>
          <a
            href="#"
            className="mr-7  hover:text-orange-400 transition-all duration-300"
          >
            Contact
          </a>
        </div>
        <div></div>
        <div className="mt-1.5">
          {/* Using State to change the rendering of the button */}
          {state && (
            <Link
              to="/log-in"
              onClick={changeState}
              className="p-1 px-2  bg-blue-600 rounded-3xl  hover:bg-sky-700 ... font-semibold transition-all duration-300"
              style={{ color: "white", padding: "7px 20px" }}
            >
              Login
            </Link>
          )}
          {!state && (
            <button
              onClick={changeState}
              className="p-1 px-2  bg-orange-600 rounded-3xl  hover:bg-orange-700 ... font-semibold transition-all duration-300"
              style={{ color: "white", padding: "7px 20px" }}
            >
              Loading
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
