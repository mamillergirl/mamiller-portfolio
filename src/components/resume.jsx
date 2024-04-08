import Experience from "./experience";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resume from '../files/marisa-miller-resume-next.pdf';

import { faFileAlt } from '@fortawesome/free-regular-svg-icons';

export default function Resume() {
  return (
    <div id="resume" className="mt-24  mb-10 flex flex-col items-center justify-center bg-homeColor">
      <h2 className="my-4 text-center text-accentColor text-[35px] font-extrabold">Resume</h2>
      <Experience title="Brigham Young University - Idaho" time="Sept 2021 - April 2024" degree="Bachelor of Science in Software Engineering with a Minor in Web Development" description="Contribute to the development and testing of a laboratory analytics web platform, enhancing the UI using React, and playing a role in developing the ASP.NET REST API. Collaborated with a global scrum team to deliver impactful solutions. Conducted strategic research to inform product development decisions and shape the future direction of the platform." />      
      <Experience title="Software Development Intern at Clinisys" time="Jun 2023 - Aug 2023" description="Contribute to the development and testing of a laboratory analytics web platform, enhancing the UI using React, and playing a role in developing the ASP.NET REST API. Collaborated with a global scrum team to deliver impactful solutions. Conducted strategic research to inform product development decisions and shape the future direction of the platform." />
      <a className="text-white text-2xl" href={resume}>
        <FontAwesomeIcon icon={faFileAlt} />
        <span className="ml-2 mb-1 text-white text-[16px]">Check out my full resume</span>
     </a>
    </div>
  );
}
