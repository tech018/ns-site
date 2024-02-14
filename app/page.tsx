// import Image from "next/image";
// import styles from "./page.module.css";
import Module from "@modules/index";
import Layout from "./layouts";

export default function Home() {
  return (
    <main>
      <Layout>
        <Module variant="hero-section" />
        <Module variant="product-list" />
        <Module variant="product-services" />
        <Module variant="featured-post" />
        <Module variant="testimonials" />
        <Module variant="additives" />
      </Layout>
    </main>
  );
}
