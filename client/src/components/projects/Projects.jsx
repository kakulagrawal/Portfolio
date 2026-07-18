import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getProjects } from "../../services/projectService";
import ProjectCard from "./ProjectCard";


const Projects = () => {

  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");


  useEffect(() => {

    const fetchProjects = async () => {

      const data = await getProjects();

      setProjects(data);

    };


    fetchProjects();

  }, []);



  const categories = [
    "All",
    ...new Set(
      projects.map(
        project => project.category
      )
    )
  ];



  const filteredProjects =

    activeCategory === "All"

      ? projects

      : projects.filter(
          project =>
          project.category === activeCategory
        );




  return (

    <section
      id="projects"
      className="py-24"
    >

      <div
        className="
          max-w-6xl
          mx-auto
          px-6
        "
      >



        {/* Heading */}

        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.6
          }}

          className="text-center"

        >

          



          <h2
            className="
              text-5xl
              font-bold
              mt-4
              bg-gradient-to-r
              from-cyan-400
              to-purple-500
              bg-clip-text
              text-transparent
            "
          >

            Featured Work

          </h2>


          <br />
          <p
            className="
              text-gray-500
              mt-10
              mx-auto
              
            "
          >

            A selection of projects showcasing
            my experience building modern
            full-stack applications.

          </p>


        </motion.div>




        {/* Categories */}


        <div
          className="
            flex
            justify-center
            flex-wrap
            gap-4
            mt-12
          "
        >

          {
            categories.map(category=>(


              <button

                key={category}

                onClick={() =>
                  setActiveCategory(category)
                }


                className={`
                  px-5
                  py-2
                  rounded-full
                  border
                  transition

                  ${
                    activeCategory === category

                    ?

                    "bg-cyan-400 text-black border-cyan-400"

                    :

                    "border-white/20 text-gray-300 hover:bg-white/10"

                  }

                `}

              >

                {category}

              </button>


            ))
          }


        </div>





        {/* Cards */}


        <motion.div

          layout

          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
            mt-14
          "

        >

          {
            filteredProjects.map(project=>(

              <ProjectCard

                key={project._id}

                project={project}

              />

            ))
          }


        </motion.div>



      </div>


    </section>

  );

};


export default Projects;