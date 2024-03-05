import Image from "next/image";
import { GoogleGeminiEffectDemo } from "../app/test";
import { SparklesPreview } from "../app/test2";
import { SpotlightPreview } from "../app/test3";
import { HeroScrollDemo } from "../app/test4";
import { LayoutGridDemo } from "../app/test5";
import { LampDemo } from "../app/test6";


export default function Home() {
  return (
    <main>
      <div className="md-12">
        <SparklesPreview />
      </div>


      <div className="md-12">
        <LayoutGridDemo />
      </div>


      <GoogleGeminiEffectDemo />
      
      <div className="md-20">
        <SpotlightPreview />
      </div>


      <div className="md-12">
        <HeroScrollDemo />
      </div>
      
      <div className="md-12">
        <LampDemo />
      </div>
      

    </main>
  );
}
