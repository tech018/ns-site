import { Box } from "@mui/material";

import TopBar from "@layouts/topbar";

import NavigationBar from "@layouts/navigation";
import { ReactNode } from "react";
import Footer from "@layouts/footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box>
      <TopBar />
      <NavigationBar />
      {children}
      <Footer />
    </Box>
  );
}
