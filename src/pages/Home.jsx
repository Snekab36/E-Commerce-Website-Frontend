import Banner from "../components/Banner";
import FeaturedProducts from "../components/FeaturedProducts";

export default function Home() {
  return (
    <div>
      {/* Banner Slider */}
      <Banner />

      {/* Featured Products */}
      <FeaturedProducts />
    </div>
  );
}
