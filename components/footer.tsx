import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/ismt-college-logo-white.png" alt="ISMT College Logo" className="h-10 w-10" />
              <div>
                <h3 className="text-lg font-bold">ISMT College</h3>
                <p className="text-sm opacity-80">International School of Management and Technology</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Established in 2011, ISMT is committed to providing internationally recognized and industry-relevant
              qualifications in Nepal.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer" />
              <Twitter className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer" />
              <Instagram className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer" />
              <Linkedin className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer" />
              <Youtube className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </a>
              </li>
              <li>
                <a href="#courses" className="opacity-80 hover:opacity-100 transition-opacity">
                  Our Courses
                </a>
              </li>
              <li>
                <a href="#admissions" className="opacity-80 hover:opacity-100 transition-opacity">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Faculty
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Student Life
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Computer Systems Engineering
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Business and Management
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Tourism & Hospitality
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Computer Science
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Cyber Security
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-2 text-sm">
              <p className="opacity-80">Tinkune, Gairigaun</p>
              <p className="opacity-80">Kathmandu, Nepal</p>
              <p className="opacity-80">Phone: +977-1-4112122</p>
              <p className="opacity-80">Email: info@ismt.edu.np</p>
            </div>
            <div className="text-sm opacity-80">
              <p>Mon-Fri: 7 AM to 5 PM</p>
              <p>Sunday: 9 AM to 5 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">© 2024 ISMT College. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                Privacy Policy
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                Terms of Service
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                Cookie Policy
              </a>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-primary-foreground/10">
            <p className="text-xs opacity-60">Developed by Rajesh Bomjan Tamang</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
