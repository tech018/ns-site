"use client";
import { services } from "@constants/general/general";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import { ContentTitle, Subtitle, Title } from "./productList";

export default function Services() {
  return (
    <Box>
      <ContentTitle>Featured Products</ContentTitle>
      <Title>THE BEST SERVICES</Title>
      <Subtitle>Problems trying to resolve the conflict between </Subtitle>
      <Box
        {...{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 15,
          marginTop: 10,
        }}
      >
        {services.map((item) => (
          <Box
            key={item.title}
            {...{ maxWidth: 328, maxHeight: 254, textAlign: "center" }}
          >
            <Image src={item.icon} width={72} height={72} alt={item.title} />
            <Typography className="icon-title ">{item.title}</Typography>
            <Typography className="icon-desc">{item.desc}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
