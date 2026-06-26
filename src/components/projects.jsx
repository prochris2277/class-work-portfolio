const ProjectsSection = () => {

const projects = [
  {
    title:"TicTacToe Game",
    desc:"A classic two-player game built using vanilla javascript"
  },
   {
    title:"JavaScript Quiz",
    desc:"A quiz show-casing my knowldge of the basic concepts of javascript"
  },
   {
    title:"Gista Recreate",
    desc:"A recreation of the Gigsta home page"
  },
   {
    title:"Doggo fetch",
    desc:"A quiz testing my knowledge of different dog breeds"
  }
]

    return (
        <section className="project-section mx-3 list-none md:text-[1em] xl:text-[1.3em] ">
        <h2 className="text-blue-600 text-[1.3em] pb-1 pt-2 mx-2.5 sm:text-2xl">Projects I've worked on</h2>
          
        <div>
          {projects.map((project) => 
          (
            <div key={project.title} className="bg-gray-700  rounded-lg p-2 my-1.5 hover:bg-blue-500 cursor-pointer hover:scale-102 transition-all duration-500">
            <h2>{project.title}</h2>
            <p className="font-light text-blue-300 text-md">{project.desc}</p>
            </div>
            
          )
          )}
        </div>
      </section>
    )
}

export default ProjectsSection