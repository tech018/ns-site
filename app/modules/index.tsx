import React, { forwardRef, memo, Ref } from "react";
import HeroSections from "@modules/hero";
import ProductList from "@modules/productList";
import { BoxProps } from "@interface/box";
import FeaturePost from "@modules/featured";
import Services from "@modules/services";
import Testimonials from "@modules/testimonials";
import Additives from "@modules/additive";

// import TextWithIcon from "./textWithIcon";

interface ModuleProps extends BoxProps {
  variant?: string; // Make variant optional
  innerRef?: Ref<HTMLDivElement>; // Rename ref to innerRef
}

interface VariantComponents<T = {}> {
  [key: string]: React.ComponentType<T>;
}

interface VariantComponentsWithProps extends VariantComponents<ModuleProps> {}

const ModuleComponents: VariantComponentsWithProps = {
  "hero-section": HeroSections,
  "product-list": ProductList,
  "product-services": Services,
  "featured-post": FeaturePost,
  testimonials: Testimonials,
  additives: Additives,
};

const Module = forwardRef(
  ({ variant, innerRef, ...props }: ModuleProps, ref: Ref<HTMLDivElement>) => {
    const Component = variant ? ModuleComponents[variant] : undefined;
    const _props = { ...props, ref: innerRef || ref };

    if (Component) return <Component {..._props} /> ?? <HeroSections />;
  }
);

Module.displayName = "Module";

export default memo(Module);
