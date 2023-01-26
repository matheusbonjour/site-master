
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
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

type Anchor = 'MASTER';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    MASTER: false,
  });

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


  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'MASTER' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {pages.map(({ label, key, submenus }) => (
          <ListItem key={key} disablePadding>

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
                  placement="right-start"
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "right-start"
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
            <ListItemText />

          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(['Master'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
