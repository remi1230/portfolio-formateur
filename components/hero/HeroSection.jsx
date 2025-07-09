'use client';
import HeroTitle from './HeroTitle';
import HeroSubtitle from './HeroSubtitle';
import HeroCTA from './HeroCTA';

export default function HeroSection() {
  return (
    <section
      className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-4"
    >
      <HeroTitle />
      <HeroSubtitle />
      <HeroCTA />
    </section>
  );
}