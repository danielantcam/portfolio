import Header from "./components/Header";
import Stack from "./components/Stack";
import ProjectsGrid from "./components/ProjectsGrid";
import AboutMe from "./components/AboutMe";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";

export default function App() {
  return (<>
    <Header />
    <Stack />
    <ProjectsGrid />
    <div className="
      flex flex-col gap-10 mb-10
      md:mb-20 xl:flex-row xl:gap-24
    ">
      <AboutMe />
      <Roadmap events={[
        {
          title: "React Tutorial",
          description: "Completed 'React Tutorial' by Jad Joubran, an interactive course that introduces React fundamentals through hands-on coding challenges and real-world projects, ideal for building a solid foundation in modern front-end development.",
          date: "June 2025",
          certificate: "https://res.cloudinary.com/dbfn5lnvx/image/authenticated/s--P_qdHUr2--/v1749661130/certificates/react/danielantncamarero-9466.pdf"
        },
        {
          title: "Computer Science",
          description: "Started a Bachelor's Computer Science degree in the Autonomous University of Madrid.",
          date: "September 2024"
        },
        {
          title: "Learn JavaScript",
          description: "Took 'Learn JavaScript' by Jad Joubran, a complete course on JavaScript that covers all the way from the basics to more advanced concepts that are reinforced through real-life projects.",
          date: "May 2024",
          certificate: "https://res.cloudinary.com/dbfn5lnvx/image/authenticated/s--6EiAUpUa--/v1750516212/certificates/javascript/danielantncamarero-4575.pdf"
        }
      ]} />
    </div>
    <Footer />
  </>);
}