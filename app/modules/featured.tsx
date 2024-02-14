"use client";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import {
  featureactions,
  featuredpost,
  textfeature,
} from "@constants/general/general";
import Image from "next/image";

const FeaturePost = () => {
  return (
    <Box {...{ marginTop: 20 }}>
      {" "}
      <Typography className="featured-subtitle" color="#23A6F0">
        Practice Advice
      </Typography>
      <Typography className="featured-title">Featured Posts</Typography>
      <Box
        {...{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          marginTop: 5,
        }}
      >
        {featuredpost.map((post) => (
          <Card key={post.id} sx={{ maxWidth: 345 }}>
            <Box>
              <Typography
                {...{
                  bgcolor: "#E74040",
                  width: 38,
                  height: 24,
                  textAlign: "center",
                  padding: "0px 10px",
                  color: "#FFFFFF",
                  position: "absolute",
                  borderRadius: "5px",
                  margin: "20px 20px",
                }}
              >
                New
              </Typography>
              <Image src={post.image} width={348} height={300} alt="image" />
            </Box>
            <CardContent>
              <Box
                {...{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {textfeature.map((text) => (
                  <Typography
                    {...{ color: text.color, fontWeight: 400, fontSize: 12 }}
                    key={text.value}
                  >
                    {text.value}
                  </Typography>
                ))}
              </Box>
              <Typography
                variant="h4"
                fontSize={20}
                fontWeight={400}
                padding="10px 0px"
              >
                {post.title}
              </Typography>
              <Typography width={280} className="featured-paragraph ">
                {post.desc}
              </Typography>

              <Box
                {...{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {featureactions.map((feature) => (
                  <Box
                    {...{
                      display: "inline-flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      marginTop: 3,
                    }}
                    key={feature.value}
                  >
                    <Image
                      src={feature.icon}
                      width={16}
                      height={16}
                      alt={feature.value}
                    />
                    <Typography {...{ fontWeight: 400, fontSize: 12 }}>
                      {feature.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box
                {...{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  marginTop: 2,
                  justifyContent: "start",
                }}
              >
                <Typography
                  {...{ fontWeight: 700, fontSize: 14, color: "#737373" }}
                >
                  Learn More
                </Typography>
                <Image
                  src="/icons/arrow-right.svg"
                  width={9}
                  height={16}
                  alt="arrow"
                />
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
export default FeaturePost;
