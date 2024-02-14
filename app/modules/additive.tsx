import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

export default function Additives() {
  return (
    <Box className="additives">
      <Box {...{ width: 571, margin: "auto" }}>
        <Typography {...{ fontSize: 12, fontWeight: 700, color: "#23A6F0" }}>
          Designing Better Experience
        </Typography>
        <Typography
          {...{
            fontWeight: 700,
            fontSize: 40,
            color: "#252B42",
            marginTop: 2,
          }}
        >
          Problems trying to resolve the conflict between{" "}
        </Typography>
        <Typography
          {...{
            color: "#737373",
            fontWeight: 400,
            fontSize: 14,
            width: 447,
            margin: "auto",
            paddingTop: 2,
          }}
        >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:{" "}
        </Typography>
        <Typography
          {...{
            fontSize: 24,
            fontWeight: 700,
            color: "#23856D",
            marginTop: 5,
          }}
        >
          $16.48
        </Typography>
        <Box {...{ marginTop: 4 }}>
          <Button size="large" variant="contained">
            ADD YOUR CALL TO ACTION
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
