import React, { forwardRef, Ref } from "react";
import { Product } from "@interface/products";
import { BoxProps } from "@interface/box";
import DefaultCard from "@components/cards/default";

// import TextWithIcon from "./textWithIcon";

interface CardProps extends BoxProps {
  variant?: string; // Make variant optional
  innerRef?: Ref<HTMLDivElement>; // Rename ref to innerRef
  product: Product;
}

interface VariantComponents<T = {}> {
  [key: string]: React.ComponentType<T>;
}

interface VariantComponentsWithProps extends VariantComponents<CardProps> {}

const CardComponents: VariantComponentsWithProps = {
  default: DefaultCard,

  //   "product-list": ProductList,
};

const Card = forwardRef(
  ({ variant, innerRef, ...props }: CardProps, ref: Ref<HTMLDivElement>) => {
    const Component = variant ? CardComponents[variant] : undefined;
    const _props = { ...props, ref: innerRef || ref };

    if (Component)
      return <Component {..._props} /> ?? <DefaultCard {..._props} />;
  }
);

Card.displayName = "Card";

export default Card;
