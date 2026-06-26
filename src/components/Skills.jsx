const SkillsSection = () => {
    const skills = ["HTML", "CSS", "JavaScript", "React", "Git/Github", "Figma", "TailwindCSS"]
    return (
        <section className="skills-section list-none mx-2  ">
        <h2 className=" text-blue-600 text-[1.3em] pt-3 pb-1 mx-2.5 sm:text-2xl">My Skills</h2>
        <div className="grid grid-cols-2 gap-2 text-center md:text-[1em] xl:text-[1.3em] ">
             {skills.map((skill =>
                <div key={skill} className="bg-gray-700  rounded-lg p-2 my-1.5 hover:bg-blue-500 cursor-pointer hover:scale-102 transition-all duration-500">
                    {skill}
                </div>
             ))}
        </div>
      </section>
    )
}

export default SkillsSection