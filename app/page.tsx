"use client"
import Image from "next/image";
import pp from "../public/pp.jpeg";

import {motion} from "framer-motion";

import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import ThemeToggle from "@/components/ui/theme-toggle"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import image1 from "../public/project1.jpg";
import image2 from "../public/project2.png";
import image3 from "../public/project3.jpeg";
import image4 from "../public/project4.jpg";
import image5 from "../public/project5.jpg";
import image6 from "../public/project6.jpg";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
  <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
    <div className="mx-auto max-w-xl px-4 py-20">
      <motion.header
      initial={{opacity:0, x: -100}}
      animate={{opacity:1, x: 0}}
      transition={{duration: 0.8}}
      
      className= "flex item-center justify-between mb-12">
      <div className="w-20 h-20 rounded-full overflow-hidden">
      <Image src={pp} alt="profile picture" className="cursor-pointer transition-all duration-300 hover:scale-110"></Image>
      </div>
      <ThemeToggle />
      </motion.header>

    <main className="space-y-10">
    
      <section className="space-y-10">
            <motion.div
              initial={{opacity:0 , x:100}}
              animate={{opacity:1, x:0}}
              transition={{duration: 0.8}}
              className="space-y-1"
              >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 vin-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Aman Kumar Soni</h1>
              <p className="text-gray-600 dark:text-gray-400"> Full Stack Developer</p>
              <p className="text-gray-600 dark-text-gray-400">Bangalore, India</p>
            </motion.div>


            <motion.div 
            initial={{opacity:0 , x:-100}}
            animate={{opacity:1, x:0}}
            transition={{duration: 0.8}}
            className="space-y-3">
            <h2 className="text-lg font-semibold">Building Scalable & Resilient Web Applications</h2>
              <p className="text-black dark:text-gray-400 max-w-2xl">
                Full Stack Developer with 3+ years of hands-on experience in designing, developing, and deploying robust web applications. Proficient in backend technologies with{" "}
                <span className="text-black dark:text-white">AWS</span> and{" "}
                <span className="text-black dark:text-white">GCP</span>, and specialized in building large-scale distributed systems. Skilled in{" "}
                <span className="text-black dark:text-white">Java, Spring Boot, Docker, React,</span> and{" "}
                <span className="text-black dark:text-white">Microservices architecture</span>.
              </p>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                Passionate about DevOps practices, CI/CD automation, and delivering high-performance systems with high availability, scalability, and maintainability.
              </p>
            </motion.div>

            <motion.div 
            initial={{opacity:0 , x:50}}
            animate={{opacity:1, x:0}}
            transition={{duration: 0.8}}
            className="flex items-center gap-3">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Button className="rounded-full bg-gradient-to-r from-rose-600
                  to-indigo-600 text-white transition-transform hover:scale-105">Resume</Button>
                </a>

                <Link href="https://github.com/computerwala/" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <FaGithub className="w-6 h-6" />
                </Link>

                <Link href="https://www.linkedin.com/in/heyyyaman/" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <FaLinkedin className="w-6 h-6" />
                </Link>

                <Link href="https://x.com/computerwala07" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <FaTwitter className="w-6 h-6" />
                </Link>

                <Link href="https://www.youtube.com/@GameOnGlitchx" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <FaYoutube className="w-6 h-6" />
                </Link>

                <Link href="https://www.instagram.com/aman.x.soni/" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <FaInstagram className="w-6 h-6" />
                </Link>
            </motion.div>
         </section>

         <motion.section
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="space-y-8"
>
  <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
    Experience
  </h2>

  {/* Ticketing System */}
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <p className="text-sm text-gray-600 dark:text-gray-400">January, 2024 - February, 2025</p>
        <p className="font-medium">Project: Ticketing System</p>
        <p className="font-medium">Associate Consultant</p>
        <p className="text-blue-600 dark:text-blue-400">Company - Capgemini</p>
      </div>
    </div>
    <p className="text-gray-600 dark:text-gray-400 text-sm">
      Built secure REST APIs using Spring Boot and JWT-based Spring Security. Used RabbitMQ for async POS communication and Spring Cloud for service migration. Monitored logs and metrics using Splunk and Grafana with alerting. Refactored legacy code into scalable, fault-tolerant microservices. Handled global exception handling and request validation. Developed React UI for guest and ticket modules. Integrated Kafka for event streaming. Set up CI/CD with Jenkins and AWS CodeDeploy for automated deployments.
    </p>
  </div>

  {/* Sales Booking */}
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <p className="text-sm text-gray-600 dark:text-gray-400">January, 2023 - December, 2024</p>
        <p className="font-medium">Project: Sales Booking Client System</p>
        <p className="font-medium">Senior Software Engineer / Senior Analyst</p>
        <p className="text-blue-600 dark:text-blue-400">Company - Capgemini</p>
      </div>
    </div>
    <p className="text-gray-600 dark:text-gray-400 text-sm">
      Developed REST APIs in Spring Boot for bookings, availability, and guest preferences; consumed on React frontend. Used Redis caching and Resilience4j for circuit breakers and retries. Built dynamic and responsive UI in React for booking and guest workflows. Deployed services on AWS ECS, EC2, S3, RDS with autoscaling and monitoring. Integrated Expedia APIs to sync real-time availability and booking flows on UI. Designed and optimized DB schema for reservation modules using native SQL. Managed environment-specific configs and React &apos;.env&apos; setups for deployments.
    </p>
  </div>

  {/* Dining Reservation */}
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <p className="text-sm text-gray-600 dark:text-gray-400">June, 2021 - December, 2022</p>
        <p className="font-medium">Project: Dining Reservation System</p>
        <p className="font-medium">Software Engineer / Analyst</p>
        <p className="text-blue-600 dark:text-blue-400">Company - Capgemini</p>
      </div>
    </div>
    <p className="text-gray-600 dark:text-gray-400 text-sm">
      Developed dining reservation APIs with Spring Boot and configured MySQL for persistence. Wrote unit and integration tests using JUnit and Mockito. Participated in sprint ceremonies, code reviews, and functional refinement meetings. Used AppDynamics to trace slow transactions and improved query performance. Supported production issue resolution and log analysis using Splunk and CloudWatch.
    </p>
  </div>

  {/* Internship */}
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <p className="text-sm text-gray-600 dark:text-gray-400">January, 2021 - May, 2021</p>
        <p className="font-medium">Project: Deals and Coupon Application</p>
        <p className="font-medium">Intern</p>
        <p className="text-blue-600 dark:text-blue-400">Company - Capgemini</p>
      </div>
    </div>
    <p className="text-gray-600 dark:text-gray-400 text-sm">
      Built RESTful APIs for coupon listing, filtering, and redemption with Spring Boot and JPA. Developed frontend in Angular 12 using reactive forms and modular components. Secured endpoints and validated input data at controller and DTO levels. Deployed app on AWS EC2, configured S3 bucket for static assets, and used Git for version control. Used Postman for API testing and integrated Swagger UI for documentation. Added error handling and fallback logic for external service failures.
    </p>
  </div>
</motion.section>
          
<motion.section
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="space-y-8"
>
  <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
    Education
  </h2>

  {/* College */}
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <p className="text-sm text-gray-600 dark:text-gray-400">July, 2017 - August, 2021</p>
        <p className="font-medium">B.Tech Computer Science Engineering</p>
        <p className="text-blue-600 dark:text-blue-400">Lovely Professional University, Punjab, India</p>
      </div>
    </div>
    <p className="text-gray-600 dark:text-gray-400">
      Graduated with a strong foundation in core computer science subjects including Data Structures, Algorithms, Operating Systems, Computer Networks, and Database Management Systems. Gained hands-on experience in software development through academic projects, coding competitions, and internships. Proficient in Java, Python, and C++, and familiar with modern frameworks and tools used in software engineering. Developed problem-solving skills and a collaborative mindset through team-based project work and active participation in technical fests and workshops.
    </p>
  </div>

  {/* School */}
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <p className="text-sm text-gray-600 dark:text-gray-400">April, 2015 - March, 2016</p>
        <p className="font-medium">Science and Math</p>
        <p className="text-blue-600 dark:text-blue-400">Rajiv Gandhi Memorial H.Sc. School, Madhya Pradesh, India</p>
      </div>
    </div>
    <p className="text-gray-600 dark:text-gray-400">
      Completed higher secondary education with a strong focus on Mathematics and Science, laying the groundwork for a career in engineering and technology. Developed analytical thinking and problem-solving skills through rigorous coursework in Physics and Mathematics. Actively participated in school-level science exhibitions and academic competitions. Achieved 81.2% overall with distinction in all subjects.
    </p>
  </div>
</motion.section>


          <motion.section
            initial={{opacity:0 , y:100}}
            animate={{opacity:1, y:0}}
            transition={{duration: 0.8}}
            className="space-y-8" >

           <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
            Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-[1.02]
            cursor-pointer">
              <CardContent className="p-4">
                <Image src={image1} alt="project 1" className="rounded-lg mb-4 w-full h-[200px] object-cover" />
                <div className="flex items-center justify-between">
                  <div>
                    <a href="https://github.com/computerwala/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Ticketing System</a>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Java, Spring Boot, Microservice, Spring Cloud, Spring Security, RabbitMQ, Kafka, React, MySQL, AWS, Splunk, Grafana </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-[1.02]
            cursor-pointer">
              <CardContent className="p-4">
                <Image src={image2} alt="project 2" className="rounded-lg mb-4 w-full h-[200px] object-cover" />
                <div className="flex items-center justify-between">
                  <div>
                    <a href="https://github.com/computerwala/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Sales Booking Client</a>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Java, Spring Boot, Microservice, React, MySQL, Redis, Resilience4j, Swagger, AWS</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-[1.02]
            cursor-pointer">
              <CardContent className="p-4">
                <Image src={image3} alt="project 3" className="rounded-lg mb-4 w-full h-[200px] object-cover" />
                <div className="flex items-center justify-between">
                  <div>
                    <a href="https://github.com/computerwala/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Dining Reservation System</a>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Java, Spring Boot, Microservice, MySQL, Splunk, AppDynamics </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-[1.02]
            cursor-pointer">
              <CardContent className="p-4">
                <Image src={image4} alt="project 4" className="rounded-lg mb-4 w-full h-[200px] object-cover" />
                <div className="flex items-center justify-between">
                  <div>
                    <a href="https://github.com/computerwala/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Deals and Coupon Web Application</a>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Java, Spring Boot, Microservice, Angular 12, MySQL, JPA, Swagger, AWS </p>
                  </div>
                </div>
              </CardContent>
            </Card>


            <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-[1.02]
            cursor-pointer">
              <CardContent className="p-4">
                <Image src={image5} alt="project 5" className="rounded-lg mb-4 w-full h-[200px] object-cover" />
                <div className="flex items-center justify-between">
                  <div>
                    <a href="https://github.com/computerwala/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Chatty - Chat Application</a>
                    <p className="text-sm text-gray-600 dark:text-gray-400">MongoDB, Express.js, React.js, Node.js, WebSocket, Zustand</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-[1.02]
            cursor-pointer">
              <CardContent className="p-4">
                <Image src={image6} alt="project 6" className="rounded-lg mb-4 w-full h-[200px] object-cover" />
                <div className="flex items-center justify-between">
                  <div>
                    <a href="https://github.com/computerwala/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">URL shortner</a>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Spring Boot, React.js, Microservice, SQL</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            </div>

          <p className="text-gray-500 ">@ 2025 Aman Kumar Soni</p>
            
            </motion.section>
        
      </main>
    </div>
   </div>
  );
}
