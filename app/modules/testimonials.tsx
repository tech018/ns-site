import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import Image from "next/image";

export default function Testimonials() {
  return (
    <Box
      {...{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#252B42",
        marginTop: 25,
        gap: 20,
      }}
    >
      <Box {...{ textAlign: "center" }}>
        <Typography {...{ fontWeight: 700, fontSize: 24 }}>
          What they say about us
        </Typography>
        <Image
          style={{ borderRadius: "50%", marginTop: 40 }}
          src="/images/profile.png"
          width={90}
          height={90}
          alt="profile"
        />
        <br />
        {[1, 2, 3, 4].map((item) => (
          <Box
            {...{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 2,
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
          {...{
            fontWeight: 700,
            fontSize: 14,
            color: "#737373",
            width: 451,
            marginTop: 3,
          }}
        >
          Slate helps you see how many more days you need to work to reach your
          financial goal.
        </Typography>
        <Typography
          {...{ color: "#23A6F0", fontWeight: 700, fontSize: 14, marginTop: 3 }}
        >
          Regina Miles
        </Typography>
        <Typography
          {...{ color: "#252B42", fontWeight: 700, fontSize: 14, marginTop: 1 }}
        >
          Designer
        </Typography>
      </Box>
      <ImageList sx={{ width: 464, height: 460 }} gap={15} cols={3}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <Image
              src={item.img}
              width={142}
              height={142}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: "/images/image1.jpeg",
    title: "Breakfast",
  },
  {
    img: "/images/image2.jpeg",
    title: "Burger",
  },
  {
    img: "/images/image3.jpeg",
    title: "Camera",
  },
  {
    img: "/images/image4.jpeg",
    title: "Coffee",
  },
  {
    img: "/images/image5.jpeg",
    title: "Hats",
  },
  {
    img: "/images/image6.jpeg",
    title: "Honey",
  },
  {
    img: "/images/image7.jpeg",
    title: "Basketball",
  },
  {
    img: "/images/image8.jpeg",
    title: "Fern",
  },
  {
    img: "/images/image9.jpeg",
    title: "Mushrooms",
  },
];
