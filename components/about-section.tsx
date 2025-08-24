import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target, Heart, Lightbulb } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-primary mb-6">About ISMT College</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Established in 2011, ISMT is on a mission to contribute to Nepal's higher education by providing
            internationally recognized and industry-relevant qualifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img src="/modern-college-building-nepal-architecture-student.png" alt="ISMT College Building" className="rounded-lg shadow-lg" />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">Bridging Academia and Industry</h3>
            <p className="text-muted-foreground leading-relaxed">
              In academic partnership with the University of Sunderland, UK, and Pearson Edexcel, UK, ISMT is redefining
              higher education with a bold vision—bridging the gap between academia and industry.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              ISMT's commitment to academic excellence is reflected in its inclusive and cost-effective educational
              approach, delivering international standards while adopting core local values.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Internationally recognized UK qualifications</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Industry-relevant curriculum</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Cost-effective education</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Local values with global standards</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <Target className="h-12 w-12 text-accent mx-auto" />
              <h4 className="text-lg font-bold text-primary">Our Mission</h4>
              <p className="text-sm text-muted-foreground">
                Contributing to Nepal's higher education through internationally recognized qualifications
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <Lightbulb className="h-12 w-12 text-accent mx-auto" />
              <h4 className="text-lg font-bold text-primary">Innovation</h4>
              <p className="text-sm text-muted-foreground">
                Project-based learning with interactive discussions and diverse assessments
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <Heart className="h-12 w-12 text-accent mx-auto" />
              <h4 className="text-lg font-bold text-primary">Holistic Growth</h4>
              <p className="text-sm text-muted-foreground">
                Sports clubs, workshops, bootcamps, and special interest groups
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <CheckCircle className="h-12 w-12 text-accent mx-auto" />
              <h4 className="text-lg font-bold text-primary">Excellence</h4>
              <p className="text-sm text-muted-foreground">Preparing graduates for meaningful contributions globally</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
