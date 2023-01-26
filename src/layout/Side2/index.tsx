import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import MenuItem from "@mui/material/MenuItem";
import {
  ClickAwayListener,
  Grow,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import { useState } from "react";
import { Sidebar, Menu, useProSidebar } from "react-pro-sidebar";

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




const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            MASTER
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            MASTER
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
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
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
