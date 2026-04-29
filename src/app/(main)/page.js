import Banner from "@/components/homepage/Banner";
import Featured from "@/components/homepage/Featured";
import NewArrivals from "@/components/homepage/NewArrivals";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <NewArrivals />
      <Featured />
    </div>
  );
}
