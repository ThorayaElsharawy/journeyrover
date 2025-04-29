import Hero from "@/components/hero";
import Nav from "@/components/nav";


export default function Home() {
  return (
    <div>
      <div className="h-full relative">
        <div className="bg-[url(@/assets/World_blank_map_countries.png)] bg-no-repeat bg-cover absolute inset-0 opacity-20 -z-20" />
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 py-2 my-auto ">
          <Nav />
          <Hero />
        </div>
      </div>
      <div className="">
        <div className="mx-auto max-w-screen-2xl px-6 py-12 md:px-12 md:py-16 lg:py-2 my-auto text-3xl">
        </div>
      </div>
    </div>
  );
}
