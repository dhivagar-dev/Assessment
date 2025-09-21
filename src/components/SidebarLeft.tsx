import {
  Box,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Avatar from "../assets/icons/Avatar.svg";
import defaultIcon from "../assets/icons/sidebar/defaulticon.svg";
import ecommerceIcon from "../assets/icons/sidebar/ecommerceicon.svg";
import onlineIcon from "../assets/icons/sidebar/onlinecourseicon.svg";
import projectIcon from "../assets/icons/sidebar/projectsicon.svg";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Dashboard from "./Sidebar/Dashboard";
import PagesMenu from "./Sidebar/Page";

interface SubItem {
  name: string;
}

interface MenuItem {
  name: string;
  icon: string;
  subItems: SubItem[];
}

interface OpenItemsState {
  [key: string]: boolean;
}

const mainMenuItems: MenuItem[] = [{ name: "Default", icon: defaultIcon }];

const dropdownMenuItems: MenuItem[] = [
  {
    name: "eCommerce",
    icon: ecommerceIcon,
    subItems: [{ name: "Products" }, { name: "Orders" }],
  },
  {
    name: "Projects",
    icon: projectIcon,
    subItems: [{ name: "Project 1" }, { name: "Project 2" }],
  },
  {
    name: "Online Courses",
    icon: onlineIcon,
    subItems: [{ name: "Course 1" }, { name: "Course 2" }],
  },
];

const SidebarLeft = () => {
  const [openItems, setOpenItems] = useState<OpenItemsState>({});
  const [selectedItem, setSelectedItem] = useState<string>("Default");

  const handleDropdownClick = (itemName: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const handleItemClick = (itemName: string) => {
    setSelectedItem(itemName);
  };

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          "& .MuiDrawer-paper": {
            width: "222px",
            height: "100vh",
            display: "flex",
            flexDirection: "column",

            alignItems: "center",
            p: "20px 16px",
          },
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          width="180px"
          height="32px"
          gap="8px"
          borderRadius="8px"
          p="4px"
          sx={{
            cursor: "pointer",
            opacity: 1,
            "&:hover": { bgcolor: "action.hover" },
            transform: "rotate(0deg)",
          }}
        >
          <Box
            component="img"
            src={Avatar}
            alt="Avatar"
            sx={{ width: 24, height: 24, borderRadius: "50%" }}
          />
          <Typography fontWeight="bold" fontSize="14px">
            ByeWind
          </Typography>
        </Box>
        {/* Favorites */}
        <Box
          width="180px"
          height="104px"
          display="flex"
          flexDirection="column"
          gap="4px"
          pb="12px"
          mt={2}
          sx={{ opacity: 1 }}
          mb={4}
        >
          <Box
            width="170px"
            height="28px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap="8px"
            borderRadius="8px"
            sx={{ opacity: 1 }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "text.primary",
                fontWeight: "bold",
                fontSize: "0.9rem",
              }}
            >
              Favorites
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "text.disabled",
                fontSize: "0.9rem",
              }}
            >
              Recently
            </Typography>
          </Box>

          <List sx={{ p: 0, mt: 1 }}>
            <ListItem button sx={{ pl: 3 }}>
              {" "}
              <Box
                sx={{
                  mr: 1,
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "text.disabled",
                }}
              />{" "}
              <ListItemText primary="Overview" />
            </ListItem>
            <ListItem button sx={{ pl: 3 }}>
              {" "}
              <Box
                sx={{
                  mr: 1,
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "text.disabled",
                }}
              />{" "}
              <ListItemText primary="Projects" />
            </ListItem>
          </List>
        </Box>

        {/*dashboard*/}
        <Dashboard />
        <PagesMenu />
      </Drawer>
    </>
  );
};

export default SidebarLeft;
