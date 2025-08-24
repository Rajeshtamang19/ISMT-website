import { Button } from "@/components/ui/button"
import { Menu, Phone, Mail } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+977-1-4112122</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@ismt.edu.np</span>
            </div>
          </div>
          <div className="text-sm">Mon-Fri: 7AM-5PM | Sun: 9AM-5PM</div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img src="/ismt-college-logo-academic-shield.png" alt="ISMT College Logo" className="h-12 w-12" />
            <div>
              <h1 className="text-xl font-bold text-primary">ISMT College</h1>
              <p className="text-sm text-muted-foreground">International School of Management and Technology</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-accent transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="#courses" className="text-foreground hover:text-accent transition-colors">
              Courses
            </a>
            <a href="#admissions" className="text-foreground hover:text-accent transition-colors">
              Admissions
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:inline-flex bg-transparent">
              Apply Now
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
