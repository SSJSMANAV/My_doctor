import logo from "./logo.svg";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faHippo,
  faPlus,
  faMinus,
  faArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
library.add(faFacebookF);
function App() {
  return (
    <main className="App my-0 mr-auto ml-auto mt-2">
      <header
        className="my-0 mr-auto ml-auto fixed inset-x-0 top-0 py-2 pb-4 lin-grad"
        style={{
          zIndex: 100,
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
              Doctor
            </a>
          </div>
          <div className="mt-1.5">
            <button
              className="p-1 px-2  bg-blue-600 rounded-3xl  hover:bg-sky-700 ... font-semibold transition-all duration-300"
              style={{ color: "white", padding: "7px 20px" }}
            >
              Log In
            </button>
          </div>
        </nav>
      </header>
      <section className="pb-24 flex lin-grad pt-16  ">
        <div className="w-4/6 flex my-0 mx-auto">
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
      </section>
      {/* SECOND CONTAINER */}
      <section class="second_container" className="pb-32 pt-12">
        <div className="w-4/6 my-0 mx-auto">
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
              <img
                src={process.env.PUBLIC_URL + "/img/doctor-1.png"}
                className="h-3/5"
              />
              <h3 className="text-2xl mt-5">Find a Doctor</h3>
              <p className="w-full mt-4">
                World-class for everyone. Our health System offers unmatched
                expert health care. From the lab to the clinic
              </p>
              <button className="bg-orange-200 text-gray-500  rounded-full px-5 py-1 mt-4 hover:transform transition-all  hover:translate-x-2 duration-300 ease-in-out">
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
      </section>
      {/* THIRD CONTAINER */}
      <div class="third_container" className="flex pb-32">
        <div className="w-4/6 flex my-0 mx-auto">
          <div className="w-5/12">
            <div className="pl-10">
              <img
                src={process.env.PUBLIC_URL + "/img/doctor-1.png"}
                style={{ width: "80%", height: "30%" }}
              />
            </div>
          </div>
          <div className="w-7/12 ml-5 ">
            <h1 className="font-semibold text-4xl text-left">
              Proud to be one of the nation's best
            </h1>
            <p className="text-left mt-5">
              For 30 years in a row, U.S. News & World Report has recognized us
              as one of the best publics hospitals in the Nation #1 in the Texas
              . Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <p className="text-left mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="text-left mt-5">
              <button className="px-5 py-2 font-medium bg-orange-400 text-white  hover:bg-blue-700 transition-all duration-300 rounded-3xl">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FOURTH CONTAINER */}
      <div class="fourth_container pb-32">
        <div className="w-4/6 my-0 mx-auto">
          <div className="w-5/12 my-0 mr-auto ml-auto ">
            <h3 className="text-4xl font-semibold">Our medical services</h3>
            <p className="mt-3 font-normal">
              World class for everyone. Our health System offers unmatched,
              expert healthcare
            </p>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-3 gird-rows-2 gap-10 mt-20  ">
            <div className=" bg-slate-300 p-4 rounded-2xl">
              <h1 className="text-xl text-left font-medium">Cancer Care</h1>
              <p className="text-left mt-2 text-sm font-normal w-4/5">
                World class for everyone. Our health System offers unmatched,
                expert healthcare
              </p>
              <div className="flex justify-between mt-5 mb-5">
                <button className="bg-blue-600 text-white  rounded-full px-5 py-1 mt-4 hover:transform transition-all  hover:translate-x-2 duration-300 ease-in-out">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <div className="mt-4 ">
                  <p
                    className="bg-blue-200 px-3 py-1"
                    style={{ borderRadius: "8px" }}
                  >
                    1
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl text-left font-medium">
                Labor & Delivery
              </h1>
              <p className="text-left mt-2 text-sm font-normal w-4/5">
                World class for everyone. Our health System offers unmatched,
                expert healthcare
              </p>
              <div className="flex justify-between mt-5 mb-5">
                <button className="border border-black rounded-full px-3 py-1 mt-4 hover:transform hover:translate-x-2 transition-transform duration-300 ease-in-out">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <div className="mt-4 ">
                  <p
                    className="bg-purple-200 px-3 py-1"
                    style={{ borderRadius: "8px" }}
                  >
                    2
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl text-left font-medium">
                Heart & Vascular
              </h1>
              <p className="text-left mt-2 text-sm font-normal w-4/5">
                World class for everyone. Our health System offers unmatched,
                expert healthcare
              </p>
              <div className="flex justify-between mt-5 mb-5">
                <button className="border border-black rounded-full px-3 py-1 mt-4 hover:transform hover:translate-x-2 transition-transform duration-300 ease-in-out">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <div className="mt-4 ">
                  <p
                    className="bg-orange-200 px-3 py-1"
                    style={{ borderRadius: "8px" }}
                  >
                    3
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl text-left font-medium">Mental Health</h1>
              <p className="text-left mt-2 text-sm font-normal w-4/5">
                World class for everyone. Our health System offers unmatched,
                expert healthcare
              </p>
              <div className="flex justify-between mt-5 mb-5">
                <button className="border border-black rounded-full px-3 py-1 mt-4 hover:transform hover:translate-x-2 transition-transform duration-300 ease-in-out">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <div className="mt-4 ">
                  <p
                    className="bg-orange-200 px-3 py-1"
                    style={{ borderRadius: "8px" }}
                  >
                    4
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl text-left font-medium">Neurology</h1>
              <p className="text-left mt-2 text-sm font-normal w-4/5">
                World class for everyone. Our health System offers unmatched,
                expert healthcare
              </p>
              <div className="flex justify-between mt-5 mb-5">
                <button className="border border-black rounded-full px-3 py-1 mt-4 hover:transform hover:translate-x-2 transition-transform duration-300 ease-in-out">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <div className="mt-4 ">
                  <p
                    className="bg-blue-200 px-3 py-1"
                    style={{ borderRadius: "8px" }}
                  >
                    5
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl text-left font-medium">Burn Treatment</h1>
              <p className="text-left mt-2 text-sm font-normal w-4/5">
                World class for everyone. Our health System offers unmatched,
                expert healthcare
              </p>
              <div className="flex justify-between mt-5 mb-5">
                <button className="border border-black rounded-full px-3 py-1 mt-4 hover:transform hover:translate-x-2 transition-transform duration-300 ease-in-out">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <div className="mt-4 ">
                  <p
                    className="bg-purple-200 px-3 py-1"
                    style={{ borderRadius: "8px" }}
                  >
                    6
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FIFTH CONTAINER */}
      <div class="fifth_container" className=" pb-32">
        <div className="w-4/6 flex my-0 mx-auto">
          <div className="w-1/2 text-left pt-16">
            <div>
              <h1 className="text-3xl font-semibold">
                Get virtual treatment anytime
              </h1>
            </div>
            <div className="mt-8">
              <p className="font-normal flex items-center ">
                <FontAwesomeIcon icon={faMinus} className="mr-2.5" />
                Schedule the appointment directly
              </p>
              <p className="mt-2 flex items-center">
                <FontAwesomeIcon icon={faMinus} className="mr-2.5" />
                Search for your physician here, and contact their office
              </p>
              <p className="mt-3 flex items-start">
                <FontAwesomeIcon icon={faMinus} className="mr-2.5 mt-1.5" />
                View our physicians who are accepting new patients, use the
                online scheduling tool to select an appointment time.
              </p>
            </div>
            <div className="mt-10">
              <button
                className="px-5 py-2 font-medium bg-blue-700 text-white hover:bg-white hover:text-blue-700"
                style={{
                  // backgroundColor: "#334CFF",
                  borderRadius: "11px",
                }}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <div className=" pl-40">
              <img
                src={process.env.PUBLIC_URL + "/img/doctor-1.png"}
                style={{ width: "90%", height: "25rem" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* SIXTH CONTAINER */}
      <div container="sixth_container" className="pb-32">
        <div className="w-4/6  my-0 mx-auto">
          <div className="w-5/12 my-0 mr-auto ml-auto ">
            <h3 className="text-4xl font-semibold">Our great doctors</h3>
            <p className="mt-3 font-normal">
              World class for everyone. Our health System offers unmatched,
              expert healthcare
            </p>
          </div>

          {/* GRID CONTAINER */}
          <div className="mt-24 grid grid-cols-3 gap-10">
            <div>
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/img/doctor-1.png"}
                  style={{ width: "90%", height: "22rem" }}
                />
              </div>
              <div className="mt-4 text-left px-2" style={{ width: "90%" }}>
                <h1 className="font-semibold text-xl text-gray-700">
                  Dr. Sagar Prajapati
                </h1>
                <div className="flex justify-between">
                  <button className="mt-4 px-6 py-1 bg-sky-200 text-sky-700 rounded-xl font-semibold ">
                    Surgeon
                  </button>
                  <p className="mt-5">
                    4.5 <span className="font-light"></span>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400"
                    />
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-xs font-semibold  mt-5">
                    Grande Hospital, Tokha
                  </p>
                  <button className="border border-black rounded-full px-3 py-1 mt-3 hover:transform hover:translate-x-2 transition-transform duration-300 ease-in-out">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/img/doctor-1.png"}
                  style={{ width: "90%", height: "22rem" }}
                />
              </div>
              <div className="mt-4 text-left">
                <h1 className="font-semibold text-xl">Dr. Sagar Sunar</h1>
                <div className="flex justify-between">
                  <button className="mt-4 px-6 py-1 bg-sky-200 text-sky-700">
                    Surgeon
                  </button>
                  <p className="mt-5">
                    4.5 <span className="font-light">(2)</span>
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-xs font-light  mt-5">
                    Grande Hospital, Tokha
                  </p>
                  <button className="border border-black rounded-full px-3 py-1 mt-3 hover:transform hover:translate-x-2 transition-transform duration-300 ease-in-out">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/img/doctor-1.png"}
                  style={{ width: "100%", height: "22rem" }}
                />
              </div>
              <div className="mt-4 text-left">
                <h1 className="font-semibold text-xl">Dr. Prabin Danuwar</h1>
                <div className="flex justify-between">
                  <button className="mt-4 px-6 py-1 bg-sky-200 text-sky-700 hover:text-black font-semibold">
                    Surgeon
                  </button>
                  <p className="mt-5">
                    4.5 <span className="font-light">(2)</span>
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-xs font-light  mt-5">
                    Grande Hospital, Tokha
                  </p>
                  <button className="border border-black rounded-full px-3 py-1 mt-3 hover:transform hover:translate-x-2 transition-transform duration-300 ease-in-out">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SEVENTH CONTAINER */}
      <div class="seventh_container" className="flex pb-32">
        <div className="w-4/6 flex my-0 mx-auto">
          <div className="w-1/3 pt-12">
            <img
              src={process.env.PUBLIC_URL + "/img/doctor-1.png"}
              style={{ width: "100%", height: "26rem" }}
            />
          </div>
          <div className="ml-36 mt-14 text-left">
            <div className="mb-6">
              <h1 className="text-3xl font-semibold">
                Most questions by our beloved patients
              </h1>
            </div>
            <div className="font-semibold flex justify-between border border-gray-300 rounded-2xl">
              <div>
                <p className="px-4 py-4 ">What is your medical care?</p>
              </div>
              <div>
                <button className="mr-4  rounded-md px-2 py-1 mt-3">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
            <div className="font-semibold flex justify-between border border-gray-300 rounded-2xl mt-3">
              <div>
                <p className="px-4 py-4 ">What is your medical care?</p>
              </div>
              <div>
                <button className="mr-4 border border-gray-400 rounded-md px-2 py-1 mt-3">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
            <div className="font-semibold flex justify-between border border-gray-300 rounded-2xl mt-3">
              <div>
                <p className="px-4 py-4 ">What is your medical care?</p>
              </div>
              <div>
                <button className="mr-4 border border-gray-400 rounded-md px-2 py-1 mt-3">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
            <div className="font-semibold flex justify-between border border-gray-300 rounded-2xl mt-3">
              <div>
                <p className="px-4 py-4 ">What is your medical care?</p>
              </div>
              <div>
                <button className="mr-4 border border-gray-400 rounded-md px-2 py-1 mt-3">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
            <div className="font-semibold flex justify-between border border-gray-300 rounded-2xl mt-3">
              <div>
                <p className="px-4 py-4 ">What is your medical care?</p>
              </div>
              <div>
                <button className="mr-4 border border-gray-400 rounded-md px-2 py-1 mt-3">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* EIGHT CONTAINER */}
      <div class="eight_container" className="pb-32">
        <div className="w-4/6 my-0 mx-auto">
          <div className="w-5/12 my-0 mr-auto ml-auto ">
            <h3 className="text-4xl font-semibold">Our medical services</h3>
            <p className="mt-3 font-normal">
              World class for everyone. Our health System offers unmatched,
              expert healthcare
            </p>
          </div>
          <div className="grid grid-cols-3 gap-10 mt-20">
            <div className="bg-blue-200 p-6 rounded-2xl shadow-lg shadow-slate-400">
              <div className="flex">
                <img
                  src={process.env.PUBLIC_URL + "/img/doctor-1.png"}
                  style={{ width: "15%", height: "auto", borderRadius: "5px" }}
                />
                <div>
                  <p className="ml-4 text-sm">Sagar Prajapati</p>
                  <div>
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ fontSize: "0.7rem" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ fontSize: "0.7rem" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ fontSize: "0.7rem" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ fontSize: "0.7rem" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ fontSize: "0.7rem" }}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-2 text-sm text-left font-light">
                <p>
                  World class for everyone. Our health System offers unmatched,
                  expert healthcare
                </p>
              </div>
            </div>
            <div className="bg-blue-200 p-6 rounded-2xl shadow-lg shadow-slate-400">
              <div className="flex">
                <img
                  src={process.env.PUBLIC_URL + "/img/doctor-1.png"}
                  style={{ width: "15%", height: "auto", borderRadius: "5px" }}
                />
                <div>
                  <p className="ml-4 text-sm">Sagar Prajapati</p>
                  <div>
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ fontSize: "0.7rem" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ fontSize: "0.7rem" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ fontSize: "0.7rem" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ fontSize: "0.7rem" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ fontSize: "0.7rem" }}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-2 text-sm text-left font-light">
                <p>
                  World class for everyone. Our health System offers unmatched,
                  expert healthcare
                </p>
              </div>
            </div>
            <div className="bg-blue-200 p-6 rounded-2xl shadow-lg shadow-slate-400">
              <div className="flex">
                <img
                  src={process.env.PUBLIC_URL + "/img/doctor-1.png"}
                  style={{ width: "15%", height: "auto", borderRadius: "5px" }}
                />
                <div>
                  <p className="ml-4 text-sm">Sagar Prajapati</p>
                  <div className="text-yellow-400">
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ fontSize: "0.7rem" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ fontSize: "0.7rem" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ fontSize: "0.7rem" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ fontSize: "0.7rem" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ fontSize: "0.7rem" }}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-2 text-sm text-left font-light">
                <p>
                  World class for everyone. Our health System offers unmatched,
                  expert healthcare
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* EIGHT CONTAINER FOOTER */}

      <div class="footer" className="bg-gray-400">
        <div className="w-4/6 flex my-0 mx-auto py-12">
          <div className="w-2/5">
            <div className="text-left">
              <h2>Medicare</h2>
              <p className=" text-xs  text-gray-700">
                Copyright @2023 developed by Muhibur Rahman all rights reserved
              </p>
              <div className="mt-4">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="border border-black px-3.5 py-2 font-radius font "
                  style={{}}
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="border border-black ml-2 px-3 py-2 font-radius font "
                  style={{}}
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="border border-black ml-2 px-3 py-2 font-radius font "
                  style={{}}
                />
                <FontAwesomeIcon
                  icon={faReddit}
                  className="border border-black ml-2 px-3 py-2 font-radius font "
                  style={{}}
                />
              </div>
            </div>
          </div>
          <div className="3/5">
            <div className="grid grid-cols-3 ">
              <div className="flex flex-col justify-between  h-48 text-left pr-32">
                <h1 className="font-semibold">Quick Links</h1>
                <p>Home</p>
                <p>Home</p>
                <p>Home</p>
                <p>Home</p>
              </div>
              <div className="flex flex-col justify-between h-48 text-left">
                <h1 className="font-semibold">Quick Links</h1>
                <p className="line-height-1">Home</p>
                <p className="line-height-1">Home</p>
                <p className="line-height-1">Home</p>
                <p className="line-height-1">Home</p>
              </div>
              <div className="flex flex-col justify-between h-32 text-left">
                <h1 className="font-semibold">Quick Links</h1>
                <p className="line-height-1">Home</p>
                <p className="line-height-1">Home</p>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
