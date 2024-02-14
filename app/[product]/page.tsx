"use client";
import ProductSwiper from "@components/carousel";
import Layout from "@layouts/index";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function ProductDetails() {
  return (
    <Layout>
      <Box {...{ bgcolor: "#FAFAFA" }}>
        <Box {...{ margin: "0px 20px", padding: "30px 0px" }}>
          <Breadcrumbs
            separator={
              <Image
                src="/icons/breadcumb.svg"
                width={9}
                height={9}
                alt="arrow"
              />
            }
          >
            <Link
              style={{
                fontWeight: 700,
                fontSize: 14,
                color: "#252B42",
                textDecoration: "none",
              }}
              color="inherit"
              href="/"
            >
              Home
            </Link>
            <Link
              style={{
                fontWeight: 700,
                fontSize: 14,
                color: "#BDBDBD",
                textDecoration: "none",
              }}
              href="#"
            >
              Shop
            </Link>
          </Breadcrumbs>
        </Box>
        <Box
          {...{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            margin: "20px 20px",
          }}
        >
          <Box {...{ width: 506 }}>
            <ProductSwiper />
          </Box>
          <Box {...{ width: "100%" }}>
            <Typography {...{ fontWeight: 400, fontSize: "20px" }}>
              Floating Phone
            </Typography>
            <Box
              {...{
                display: "flex",
                alignItems: "center",
                gap: 1,
                marginTop: 1,
              }}
            >
              {[1, 2, 3, 4].map((item) => (
                <Box
                  {...{
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  key={item}
                >
                  {item < 4 ? (
                    <Image
                      src="/icons/star-field.svg"
                      width={22}
                      height={22}
                      alt="start-field"
                    />
                  ) : (
                    <Image
                      src="/icons/star-outfiled.svg"
                      width={22}
                      height={22}
                      alt="start-field"
                    />
                  )}
                </Box>
              ))}
              <Typography
                {...{ fontSize: 14, fontWeight: 700, color: "#737373" }}
              >
                10 Reviews
              </Typography>
            </Box>
            <Typography
              {...{ fontWeight: 700, fontSize: "24px", color: "#252B42" }}
            >
              $ 1,139.33
            </Typography>
            <Typography
              {...{ fontWeight: 700, fontSize: "24px", color: "#252B42" }}
            >
              Availability
            </Typography>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
