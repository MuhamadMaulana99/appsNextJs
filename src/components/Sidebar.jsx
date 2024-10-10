import {
  Avatar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import {
  Home as HomeIcon,
  Info as InfoIcon,
  ContactMail as ContactIcon,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import GroupIcon from "@mui/icons-material/Group";
import HistoryIcon from "@mui/icons-material/History";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/redux/sidebarSlice";

const routes = [
  { name: "Home", path: "/", icon: <HomeIcon /> },
  {
    name: "About",
    icon: <InfoIcon />,
    subRoutes: [
      { name: "Our Team", path: "/about/team", icon: <GroupIcon /> },
      { name: "Our Story", path: "/about/story", icon: <HistoryIcon /> },
    ],
  },
  { name: "Contact", path: "/contact", icon: <ContactIcon /> },
];

const Sidebar = ({ open, toggleDrawer }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.open); 
  const [openSubMenu, setOpenSubMenu] = useState({});

  const handleToggleSubMenu = (name) => {
    setOpenSubMenu((prevOpen) => ({
      ...prevOpen,
      [name]: !prevOpen[name], // Toggle berdasarkan nama menu
    }));
  };

  return (
    <div className="m-1">
      <Drawer
        classes={{ paper: "w-64" }}
        sx={{ "& .MuiDrawer-paper": { width: "16rem" } }}
        anchor="left"
        open={isOpen}
        onClose={() => dispatch(toggleSidebar())}
      >
        <div className="w-full flex justify-between p-5">
          <div className="flex  gap-3">
            <AddToQueueIcon />
            <Typography variant="body1">Heading</Typography>
          </div>
          <MenuIcon onClick={() => dispatch(toggleSidebar())} />
        </div>

        <List>
          {routes.map((route, index) => (
            <>
              {/* Jika tidak ada sub-routes */}
              {!route.subRoutes ? (
                <Link href={route.path} key={index} passHref>
                  <ListItem button component="a" onClick={() => dispatch(toggleSidebar())}>
                    <ListItemIcon>{route.icon}</ListItemIcon>
                    <ListItemText primary={route.name} />
                  </ListItem>
                </Link>
              ) : (
                <>
                  {/* Menu dengan Sub-menu */}
                  <ListItem
                    button
                    onClick={() => handleToggleSubMenu(route.name)}
                    key={index}
                  >
                    <ListItemIcon>{route.icon}</ListItemIcon>
                    <ListItemText primary={route.name} />
                    {openSubMenu[route.name] ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>

                  {/* Sub-menu menggunakan Collapse */}
                  <Collapse
                    in={openSubMenu[route.name]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {route.subRoutes.map((subRoute, subIndex) => (
                        <Link href={subRoute.path} key={subIndex} passHref>
                          <ListItem
                            button
                            component="a"
                            sx={{ pl: 4 }}
                            onClick={toggleDrawer}
                          >
                            <ListItemIcon>{subRoute.icon}</ListItemIcon>
                            <ListItemText primary={subRoute.name} />
                          </ListItem>
                        </Link>
                      ))}
                    </List>
                  </Collapse>
                </>
              )}
            </>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
