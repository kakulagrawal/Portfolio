import { motion } from "framer-motion";


const ProjectCard = ({ project }) => {


  return (

    <motion.div

      initial={{
        opacity:0,
        y:40
      }}

      whileInView={{
        opacity:1,
        y:0
      }}

      viewport={{
        once:true
      }}

      transition={{
        duration:0.5
      }}

      whileHover={{
        y:-10
      }}

      className="
        group
        relative
        rounded-2xl
        overflow-hidden
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-xl
      "

    >


      {/* Glow Effect */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-cyan-500/20
          via-blue-500/20
          to-purple-500/20
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
        "
      />


      {/* Image */}

      <div className="relative overflow-hidden">


        <img

          src={project.image}

          alt={project.title}

          className="
            w-full
            h-52
            object-cover
            transition
            duration-500
            group-hover:scale-110
          "

        />


        {
          project.featured && (

            <span
              className="
                absolute
                top-4
                right-4
                px-3
                py-1
                text-xs
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                text-black
                font-semibold
              "
            >

              Featured

            </span>

          )
        }


      </div>



      {/* Content */}

      <div className="relative p-6">


        <h3
          className="
            text-xl
            font-bold
            text-white
          "
        >

          {project.title}

        </h3>



        <p
          className="
            text-gray-400
            mt-3
            text-sm
            line-clamp-3
          "
        >

          {project.description}

        </p>



        {/* Tech Stack */}

        <div
          className="
            flex
            flex-wrap
            gap-2
            mt-5
          "
        >

          {
            project.techStack?.map((tech,index)=>(

              <span

                key={index}

                className="
                  px-3
                  py-1
                  text-xs
                  rounded-full
                  bg-white/10
                  border
                  border-white/10
                  text-cyan-300
                "

              >

                {tech}

              </span>

            ))
          }


        </div>




        {/* Buttons */}

        <div
          className="
            flex
            gap-4
            mt-6
          "
        >


          {
            project.githubUrl && (

              <a

                href={project.githubUrl}

                target="_blank"

                rel="noreferrer"

                className="
                  px-4
                  py-2
                  rounded-lg
                  border
                  border-white/20
                  text-white
                  hover:bg-white/10
                  transition
                "

              >

                Github

              </a>

            )
          }




          {
            project.liveUrl && (

              <a

                href={project.liveUrl}

                target="_blank"

                rel="noreferrer"

                className="
                  px-4
                  py-2
                  rounded-lg
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-500
                  text-black
                  font-semibold
                  hover:scale-105
                  transition
                "

              >

                Live Demo

              </a>

            )
          }



        </div>



      </div>


    </motion.div>

  );

};


export default ProjectCard;