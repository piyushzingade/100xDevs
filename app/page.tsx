import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Courses } from "@/components/courses";
import { Features } from "@/components/features";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <Hero />
      <Courses />
      <Features />
    </div>
  );
}
