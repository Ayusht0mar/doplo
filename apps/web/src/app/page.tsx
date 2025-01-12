import HeroArea from "../components/home/hero-area";
import Navbar from "../components/navbar";

export default function Page(): JSX.Element {
  return (
    <div>
      <Navbar/>  
      <HeroArea/>
    </div>
  );
}
