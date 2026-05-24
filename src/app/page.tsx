"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextAbout from '@/components/sections/about/TextAbout';
import { CheckCircle, Shield, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSmall"
        background="fluid"
        cardStyle="soft-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="SV Enterprise"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "gradient-bars",
      }}
      title="Professional Housekeeping & Deep Cleaning"
      description="SV Enterprise brings excellence in hygiene and cleanliness. From deep scrubbing to daily maintenance, we ensure your home and office shine."
      imageSrc="http://img.b2bpic.net/free-photo/low-angle-female-cleaning_23-2148480385.jpg?_wi=1"
      imageAlt="Professional cleaning service team"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Quality Care for Your Space"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Kitchen Deep Cleaning",
          description: "Complete sanitization and grease removal for a healthier kitchen.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/service-person-cleaning-kitchen-appliances_259150-59446.jpg",
            imageAlt: "Kitchen cleaning",
          },
          items: [
            {
              icon: Sparkles,
              text: "Appliance cleaning",
            },
            {
              icon: CheckCircle,
              text: "Grease removal",
            },
            {
              icon: Shield,
              text: "Sanitization",
            },
          ],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-female-cleaning_23-2148480385.jpg?_wi=2",
          imageAlt: "deep cleaning kitchen hygiene",
        },
        {
          title: "Bathroom Sanitization",
          description: "Deep scrubbing and disinfection to ensure hygiene.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/kitchen-cleaning-with-steam-cleaner-care-cleanliness-biologically-clean-treatment-removing-dirt-care-health-cleanliness-kitchen-living-spaces_166373-8837.jpg",
            imageAlt: "Bathroom cleaning",
          },
          items: [
            {
              icon: Sparkles,
              text: "Tile scrubbing",
            },
            {
              icon: CheckCircle,
              text: "Fixture polishing",
            },
            {
              icon: Shield,
              text: "Disinfection",
            },
          ],
          reverse: true,
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-people-cleaning-office_23-2150454494.jpg",
          imageAlt: "deep cleaning kitchen hygiene",
        },
        {
          title: "Living Space Maintenance",
          description: "Dusting, vacuuming, and general care for your living areas.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/happy-smiling-man-cleaning-carpet_1163-2435.jpg",
            imageAlt: "Living room cleaning",
          },
          items: [
            {
              icon: Sparkles,
              text: "Deep vacuuming",
            },
            {
              icon: CheckCircle,
              text: "Surface dusting",
            },
            {
              icon: Shield,
              text: "Organizing",
            },
          ],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-inviting-man-house-with-tools_259150-58291.jpg?_wi=1",
          imageAlt: "deep cleaning kitchen hygiene",
        },
      ]}
      title="Our Specialized Services"
      description="We use premium products and professional techniques to keep your environment pristine."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "1500+",
          description: "Happy Clients",
        },
        {
          id: "m2",
          value: "5000+",
          description: "Rooms Cleaned",
        },
        {
          id: "m3",
          value: "100%",
          description: "Customer Satisfaction",
        },
      ]}
      title="Our Impact"
      description="Quality service tracked by results."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Rahul Verma",
          role: "Homeowner",
          company: "Resident",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-inviting-man-house-with-tools_259150-58291.jpg?_wi=2",
        },
        {
          id: "t2",
          name: "Anjali Sharma",
          role: "Business Owner",
          company: "Office",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-couple-using-cleaning-mop-as-microphone_482257-69.jpg",
        },
        {
          id: "t3",
          name: "Amit Gupta",
          role: "Homeowner",
          company: "Resident",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/couple-indoors-fooling-around_23-2148593251.jpg",
        },
        {
          id: "t4",
          name: "Priya Singh",
          role: "Homeowner",
          company: "Resident",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cleaning-kitchen-smiling-young-housewife-holding-difinfecting-spray-hands_259150-59481.jpg",
        },
        {
          id: "t5",
          name: "Vikram Seth",
          role: "Office Manager",
          company: "Corporate",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/people-having-casual-salsa-dance-themed-get-together_23-2151356594.jpg",
        },
      ]}
      title="Client Feedback"
      description="Don't just take our word for it."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Alpha Corp",
        "Beta Solutions",
        "Gamma Enterprises",
        "Delta Services",
        "Epsilon Group",
        "Zeta Cleaning",
        "Theta Partners",
      ]}
      title="Trusted Partners"
      description="We work with top-tier partners across sectors."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do you offer eco-friendly cleaning?",
          content: "Yes, we use environment-friendly products upon request.",
        },
        {
          id: "q2",
          title: "What areas do you serve?",
          content: "We cover all major locations in the city.",
        },
        {
          id: "q3",
          title: "Can I book a one-time clean?",
          content: "Absolutely, we provide one-time and subscription services.",
        },
      ]}
      title="Common Questions"
      description="Get quick answers about our services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Contact Us"
      title="Ready to sparkle?"
      description="Get in touch today for a free estimate on your space."
      buttons={[
        {
          text: "Contact Now",
          href: "mailto:hello@sventerprise.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="SV Enterprise"
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Deep Cleaning",
              href: "#",
            },
            {
              label: "Housekeeping",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Contact",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
