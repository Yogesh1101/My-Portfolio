import {
  Alert,
  Button,
  Fade,
  Slide,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import "./App.css";
import WavingHandRoundedIcon from "@mui/icons-material/WavingHandRounded";
import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { ReactComponent as HTMLIcon } from "./assets/skillsIcon/html.svg";
import { ReactComponent as CSSIcon } from "./assets/skillsIcon/css.svg";
import { ReactComponent as BootstrapIcon } from "./assets/skillsIcon/bootstrap.svg";
import { ReactComponent as TailwindIcon } from "./assets/skillsIcon/tailwind-css.svg";
import { ReactComponent as JSIcon } from "./assets/skillsIcon/javascript.svg";
import { ReactComponent as MaterialUIIcon } from "./assets/skillsIcon/material-ui.svg";
import { ReactComponent as ReactIcon } from "./assets/skillsIcon/react.svg";
import { ReactComponent as ReduxIcon } from "./assets/skillsIcon/redux.svg";
import { ReactComponent as NodeIcon } from "./assets/skillsIcon/nodejs.svg";
import { ReactComponent as ExpressIcon } from "./assets/skillsIcon/express.svg";
import { ReactComponent as MongoDBIcon } from "./assets/skillsIcon/mongodb.svg";
import { ReactComponent as CIcon } from "./assets/skillsIcon/c.svg";
import { ReactComponent as KotlinIcon } from "./assets/skillsIcon/kotlin.svg";
import { ReactComponent as JavaIcon } from "./assets/skillsIcon/java.svg";
import { ReactComponent as ASIcon } from "./assets/skillsIcon/android-studio.svg";
import { ReactComponent as FigmaIcon } from "./assets/skillsIcon/figma.svg";
import Postman from "./assets/skillsIcon/postman.png";
import Cuvette from "./assets/certificates/cuvette.png";
import FSD from "./assets/certificates/fsd.png";
import GI from "./assets/certificates/great-innovus.png";
import JS from "./assets/certificates/js_hackerrank.png";
import MS from "./assets/certificates/ms.png";
import Education from "./components/Education";
import ProjectTabs from "./components/ProjectTabs";
import * as yup from "yup";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";

const formValidationSchema = yup.object({
  user_name: yup.string().required("* Name field is required"),
  user_email: yup
    .string()
    .email("Invalid email address")
    .required("* Email field is required"),
  user_phone: yup.number().required("* Phone Number is required"),
  message: yup
    .string()
    .min(10, "Atleast 10 characters needed!")
    .required("* Message field is required"),
});

function App() {
  const frontEndSkills = [
    { title: "HTML", icon: <HTMLIcon className="skills-icons" /> },
    { title: "CSS", icon: <CSSIcon className="skills-icons" /> },
    { title: "Bootstrap", icon: <BootstrapIcon className="skills-icons" /> },
    { title: "TailwindCSS", icon: <TailwindIcon className="skills-icons" /> },
    { title: "JavaScript", icon: <JSIcon className="skills-icons" /> },
    {
      title: "MaterialUI",
      icon: <MaterialUIIcon className="skills-icons" />,
    },
    { title: "React.js", icon: <ReactIcon className="skills-icons" /> },
    { title: "Redux", icon: <ReduxIcon className="skills-icons" /> },
  ];

  const backEndSkills = [
    { title: "Node.js", icon: <NodeIcon className="skills-icons" /> },
    { title: "Express.js", icon: <ExpressIcon className="skills-icons" /> },
    { title: "MongoDB", icon: <MongoDBIcon className="skills-icons" /> },
  ];

  const otherProgrammingSkills = [
    { title: "C", icon: <CIcon className="skills-icons" /> },
    { title: "Kotlin", icon: <KotlinIcon className="skills-icons" /> },
    { title: "Java(Beginner)", icon: <JavaIcon className="skills-icons" /> },
  ];

  const toolSkills = [
    { title: "Android Studio", icon: <ASIcon className="skills-icon" /> },
    { title: "Figma", icon: <FigmaIcon className="skills-icon" /> },
    {
      title: "Postman",
      icon: (
        <img
          width="50px"
          height="50px"
          src={Postman}
          alt="postman"
          className="skills-icon"
        />
      ),
    },
  ];

  const certificatesList = [
    { pic: <img src={FSD} alt="FSD" /> },
    { pic: <img src={JS} alt="JS" /> },
    { pic: <img src={MS} alt="MS" /> },
    { pic: <img src={Cuvette} alt="Cuvette" /> },
    { pic: <img src={GI} alt="GI" /> },
  ];
  const [barState, setBarState] = useState({ open: false, Transition: Fade });
  const [barColor, SetBarColor] = useState("");
  const [barMsg, setBarMsg] = useState("");

  function SlideTransition(props) {
    return <Slide {...props} direction="left" />;
  }

  const handleClickOpenBar = (Transition) => {
    setBarState({ open: true, Transition });
  };

  const handleCloseOpenBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setBarState({ ...barState, open: false });
  };

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      user_phone: "",
      message: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      emailjs
        .send(
          process.env.REACT_APP_FORMIK_SERVICE_ID,
          process.env.REACT_APP_FORMIK_TEMPLATE_ID,
          values,
          process.env.REACT_APP_FORMIK_PUBLIC_KEY
        )
        .then(
          (response) => {
            if (response.status === 200) {
              handleClickOpenBar(SlideTransition);
              setBarMsg("SUCCESS!, Message Sent...");
              SetBarColor("success");
              setSubmitting(false);
              resetForm();
            }
          },
          (err) => {
            if (err) {
              handleClickOpenBar();
              setBarMsg("FAILED!, Message Not Sent...");
              SetBarColor("error");
              setSubmitting(false);
            }
          }
        );
    },
  });

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      data-bs-spy="scroll"
      data-bs-target=".navbar"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
      tabIndex="0"
    >
      {/* Hero Section */}
      <section
        id="hero"
        className="d-flex justify-content-center align-items-center"
      >
        <div className="row container">
          <div className="col-12 col-md-7 d-flex justify-content-center align-items-center ">
            <div
              className="hero-left"
              data-aos="fade-up-right"
              data-aos-dutaion="1000"
              data-aos-delay="200"
            >
              <Typography
                data-aos="fade-right"
                data-aos-dutaion="5000"
                data-aos-delay="400"
                sx={{
                  fontSize: { xs: 25, sm: 30, md: 35, lg: 40 },
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                <WavingHandRoundedIcon sx={{ fontSize: { xs: 30, sm: 40 } }} />{" "}
                , I'm
              </Typography>
              <Typography
                data-aos="fade-down"
                data-aos-dutaion="5000"
                data-aos-delay="400"
                my={"10px"}
                variant="h1"
                sx={{
                  fontSize: { xs: 25, sm: 30, md: 35, lg: 50 },
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Yogesh Kumar J R{" "}
              </Typography>
              <Typography
                data-aos="fade-left"
                data-aos-dutaion="5000"
                data-aos-delay="400"
                sx={{
                  fontSize: { xs: 15, sm: 20, md: 25, lg: 30 },
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                <TypeAnimation
                  sequence={[
                    "A MERN Stack Web Developer",
                    500,
                    "A Front-End Web Developer",
                    500,
                    "Tech Enthusiast",
                    500,
                    "Mobile App Developer",
                    500,
                  ]}
                  repeat={Infinity}
                />
              </Typography>

              <a
                data-aos="fade-down"
                data-aos-dutaion="5000"
                data-aos-delay="400"
                href="#about"
                className="d-block mt-3 text-decoration-none"
              >
                <ArrowCircleDownRoundedIcon
                  sx={{ color: "black" }}
                  fontSize="large"
                />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-5 d-flex justify-content-center align-items-center ">
            <div
              data-aos="fade-up-left"
              data-aos-dutaion="1000"
              data-aos-delay="200"
              className="hero_img"
            ></div>
          </div>
        </div>
      </section>

      {/* NavBar Section */}
      <nav className="navbar navbar-expand-lg sticky-top py-lg-3 py-2 bg-body-white bg-white shadow-sm ">
        <div className="container">
          <a className="navbar-brand" href="#hero">
            <Typography sx={{ fontSize: { xs: 20, sm: 30 } }}>
              Yogesh Kumar
            </Typography>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-lg-flex justify-content-end "
            id="navbarNav"
          >
            <ul className="navbar-nav gap-lg-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#hero">
                  <Typography sx={{ fontSize: { xs: 15, sm: 20 } }}>
                    Home
                  </Typography>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  <Typography sx={{ fontSize: { xs: 15, sm: 20 } }}>
                    About
                  </Typography>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  <Typography sx={{ fontSize: { xs: 15, sm: 20 } }}>
                    Skills
                  </Typography>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  <Typography sx={{ fontSize: { xs: 15, sm: 20 } }}>
                    Projects
                  </Typography>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#certificates">
                  <Typography sx={{ fontSize: { xs: 15, sm: 20 } }}>
                    Certificates
                  </Typography>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  <Typography sx={{ fontSize: { xs: 15, sm: 20 } }}>
                    Contact
                  </Typography>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="d-flex justify-content-center bg-black">
        <div className="row container">
          <Typography
            data-aos="fade-right"
            data-aos-dutaion="1000"
            data-aos-delay="200"
            sx={{
              fontSize: { xs: 20, sm: 25, md: 30, lg: 40 },
              fontWeight: "bold",
              color: "white",
              marginBottom: "20px",
            }}
          >
            About{" "}
            <span className="text-danger text-decoration-underline about-heading-underline">
              Me...
            </span>
          </Typography>
          <div className="col-12 col-lg-6 col-xl-5 d-flex flex-column">
            <div
              className="about-info"
              data-aos="fade-up"
              data-aos-dutaion="1000"
              data-aos-delay="200"
            >
              <Typography
                sx={{ fontSize: { xs: 15, sm: 20, md: 25 } }}
                className="first-block"
              >
                Name :
              </Typography>
              <Typography
                sx={{ fontSize: { xs: 12.5, sm: 17.5, md: 22 } }}
                className="second-block"
              >
                J R Yogesh Kumar
              </Typography>
            </div>
            <div
              className="about-info mt-2"
              data-aos="fade-left"
              data-aos-dutaion="1000"
              data-aos-delay="250"
            >
              <Typography
                sx={{ fontSize: { xs: 15, sm: 20, md: 25 } }}
                className="first-block"
              >
                Phone :
              </Typography>
              <Typography
                sx={{ fontSize: { xs: 12.5, sm: 17.5, md: 22 } }}
                className="second-block"
              >
                +91 93611 59691
              </Typography>
            </div>
            <div
              className="about-info mt-2"
              data-aos="fade-right"
              data-aos-dutaion="1000"
              data-aos-delay="300"
            >
              <Typography
                sx={{ fontSize: { xs: 15, sm: 20, md: 25 } }}
                className="first-block"
              >
                Email :
              </Typography>
              <Typography
                sx={{ fontSize: { xs: 12.5, sm: 17.5, md: 22 } }}
                className="second-block"
              >
                jryogesh1121@gmail.com
              </Typography>
            </div>
            <div
              className="about-info mt-2"
              data-aos="fade-down"
              data-aos-dutaion="1000"
              data-aos-delay="350"
            >
              <Typography
                sx={{ fontSize: { xs: 15, sm: 20, md: 25 } }}
                className="first-block"
              >
                Birthday :
              </Typography>
              <Typography
                sx={{ fontSize: { xs: 12.5, sm: 17.5, md: 22 } }}
                className="second-block"
              >
                11 January 2002
              </Typography>
            </div>
            <div className="mt-4 d-flex gap-2 gap-sm-3">
              <a
                data-aos="fade-up"
                data-aos-dutaion="1000"
                data-aos-delay="400"
                href="https://www.linkedin.com/in/yogesh-kumar-j-r/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="about-icons linkedIn" />
              </a>
              <a
                data-aos="fade-up"
                data-aos-dutaion="1000"
                data-aos-delay="450"
                href="https://github.com/Yogesh1101"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="about-icons github" />
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-7 mt-4 mt-lg-0 text-white about-text">
            <Typography
              data-aos="fade-left"
              data-aos-dutaion="1000"
              data-aos-delay="200"
              sx={{ fontSize: { xs: 13.5, sm: 15, md: 17.5, lg: 20 } }}
            >
              An aspiring Full Stack Developer with a strong command of HTML,
              CSS and JavaScript, proficient in the MERN Stack (MongoDb,
              Express.js, React.js and Node.js). A constant learner with the
              ability to adapt to new technologies, capable of providing
              valuable support while working in teams.
            </Typography>
            <Typography
              data-aos="fade-left"
              data-aos-dutaion="1000"
              data-aos-delay="250"
              sx={{
                fontSize: { xs: 13.5, sm: 15, md: 17.5, lg: 20 },
                marginTop: { sm: "10px", md: "15px", lg: "20px" },
              }}
            >
              I hold a Bachelor's degree in Electronics and Communication
              Engineering (ECE) from K.L.N. College of Engineering, Madurai,
              TamilNadu, which I completed in 2023. My Interest on coding and
              computing led me to start my career in the world of web
              development. I have recently completed an Full Stack Development
              Program in MERN Stack at GUVI Institute.
            </Typography>
            <Typography
              data-aos="fade-left"
              data-aos-dutaion="1000"
              data-aos-delay="300"
              sx={{
                fontSize: { xs: 13.5, sm: 15, md: 17.5, lg: 20 },
                marginTop: { sm: "10px", md: "15px", lg: "20px" },
              }}
            >
              My skills include HTML5, CSS3, Bootstrap, TailwindCSS, JavaScript,
              React.js, MaterialUI, Node.js, Express.js, MongoDB, Android
              Studio, and Kotlin.
            </Typography>
            <a
              className="text-decoration-none "
              href="https://drive.google.com/file/d/1zEmE32oC28G6lXI-gA1Wu-dzxsg4GWWO/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                data-aos="fade-up"
                data-aos-dutaion="1000"
                data-aos-delay="350"
                sx={{
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                  border: "1px solid white",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "30px",
                  fontWeight: "bold",
                  fontSize: { sm: 15, md: 18 },
                  width: { sm: "150px" },
                  marginTop: 2,
                }}
                className="d-flex align-items-center scroll_btn"
                variant="contained"
              >
                Resume
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="container d-flex flex-column align-items-center">
          <Typography
            data-aos="fade-down"
            data-aos-dutaion="1000"
            data-aos-delay="200"
            sx={{
              fontSize: { xs: 20, sm: 25, md: 30, lg: 40 },
              fontWeight: "bold",
              color: "black",
              marginBottom: "20px",
            }}
          >
            <span className="text-danger">My</span>{" "}
            <span className="text-decoration-underline skills-heading-underline">
              Skills
            </span>
          </Typography>
          <div
            data-aos="fade-up"
            data-aos-dutaion="1000"
            data-aos-delay="300"
            className="skills-border w-100 d-flex flex-column align-items-center p-3"
          >
            <Typography
              sx={{
                fontSize: { xs: 20, sm: 25, md: 30, lg: 35 },
                color: "black",
              }}
            >
              Front-End Stacks
            </Typography>
            <div className="skill-part">
              {frontEndSkills.map((skills, index) => (
                <div
                  className="skills-col d-flex flex-column justify-content-center align-items-center"
                  key={index}
                >
                  <div>{skills.icon}</div>
                  <Typography
                    sx={{
                      fontSize: { xs: 15, sm: 18, md: 19, lg: 22 },
                      textAlign: "center",
                      color: "black",
                    }}
                  >
                    {skills.title}
                  </Typography>
                </div>
              ))}
            </div>
            <hr />
            <Typography
              sx={{
                fontSize: { xs: 20, sm: 25, md: 30, lg: 35 },
                color: "black",
              }}
            >
              Back-End Stacks
            </Typography>
            <div className="skill-part">
              {backEndSkills.map((skills, index) => (
                <div
                  className="px-4 skills-col d-flex flex-column justify-content-center align-items-center"
                  key={index}
                >
                  <div>{skills.icon}</div>
                  <Typography
                    sx={{
                      fontSize: { xs: 15, sm: 18, md: 19, lg: 22 },
                      textAlign: "center",
                      color: "black",
                    }}
                  >
                    {skills.title}
                  </Typography>
                </div>
              ))}
            </div>
            <hr />
            <Typography
              sx={{
                fontSize: { xs: 20, sm: 25, md: 30 },
                color: "black",
              }}
            >
              Other Programming Languages
            </Typography>
            <div className="skill-part">
              {otherProgrammingSkills.map((skills, index) => (
                <div
                  className="px-4 skills-col d-flex flex-column justify-content-center align-items-center"
                  key={index}
                >
                  <div>{skills.icon}</div>
                  <Typography
                    sx={{
                      fontSize: { xs: 15, sm: 18, md: 19, lg: 22 },
                      textAlign: "center",
                      color: "black",
                    }}
                  >
                    {skills.title}
                  </Typography>
                </div>
              ))}
            </div>
            <hr />
            <Typography
              sx={{
                fontSize: { xs: 20, sm: 25, md: 30, lg: 35 },
                color: "black",
              }}
            >
              Tools
            </Typography>
            <div className="skill-part">
              {toolSkills.map((skills, index) => (
                <div
                  className="px-4 skills-col d-flex flex-column justify-content-center align-items-center"
                  key={index}
                >
                  <div>{skills.icon}</div>
                  <Typography
                    sx={{
                      fontSize: { xs: 15, sm: 18, md: 19, lg: 22 },
                      textAlign: "center",
                      color: "black",
                    }}
                  >
                    {skills.title}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container d-flex flex-column align-items-center">
          <Typography
            data-aos="fade-down"
            data-aos-dutaion="1000"
            data-aos-delay="200"
            sx={{
              fontSize: { xs: 20, sm: 25, md: 30, lg: 40 },
              fontWeight: "bold",
              marginBottom: "20px",
              color: "white",
            }}
          >
            Projects
          </Typography>
          <div className="w-100 d-flex flex-column align-items-center py-4">
            <ProjectTabs />
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section id="certificates">
        <div className="container d-flex flex-column align-items-center">
          <Typography
            data-aos="fade-down"
            data-aos-dutaion="1000"
            data-aos-delay="200"
            sx={{
              fontSize: { xs: 20, sm: 25, md: 30, lg: 40 },
              fontWeight: "bold",
              color: "black",
              marginBottom: "20px",
            }}
          >
            Certificates
          </Typography>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
          >
            {certificatesList.map((certificate, index) => (
              <SwiperSlide key={index}>{certificate.pic}</SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Education Section */}
      <Education />

      {/* Contact Section */}
      <section id="contact" className="d-flex justify-content-center">
        <div className="row container">
          <Typography
            data-aos="fade-up"
            data-aos-dutaion="1000"
            data-aos-delay="200"
            sx={{
              fontSize: { xs: 20, sm: 25, md: 30, lg: 40 },
              fontWeight: "bold",
              color: "red",
              marginBottom: "20px",
            }}
          >
            <span className="text-black">Contact</span>{" "}
            <span className="text-decoration-underline contact-heading-underline">
              Me!
            </span>
          </Typography>
          <div
            data-aos="fade-right"
            data-aos-dutaion="1500"
            data-aos-delay="300"
            className="col-12 col-lg-5 col-xl-5 d-flex flex-column gap-3"
          >
            <div className="contact-info d-flex justify-content-start align-items-center gap-3 gap-sm-4">
              <Typography sx={{ fontSize: { xs: 20, md: 25 }, color: "blue" }}>
                <FaPhone />
              </Typography>
              <Typography sx={{ fontSize: { sm: 15, md: 20 } }}>
                +91 93611 59691
              </Typography>
            </div>
            <div className="contact-info d-flex justify-content-start align-items-center gap-3 gap-sm-4">
              <Typography sx={{ fontSize: { xs: 20, md: 25 }, color: "green" }}>
                <FaEnvelope />
              </Typography>
              <Typography sx={{ fontSize: { sm: 15, md: 20 } }}>
                jryogesh1121@gmail.com
              </Typography>
            </div>
            <div className="contact-info d-flex justify-content-start align-items-center gap-3 gap-sm-4">
              <Typography sx={{ fontSize: { xs: 20, md: 25 } }}>
                <FaLocationDot />
              </Typography>
              <Typography sx={{ fontSize: { sm: 15, md: 20 } }}>
                Madurai, TamilNadu
              </Typography>
            </div>
            <div className="contact-info d-flex justify-content-start align-items-center gap-3 gap-sm-4">
              <Typography
                sx={{ fontSize: { xs: 20, md: 25 }, color: "#0077b5" }}
              >
                <FaLinkedin />
              </Typography>

              <a
                href="https://www.linkedin.com/in/yogesh-kumar-j-r/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                <Typography
                  sx={{
                    fontSize: { sm: 15, md: 20 },
                    color: "black",
                    "&:hover": {
                      color: "#0077b5",
                    },
                  }}
                >
                  Yogesh Kumar J R
                </Typography>
              </a>
            </div>
            <div className="contact-info d-flex justify-content-start align-items-center gap-3 gap-sm-4">
              <Typography
                sx={{ fontSize: { xs: 20, md: 25 }, color: "#bd2c00" }}
              >
                <FaGithub />
              </Typography>

              <a
                href="https://github.com/Yogesh1101"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                <Typography
                  sx={{
                    fontSize: { sm: 15, md: 20 },
                    color: "black",
                    "&:hover": {
                      color: "#bd2c00",
                    },
                  }}
                >
                  Yogesh1101
                </Typography>
              </a>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-dutaion="1000"
            data-aos-delay="300"
            className="col-12 col-lg-7 col-xl-7 mt-4 mt-lg-0 text-black about-text"
          >
            <Typography
              data-aos="fade-down"
              data-aos-dutaion="1000"
              data-aos-delay="250"
              sx={{ fontSize: { xs: 15, sm: 20, md: 25 } }}
            >
              Fill the form to connect if any query
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <div className="w-100 mt-3 mt-md-4">
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formik.values.user_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.user_name && formik.errors.user_name ? (
                  <Typography className="text-danger">
                    {formik.errors.user_name}
                  </Typography>
                ) : (
                  ""
                )}
              </div>
              <div className="w-100 mt-3 mt-md-4">
                <TextField
                  label="Your Email Address"
                  variant="outlined"
                  fullWidth
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formik.values.user_email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.user_email && formik.errors.user_email ? (
                  <Typography className="text-danger">
                    {formik.errors.user_email}
                  </Typography>
                ) : (
                  ""
                )}
              </div>
              <div className="mt-3 mt-md-4">
                <TextField
                  label="Your Phone Number"
                  variant="outlined"
                  fullWidth
                  type="text"
                  id="user_phone"
                  name="user_phone"
                  value={formik.values.user_phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.user_phone && formik.errors.user_phone ? (
                  <Typography className="text-danger">
                    {formik.errors.user_phone}
                  </Typography>
                ) : (
                  ""
                )}
              </div>
              <div className="mt-3 mt-md-4">
                <TextField
                  label="Your Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={5}
                  type="text"
                  id="message"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.message && formik.errors.message ? (
                  <Typography className="text-danger">
                    {formik.errors.message}
                  </Typography>
                ) : (
                  ""
                )}
              </div>
              <Button
                disabled={formik.isSubmitting}
                type="submit"
                className="mt-3 mt-md-4 contact-btn"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="footer" className="bg-black py-4">
        <div className="container d-flex flex-column align-items-center">
          <Typography sx={{ color: "white" }}>
            Thankyou for visiting my portfolio
          </Typography>
          <Typography sx={{ color: "white" }}>
            &copy; Designed by{" "}
            <span className="text-danger">Yogesh Kumar J R</span> 2024 All
            Rights Reserved.
          </Typography>
        </div>
      </footer>

      {/* SnackBar Section */}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={barState.open}
        TransitionComponent={barState.Transition}
        autoHideDuration={2000}
        onClose={handleCloseOpenBar}
      >
        <Alert
          onClose={handleCloseOpenBar}
          severity={barColor}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {barMsg}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
