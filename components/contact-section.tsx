"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-primary mb-6">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your journey with ISMT College? Contact us today for more information about our programs and
            admissions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">Address</h4>
                    <p className="text-muted-foreground">Tinkune, Gairigaun, Kathmandu, Nepal</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">Phone</h4>
                    <p className="text-muted-foreground">+977-1-4112122</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">Email</h4>
                    <p className="text-muted-foreground">info@ismt.edu.np</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">Office Hours</h4>
                    <p className="text-muted-foreground">Monday to Friday: 7 AM to 5 PM</p>
                    <p className="text-muted-foreground">Sunday: 9 AM to 5 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h4 className="font-bold text-primary mb-4">Our Location</h4>
              <div className="w-full h-64 rounded-lg overflow-hidden border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8234567890123!2d85.3240!3d27.6915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b0e0e0e0e0%3A0x0!2sTinkune%2C%20Kathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1234567890123!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ISMT College Location"
                ></iframe>
              </div>
              <div className="mt-4 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("https://maps.google.com/?q=Tinkune,Gairigaun,Kathmandu,Nepal", "_blank")}
                >
                  Open in Google Maps
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("https://maps.apple.com/?q=Tinkune,Gairigaun,Kathmandu,Nepal", "_blank")}
                >
                  Open in Apple Maps
                </Button>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h4 className="font-bold text-primary mb-4">Academic Partnerships</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src="/university-of-sunderland-uk-logo.png"
                    alt="University of Sunderland"
                    className="h-10 w-10 rounded"
                  />
                  <span className="text-sm">University of Sunderland, UK</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/pearson-edexcel-uk-logo.png" alt="Pearson Edexcel" className="h-10 w-10 rounded" />
                  <span className="text-sm">Pearson Edexcel, UK</span>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="Enter your email address" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Phone</label>
                <Input type="tel" placeholder="Enter your phone number" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Course of Interest</label>
                <Input placeholder="Which course are you interested in?" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="Tell us more about your inquiry..." className="min-h-[120px]" />
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90">Send Message</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
