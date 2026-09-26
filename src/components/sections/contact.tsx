import { Mail, MapPin, Phone, ArrowUpRight, GithubIcon, LinkedinIcon, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { personalInfo } from "@/data/social";
import { socialLinks } from "@/data/social";
import { LinkButton } from "@/components/ui/button";
import { iconMap } from "../ui/icon-map";

const contactDetails = [
  { icon: Mail, label: "Email", value: personalInfo.email },
  { icon: Phone, label: "Phone", value: personalInfo.phone },
  { icon: MapPin, label: "Location", value: personalInfo.location },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto flex max-w-content flex-col gap-10">

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 gap-10 rounded-card border border-primary/15 bg-surface p-6 shadow-elevated md:grid-cols-2 md:p-10">
            <Reveal>
              <div className="flex flex-col gap-6">
                <SectionHeading
                  label="Contact"
                  title="Have a project in mind?"
                />
                <p className="text-lg leading-relaxed text-paper/70">
                  I'm open to discussing engineering, testing, IoT, or software work. Send a message and I'll get back to you.
                </p>
                <ul className="flex flex-col gap-4">
                  {contactDetails.map((detail) => (
                    <li key={detail.label} className="flex items-center gap-3 text-sm text-paper/70">
                      <detail.icon size={16} strokeWidth={1.5} aria-hidden="true" />
                      <span>{detail.value}</span>
                    </li>
                  ))}
                </ul>
                <LinkButton
                  href={`mailto:${personalInfo.email}`}
                  variant="primary"
                  className="mt-4 w-fit"
                >
                  Send Email
                  <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
                </LinkButton>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex flex-col gap-6">
                <SectionHeading
                  label="Social"
                  title="Connect with me"
                  align="split"
                />
                <p className="text-lg leading-relaxed text-paper/70">
                  You can also reach me through social media platforms. Feel free to connect!
                </p>
                <ul className="flex items-center gap-6">
                  {socialLinks.map((link) => {
                    const Icon = iconMap[link.icon];
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-paper/70 transition-colors duration-200 ease-editorial hover:text-primary"
                        >
                          <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                          <span>{link.label}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mx-auto flex max-w-content flex-col gap-10">  
          </div>
        </Reveal>
      </div>
    </section>
  );
}
