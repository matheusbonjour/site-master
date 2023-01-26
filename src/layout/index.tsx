import { Box } from "@mui/material";
import Head from "next/head";
import Footer from "./Footer";
import Topbar from "./Topbar";
import SwipeableTemporaryDrawer from "./Sidebar"; 

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="favicon" href="/favicon.ico" />
        <title>
          MASTER - Meteorologia Aplicada a Sistemas de Tempo Regionais
        </title>
      </Head>
      <Box>
        <SwipeableTemporaryDrawer />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, pt: 10, display: "flex" }}
        >
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
