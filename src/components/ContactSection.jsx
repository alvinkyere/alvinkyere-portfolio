import { Linkedin, Mail, Phone, Send } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Let's Get <span className="text-primary"> In Touch </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Interested in working together, sharing ideas, or just saying hello? 
          I’m always open to new opportunities and conversations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-11">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6"> Contact Information </h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:alvinkyere2@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    alvinkyere2@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+19297224564"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (929) 722-4565
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/alvinkyere"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Alvin Kyere
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </section>
  )
}
