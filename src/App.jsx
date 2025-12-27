import "./app.css";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* HEADER */}
      <header className="topbar">
        <h1>BASHO</h1>
        <span className="menu">MENU</span>
      </header>
      <section className="featured-header">
  <h2 className="featured-title">Featured Collection</h2>
</section>


      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h2>
            Where tradition <em>meets</em> modern simplicity
          </h2>
        </div>

        <p className="hero-desc">
          Our artisans honor centuries-old techniques while creating pieces
          that belong in contemporary homes.
        </p>
      </section>

      {/* FILTERS */}
      <div className="filters">
        {["All", "Vases", "Bowls", "Mugs", "Planters", "Plates"].map((f) => (
          <button key={f} className={f === "All" ? "active" : ""}>
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      {/* PRODUCTS */}
      <section className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
      <Footer />
    </>
  );
}
