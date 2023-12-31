import { Box } from "@mui/material";
import Head from "next/head";
import Footer from "./src/layout/Footer";
import Topbar from "./src/layout/Topbar";
import SwipeableTemporaryDrawer from "./src/layout/Sidebar"; 
import Drawer from "@mui/material";
import PersistentDrawerLeft from "./src/layout/Side2"
import Side3 from "./Side3"
import { ProSidebarProvider } from 'react-pro-sidebar';
import Sidepro from "./SidePro";

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
        <ProSidebarProvider>
          <Sidepro />
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, pt: 10, display: "flex" }}
          >
            {children}
          </Box>

        </ProSidebarProvider>;

      </Box>
    </>
  );
};

export default Layout;
//