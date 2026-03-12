import Image from "next/image";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
  <main className="p-10">
      <h1 className="text-3xl font-bold">Car Doctor Project</h1>
      {/* DaisyUI Button */}
      <button className="btn btn-primary">Click Me</button>
      <ServicesSection></ServicesSection>
    </main>
  );
}
