import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Logo from "./Logo";
import {
  ClickAwayListener,
  Grow,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import { useState } from "react";

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

const Topbar: React.FC = () => {
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
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo label="MASTER" />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ label, key, submenus }) => (
              <Box key={key}>
                <MenuItem
                  onClick={(event) => {
                    handleClick(event, key);
                  }}
                >
                  <Typography textAlign="center">{label}</Typography>
                </MenuItem>
                <Popper
                  open={menuOpen === key}
                  anchorEl={anchorEl}
                  role={undefined}
                  placement="bottom-start"
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom-start"
                            ? "left top"
                            : "left bottom",
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
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Topbar;
