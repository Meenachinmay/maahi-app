"use client"
import CallToActionWithAnnotation from "@/components/HeroSection"
import SimpleThreeColumns from "@/components/Features"
import SplitWithImage from "@/components/Testimonials"
import ContactUs from "@/components/ContactUs"

export default function Home() {
  return (
    <>
      <CallToActionWithAnnotation />
      <SimpleThreeColumns />
      <SplitWithImage />
      <ContactUs />
    </>
  )
}
