import Background from "./icons/Background";
import MagicTool from "./icons/MagicTool";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { starsPositions } from "@/static/starsPositions";
import Logo from "./icons/Logo";

const Hero = () => {
  return (
    <section className="relative text-center min-h-[calc(100vh-81px)] py-12 lg:pt-52 overflow-hidden">
      <Background className="absolute -bottom-20 -z-50" />
      {starsPositions.map((star, index) => (
        <Logo
          key={index}
          className="absolute"
          style={{
            top: `${star.top}px`,
            left: `${star.left}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        />
      ))}
      <h2 className="text-xl font-mono">Promptverse AI</h2>
      <h1 className="text-4xl md:text-[64px] font-mono font-medium leading-tight md:leading-[74px] tracking-[-0.64px] mt-2 mb-6 max-w-[670px] mx-auto">
        Find Inspiration. Create, Generate, Produce & Automate.
      </h1>
      <p className="max-w-[735px] text-sm mx-auto leading-6 tracking-[-0.288px] px-4">
        Welcome to PromptVerse. Effortlessly create content, explore endless
        prompts, and stay ahead with real-time trends. Automate emails, social
        media, and more while our AI extracts knowledge from any document or
        URL. Experience a stunning, futuristic design that boosts productivity.
      </p>
      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 px-4">
        <SecondaryButton icon={MagicTool}>Start Generating</SecondaryButton>
        <PrimaryButton>Download</PrimaryButton>
      </div>
    </section>
  );
};

export default Hero;
