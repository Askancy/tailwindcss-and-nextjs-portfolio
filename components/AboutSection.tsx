/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */
import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "PHP" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "SCSS" },
  { skill: "MySql" },
  { skill: "Tailwind CSS" },
  { skill: "Git(Hub)" },
  { skill: "Laravel" },
  { skill: "InvisionCommunity" },
  { skill: "XenForo" },
  { skill: "WordPress" },

]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Daniele and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> full-stack developer
              based in Pisa, Italy. With a career spanning since 2008, I have dedicated myself to handling substantial projects.
            </p>
            <br />
            <p>
            Specializing in large-scale endeavors, I find fulfillment in crafting innovative and efficient solutions. 
            My determination consistently propels me to overcome challenges and continually enhance my skill set. 
            I am passionate about web development, boasting extensive experience in {" "}
              <span className="font-bold text-teal-500">creating full-stack applications</span>{" "} that seamlessly marry form and function.
            </p>
            <br />
            <p>
            With a proactive, results-driven approach, I am committed to delivering high-quality solutions that surpass client expectations. 
            I am eager to contribute to project success and collaborate with dynamic teams who share my dedication to technological excellence.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
