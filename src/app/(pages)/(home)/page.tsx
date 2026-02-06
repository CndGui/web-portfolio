import { HomeDescription } from "@/components/pages/home/description";
import { HomeExperiences } from "@/components/pages/home/experiences";
import { HomeTechStack } from "@/components/pages/home/tech-stack";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <HomeDescription />
      <HomeExperiences />
      <HomeTechStack />
    </div>
  );
}
