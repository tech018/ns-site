"use client";
import Image from "next/image";
import { topFirstItem, topThirdItem } from "@constants/menu/topbar";
import { GlobalText } from "@constants/general/general";

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const TopSection = styled(Box)`
  display: flex;
  height: 58px;
  padding: 9px 0px 3px 0px;
  justify-content: space-between;
  align-items: center;
  background-color: #23856d;
  color: #fff;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.2px;
`;

const TopSectionOne = styled(Box)`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-left: 20px;
`;

const TopSectionSocial = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-right: 20px;
`;

export default function TopBar() {
  return (
    <TopSection>
      <Box>
        {topFirstItem.map((item) => (
          <TopSectionOne key={item.value}>
            <Image
              width={item.width}
              height={item.height}
              src={item.icon}
              alt="phone"
            />
            <Typography>{item.value}</Typography>
          </TopSectionOne>
        ))}
      </Box>
      <Typography>{GlobalText["topsection1"]}</Typography>
      <TopSectionSocial>
        <Typography>{GlobalText["topsection2"]}</Typography>
        {topThirdItem.map((image) => (
          <Image
            key={image.name}
            className="mx-2"
            src={image.icon}
            width={image.width}
            height={image.height}
            alt={image.name}
          />
        ))}
      </TopSectionSocial>
    </TopSection>
  );
}
