/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */
import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Gamelite",
    description:
      "Gamelite is a video game community born in 2009, created with an ad-hoc structure to provide users with enhanced services and smoother navigation. The site is dedicated to showcasing the world of video games in all its facets, covering a wide range of genres and platforms, aiming to always offer visitors clear and precise insights. Video games, and all the news surrounding them, are the passion that underlies Gamelite, capable of bringing everyone together, from the staff members to each individual visitor.",
    image: "/gamelite.png",
    github: "https://github.com/hqasmei/platoio",

    link: "https://gamelite.it",
  },
  {
    name: "InvisionITA",
    description: "InvisionITA is an Italian community centered around the InvisionCommunity software. We specialize in providing translations and support for the platform in the Italian language. Our dedicated team is committed to enhancing the user experience by offering comprehensive assistance and localized content. As a community, we strive to bridge language gaps, ensuring that Italian-speaking users can fully leverage the capabilities of InvisionCommunity. Explore our platform for expertly crafted translations, reliable support, and a collaborative environment tailored to the needs of the Italian user base.",
    image: "/invisionita.png",
    github: "https://github.com/hqasmei/platoio",

    link: "https://invisionita.it",
  }
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70 mt-24"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">

                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
