import {
  Article,
  ControlCamera,
  GitHub,
  SvgIconComponent,
  YouTube,
} from "@mui/icons-material";
//, Bolt
import { Code } from "@mui/icons-material";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
// import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import big_3d_printer_assembly_img from "../assets/portfolio/3D Printer assembly and modification/Big 3D printer assembly.jpg";
import extrude_holder_modification_img from "../assets/portfolio/3D Printer assembly and modification/Extrude holder modification.jpg";
import d_printer_assembly_and_modification_thumb_img from "../assets/portfolio/3D Printer assembly and modification/thumb.jpeg";
import ultimaker_with_customized_extruder_for_viscous_materials_img from "../assets/portfolio/3D Printer assembly and modification/Ultimaker with customized extruder for viscous materials.jpg";
import d_printer_assembly_img from "../assets/portfolio/3D Printer with computer vision system/3D printer assembly.jpg";
import heat_bed_holder_img from "../assets/portfolio/3D Printer with computer vision system/Heat bed holder.jpeg";
import programming_3d_printer_img from "../assets/portfolio/3D Printer with computer vision system/Programming 3D printer.jpeg";
import zaxis_img from "../assets/portfolio/3D Printer with computer vision system/zaxis.jpeg";
import tcp_ip_controlled_car_img from "../assets/portfolio/Car controlled by TCP-IP and Labview/TCP IP Controlled Car.jpg";
import car_controlled_by_voice_thumb_img from "../assets/portfolio/Car controlled by voice/thumb.jpg";
import picture_with_the_crew_img from "../assets/portfolio/Car controlled by voice v2/Picture with the crew.jpg";
import car_controlled_by_voice_v2_thumb_img from "../assets/portfolio/Car controlled by voice v2/thumb.jpeg";
import inc_enterpreneour_participation_thumb_img from "../assets/portfolio/INC Enterpreneour Participation/thumb.jpg";
import line_follower_with_alcohol_sensor_car_thumb_img from "../assets/portfolio/Line follower with alcohol sensor car/thumb.jpg";
import maes_nomination_thumb_img from "../assets/portfolio/Maes Nomination/thumb.jpg";
import machine_bomb_img from "../assets/portfolio/Pick and Place Machine/Machine Bomb.jpeg";
import pick_and_place_machine_thumb_img from "../assets/portfolio/Pick and Place Machine/thumb.jpg";
import diagrams_img from "../assets/portfolio/Position algorithm/diagrams.jpg";
import rssi_img from "../assets/portfolio/Position algorithm/rssi.jpg";
import submission_img from "../assets/portfolio/Position algorithm/submission.jpg";
import position_algorithm_thumb_img from "../assets/portfolio/Position algorithm/thumb.jpg";
import race_participation_thumb_img from "../assets/portfolio/Race participation/thumb.jpg";
import talkshow_thumb_img from "../assets/portfolio/Talkshow/thumb.jpg";
import presenting_my_algorithm_img from "../assets/portfolio/Universitas 21 Participation conference/Presenting my algorithm.jpg";
import presenting_my_research_at_edinburgh_img from "../assets/portfolio/Universitas 21 Participation conference/Presenting my research at Edinburgh.jpg";

const youtube_icon = <YouTube />;
const github_icon = <GitHub />;
const article = <Article />;
const control_icon = <ControlCamera />;
const coding_icon = <Code />;
// const speak_icon = <RecordVoiceOverIcon/>;
// const electronics_icon = <Bolt/>;
const robotics_icon = <PrecisionManufacturingIcon />;

export enum PortfolioTag {
  Coding = "Coding",
  Robotics = "Robotics",
  Electronics = "Electronics",
  Control = "Control",
  Other = "Other",
}

export interface ImageMedia {
  image_link: string;
  image_description: string;
}

export interface YoutubeMedia {
  youtube_id: string;
  description: string;
  thumbnail: string;
}

export type PortFolioMedia = ImageMedia | YoutubeMedia;

export interface PortFolioItem {
  tags: PortfolioTag[];
  thumbnail: string | React.ReactElement<SvgIconComponent>;
  portFolioMedia?: PortFolioMedia[];
  title: string;
  description: string | JSX.Element;
  links?: { link: string; icon: React.ReactElement<SvgIconComponent> }[];
}
export const portfolioItems: PortFolioItem[] = [
  {
    tags: [
      PortfolioTag.Robotics,
      PortfolioTag.Electronics,
      PortfolioTag.Coding,
    ],
    thumbnail: "https://img.youtube.com/vi/HjTVGrmYySE/maxresdefault.jpg",
    portFolioMedia: [
      {
        youtube_id: "https://www.youtube.com/watch?v=HjTVGrmYySE",
        description: "Pick and place machine",
        thumbnail: "https://img.youtube.com/vi/HjTVGrmYySE/maxresdefault.jpg",
      },
      {
        image_link: machine_bomb_img,
        image_description: "Machine Bomb",
      },
      {
        image_link: pick_and_place_machine_thumb_img,
        image_description: "Pick and Place Machine",
      },
    ],
    title: "Pick and Place Machine",
    description: (
      <>
        <p>
          This prototype is a surface mount (SMT) machine. We developed this
          prototype using Arduino Mega with a Ramps board and a Raspberry Pi 3.
        </p>
        <p>
          The Arduino and the Ramps board handle the actuators and sensors
          control. It uses Marlin firmware to read and execute G-Code.
        </p>
        <p>
          We use Raspberry Pi to control the machine using serial protocol
          communication. We used Python3 and Printrun. We also used the
          Raspberry Pi to give wireless control to the device. This wireless
          control can be reached by any device.
        </p>
      </>
    ),
  },
  {
    tags: [
      PortfolioTag.Coding,
      PortfolioTag.Robotics,
      PortfolioTag.Electronics,
    ],
    thumbnail: d_printer_assembly_and_modification_thumb_img,
    portFolioMedia: [
      {
        youtube_id: "https://youtube.com/shorts/-iGoa2lolJU",
        description: "Printing biomaterial 1",
        thumbnail: "https://i.ytimg.com/vi/-iGoa2lolJU/maxresdefault.jpg",
      },
      {
        youtube_id: "https://youtube.com/shorts/ONwHnEOBGk0",
        description: "Printing biomaterial 2",
        thumbnail: "https://i.ytimg.com/vi/ONwHnEOBGk0/maxresdefault.jpg",
      },
      {
        image_link: big_3d_printer_assembly_img,
        image_description: "Big 3D printer assembly",
      },
      {
        image_link: extrude_holder_modification_img,
        image_description: "Extrude holder modification",
      },
      {
        image_link: d_printer_assembly_and_modification_thumb_img,
        image_description: "3D Printer assembly and modification",
      },
      {
        image_link:
          ultimaker_with_customized_extruder_for_viscous_materials_img,
        image_description:
          "Ultimaker with customized extruder for viscous materials",
      },
    ],
    title: "3D Printer assembly and modification",
    description: (
      <>
        <p>
          Here you can appreciate how I modified a 3D printer to be able to
          print biomaterials. In this project, I gave support to a master's
          degree student. I also created a program that modified the G-Code
          generated by a slicer to print with the new material.
        </p>
      </>
    ),
    links: [
      {
        link: "https://youtube.com/shorts/-iGoa2lolJU",
        icon: youtube_icon,
      },
      {
        link: "https://youtube.com/shorts/ONwHnEOBGk0",
        icon: youtube_icon,
      },
      {
        link: "https://github.com/yasuomaidana/GcodeModifier",
        icon: github_icon,
      },
    ],
  },
  {
    tags: [
      PortfolioTag.Coding,
      PortfolioTag.Robotics,
      PortfolioTag.Electronics,
    ],
    thumbnail: "https://i.ytimg.com/vi/Sk8VfzU36gk/maxresdefault.jpg",
    portFolioMedia: [
      {
        youtube_id: "https://youtube.com/shorts/Sk8VfzU36gk",
        description: "3D Printer part detection",
        thumbnail: "https://i.ytimg.com/vi/Sk8VfzU36gk/maxresdefault.jpg",
      },
      {
        youtube_id: "https://youtube.com/shorts/kmFrTyMYOhA",
        description: "3D Printing with camera",
        thumbnail: "https://i.ytimg.com/vi/kmFrTyMYOhA/maxresdefault.jpg",
      },
      {
        image_link: d_printer_assembly_img,
        image_description: "3D printer assembly",
      },
      {
        image_link: heat_bed_holder_img,
        image_description: "Heat bed holder",
      },
      {
        image_link: programming_3d_printer_img,
        image_description: "Programming 3D printer",
      },
      {
        image_link: zaxis_img,
        image_description: "zaxis",
      },
    ],
    title: "3D Printer with computer vision system",
    description: (
      <p>
        This was my graduation project. We designed a 3D printer with a computer
        vision system. The computer vision system can detect the printed part
        and record a video of the selected region. The goal was to create a
        video database to train a NN.
      </p>
    ),
    links: [
      {
        link: "https://youtu.be/Sk8VfzU36gk",
        icon: youtube_icon,
      },
      {
        link: "https://youtube.com/shorts/kmFrTyMYOhA",
        icon: youtube_icon,
      },
      {
        link: "https://github.com/yasuomaidana/3DPrinter_CV",
        icon: github_icon,
      },
    ],
  },
  {
    tags: [PortfolioTag.Coding],
    thumbnail: "https://img.youtube.com/vi/iTgGmqYT8Ys/maxresdefault.jpg",
    portFolioMedia: [
      {
        youtube_id: "https://youtube.com/shorts/iTgGmqYT8Ys",
        description: "Color filtering",
        thumbnail: "https://img.youtube.com/vi/iTgGmqYT8Ys/maxresdefault.jpg",
      },
    ],
    title: "Computer vision",
    description: (
      <>
        <p>
          Here you will find some programs done while practicing computer
          vision.
          <br />
          In the repos you can find:
        </p>
        <ul>
          <li>Video filters</li>
          <li>Spam detector</li>
          <li>Image classification</li>
          <li>Web scrappers</li>
        </ul>
      </>
    ),
    links: [
      {
        link: "https://youtu.be/iTgGmqYT8Ys",
        icon: youtube_icon,
      },
      {
        link: "https://github.com/yasuomaidana/computer_vision_Python",
        icon: github_icon,
      },
      {
        link: "https://github.com/yasuomaidana/practiceCV",
        icon: github_icon,
      },
    ],
  },
  {
    tags: [
      PortfolioTag.Coding,
      PortfolioTag.Robotics,
      PortfolioTag.Electronics,
    ],
    thumbnail: "https://i.ytimg.com/vi/sPqlvP9rh7g/maxresdefault.jpg",
    portFolioMedia: [
      {
        youtube_id: "https://youtube.com/shorts/sPqlvP9rh7g",
        description: "car controlled by arduino through bluetooth",
        thumbnail: "https://i.ytimg.com/vi/sPqlvP9rh7g/maxresdefault.jpg",
      },
    ],
    title: "Arduino Bluetooth Controlled Car",
    description:
      "We built and controlled a car using arduino uno and a Bluetooth shield. We used AT commands to achieve communication.",
    links: [
      {
        link: "https://youtube.com/shorts/sPqlvP9rh7g",
        icon: youtube_icon,
      },
      {
        link: "https://github.com/yasuomaidana/Arduino/blob/master/carro/carro.ino",
        icon: github_icon,
      },
    ],
  },
  {
    tags: [PortfolioTag.Electronics, PortfolioTag.Coding],
    thumbnail: "https://img.youtube.com/vi/apyTDFR0g5s/maxresdefault.jpg",
    portFolioMedia: [
      {
        youtube_id: "https://youtu.be/apyTDFR0g5s",
        description: "Potato process simulation",
        thumbnail: "https://img.youtube.com/vi/apyTDFR0g5s/maxresdefault.jpg",
      },
    ],
    title: "Chips potato process simulation",
    description: (
      <>
        <p>
          This project simulates a chip potato factory using a Siemens PLC and
          ladder programming.
        </p>
        <p>
          An electrical interface was developed to connect the PLC and the
          platform. The electrical interface converts the voltage levels, and
          all logic is handled in the PLC.
        </p>
      </>
    ),
    links: [
      {
        link: "https://youtu.be/apyTDFR0g5s",
        icon: youtube_icon,
      },
    ],
  },
  {
    tags: [
      PortfolioTag.Electronics,
      PortfolioTag.Robotics,
      PortfolioTag.Coding,
    ],
    thumbnail: robotics_icon,
    portFolioMedia: [
      {
        youtube_id: "https://youtube.com/shorts/sPqlvP9rh7g",
        description: "car controlled by arduino through bluetooth",
        thumbnail: "https://i.ytimg.com/vi/sPqlvP9rh7g/maxresdefault.jpg",
      },
    ],
    title: "Arduino Projects",
    description: (
      <>
        <p>
          In this repository you can find several programs done using arduino.
        </p>
        <p></p>
        <p>Some of them are:</p>
        <p>Arduino cars</p>
        <p>Arduino interfaces</p>
        <p>An elevator</p>
        <p>Servo motor controller</p>
      </>
    ),
    links: [
      {
        link: "https://youtube.com/shorts/sPqlvP9rh7g",
        icon: youtube_icon,
      },
      {
        link: "https://github.com/yasuomaidana/Arduino/",
        icon: github_icon,
      },
    ],
  },
  {
    tags: [PortfolioTag.Control, PortfolioTag.Coding],
    thumbnail: control_icon,

    title: "ARMAX simulation",
    description: (
      <>
        <p>Here is a ARMAX model simulation using python.</p>
        <p></p>
        <p></p>
        <p>
          The ARMAX model is a type of time series model that combines
          autoregressive (AR), moving average (MA), and exogenous inputs to
          capture and predict the behavior of a system.
        </p>
        <p></p>
        <p>
          In an ARMAX model, the dependent variable is regressed on its own
          lagged values (autoregressive component), the lagged values of error
          terms (moving average component), and exogenous input variables. The
          ARMAX model is commonly used in econometrics and time series analysis
          to analyze and forecast the behavior of variables influenced by both
          their own past values and external factors.
        </p>
        <p></p>
        <p>
          The ARMAX model is useful in situations where the behavior of a system
          is influenced by both its own past values and external factors. By
          incorporating exogenous inputs, the model can account for the impact
          of these external factors on the system's behavior, improving the
          accuracy of predictions and control.
        </p>
      </>
    ),
    links: [
      {
        link: "https://github.com/yasuomaidana/proyectocontrol",
        icon: github_icon,
      },
    ],
  },
  {
    tags: [PortfolioTag.Coding],
    thumbnail: coding_icon,

    title: "Backend Practice",
    description: (
      <>
        <p>
          Here you can find some backend practicing projects some of them were
          made by using Java-Spring and the newest one was done by using
          Micronaut-Kotlin.
        </p>
        <p>Here are other techonolgies used:</p>
        <p>Databases: MySql, Postgress</p>
        <p>Docker</p>
        <p>Postman</p>
        <p></p>
        <p>
          I focused a bit on Spring-Security I developed processors to generate
          role base authentication and autorization automated security layers.
        </p>
        <p></p>
      </>
    ),
    links: [
      {
        link: "https://github.com/yasuomaidana/mp-to-do-app",
        icon: github_icon,
      },
      {
        link: "https://github.com/yasuomaidana/SpringSecuirty",
        icon: github_icon,
      },
      {
        link: "https://github.com/yasuomaidana/Spring-Course",
        icon: github_icon,
      },
    ],
  },
  {
    tags: [
      PortfolioTag.Robotics,
      PortfolioTag.Electronics,
      PortfolioTag.Coding,
    ],
    thumbnail: "https://i.ytimg.com/vi/RzxadkSjSFo/maxresdefault.jpg",
    portFolioMedia: [
      {
        youtube_id: "https://youtube.com/shorts/RzxadkSjSFo",
        description: "TCP-IP Wireless Labview Car",
        thumbnail: "https://i.ytimg.com/vi/RzxadkSjSFo/maxresdefault.jpg",
      },
      {
        image_link: tcp_ip_controlled_car_img,
        image_description: "TCP IP Controlled Car",
      },
    ],
    title: "Car controlled by TCP-IP and Labview",
    description: (
      <>
        <p>In this project, we built a delivery car using a NI-myRIO board.</p>
        <p>
          We used the myRIO board to get a wireless connection by wifi and
          TCP-IP. We controlled the car using Nintendo Switch controllers.
          <br />
          Characteristics:
        </p>
        <ul>
          <li>
            This robot has a servomotor and a piston used to deliver boxes.
          </li>
          <li>It also has a led display.</li>
          <li>The motors are controlled by H-bridges.</li>
          <li>It is powered by a Lithium battery.</li>
        </ul>
        <p>All the logic was done using LabView.</p>
      </>
    ),
    links: [
      {
        link: "https://youtube.com/shorts/RzxadkSjSFo",
        icon: youtube_icon,
      },
    ],
  },
  {
    tags: [
      PortfolioTag.Robotics,
      PortfolioTag.Electronics,
      PortfolioTag.Coding,
    ],
    thumbnail: car_controlled_by_voice_thumb_img,
    portFolioMedia: [
      {
        image_link: car_controlled_by_voice_thumb_img,
        image_description: "Car controlled by voice",
      },
    ],
    title: "Car controlled by voice",
    description: (
      <>
        <p>
          The project was done with a Raspberry Pi 3B to control a car through
          wifi.
        </p>
        <p>H-Bridge boards were used to drive the wheels.</p>
        <p>
          The car was controlled using voice commands using google home and
          Firebase platforms.
        </p>
      </>
    ),
    links: [
      {
        link: "https://youtu.be/DprdJrlLeLI",
        icon: youtube_icon,
      },
    ],
  },
  {
    tags: [
      PortfolioTag.Robotics,
      PortfolioTag.Electronics,
      PortfolioTag.Coding,
    ],
    thumbnail: car_controlled_by_voice_v2_thumb_img,
    portFolioMedia: [
      {
        youtube_id: "https://youtube.com/shorts/gG_ksPUJqSk",
        description: "Car controlled by voice big",
        thumbnail: "https://i.ytimg.com/vi/gG_ksPUJqSk/maxresdefault.jpg",
      },
      {
        image_link: picture_with_the_crew_img,
        image_description: "Picture with the crew",
      },
      {
        image_link: car_controlled_by_voice_v2_thumb_img,
        image_description: "Car controlled by voice v2",
      },
    ],
    title: "Car controlled by voice v2",
    description: (
      <>
        <p>
          In this project, we replicated the characteristics shown in the
          smaller version.
        </p>
        <p>Therefeore:</p>
        <ul>
          <li>
            It was done with a Raspberry Pi 3B to control a car through wifi
          </li>
          <li>
            The car was controlled using voice commands using google home and
            Firebase platforms
          </li>
        </ul>
        <p>And we add the following changes:</p>
        <ul>
          <li>
            H-Bridge boards were changed by Mosfet's H-Bridge done by ourselves
          </li>
          <li>A servomotor was added</li>
        </ul>
      </>
    ),
    links: [
      {
        link: "https://youtube.com/shorts/gG_ksPUJqSk",
        icon: youtube_icon,
      },
    ],
  },
  {
    tags: [PortfolioTag.Control, PortfolioTag.Coding, PortfolioTag.Robotics],
    thumbnail: control_icon,

    title: "Coppelia Simulation",
    description:
      "In this project we simulated a line follower car by using coppelia simulator and a PID controller that ensure an steady velocity while following the line.",
    links: [
      {
        link: "https://github.com/yasuomaidana/miniproyectoControl",
        icon: github_icon,
      },
    ],
  },
  {
    tags: [PortfolioTag.Coding],
    thumbnail: coding_icon,

    title: "Full Stack Practice",
    description: (
      <>
        <p>
          Here you can find some projects where I have been practicing my full
          stack programming skills.
        </p>
        <p>Some techonolgies used are:</p>
        <p>No-relational databases: Mongo</p>
        <p>Backend: Node - express</p>
        <p>Frontend: Angular, React (Javascrpt, Typescript)</p>
        <p>Docker</p>
      </>
    ),
    links: [
      {
        link: "https://github.com/yasuomaidana/introduciton_to_react ",
        icon: github_icon,
      },
      {
        link: "https://github.com/yasuomaidana/FullStackWebDevelopmentCourse",
        icon: github_icon,
      },
    ],
  },
  {
    tags: [PortfolioTag.Coding],
    thumbnail: coding_icon,

    title: "Gimmel installer",
    description: (
      <>
        <p>
          I generated an installer for GimmelStudio project. This installer was
          done for MacOs.
        </p>
        <p>
          The installer is smart enough to check if it has all the requierements
          to run the program, if not, it install them.
        </p>
      </>
    ),
    links: [
      {
        link: "https://github.com/yasuomaidana/GimelStudio",
        icon: github_icon,
      },
    ],
  },
  {
    tags: [PortfolioTag.Control, PortfolioTag.Coding],
    thumbnail: control_icon,

    title: "Heat Simulator",
    description:
      "In this I simulated a building and its interaction with outside environment. The temperature control will be done by opening and closing some windows. This program will be done using Matlab and MatlabSimulink",
    links: [
      {
        link: "https://github.com/yasuomaidana/heat_simulator",
        icon: github_icon,
      },
    ],
  },
  {
    tags: [PortfolioTag.Other],
    thumbnail: maes_nomination_thumb_img,
    portFolioMedia: [
      {
        image_link: maes_nomination_thumb_img,
        image_description: "Maes Nomination",
      },
    ],
    title: "Maes' Nomination",
    description:
      "I was nominated as the best Excellence Academic Mentor by my university Tec de Monterrey.",
  },
  {
    tags: [PortfolioTag.Other],
    thumbnail: inc_enterpreneour_participation_thumb_img,
    portFolioMedia: [
      {
        image_link: inc_enterpreneour_participation_thumb_img,
        image_description: "INC Entrepreneur Participation",
      },
    ],
    title: "INC Entrepreneur Participation",
    description: (
      <>
        <p>
          I had the opportunity to participate in the INCmty entrepreneurship
          conference.
        </p>
        <p>I took business innovation workshops.</p>
        <p>
          I also attended how to Start a business, price strategies, and
          branding talks.
        </p>
      </>
    ),
  },
  {
    tags: [
      PortfolioTag.Robotics,
      PortfolioTag.Electronics,
      PortfolioTag.Coding,
    ],
    thumbnail: line_follower_with_alcohol_sensor_car_thumb_img,
    portFolioMedia: [
      {
        youtube_id: "https://youtube.com/shorts/uqGu26pprZs",
        description: "Line follower with alcohol sensor",
        thumbnail: "https://i.ytimg.com/vi/uqGu26pprZs/maxresdefault.jpg",
      },
      {
        image_link: line_follower_with_alcohol_sensor_car_thumb_img,
        image_description: "Line follower with alcohol sensor car",
      },
    ],
    title: "Line follower with alcohol sensor car",
    description: (
      <>
        <p>
          This prototype simulates a car that has an alcohol sensor.The concept
          is to design a car that detects when the driver has been drinking and
          doesn't allow him to drive.
        </p>
        <p>
          Here when the alcohol sensor reaches a given threshold, it will
          disable manual control and will enter into automatic mode.
        </p>
        <p>
          Here when the alcohol sensor reaches a given threshold, it will
          disable manual control and will enter into automatic mode.
        </p>
        <p>
          In the automatic mode, it will follow a given route. That simulates a
          route provided by a map service.
        </p>
        <p>
          I think this characteristic should be a MUST by law when autonomous
          vehicle technology has matured.
        </p>
      </>
    ),
    links: [
      {
        link: "https://youtube.com/shorts/uqGu26pprZs",
        icon: youtube_icon,
      },
    ],
  },
  {
    tags: [PortfolioTag.Coding],
    thumbnail: coding_icon,

    title: "Machine learning Practice",
    description:
      "Here you can find my programs done while studying machine learning.",
    links: [
      {
        link: "https://github.com/yasuomaidana/introduction-to-machine-learning, https://github.com/yasuomaidana/MachineLearning",
        icon: github_icon,
      },
    ],
  },
  {
    tags: [PortfolioTag.Other],
    thumbnail: position_algorithm_thumb_img,
    portFolioMedia: [
      {
        image_link: diagrams_img,
        image_description: "diagrams",
      },
      {
        image_link: rssi_img,
        image_description: "rssi",
      },
      {
        image_link: submission_img,
        image_description: "submission",
      },
      {
        image_link: position_algorithm_thumb_img,
        image_description: "Position algorithm",
      },
    ],
    title: "Position algorithm development",
    description: (
      <>
        <p>
          You can appreciate part of my work in my publication with my
          university telecommunication department.
        </p>
        <p>
          My contributions were data collection and linear position localization
          algorithm development.
        </p>
        <p>I did it using Matlab.</p>
      </>
    ),
    links: [
      {
        link: "https://www.mdpi.com/2504-3900/1/2/15",
        icon: article,
      },
    ],
  },
  {
    tags: [PortfolioTag.Other],
    thumbnail: race_participation_thumb_img,
    portFolioMedia: [
      {
        image_link: race_participation_thumb_img,
        image_description: "Race participation",
      },
    ],
    title: "Race participation",
    description:
      "Not everything has to be soo serious. Sometimes, I also do exercise.",
  },
  {
    tags: [PortfolioTag.Robotics, PortfolioTag.Coding],
    thumbnail: "https://img.youtube.com/vi/t4dSEgFsC7k/maxresdefault.jpg",
    portFolioMedia: [
      {
        youtube_id: "https://www.youtube.com/watch?v=t4dSEgFsC7k",
        description: "Simulation on robostudio",
        thumbnail: "https://img.youtube.com/vi/t4dSEgFsC7k/maxresdefault.jpg",
      },
      {
        youtube_id: "https://www.youtube.com/watch?v=H91mjzYlOIs",
        description: "practica4",
        thumbnail: "https://img.youtube.com/vi/H91mjzYlOIs/maxresdefault.jpg",
      },
    ],
    title: "Robostudio simulation",
    description: (
      <>
        <p>In this project, we are simulating a MacbookPro line assembly.</p>
        <p>We designed the tools and working cells used by ABB robots.</p>
        <p>You can also see another robot simulation.</p>
      </>
    ),
    links: [
      {
        link: "https://www.youtube.com/watch?v=t4dSEgFsC7k",
        icon: youtube_icon,
      },
      {
        link: "https://www.youtube.com/watch?v=H91mjzYlOIs",
        icon: youtube_icon,
      },
    ],
  },
  {
    tags: [PortfolioTag.Coding, PortfolioTag.Robotics],
    thumbnail: coding_icon,

    title: "Rubick color detector and solver",
    description: (
      <>
        <p>This project runs a rubick cube.</p>
        <p>It is able to shuffle it, and then by computer vision solves it.</p>
        <p></p>
      </>
    ),
    links: [
      {
        link: "https://github.com/yasuomaidana/rubick_CVS_ColorDetector",
        icon: github_icon,
      },
    ],
  },
  {
    tags: [PortfolioTag.Control, PortfolioTag.Coding],
    thumbnail: control_icon,

    title: "Space Vector Modulation Analysis and Explanation",
    description: (
      <>
        <p>
          This project is still on development. I want to explain how PWM and
          Space vector modulation works.
        </p>
        <p>Here I have been using Python, Ltspice, PSIM, and control theory.</p>
      </>
    ),
    links: [
      {
        link: "https://github.com/yasuomaidana/inverter_variables_analyzer",
        icon: github_icon,
      },
      {
        link: "https://github.com/yasuomaidana/PWM-analysis",
        icon: github_icon,
      },
    ],
  },
  {
    tags: [PortfolioTag.Other],
    thumbnail: talkshow_thumb_img,
    portFolioMedia: [
      {
        youtube_id: "https://www.youtube.com/watch?v=UvoJGhWkylA",
        description: "infrared communication",
        thumbnail: "https://img.youtube.com/vi/UvoJGhWkylA/maxresdefault.jpg",
      },
      {
        image_link: talkshow_thumb_img,
        image_description: "Talkshow",
      },
    ],
    title: "Talkshow",
    description: (
      <>
        <p>I presented a workshop about antennas and telecommunications.</p>
        <p>
          In that workshop, I explained the core parts and processes of
          telecommunication systems.
        </p>
        <p>As an exercise, we sent a signal by using infrared LEDs.</p>
      </>
    ),
    links: [
      {
        link: "https://www.youtube.com/watch?v=UvoJGhWkylA",
        icon: youtube_icon,
      },
    ],
  },
  {
    tags: [PortfolioTag.Coding],
    thumbnail: coding_icon,

    title: "This website",
    description: "This awesome website was done using react-typescript.",
    links: [
      {
        link: "https://github.com/yasuomaidana/cv",
        icon: github_icon,
      },
    ],
  },
  {
    tags: [PortfolioTag.Other],
    thumbnail: presenting_my_research_at_edinburgh_img,
    portFolioMedia: [
      {
        image_link: presenting_my_algorithm_img,
        image_description: "Presenting my algorithm",
      },
      {
        image_link: presenting_my_research_at_edinburgh_img,
        image_description: "Presenting my research at Edinburgh",
      },
    ],
    title: "Universitas 21 Participation conference",
    description: (
      <>
        <p>
          After my paper was published I had the opportunity of presenting it at
          The University of Edinburgh.
        </p>
        <p>
          Here I met extraordinary researchers and took workshops related to how
          we can enhance society through science, and the responsability and
          role of scientist.
        </p>
      </>
    ),
  },
  {
    tags: [PortfolioTag.Control, PortfolioTag.Coding],
    thumbnail: "https://img.youtube.com/vi/bo2jXzD0LyE/maxresdefault.jpg",
    portFolioMedia: [
      {
        youtube_id: "https://www.youtube.com/watch?v=bo2jXzD0LyE",
        description: "Water consumption simulation and leak detection using ML",
        thumbnail: "https://img.youtube.com/vi/bo2jXzD0LyE/maxresdefault.jpg",
      },
    ],
    title: "Water Leak Detection Algorithm",
    description: (
      <>
        <p>
          This is a Matlab program that simulates the water consumption of a
          mexican house of 3 members. In this model we introduce an error then
          using a machine learning algorithm we predict if there exist a leak
        </p>
        <p></p>
        <p>To execute this program you need the following packages</p>
        <p></p>
        <p>Simulink</p>
        <p>Simscape</p>
        <p>A version of matlab that supports appdesigner</p>
        <p>
          To run this project please open from matlab 'Interface.mlapp' Then
          from app designer run the program. After that you will see an
          interface that allows you to run a previous simulation or if you
          desire run a new one It is important to say that for several days it
          could take some time for 7 days of simulation with my computer Lenovo
          ideapad320 from 2017 it takes around 14 minutes to complete, if your
          computer has more power it shouldn't be a problem
        </p>
        <p></p>
        <p>
          NOTE: If your matlab version NOT SUPPORT appdesigner or if you want to
          execute manually the program, to do this you need to do the following
          instruction Run [fug,info]=worktest(ndays,simulate,train,MB,PB,MS,PS)
          where Outputs fug=a boolean that says if you have a leak
          info=information of the leak Inputs ndays=Integer that says the number
          of days to be simulate simulate=A boolean that activate the simulation
          (1) or that load a previous simulation (0) train=Integer that says the
          number of days used to train the model (it must be less than ndays)
          MB=Magnitude of big leak (it control the area of aperture of the leak)
          PB=Probability of that the big leak occurs MS=Magnitude of big leak
          (it control the percentage of nominal aperture per house's element)
          PB=Probability of MS occurs (per each element)
        </p>
      </>
    ),
    links: [
      {
        link: "https://www.youtube.com/watch?v=bo2jXzD0LyE",
        icon: youtube_icon,
      },
      {
        link: "https://github.com/yasuomaidana/waterLeakDetection",
        icon: github_icon,
      },
    ],
  },
];
