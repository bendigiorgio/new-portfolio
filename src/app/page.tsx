import Bio from "@/components/Bio";
import Design from "@/components/Design";
import Development from "@/components/Development";
import Landing from "@/components/Landing";
import Loader from "@/components/Loader";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="overflow-hidden w-screen max-w-[1400px] mx-0 2xl:mx-auto">
      {/* <Loader /> */}
      <Landing />
      <Design />
      <Development />
      <Projects />
      <Bio />
    </main>
  );
}
