import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Globe } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-background to-muted py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-black text-primary leading-tight">
                Earn UK Qualifications in Nepal
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join ISMT College and gain internationally recognized qualifications through our partnerships with
                University of Sunderland, UK and Pearson Edexcel, UK.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Download Brochure
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">13+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">2000+</div>
                <div className="text-sm text-muted-foreground">Graduates</div>
              </div>
              <div className="text-center">
                <Globe className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">UK</div>
                <div className="text-sm text-muted-foreground">Partnerships</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img src="/modern-college-campus-students-studying-together-d.png" alt="ISMT College Campus" className="rounded-lg shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">Established</div>
              <div className="text-3xl font-black">2011</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
