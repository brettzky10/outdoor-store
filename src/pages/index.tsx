import * as React from "react";
import { GetStaticProps } from "next";
import shuffle from "lodash.shuffle";

import { printful } from "../lib/printful-client";
import { formatVariantName } from "../lib/format-variant-name";
import { PrintfulProduct } from "../types";

import ProductGrid from "../components/ProductGrid";
import LandingFooter from "../components/landing/landing-footer";
import LandingHero from "../components/landing/landing-hero";
import LandingConvert from "../components/landing/landing-convert";
import LandingTestimonial from "../components/landing/landing-testimonial";

type IndexPageProps = {
  products: PrintfulProduct[];
};

const IndexPage: React.FC<IndexPageProps> = ({ products }) => (
  <>
    <LandingHero/>
    
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center pb-6 md:pb-12 md:pt-5">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold py-5 md:py-8 text-violet-600">
          Browse Products
        </h1>
      </div>

      <ProductGrid products={products} />
    </div>
    <LandingTestimonial/>
    <LandingConvert/>
    <LandingFooter/>
    
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const { result: productIds } = await printful.get("sync/products");

  const allProducts = await Promise.all(
    productIds.map(async ({ id }) => await printful.get(`sync/products/${id}`))
  );

  const products: PrintfulProduct[] = allProducts.map(
    ({ result: { sync_product, sync_variants } }) => ({
      ...sync_product,
      variants: sync_variants.map(({ name, ...variant }) => ({
        name: formatVariantName(name),
        ...variant,
      })),
    })
  );

  return {
    props: {
      products: shuffle(products),
    },
  };
};

export default IndexPage;
