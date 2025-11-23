import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Courses } from "@/components/courses";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonial";
import { Footer } from "@/components/footer";
import { Cta } from "@/components/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white overflow-x-hidden font-sans">
      <Navbar />

      <main>
        <Hero />
        <Courses />
        <Features />
        <Testimonials />
        <Cta />
      </main>

      <Footer />
    </div>
  );
};
