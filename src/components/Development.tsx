import Image from "next/image";
import developmentImage from "../../public/developmentImage.png";
import {
  Brain,
  Wrench,
  type LucideIcon,
  Server,
  RefreshCcw,
} from "lucide-react";

const devSteps: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Philosophy",
    description:
      "Navigating the junction of robustness and user-centricity, every project stands as a testament to precise engineering. With a sharp focus on performance, I cultivate applications that not only meet functional requirements but also offer intuitive user experiences.",
    icon: Brain,
  },
  {
    title: "Frontend",
    description:
      "With the robust duo of React and Next.js at the helm, I sculpt responsive and dynamic user interfaces. Enhanced by libraries like Zustand and Tailwindcss, every visual element is not only functional but also aesthetically refined.",
    icon: Wrench,
  },
  {
    title: "Backend",
    description:
      " A strong foundation ensures powerful, efficient, and scalable solutions, achieved using Node.js, PHP and Laravel as my main tools. In other cases Python, Go or Java are also used to best match each project.",
    icon: Server,
  },
  {
    title: "Flexible Development",
    description:
      "Recognizing that each project has unique demands, my development strategies are tailored. Whether it's for enterprises seeking high-throughput applications or startups aiming for MVPs, adaptability is pivotal. Using agile methodologies, continuous integration, and regular feedback loops, the development process is iterative and efficient.",
    icon: RefreshCcw,
  },
];

const Development = () => {
  return (
    <section
      id="development"
      className="lg:px-14 px-4 lg:mx-0 mx-auto py-24 max-w-full w-fit lg:w-full flex flex-row h-[940px] sm:h-[904px] lg:space-x-12"
    >
      <div className="h-full lg:block hidden relative w-[500px]">
        <Image
          src={developmentImage}
          alt=""
          className="rounded-md object-cover shadow-lg "
          fill
        />
      </div>
      <div className="h-full flex flex-col justify-between">
        <div className="space-y-2">
          <h4 className="font-krylon text-accent-green text-lg sm:text-xl ">
            Composing a Digital Symphony, Step by Step
          </h4>
          <h2 className="text-6xl md:text-8xl uppercase font-semibold">
            Development
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl">
            I specialize in building robust and scalable backend systems using
            Next.js and Typescript/Javascript. My expertise also extends to
            Python, PHP and Java for specific use cases and integrations.
          </p>
        </div>
        <div className=" max-w-xl space-y-8">
          {devSteps.map((step, index) => (
            <div key={index} className="flex flex-row space-x-4">
              <div>
                <step.icon className="h-7 w-7" />
              </div>
              <div className="flex flex-col space-y-2">
                <span>{step.title}</span>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Development;
