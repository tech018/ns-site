"use client";

import Image from "next/image";
import { navigationMenu } from "@constants/menu/navbar";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const NavSection = styled(Box)`
  display: flex;
  width: 1382px;
  height: 58px;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 20px 0px;
`;

const LogoText = styled(Typography)`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.1px;
  padding: 13px 0px;
  width: 108px;
  heigth: 32px;
  color: #252b42;
`;

const MenuItem = styled(Box)`
  display: flex;
  gap: 100px;
  justify-content: start;
  align-items: center;
  color: #737373;
`;

const TextAuth = styled(Typography)`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.2px;
  color: #23a6f0;
`;

const NavigationBar = () => {
  return (
    <NavSection>
      <MenuItem>
        <LogoText>Bandage</LogoText>
        <Box
          {...{
            display: "flex",
            alignItems: "center",
            gap: 3,
            color: "#737373",
          }}
        >
          {navigationMenu.map((menu) => {
            if (menu?.icon)
              return (
                <Box
                  key={menu.name}
                  {...{
                    alignItems: "center",
                    display: "flex",
                    gap: 1,
                    color: "#252B42",
                  }}
                >
                  <Typography>{menu.name}</Typography>
                  <Image
                    src="/icons/arrow-down.svg"
                    alt="arrow-down"
                    width={10}
                    height={10}
                  />
                </Box>
              );

            return <Typography key={menu.name}>{menu.name}</Typography>;
          })}
        </Box>
      </MenuItem>
      <Box {...{ display: "flex", alignItems: "center", gap: 3 }}>
        <Box {...{ display: "flex", alignItems: "center", gap: 1 }}>
          <Image src="icons/user.svg" height={12} width={12} alt="user" />
          <TextAuth>Login/Register</TextAuth>
        </Box>
        <Image src="icons/search.svg" height={16} width={16} alt="user" />
        <Box {...{ display: "flex", alignItems: "center", gap: 1 }}>
          <Image src="icons/cart.svg" height={16} width={16} alt="user" />
          <TextAuth className="cart-wish">1</TextAuth>
        </Box>
        <Box {...{ display: "flex", alignItems: "center", gap: 1 }}>
          <Image src="icons/wishlist.svg" height={16} width={16} alt="user" />
          <TextAuth className="cart-wish">1</TextAuth>
        </Box>
      </Box>
    </NavSection>
  );
};

export default NavigationBar;
