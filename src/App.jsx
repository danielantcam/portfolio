import Header from "./components/Header";
import Stack from "./components/Stack";
import ProjectsGrid from "./components/ProjectsGrid";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";

export default function App() {
  return (<>
    <Header />
    <Stack />
    <ProjectsGrid />
    <Roadmap events={[
      {
        title: "React Tutorial",
        description: "Completed 'React Tutorial' by Jad Joubran, an interactive course that introduces React fundamentals through hands-on coding challenges and real-world projects, ideal for building a solid foundation in modern front-end development.",
        date: "June 2025"
      },
      {
        title: "Computer Science",
        description: "Started a Bachelor's Computer Science degree in the Autonomous University of Madrid.",
        date: "September 2024"
      },
      {
        title: "Learn JavaScript",
        description: "Took 'Learn JavaScript' by Jad Joubran, a complete course on JavaScript that covers all the way from the basics to more advanced concepts that are reinforced through real-life projects.",
        date: "May 2024"
      }
    ]} />
    <Footer />
  </>);
}