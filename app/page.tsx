"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Github, ExternalLink, Download, ChevronDown } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { ContactForm } from "@/components/contact-form"
import { AnimatedSection } from "@/components/animated-section"
import { SmoothScroll } from "@/components/smooth-scroll"

export default function Portfolio() {
  const skills = {
    programming: ["C/C++", "Python", "Java", "JavaScript", "HTML/CSS", "C#/.NET"],
    technologies: ["Docker", "Git", "Linux", "Django", "SQL"],
    concepts: ["Algorithm Design & Analysis", "Data Structures"],
  }

  const projects = [
    {
      title: "MINI VERSION OF BASH (minishell)",
      description:
        "Developed from scratch a simple version of the Bash shell written in C. Re-implemented the same way of execution of commands like bash. Learned how to use documentation and testing to reverse engineer a program successfully.",
      tech: ["C", "Shell Programming", "System Calls"],
      github: "https://github.com/Mohmedelkabbaj/minishell",
      demo: null,
    },
    {
      title: "3D GAME (cub3D)",
      description:
        "This project is inspired by the world-famous Wolfenstein 3D game, the first FPS ever. Developed from scratch a 3D game written in C with the help of the miniLibX library.",
      tech: ["C", "Graphics Programming", "miniLibX"],
      github: "https://github.com/Mohmedelkabbaj/cub3D",
      demo: null,
    },
    {
      title: "INTERNET RELAY CHAT (ft_irc)",
      description:
        "Developed and set up a custom IRC server, implementing core protocols for communication between clients. Utilized an actual IRC client to connect to and test the server, ensuring full functionality and compliance with established standards.",
      tech: ["C++", "Network Programming", "IRC Protocol"],
      github: "https://github.com/Mohmedelkabbaj/ft_irc",
      demo: null,
    },
    {
      title: "CONTAINER ORCHESTRATION (inception)",
      description:
        "Set up a multi-service infrastructure using Docker Compose, with custom Dockerfiles for NGINX, WordPress, and MariaDB. Configured TLS-secured NGINX, WordPress with PHP-FPM, and MariaDB containers, ensuring persistence with volumes and container restart policies.",
      tech: ["Docker", "Docker Compose", "NGINX", "WordPress", "MariaDB"],
      github: "https://github.com/Mohmedelkabbaj/inception",
      demo: "https://inception-demo.vercel.app",
    },
    {
      title: "WEBSITE (ft_transcendence)",
      description:
        "This project is about creating a platform for playing Pong-game online. Developed with two of my peers a multiplayer online game with chat rooms using HTML, CSS, JS, and DJANGO as back-end.",
      tech: ["HTML", "CSS", "JavaScript", "Django", "WebSockets"],
      github: "https://github.com/Mohmedelkabbaj/ft_transcendence",
      demo: "https://transcendence-pong.vercel.app",
    },
  ]

  const downloadResume = () => {
    const resumeContent = `
ELKABBAJ MOHAMED - SOFTWARE ENGINEER
=====================================

Contact Information:
- Phone: +212 771 854 392
- Email: mohamedqabbej55@gmail.com
- Address: TAZA, STREET 11 JANUARY N75
- GitHub: github.com/Mohmedelkabbaj

Technical Skills:
- Programming Languages: C/C++, Python, Java, JavaScript, HTML/CSS, C#/.NET
- Technologies: Docker, Git, Linux, Django, SQL
- Concepts: Algorithm Design & Analysis, Data Structures

Education:
- 1337 School (42 Network) - Computer Software Engineering (2022 – Present)
- Specialized Technician Diploma in Computer Development (2020 – 2022)

Technical Projects:
1. MINI VERSION OF BASH (minishell)
2. 3D GAME (cub3D)
3. INTERNET RELAY CHAT (ft_irc)
4. CONTAINER ORCHESTRATION (inception)
5. WEBSITE (ft_transcendence)

Languages:
- Arabic: Native
- English: Intermediate
- French: Intermediate

Soft Skills:
- Communication, Adaptability, Reliable and Consistent, Eager Learner
    `

    const blob = new Blob([resumeContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Elkabbaj_Mohamed_Resume.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <>
      <SmoothScroll />
      <ThemeToggle />

      <div className="min-h-screen bg-white dark:bg-black transition-colors">
        {/* Hero Section */}
        <section
          id="home"
          className="relative overflow-hidden bg-gradient-to-r from-black to-gray-900 dark:from-gray-900 dark:to-black text-white"
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-20 lg:py-32">
            <AnimatedSection animation="fadeIn">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 text-center lg:text-left">
                  <AnimatedSection animation="fadeInLeft" delay={200}>
                    <h1 className="text-4xl lg:text-6xl font-bold mb-4">Elkabbaj Mohamed</h1>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeInLeft" delay={400}>
                    <p className="text-xl lg:text-2xl text-gray-300 mb-6">Software Engineer</p>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeInLeft" delay={600}>
                    <p className="text-lg text-gray-400 mb-8 max-w-2xl">
                      Passionate software engineer with expertise in systems programming, web development, and container
                      orchestration. Currently studying at 1337 School (42 Network) with hands-on experience in building
                      complex applications from scratch.
                    </p>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeInUp" delay={800}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                        <a href="#contact">
                          <Mail className="mr-2 h-4 w-4" />
                          Contact Me
                        </a>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-black"
                        asChild
                      >
                        <a href="https://github.com/Mohmedelkabbaj" target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View GitHub
                        </a>
                      </Button>
                      <Button size="lg" variant="secondary" onClick={downloadResume}>
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                      </Button>
                    </div>
                  </AnimatedSection>
                </div>
                <AnimatedSection animation="fadeInRight" delay={400}>
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mel-kabb-yYRH5uB6dkLRlIBaVsHIa2uWVV121n.jpeg"
                          alt="Elkabbaj Mohamed"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center animate-bounce">
                        <span className="text-2xl">👨‍💻</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="h-6 w-6 text-white/60" />
            </div>
          </div>
        </section>

        {/* Contact Info Bar */}
        <section className="bg-white dark:bg-gray-900 shadow-sm border-b dark:border-gray-700 transition-colors">
          <div className="container mx-auto px-4 py-4">
            <AnimatedSection animation="fadeInUp">
              <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2 hover:text-purple-600 transition-colors">
                  <Phone className="h-4 w-4 text-purple-600" />
                  <span>+212 771 854 392</span>
                </div>
                <div className="flex items-center gap-2 hover:text-purple-600 transition-colors">
                  <Mail className="h-4 w-4 text-purple-600" />
                  <span>mohamedqabbej55@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 hover:text-purple-600 transition-colors">
                  <MapPin className="h-4 w-4 text-purple-600" />
                  <span>TAZA, STREET 11 JANUARY N75</span>
                </div>
                <div className="flex items-center gap-2 hover:text-purple-600 transition-colors">
                  <Github className="h-4 w-4 text-purple-600" />
                  <a
                    href="https://github.com/Mohmedelkabbaj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-600 transition-colors"
                  >
                    github.com/Mohmedelkabbaj
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 lg:py-24 bg-white dark:bg-black">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4">Technical Skills</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  A comprehensive set of programming languages, technologies, and concepts I work with
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <Card className="border-l-4 border-l-purple-600 hover:shadow-lg transition-shadow bg-white dark:bg-gray-900">
                  <CardHeader>
                    <CardTitle className="text-xl text-black dark:text-white">Programming Languages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.programming.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 hover:scale-105 transition-transform"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={400}>
                <Card className="border-l-4 border-l-black dark:border-l-white hover:shadow-lg transition-shadow bg-white dark:bg-gray-900">
                  <CardHeader>
                    <CardTitle className="text-xl text-black dark:text-white">Technologies & Tools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.technologies.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:scale-105 transition-transform"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={600}>
                <Card className="border-l-4 border-l-purple-600 hover:shadow-lg transition-shadow bg-white dark:bg-gray-900">
                  <CardHeader>
                    <CardTitle className="text-xl text-black dark:text-white">Core Concepts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.concepts.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 hover:scale-105 transition-transform"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* Soft Skills & Languages */}
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <AnimatedSection animation="fadeInLeft" delay={800}>
                <Card className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-900">
                  <CardHeader>
                    <CardTitle className="text-xl text-black dark:text-white">Soft Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["Communication", "Adaptability", "Reliable and Consistent", "Eager Learner"].map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="hover:scale-105 transition-transform border-gray-300 dark:border-gray-600"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={800}>
                <Card className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-900">
                  <CardHeader>
                    <CardTitle className="text-xl text-black dark:text-white">Languages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-black dark:text-white">Arabic</span>
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          Native
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-black dark:text-white">English</span>
                        <Badge variant="secondary">Intermediate</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-black dark:text-white">French</span>
                        <Badge variant="secondary">Intermediate</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4">Education</h2>
              </div>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto space-y-8">
              <AnimatedSection animation="fadeInLeft">
                <Card className="border-l-4 border-l-purple-600 hover:shadow-lg transition-all hover:scale-[1.02] bg-white dark:bg-gray-800">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <CardTitle className="text-xl text-black dark:text-white">1337 School (42 Network)</CardTitle>
                        <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
                          Computer Software Engineering
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="mt-2 lg:mt-0 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900 dark:text-purple-200"
                      >
                        2022 – Present
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      Learned through hands-on practical projects and peer-to-peer learning methodology.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight">
                <Card className="border-l-4 border-l-black dark:border-l-white hover:shadow-lg transition-all hover:scale-[1.02] bg-white dark:bg-gray-800">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <CardTitle className="text-xl text-black dark:text-white">
                          Specialized Technician Diploma
                        </CardTitle>
                        <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
                          Computer Development (Fairly Good)
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="mt-2 lg:mt-0 border-gray-300 dark:border-gray-600">
                        2020 – 2022
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      Two years of higher education after the Baccalaureate. This education provides a foundation in
                      software development, database management, web technologies, and IT infrastructure.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 lg:py-24 bg-white dark:bg-black">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4">Technical Projects</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  A showcase of complex projects built from scratch, demonstrating expertise in systems programming and
                  web development
                </p>
              </div>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <AnimatedSection key={index} animation="fadeInUp" delay={index * 200}>
                  <Card className="h-full hover:shadow-lg transition-all hover:scale-[1.02] group bg-white dark:bg-gray-900">
                    <CardHeader>
                      <CardTitle className="text-xl text-black dark:text-white group-hover:text-purple-600 transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs hover:scale-105 transition-transform border-gray-300 dark:border-gray-600"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        {project.demo && (
                          <Button size="sm" asChild className="bg-purple-600 hover:bg-purple-700">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4">Get In Touch</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  I'm always interested in new opportunities and challenging projects. Feel free to reach out if you'd
                  like to discuss potential collaborations.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={200}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black dark:bg-gray-950 text-white py-12 transition-colors">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                I'm always interested in new opportunities and challenging projects. Feel free to reach out if you'd
                like to discuss potential collaborations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                  <a href="mailto:mohamedqabbej55@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    mohamedqabbej55@gmail.com
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black"
                  asChild
                >
                  <a href="https://github.com/Mohmedelkabbaj" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub Profile
                  </a>
                </Button>
              </div>
              <div className="pt-8 border-t border-gray-800 text-gray-500">
                <p>&copy; 2024 Elkabbaj Mohamed. All rights reserved.</p>
              </div>
            </AnimatedSection>
          </div>
        </footer>
      </div>
    </>
  )
}
