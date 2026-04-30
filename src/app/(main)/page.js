import AboutUs from "@/components/homepage/AboutUs";
import Banner from "@/components/homepage/Banner";
import Featured from "@/components/homepage/Featured";
import NewArrivals from "@/components/homepage/NewArrivals";
import Testimonials from "@/components/homepage/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <NewArrivals />
      <Featured />
      <Testimonials />
      <AboutUs />
    </div>
  );
}
