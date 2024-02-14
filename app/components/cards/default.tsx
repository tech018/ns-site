import { limitText } from "@helpers/index";
import { Product } from "@interface/products";
import {
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Card,
} from "@mui/material";
import styled from "styled-components";

interface Props {
  product: Product;
  thumbnail?: string | null;
}

const ProductTitle = styled(Typography)`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.1px;
`;

const ProductPrice = styled(Typography)`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.1px;
`;

const ProductCategory = styled(Typography)`
    color: #737373
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; 
    letter-spacing: 0.2px;
    text-transform: uppercase
`;

export default function DefaultCard(props: Props) {
  const { product } = props;
  return (
    <Card sx={{ maxHeight: 365, maxWidth: 183, boxShadow: "none" }}>
      <CardMedia
        sx={{ height: 238, width: 183 }}
        image={product?.thumbnail}
        title="green iguana"
      />
      <CardContent>
        <ProductTitle gutterBottom variant="h5">
          {limitText(product?.title, 10)}
        </ProductTitle>
        <ProductCategory variant="body2" color="text.secondary">
          {product?.category}
        </ProductCategory>
        <Box
          {...{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <ProductPrice variant="body2" color="#BDBDBD">
            $ {product?.price}
          </ProductPrice>
          <ProductPrice variant="body2" color="#23856D">
            ${" "}
            {((product?.discountPercentage / product?.price) * 100).toFixed(1)}
          </ProductPrice>
        </Box>
      </CardContent>
    </Card>
  );
}
