import React from 'react';
import Hero from '@/components/home/Hero';
import SelectedWork from '@/components/home/SelectedWork';
import AboutSection from '@/components/home/AboutSection';
import ToolkitSection from '@/components/home/ToolkitSection';
import ApproachSection from '@/components/home/ApproachSection';
import ContactSection from '@/components/home/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <hr className="section-divider" />
      <SelectedWork />
      <hr className="section-divider" />
      <AboutSection />
      <hr className="section-divider" />
      <ToolkitSection />
      <hr className="section-divider" />
      <ApproachSection />
      <hr className="section-divider" />
      <ContactSection />
    </>
  );
}
