"use client";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const MainSection = styled(Box)`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  padding: 80px;
`;

const ItemNumber = styled(Typography)`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #2dc071;
`;

const CategoryTitle = styled(Typography)`
  color: #252b42;
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: 0.2px;
`;

const CategoryTitle2 = styled(Typography)`
  color: #252b42;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.1px;
`;

const Readmore = styled(Typography)`
  color: #252b42;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.2px;
`;

const BoxOne = styled(Box)`
  width: 551px;
  height: 664px;
  flex-shrink: 0px;
  background-image: url("images/card-cover-5.jpg");
  background-size: cover;
  padding: 24px;
`;
const BoxTwo = styled(Box)`
  width: 724px;
  height: 300px;
  flex-shrink: 1px;
  background-image: url("images/card-cover-6.jpg");
  background-size: cover;
  padding: 24px;
`;

const BoxThree = styled(Box)`
  width: 331px;
  height: 300px;
  flex-shrink: 0px;
  background-image: url("images/card-cover-4.jpg");
  background-size: cover;
  padding: 24px;
  margin-top: 15px;
`;

const BoxFour = styled(Box)`
  width: 331px;
  height: 300px;
  flex-shrink: 0px;
  background-image: url("images/card-cover-7.jpg");
  background-size: cover;
  padding: 24px;
  margin-top: 15px;
`;

export default function HeroSection() {
  return (
    <MainSection>
      <BoxOne>
        <ItemNumber variant="h6">5 items</ItemNumber>
        <CategoryTitle variant="h2">FURNITURE</CategoryTitle>
        <Readmore variant="h6">Readmore</Readmore>
      </BoxOne>
      <Box>
        <BoxTwo>
          <ItemNumber variant="h6">5 items</ItemNumber>
          <CategoryTitle2 variant="h2">FURNITURE</CategoryTitle2>
          <Readmore variant="h6">Readmore</Readmore>
        </BoxTwo>
        <Box {...{ display: "flex", gap: "15px", alignItems: "center" }}>
          <BoxThree>
            <ItemNumber variant="h6">5 items</ItemNumber>
            <CategoryTitle2 variant="h2">FURNITURE</CategoryTitle2>
            <Readmore variant="h6">Readmore</Readmore>
          </BoxThree>
          <BoxFour>
            <ItemNumber variant="h6">5 items</ItemNumber>
            <CategoryTitle2 variant="h2">FURNITURE</CategoryTitle2>
            <Readmore variant="h6">Readmore</Readmore>
          </BoxFour>
        </Box>
      </Box>
    </MainSection>
  );
}
