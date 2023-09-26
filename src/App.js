import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHippo,
  faPlus,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div className="App w-4/6 my-0 mr-auto ml-auto mt-2">
      <header
        className="w-4/6 my-0 mr-auto ml-auto fixed inset-x-0 top-0 pd-2 bg-white pb-4"
        style={{
          zIndex: 100,
        }}
      >
        <nav className="flex justify-between ">
          <div className="flex">
            <FontAwesomeIcon icon={faPlus} className="pr-2 mt-1.5 text-2xl" />
            <p class="medical">MEDICAL</p>
          </div>
          <div className="mt-1.5" style={{ color: "#0000FF" }}>
            <a href="#" className="mr-7 ">
              Home
            </a>
            <a href="#" className="mr-7">
              Services
            </a>
            <a href="#" className="mr-7">
              Find a Doctor
            </a>
            <a href="#" className="mr-7">
              Doctor
            </a>
          </div>
          <div className="mt-1.5">
            <button
              className="p-1 px-2  bg-blue-600 rounded-2xl  hover:bg-sky-700 ..."
              style={{ color: "white" }}
            >
              Log In
            </button>
          </div>
        </nav>
      </header>

      <div className="pb-32 flex">
        <div class="left_container">
          <div class="lft_con_first">
            <h1 className="font-bold text-left">
              We help patients live a healthy, longer life
            </h1>
            <p className="text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              adipisci molestias quod sequi distinctio numquam architecto
              dignissimos, consectetur, consequuntur enim dolores facere
              molestiae sapiente temporibus non ipsam voluptatibus nisi sunt.
            </p>
            <div className="text-left">
              <button>Request an Appointment</button>
            </div>
          </div>
          <div className="flex mt-10" class="datas">
            <div class="data">
              <p className="text-5xl font-semibold">30+</p>
              <p className="text-xs font-normal mt-2">Years of Experience</p>
            </div>
            <div class="data">
              <p className="text-5xl font-semibold">15+</p>
              <p className="text-xs font-normal mt-2">Clinic Location</p>
            </div>
            <div class="data">
              <p className="text-5xl font-semibold">100%</p>
              <p className="text-xs font-normal mt-2">Patient Satisfaction</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="mt-20 mr-8 ml-12">
            <img
              src={process.env.PUBLIC_URL + "/img/doctor-1.png"}
              style={{ height: "70%", width: "45rem" }}
            />
          </div>
          <div className="mt-28 ">
            <div className="mb-8">
              <img
                src={process.env.PUBLIC_URL + "/img/doctor-1.png"}
                style={{ height: "30%", width: "15rem" }}
              />
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + "/img/doctor-1.png"} />
            </div>
          </div>
        </div>
      </div>
      <div class="second_container ">
        <div className="w-5/12 my-0 mr-auto ml-auto">
          <h1 className="text-4xl font-semibold">
            Providing the best medical Services
          </h1>
          <p className="mt-4">
            World class care for everyone.Our health system offers unmatched ,
            expert health care
          </p>
        </div>
        <div className="grid grid-cols-3 mt-20">
          <div className="mr-4 w-10/12">
            <img src={process.env.PUBLIC_URL + "/img/doctor-1.png"} />
            <h3 className="text-2xl mt-5">Find a Doctor</h3>
            <p className="w-full mt-4">
              World-class for everyone. Our health System offers unmatched
              expert health care. From the lab to the clinic
            </p>
            <button className="border border-black rounded-full px-3 py-1 mt-4 hover:transform hover:translate-x-2 transition-transform duration-300 ease-in-out">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="mr-16 w-10/12">
            <img src={process.env.PUBLIC_URL + "/img/doctor-1.png"} />
            <h3 className="text-2xl mt-5">Find a Location</h3>
            <p className="w-full mt-4">
              World-class care for everyone. Our health System offers
              unmatched,expert health care. From the lab to the clinic
            </p>
            <button className="border border-black rounded-full px-3 py-1 mt-4 hover:transform hover:translate-x-2 transition-transform duration-300 ease-in-out">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="mr-16 w-10/12">
            <img src={process.env.PUBLIC_URL + "/img/doctor-1.png"} />
            <h3 className="text-2xl mt-5">Book Appointment</h3>
            <p className="w-full mt-4">
              World-class care for everyone. Our health System offers
              unmatched,expert health care. From the lab to the clinic
            </p>
            <button className="border border-black rounded-full px-3 py-1 mt-4 hover:transform hover:translate-x-2 transition-transform duration-300 ease-in-out">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
