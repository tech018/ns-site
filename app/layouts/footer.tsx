import { Box, Button, Input, Typography } from "@mui/material";
import Image from "next/image";

export default function Footer() {
  const footerIcons = [
    {
      id: 1,
      image: "/icons/facebook-blue.svg",
    },
    {
      id: 2,
      image: "/icons/instagram-blue.svg",
    },
    {
      id: 2,
      image: "/icons/twitter-blue.svg",
    },
  ];

  return (
    <>
      <Box
        {...{
          backgroundColor: "#FAFAFA",

          margin: "auto",
          padding: "40px 20px",
        }}
      >
        <Box
          {...{
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography {...{ fontSize: 24, fontWeight: 700, color: "#252B42" }}>
            Bandage
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={3}
          >
            {footerIcons.map((item) => (
              <Image
                key={item.id}
                src={item.image}
                width={24}
                height={24}
                alt={item.image}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Box>
        <Box
          {...{
            display: "flex",
            flexWrap: "wrap",

            bgcolor: "#FFFFFF",
            margin: "30px 0px",
            gap: 20,
          }}
        >
          <Box {...{ padding: "0px 20px" }}>
            <Typography
              {...{
                fontSize: 16,
                fontWeight: 700,
                color: "#252B42",
                marginTop: 10,
              }}
            >
              Company Info
            </Typography>
            <Typography
              {...{
                fontSize: 14,
                fontWeight: 700,
                color: "#252B42",
                marginTop: 3,
              }}
            >
              About us
            </Typography>
            <Typography
              {...{
                fontSize: 14,
                fontWeight: 700,
                color: "#252B42",
                marginTop: 2,
              }}
            >
              Carrier
            </Typography>
            <Typography
              {...{
                fontSize: 14,
                fontWeight: 700,
                color: "#252B42",
                marginTop: 2,
              }}
            >
              We are hiring
            </Typography>
            <Typography
              {...{
                fontSize: 14,
                fontWeight: 700,
                color: "#252B42",
                marginTop: 2,
              }}
            >
              Blog
            </Typography>
          </Box>
          <Box>
            <Typography
              {...{
                fontSize: 16,
                fontWeight: 700,
                color: "#252B42",
                marginTop: 10,
              }}
            >
              Legal
            </Typography>
            <Typography
              {...{
                fontSize: 14,
                fontWeight: 700,
                color: "#252B42",
                marginTop: 3,
              }}
            >
              About us
            </Typography>
            <Typography
              {...{
                fontSize: 14,
                fontWeight: 700,
                color: "#252B42",
                marginTop: 2,
              }}
            >
              Carrier
            </Typography>
            <Typography
              {...{
                fontSize: 14,
                fontWeight: 700,
                color: "#252B42",
                marginTop: 2,
              }}
            >
              We are hiring
            </Typography>
            <Typography
              {...{
                fontSize: 14,
                fontWeight: 700,
                color: "#252B42",
                marginTop: 2,
              }}
            >
              Blog
            </Typography>
          </Box>
          <Box>
            <Typography
              {...{
                fontSize: 16,
                fontWeight: 700,
                color: "#252B42",
                marginTop: 10,
              }}
            >
              Features
            </Typography>
            <Typography
              {...{
                fontSize: 14,
                fontWeight: 700,
                color: "#252B42",
                marginTop: 3,
              }}
            >
              Business Marketing
            </Typography>
            <Typography
              {...{
                fontSize: 14,
                fontWeight: 700,
                color: "#252B42",
                marginTop: 2,
              }}
            >
              User Analytic
            </Typography>
            <Typography
              {...{
                fontSize: 14,
                fontWeight: 700,
                color: "#252B42",
                marginTop: 2,
              }}
            >
              Live Chat
            </Typography>
            <Typography
              {...{
                fontSize: 14,
                fontWeight: 700,
                color: "#252B42",
                marginTop: 2,
              }}
            >
              Unlimited Support
            </Typography>
          </Box>
          <Box>
            <Typography
              {...{
                fontSize: 16,
                fontWeight: 700,
                color: "#252B42",
                marginTop: 10,
              }}
            >
              Resources
            </Typography>
            <Typography
              {...{
                fontSize: 14,
                fontWeight: 700,
                color: "#252B42",
                marginTop: 3,
              }}
            >
              IOS & Android
            </Typography>
            <Typography
              {...{
                fontSize: 14,
                fontWeight: 700,
                color: "#252B42",
                marginTop: 2,
              }}
            >
              Watch a Demo
            </Typography>
            <Typography
              {...{
                fontSize: 14,
                fontWeight: 700,
                color: "#252B42",
                marginTop: 2,
              }}
            >
              Customers
            </Typography>
            <Typography
              {...{
                fontSize: 14,
                fontWeight: 700,
                color: "#252B42",
                marginTop: 2,
              }}
            >
              API
            </Typography>
          </Box>
          <Box>
            <Typography
              {...{
                fontSize: 16,
                fontWeight: 700,
                color: "#252B42",
                marginTop: 10,
              }}
            >
              Get in Touch
            </Typography>
            <Box
              {...{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                type="text"
                style={{
                  width: 200,
                  backgroundColor: "#E6E6E6",
                  border: "0px solid #23A6F0",
                  height: 38,
                  marginTop: 20,
                  padding: "0px 20px",
                  fontWeight: 400,
                  fontSize: 14,
                }}
                placeholder="Your Email"
              />
              <button
                style={{
                  height: 37,
                  marginTop: 20,
                  backgroundColor: "#23A6F0",
                  border: "none",
                  color: "#FFFFFF",
                }}
              >
                Subscribe
              </button>
            </Box>
            <Typography
              {...{
                fontSize: 12,
                fontWeight: 400,
                color: "#737373",
                marginTop: 1.4,
              }}
            >
              Lore imp sum dolor Amit
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          {...{
            fontWeight: 700,
            fontSize: 14,
            color: "#737373",
            marginTop: 10,
            backgroundColor: "#FAFAFA",
            padding: "20px 20px",
          }}
        >
          {" "}
          Made With Love By Finland All Right Reserved{" "}
        </Typography>
      </Box>
    </>
  );
}
