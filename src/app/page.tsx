import ActiveCites from "@/components/active-cites";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import MostActiveDest from "@/components/most-active-dest";
import Nav from "@/components/nav";
import TopPlaces from "@/components/top-places";
import TopVacationDestination from "@/components/top-vacation-destination";


export default function Home() {
  return (
    <div>
      <div className="h-full relative">
        <div className="bg-transparent bg-[url(../assets/World_blank_map_countries.png)] bg-no-repeat bg-cover absolute opacity-15 inset-0 " />
        <div className="mx-auto max-w-screen-xl px-6 md:px-12 py-2 my-auto ">
          <Nav />
          <Hero />
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-2 my-auto">
        <TopPlaces />
      </div>
      <MostActiveDest />
      <ActiveCites />
      <TopVacationDestination />
      <Footer />
    </div>
  );
}
