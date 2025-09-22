import Certifications from "./components/Certifications";
import Educations from "./components/Educations";
import Experience from "./components/Experience";
import Personal from "./components/Personal";
import Skills from "./components/Skills";
import Summary from "./components/Summary";

const Resume = () => {
  return (
    <>
    <Personal />
    <Summary />
    <Experience />
    <Educations />
    <Skills />
    <Certifications />
    </>
  );
};

export default Resume;
