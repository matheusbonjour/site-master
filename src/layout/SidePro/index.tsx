import { Link, NavLink } from 'react-router-dom';
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar
} from 'react-pro-sidebar';
import {
  FaUser,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaTachometerAlt,
  FaGem,
  FaList,
  FaRegLaughWink,
  FaHeart
} from 'react-icons/fa';
import { useState } from 'react';
import * as React from 'react';
import HomePage from "../../features/HomePage";
import { Box, ListItem, Typography } from '@mui/material';
import {
    ClickAwayListener,
    Grow,
    MenuList,
    Paper,
    Popper,
  } from "@mui/material";


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

export default function Sidepro() {
const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
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
    <Sidebar>
        <Menu>
          {collapsed ? (
            <MenuItem
              icon={<FaAngleDoubleRight />}
              onClick={() => {
                collapseSidebar();
              }}
            ></MenuItem>
          ) : (
            <MenuItem
              suffix={<FaAngleDoubleLeft />}
              onClick={() => {
                collapseSidebar();
              }}
            >
              <div
                style={{
                  padding: '9px',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  fontSize: 15,
                  letterSpacing: '1px'
                }}
              >
                MASTER
              </div>
            </MenuItem>
          )}
        </Menu>
        
        <Menu>
     
                {pages.map(({ label, key, submenus }) => (
                    <ListItem key={key}>

                    <SubMenu
                    
                    label={label}>
                    
                    {submenus.map((submenu: { key: React.Key | null | undefined; label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
                    
                    <MenuItem key={submenu.key} onClick={handleClose}>
                                {submenu.label}
                                </MenuItem>
                    ))}
                    </SubMenu>  

                </ListItem>
                ))}

            
        </Menu>
    </Sidebar>
    <HomePage />
    </div>
  );
};
