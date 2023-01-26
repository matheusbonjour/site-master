import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomePage from "../../features/HomePage";
import Footer from "../Footer";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Typography from "@mui/material/Typography";
import {
    ClickAwayListener,
    Grow,
    MenuList,
    Paper,
    Popper,
  } from "@mui/material";
import { useState } from "react";
import * as React from 'react';

const pages = [
    {
      label: "Produtos numéricos",
      key: "produtos-numericos",
      submenus: [
        {
          label: "Modelos Globais",
          key: "modelos-globais",
          link: "/num/modelos/global",
        },
        {
          label: "Modelos Regionais",
          key: "modelos-regionais",
          link: "/num/modelos/regional",
        },
        {
          label: "Exposição ao Sol",
          key: "exposicao-ao-sol",
          link: "num/externas/1",
        },
        { label: "Queimadas", key: "queimadas", link: "num/externas/2" },
        {
          label: "Comparação entre modelos",
          key: "comparacao-entre-modelos",
          link: "num/externas/3",
        },
      ],
    },
    {
      label: "Dados observados",
      key: "dados-observados",
      submenus: [
        {
          label: "Imagens de satélite",
          key: "imagens-de-satelite",
          link: "observados/mapa/satelite/",
        },
        {
          label: "Radiossondagem",
          key: "radiossondagem",
          link: "observados/mapa/sondagem/",
        },
        {
          label: "INMET - Estações automáticas",
          key: "inmet",
          link: "observados/mapa/inmet/",
        },
        {
          label: "METAR - Aeroportos",
          key: "metar",
          link: "observados/mapa/metar/",
        },
        {
          label: "SYNOP",
          key: "synop",
          link: "observados/mapa/synop/",
        },
      ],
    },
    {
      label: "Laboratório",
      key: "laboratorio",
      submenus: [
        {
          label: "Equipe",
          key: "equipe",
          link: "pr/staff/",
        },
        {
          label: "Ensino",
          key: "ensino",
          link: "pr/ensino/",
        },
        // {
        //   label: "Projeto LBA",
        //   key: "projeto-lba",
        //   link: "lba/index.php",
        // },
        {
          label: "Artigos",
          key: "artigos",
          link: "pr/artigos/autor/all/",
        },
        {
          label: "Histórico",
          key: "histórico",
          link: "pr/historico/",
        },
        {
          label: "Solicitar dados",
          key: "solicitar-dados",
          link: "pedidos/formulario/",
        },
        {
          label: "Fale conosco",
          key: "fale-conosco",
          link: "pr/fale/",
        },
      ],
    },
  ];
  
export default function Side3() {
  const { collapseSidebar } = useProSidebar();
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setMenuOpen(null);
    } else if (event.key === "Escape") {
      setMenuOpen(null);
    }
  }

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorEl && anchorEl.contains(event.target as HTMLElement)) {
      return;
    }
    setMenuOpen(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>, key: string) => {
    if (menuOpen === key) {
      setMenuOpen(null);
    } else {
      setMenuOpen(key);
      setAnchorEl(event.currentTarget);
    }
  };







  return (
    <div id="app" style={({ height: "100vh" , display: "flex" })}>
      <Sidebar style={{ height: "100vh" , display: "flex" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>MASTER</h2>
          </MenuItem>

          <List>
        {pages.map(({ label, key, submenus }) => (
          <ListItem key={key}>
            
            <Box key={key}>
                <MenuItem  
                icon={<MenuOutlinedIcon />} 
                  onClick={(event) => {
                    handleClick(event, key);
                  }}
                
                  style={{ textAlign: "center" }}
                >
                {" "}
                <Typography textAlign="center">{label}</Typography>
                </MenuItem>
                <Popper
                  open={menuOpen === key}
                  anchorEl={anchorEl}
                  role={undefined}
                  placement="right-start"
                  transition
                  
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement == "right-start"
  
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={menuOpen === key}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                            onKeyDown={handleListKeyDown}
                          >
                            {submenus.map((submenu) => (
                              <MenuItem key={submenu.key} onClick={handleClose}>
                                {submenu.label}
                              </MenuItem>
                            ))}
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </Box>    


          </ListItem>
        ))}
      </List>
    </Menu>
    </Sidebar>
    <HomePage />
      
    </div>
    
  );
}


