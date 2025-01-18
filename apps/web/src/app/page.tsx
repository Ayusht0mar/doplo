import HeroArea from "../components/home/hero-area";

export default function Page(): JSX.Element {
  return (
    <div>
      <HeroArea/>
      <p className="text-center w-full my-6">
                    Build by <a href="https://www.ayushtomar.in/">Ayush Tomar</a>
      </p>
    </div>
  );
}
