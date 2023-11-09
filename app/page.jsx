import About from "@/components/About";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Overview from "@/components/Overview";
import Teams from "@/components/Teams";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Overview />
      <Features />
      <Teams />
      <Testimonials />
    </main>
  );
}
