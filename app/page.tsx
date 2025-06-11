"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Github, ExternalLink, Download, ChevronDown, Code, Zap, Rocket } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { ContactForm } from "@/components/contact-form"
import { AnimatedSection } from "@/components/animated-section"
import { SmoothScroll } from "@/components/smooth-scroll"
import { FloatingElements } from "@/components/floating-elements"
import { AnimatedBackground } from "@/components/animated-background"
import { Card3D } from "@/components/3d-card"

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
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: "3D GAME (cub3D)",
      description:
        "This project is inspired by the world-famous Wolfenstein 3D game, the first FPS ever. Developed from scratch a 3D game written in C with the help of the miniLibX library.",
      tech: ["C", "Graphics Programming", "miniLibX"],
      github: "https://github.com/Mohmedelkabbaj/cub3D",
      demo: null,
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "INTERNET RELAY CHAT (ft_irc)",
      description:
        "Developed and set up a custom IRC server, implementing core protocols for communication between clients. Utilized an actual IRC client to connect to and test the server, ensuring full functionality and compliance with established standards.",
      tech: ["C++", "Network Programming", "IRC Protocol"],
      github: "https://github.com/Mohmedelkabbaj/ft_irc",
      demo: null,
      icon: <Rocket className="h-6 w-6" />,
    },
    {
      title: "CONTAINER ORCHESTRATION (inception)",
      description:
        "Set up a multi-service infrastructure using Docker Compose, with custom Dockerfiles for NGINX, WordPress, and MariaDB. Configured TLS-secured NGINX, WordPress with PHP-FPM, and MariaDB containers, ensuring persistence with volumes and container restart policies.",
      tech: ["Docker", "Docker Compose", "NGINX", "WordPress", "MariaDB"],
      github: "https://github.com/Mohmedelkabbaj/inception",
      demo: "https://inception-demo.vercel.app",
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: "WEBSITE (ft_transcendence)",
      description:
        "This project is about creating a platform for playing Pong-game online. Developed with two of my peers a multiplayer online game with chat rooms using HTML, CSS, JS, and DJANGO as back-end.",
      tech: ["HTML", "CSS", "JavaScript", "Django", "WebSockets"],
      github: "https://github.com/Mohmedelkabbaj/ft_transcendence",
      demo: "https://transcendence-pong.vercel.app",
      icon: <Zap className="h-6 w-6" />,
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
      <FloatingElements />
      <AnimatedBackground />

      <div className="min-h-screen bg-white dark:bg-black transition-colors relative">
        {/* Hero Section */}
        <section
          id="home"
          className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-purple-900 dark:from-gray-900 dark:via-black dark:to-purple-900 text-white min-h-screen flex items-center"
        >
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Animated mesh background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent animate-pulse-slow"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-purple-600/20 to-transparent animate-pulse-slow delay-2000"></div>
          </div>

          <div className="relative container mx-auto px-4 py-20 lg:py-32 z-10">
            <AnimatedSection animation="fadeIn">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 text-center lg:text-left">
                  <AnimatedSection animation="slideInUp" delay={200}>
                    <h1 className="text-4xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent animate-gradient">
                      Elkabbaj Mohamed
                    </h1>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeInLeft" delay={400}>
                    <p className="text-xl lg:text-3xl text-purple-300 mb-6 animate-pulse-subtle">Software Engineer</p>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeInLeft" delay={600}>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
                      Passionate software engineer with expertise in systems programming, web development, and container
                      orchestration. Currently studying at 1337 School (42 Network) with hands-on experience in building
                      complex applications from scratch.
                    </p>
                  </AnimatedSection>
                  <AnimatedSection animation="zoomIn" delay={800}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <Button
                        size="lg"
                        className="bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 animate-button-glow"
                        asChild
                      >
                        <a href="#contact">
                          <Mail className="mr-2 h-4 w-4" />
                          Contact Me
                        </a>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300 shadow-lg"
                        asChild
                      >
                        <a href="https://github.com/Mohmedelkabbaj" target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View GitHub
                        </a>
                      </Button>
                      <Button
                        size="lg"
                        variant="secondary"
                        onClick={downloadResume}
                        className="transform hover:scale-105 transition-all duration-300 shadow-lg"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                      </Button>
                    </div>
                  </AnimatedSection>
                </div>
                <AnimatedSection animation="rotateIn" delay={400}>
                  <div className="flex-shrink-0">
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                      <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mel-kabb-yYRH5uB6dkLRlIBaVsHIa2uWVV121n.jpeg"
                          alt="Elkabbaj Mohamed"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center animate-bounce shadow-lg">
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
        <section className="bg-white dark:bg-gray-900 shadow-lg border-b dark:border-gray-700 transition-colors relative z-10">
          <div className="container mx-auto px-4 py-6">
            <AnimatedSection animation="slideInUp">
              <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2 hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
                  <Phone className="h-4 w-4 text-purple-600" />
                  <span>+212 771 854 392</span>
                </div>
                <div className="flex items-center gap-2 hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
                  <Mail className="h-4 w-4 text-purple-600" />
                  <span>mohamedqabbej55@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
                  <MapPin className="h-4 w-4 text-purple-600" />
                  <span>TAZA, STREET 11 JANUARY N75</span>
                </div>
                <div className="flex items-center gap-2 hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
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
        <section id="skills" className="py-16 lg:py-24 bg-white dark:bg-black relative z-10">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="zoomIn">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-5xl font-bold text-black dark:text-white mb-4 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  Technical Skills
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  A comprehensive set of programming languages, technologies, and concepts I work with
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <Card3D>
                  <Card className="border-l-4 border-l-purple-600 hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-900 transform hover:-translate-y-2">
                    <CardHeader>
                      <CardTitle className="text-xl text-black dark:text-white flex items-center gap-2">
                        <Code className="h-5 w-5 text-purple-600" />
                        Programming Languages
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skills.programming.map((skill, index) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 hover:scale-110 transition-transform duration-300 animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Card3D>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={400}>
                <Card3D>
                  <Card className="border-l-4 border-l-black dark:border-l-white hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-900 transform hover:-translate-y-2">
                    <CardHeader>
                      <CardTitle className="text-xl text-black dark:text-white flex items-center gap-2">
                        <Zap className="h-5 w-5 text-purple-600" />
                        Technologies & Tools
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skills.technologies.map((skill, index) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:scale-110 transition-transform duration-300 animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Card3D>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={600}>
                <Card3D>
                  <Card className="border-l-4 border-l-purple-600 hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-900 transform hover:-translate-y-2">
                    <CardHeader>
                      <CardTitle className="text-xl text-black dark:text-white flex items-center gap-2">
                        <Rocket className="h-5 w-5 text-purple-600" />
                        Core Concepts
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skills.concepts.map((skill, index) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 hover:scale-110 transition-transform duration-300 animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Card3D>
              </AnimatedSection>
            </div>

            {/* Soft Skills & Languages */}
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <AnimatedSection animation="rotateIn" delay={800}>
                <Card3D>
                  <Card className="hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-900 transform hover:-translate-y-2">
                    <CardHeader>
                      <CardTitle className="text-xl text-black dark:text-white">Soft Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {["Communication", "Adaptability", "Reliable and Consistent", "Eager Learner"].map(
                          (skill, index) => (
                            <Badge
                              key={skill}
                              variant="outline"
                              className="hover:scale-110 transition-transform duration-300 border-gray-300 dark:border-gray-600 animate-fade-in"
                              style={{ animationDelay: `${index * 150}ms` }}
                            >
                              {skill}
                            </Badge>
                          ),
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Card3D>
              </AnimatedSection>

              <AnimatedSection animation="rotateIn" delay={1000}>
                <Card3D>
                  <Card className="hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-900 transform hover:-translate-y-2">
                    <CardHeader>
                      <CardTitle className="text-xl text-black dark:text-white">Languages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center animate-slide-in">
                          <span className="text-black dark:text-white">Arabic</span>
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            Native
                          </Badge>
                        </div>
                        <div
                          className="flex justify-between items-center animate-slide-in"
                          style={{ animationDelay: "200ms" }}
                        >
                          <span className="text-black dark:text-white">English</span>
                          <Badge variant="secondary">Intermediate</Badge>
                        </div>
                        <div
                          className="flex justify-between items-center animate-slide-in"
                          style={{ animationDelay: "400ms" }}
                        >
                          <span className="text-black dark:text-white">French</span>
                          <Badge variant="secondary">Intermediate</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Card3D>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900 transition-colors relative z-10">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="zoomIn">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-5xl font-bold text-black dark:text-white mb-4 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  Education
                </h2>
              </div>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto space-y-8">
              <AnimatedSection animation="slideInUp">
                <Card3D>
                  <Card className="border-l-4 border-l-purple-600 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-white dark:bg-gray-800 transform hover:-translate-y-2">
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
                          className="mt-2 lg:mt-0 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900 dark:text-purple-200 animate-pulse-subtle"
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
                </Card3D>
              </AnimatedSection>

              <AnimatedSection animation="slideInUp" delay={200}>
                <Card3D>
                  <Card className="border-l-4 border-l-black dark:border-l-white hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-white dark:bg-gray-800 transform hover:-translate-y-2">
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
                </Card3D>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 lg:py-24 bg-white dark:bg-black relative z-10">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="zoomIn">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-5xl font-bold text-black dark:text-white mb-4 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  Technical Projects
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  A showcase of complex projects built from scratch, demonstrating expertise in systems programming and
                  web development
                </p>
              </div>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <AnimatedSection key={index} animation="rotateIn" delay={index * 200}>
                  <Card3D>
                    <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group bg-white dark:bg-gray-900 transform hover:-translate-y-4">
                      <CardHeader>
                        <CardTitle className="text-xl text-black dark:text-white group-hover:text-purple-600 transition-colors flex items-center gap-3">
                          <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg group-hover:scale-110 transition-transform duration-300">
                            {project.icon}
                          </div>
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, techIndex) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs hover:scale-110 transition-transform duration-300 border-gray-300 dark:border-gray-600 animate-fade-in"
                              style={{ animationDelay: `${techIndex * 100}ms` }}
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
                            className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transform hover:scale-105 transition-all duration-300"
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                          {project.demo && (
                            <Button
                              size="sm"
                              asChild
                              className="bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
                            >
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </Card3D>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900 transition-colors relative z-10">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="zoomIn">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-5xl font-bold text-black dark:text-white mb-4 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  I'm always interested in new opportunities and challenging projects. Feel free to reach out if you'd
                  like to discuss potential collaborations.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInUp" delay={200}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black dark:bg-gray-950 text-white py-12 transition-colors relative z-10">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection animation="fadeIn">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Let's Work Together
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                I'm always interested in new opportunities and challenging projects. Feel free to reach out if you'd
                like to discuss potential collaborations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                  asChild
                >
                  <a href="mailto:mohamedqabbej55@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    mohamedqabbej55@gmail.com
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300"
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
