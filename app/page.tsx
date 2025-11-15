'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedCharacter } from '@/components/ui/animated-character'
import { Spotlight } from '@/components/ui/spotlight'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Code, 
  Cloud, 
  Database, 
  Brain,
  Award,
  Briefcase,
  GraduationCap,
  Rocket,
  Zap,
  TrendingUp,
  Shield,
  Users,
  Sparkles
} from 'lucide-react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const achievements = [
    {
      icon: Brain,
      title: "AI-Driven Document Understanding",
      description: "Designed and deployed an AI-powered document analysis pipeline—integrated GPT & Gemini models—automating intent classification for business forms, reducing manual processing time by 75% and boosting data accuracy for customer onboarding.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Business Impact Through Automation",
      description: "Built scalable, serverless data workflows in AWS that cut reporting cycles from days to minutes and saved over ₹20L per annum by optimizing operational efficiency.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Rocket,
      title: "End-to-End System Ownership",
      description: "Architected production-grade APIs for real-time company data enrichment, raising internal data accessibility by 25% and directly influencing product analytics and marketing reach.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Tech Leadership",
      description: "Spearheaded remediation of high-severity security vulnerabilities identified by Snyk, driving secure-by-design practices, and trained engineering teams in the adoption of OAuth2 and AWS Cognito.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Mentoring & Team Enablement",
      description: "Led onboarding and career development for junior engineers, driving a 40% faster ramp-up time and improved project delivery quality.",
      color: "from-indigo-500 to-purple-500"
    }
  ]

  const skills = {
    "Cloud & DevOps": ["AWS (Lambda, EC2, Fargate, DynamoDB, S3, Step Functions, ECR, OpenSearch)", "Serverless", "Git CI/CD", "Terraform", "Docker"],
    "Databases": ["Snowflake", "DynamoDB", "OpenSearch", "NoSQL", "SQL"],
    "Programming": ["Python", "SQL", "Java", "TypeScript"],
    "Frameworks/Architecture": ["Microservices", "Pytest", "REST/GraphQL APIs"],
    "AI/ML": ["Generative AI (GPT, Gemini, LLMs)", "Document Processing", "Predictive Analytics"],
    "Observability & Security": ["Prometheus", "Grafana", "OAuth2", "AWS Cognito", "DevSecOps"]
  }

  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "Cimpress India Pvt. Ltd.",
      period: "July 2024 – Present",
      highlights: [
        "Architected and optimized data pipelines with Python asyncio, reducing processing time by 30% for high-volume analytics (10M+ records daily).",
        "Delivered feature-rich backend for Evo Portal, collaborating with product managers to prioritize customer-impacting bug fixes and enhancements in React/TypeScript.",
        "Launched real-time Google Sheets and Looker dashboards for business stakeholders, automating data reporting and enabling on-demand insights.",
        "Developed and deployed 5+ production-grade data enrichment APIs; orchestrated Slack/New Relic integrations for 90% faster issue detection across 50+ apps.",
        "Integrated AI-driven document processing to automate form ingestion and intent analysis—leveraging GPT & Gemini models for scalable business operations.",
        "Implemented advanced observability and monitoring with Prometheus/Grafana, reducing debugging time by 35%.",
        "Led ETL and Snowflake performance optimizations, cutting query execution times by 60% and reducing storage costs.",
        "Enforced security protocols across internal APIs, including OAuth2 and AWS Cognito, minimizing unauthorized access risks.",
        "Organized and led engineering reviews to remediate security vulnerabilities; championed DevSecOps adoption."
      ]
    },
    {
      role: "Software Engineer",
      company: "Cimpress India Pvt. Ltd.",
      period: "July 2021 – July 2024",
      highlights: [
        "Designed and launched over 20 REST APIs utilizing AWS Lambda/API Gateway, improving backend throughput and scalability.",
        "Led workflow automation using AWS Step Functions, saving 20+ hours/week and supporting scalable product growth.",
        "Deployed and managed 50+ containerized microservices (AWS Fargate/EC2); optimized resource utilization and cost.",
        "Built and scaled data pipelines, fine-tuned DynamoDB for high-speed queries, and integrated OpenSearch to reduce customer search latency by 30%.",
        "Automated infrastructure provisioning with Terraform; enhanced CI/CD pipelines for zero-downtime deployments."
      ]
    }
  ]

  const projects = [
    {
      title: "LLM Duel Arena",
      description: "A FastAPI/Jinja2 platform where multiple LLMs (Ollama, OpenAI, Anthropic) compete across chess, tic‑tac‑toe, sprint racing, and a new Word Association Clash game, complete with animated UIs and live play-by-play logs.",
      tech: ["FastAPI", "Python", "React", "SQLAlchemy", "OAuth"]
    },
    {
      title: "Modular Game Engine",
      description: "Implemented a modular game-engine architecture plus a match-runner that enforces legal moves, retries, fallbacks, and token budgets; added per-move token accounting and surfaced live counters in the UI.",
      tech: ["Python", "Architecture Design", "Token Management"]
    },
    {
      title: "Google OAuth Integration",
      description: "Integrated Google OAuth with session middleware, persisted battles via SQLAlchemy/SQLite (auto-migrating schema), and exposed 'My Games' dashboards so authenticated users can review past duels.",
      tech: ["OAuth2", "SQLAlchemy", "SQLite", "Session Management"]
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-end items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex gap-6"
            >
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-20">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:col-span-1"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/50"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm">Available for opportunities</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Abhinav
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-gray-300">
                Senior Software Engineer
              </h2>
              
              <p className="text-lg text-gray-400 max-w-xl">
                Results-driven engineer with 5+ years of experience designing and scaling cloud-native backend platforms, 
                architecting AI-powered solutions, and leading cross-functional teams.
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <a 
                  href="https://maps.app.goo.gl/TNjvUXnb8gC949B18" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-purple-400 transition-colors cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>Bengaluru, India</span>
                </a>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span>+91 9916118034</span>
                </div>
                <a 
                  href="https://www.linkedin.com/in/dotabhinav/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-purple-400 transition-colors cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 text-purple-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
              
              <div className="flex gap-4 pt-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  Get In Touch
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-purple-500 rounded-lg font-semibold hover:bg-purple-500/20 transition-all"
                >
                  View Projects
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative flex items-center justify-center md:justify-end rounded-2xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-4 shadow-lg shadow-purple-500/20"
              style={{
                width: '420px',
                height: '420px',
                minWidth: '420px',
                minHeight: '420px',
                marginLeft: 'auto',
                marginRight: '1rem'
              }}
            >
              <AnimatedCharacter className="w-full h-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Key Achievements
            </h2>
            <p className="text-gray-400 text-lg">Driving innovation and measurable business impact</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{achievement.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300">
                        {achievement.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-black/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <p className="text-gray-400 text-lg">Building scalable solutions at Cimpress</p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-purple-500/20">
                  <CardHeader>
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">{exp.role}</CardTitle>
                        <CardDescription className="text-lg text-purple-400">{exp.company}</CardDescription>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Briefcase className="w-5 h-5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.05 }}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <TrendingUp className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects & AI Contributions
            </h2>
            <p className="text-gray-400 text-lg">Innovative solutions and open-source contributions</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Code className="w-6 h-6 text-purple-400" />
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 mb-4">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-gray-400 text-lg">Technologies I work with</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-purple-500/20">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      {category === "Cloud & DevOps" && <Cloud className="w-5 h-5 text-purple-400" />}
                      {category === "Databases" && <Database className="w-5 h-5 text-purple-400" />}
                      {category === "Programming" && <Code className="w-5 h-5 text-purple-400" />}
                      {category === "Frameworks/Architecture" && <Rocket className="w-5 h-5 text-purple-400" />}
                      {category === "AI/ML" && <Brain className="w-5 h-5 text-purple-400" />}
                      {category === "Observability & Security" && <Shield className="w-5 h-5 text-purple-400" />}
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {items.map((item, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-purple-500/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-purple-400" />
                  <div>
                    <CardTitle className="text-2xl">Bachelor of Engineering (B.E.)</CardTitle>
                    <CardDescription className="text-lg text-purple-400">Computer Science and Engineering</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-gray-300 text-lg">Siddaganga Institute of Technology</p>
                  <p className="text-gray-400">2017 – 2021</p>
                  <p className="text-gray-300">CGPA: 8.4/10</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-lg">Let&apos;s connect and discuss opportunities</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <a
              href="mailto:abhinav6400625@gmail.com"
              className="block"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all text-center cursor-pointer h-full">
                  <CardContent className="pt-6">
                    <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                    <CardTitle className="mb-2">Email</CardTitle>
                    <CardDescription>Available for opportunities</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </a>
            
            <motion.a
              href="https://www.linkedin.com/in/dotabhinav/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all text-center cursor-pointer h-full">
                <CardContent className="pt-6">
                  <Linkedin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <CardTitle className="mb-2">LinkedIn</CardTitle>
                  <CardDescription>Connect with me</CardDescription>
                </CardContent>
              </Card>
            </motion.a>
            
            <motion.a
              href="https://github.com/singhdotabhinav"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all text-center cursor-pointer h-full">
                <CardContent className="pt-6">
                  <Github className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <CardTitle className="mb-2">GitHub</CardTitle>
                  <CardDescription>View my projects</CardDescription>
                </CardContent>
              </Card>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="container mx-auto text-center text-gray-400">
          <p>© 2024 Abhinav. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

