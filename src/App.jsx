import AboutSection from "./components/About";
import ProjectsSection from "./components/Projects";
import SkillsSection from "./components/Skills";
import "./App.css";

function App() {
  return (
    <div className="container min-h-screen mx-auto not-first-of-type:md:mx-6  bg-black pt-8 px-5  border-x-1 border-[#393737]">
      <div className="w-20 h-20 overflow-hidden rounded-full mx-auto mb-3 sm: w-50 sm: h-50  lg: w-30 lg: h-30 ">
        <img src="/pics/profile pic.jpeg" alt="" />
      </div>
      <div className="items-center flex justify-center flex-col gap-1 ">
        <h1 className=" text-2xl text-center sm:text-3xl">Promise Chibuokem</h1>
        <p className="font-light text-l text-blue-300 sm:text-2xl md:text-2xl">Full Stack Developer</p>
        <a
          href="https://github.com/prochris2277"
          className=" bg-gray-700 rounded-lg md:text-[1.1em] xl:text-[1.4em] py-2 px-6   my-2.5 text-center hover:bg-blue-500 hover:scale-105 transition-all duration-500 "
        >
          Github
        </a>
      </div>
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
    </div>
  );
}

export default App;
