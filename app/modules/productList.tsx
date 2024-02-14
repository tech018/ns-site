"use client";
import Card from "@components/cards";
import { Product, ProductState } from "@interface/products";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { updateProducts, useGetProductsMutation } from "@store/products.slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MainSection = styled(Box)`
  text-align: center;
  padding: 80px 0px;
`;

export const ContentTitle = styled(Typography)`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.2px;
  color: #737373;
  text-align: center;
`;

export const Title = styled(Typography)`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.1px;
  color: #252b42;
  margin-top: 10px;
  text-align: center;
`;

export const Subtitle = styled(Typography)`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: #737373;
  margin-top: 10px;
  margin-bottom: 32px;
  text-align: center;
`;

const CardContainer = styled(Box)`
  display: flex;
  padding: 24px 200px 15px 200px;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 30px;
  row: 4;
`;

const LoadButton = styled(Button)`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.2px;
  color: #23a6f0;
  padding: 15px 40px;
  margin-top: 54px;
`;

export default function ProductList() {
  const [reqProducts, { data, error, isLoading, isSuccess }] =
    useGetProductsMutation();
  const products = useSelector(
    (state: {
      products: {
        list: Array<Product>;
        total: number;
      };
    }) => state.products
  );
  const { list, total } = products;

  const [loading, setLoading] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(10);
  const dispatch = useDispatch();
  useEffect(() => {
    reqProducts({ limit });
    setLoading(false);
  }, [reqProducts, limit]);

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    }
  }, [isLoading]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(updateProducts({ list: data.products, total: data.total }));
      setLoading(false);
    }
  }, [isSuccess, dispatch, data]);

  const loadMoreProducts = () => {
    if (limit < total) {
      return setLimit(limit + 10);
    }
    return;
  };

  return (
    <MainSection>
      <ContentTitle>Featured Products</ContentTitle>
      <Title>BESTSELLER PRODUCTS</Title>
      <Subtitle>Problems trying to resolve the conflict between </Subtitle>
      <CardContainer>
        {list.map((item: Product) => (
          <Card key={item.id} product={item} variant="default" />
        ))}
      </CardContainer>
      {limit < total && (
        <LoadButton onClick={loadMoreProducts} variant="outlined">
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <CircularProgress size={20} />
              Loading products
            </Box>
          ) : (
            "Load More Products"
          )}
        </LoadButton>
      )}
    </MainSection>
  );
}
