import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Computer, Briefcase, Plane, Shield, GraduationCap } from "lucide-react"

const courses = [
  {
    title: "BSc (Hons) Computer Systems Engineering (IT)",
    icon: Computer,
    image: "/modern-server-room-data-center-professional.png",
    duration: "4 Years",
    level: "Undergraduate",
    description:
      "Comprehensive program covering software development, systems analysis, and IT infrastructure management.",
    highlights: ["Software Development", "Network Systems", "Database Management", "Cybersecurity Fundamentals"],
  },
  {
    title: "BA (Hons) Business and Management (BBA)",
    icon: Briefcase,
    image: "/professional-business-boardroom-meeting-corporate.png",
    duration: "4 Years",
    level: "Undergraduate",
    description: "Strategic business education focusing on leadership, management principles, and entrepreneurship.",
    highlights: ["Strategic Management", "Marketing", "Finance", "Leadership Skills"],
  },
  {
    title: "BSc (Hons) International Tourism and Hospitality Management (BHM)",
    icon: Plane,
    image: "/luxury-hotel-lobby-tourism-destinations-travel.png",
    duration: "4 Years",
    level: "Undergraduate",
    description: "Global perspective on tourism industry with practical hospitality management skills.",
    highlights: ["Tourism Planning", "Hotel Management", "Event Management", "Cultural Studies"],
  },
  {
    title: "BSc (Hons) Computer Science",
    icon: GraduationCap,
    image: "/programming-code-algorithms-software-development.png",
    duration: "4 Years",
    level: "Undergraduate",
    status: "Subject to Approval",
    description:
      "Cutting-edge computer science program with focus on algorithms, programming, and software engineering.",
    highlights: ["Algorithm Design", "Software Engineering", "AI & Machine Learning", "Data Structures"],
  },
  {
    title: "BSc (Hons) Cyber Security and Digital Forensics",
    icon: Shield,
    image: "/cybersecurity-operations-center-professional-monitoring.png",
    duration: "4 Years",
    level: "Undergraduate",
    status: "New Program",
    description: "Specialized program addressing modern cybersecurity challenges and digital investigation techniques.",
    highlights: ["Ethical Hacking", "Digital Forensics", "Network Security", "Incident Response"],
  },
]

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-primary mb-6">Our Courses</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from our range of internationally recognized UK qualifications designed to prepare you for global
            career opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const IconComponent = course.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={`${course.title} program`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <IconComponent className="h-12 w-12 text-accent" />
                    <div className="flex flex-col gap-2">
                      <Badge variant="secondary">{course.level}</Badge>
                      {course.status && (
                        <Badge variant="outline" className="text-accent border-accent">
                          {course.status}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight group-hover:text-accent transition-colors">
                    {course.title}
                  </CardTitle>
                  <div className="text-sm text-muted-foreground">Duration: {course.duration}</div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{course.description}</p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {course.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="h-1.5 w-1.5 bg-accent rounded-full" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-transparent" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            View All Admission Requirements
          </Button>
        </div>
      </div>
    </section>
  )
}
