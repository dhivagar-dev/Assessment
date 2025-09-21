import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Collapse,
  IconButton,
  useTheme,
} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ChevronRight from "@mui/icons-material/ChevronRight";

import defaultIcon from "../../assets/icons/sidebar/defaulticon.svg";
import ecommerceIcon from "../../assets/icons/sidebar/ecommerceicon.svg";
import onlineIcon from "../../assets/icons/sidebar/onlinecourseicon.svg";
import projectIcon from "../../assets/icons/sidebar/projectsicon.svg";

import DefaultDark from "../../assets/icons/Dark-LeftSidebar/DefaultIcon.svg";
import EcommerceDark from "../../assets/icons/Dark-LeftSidebar/EcommerceIcon.svg";
import OnlineCourseDark from "../../assets/icons/Dark-LeftSidebar/onlinCourseIcon.svg";
import ProjectDark from "../../assets/icons/Dark-LeftSidebar/ProjectIcon.svg";

interface MenuItem {
  name: string;
  icon: string;
  darkIcon: string;
  subItems?: { name: string }[];
}

const allMenuItems: MenuItem[] = [
  { name: "Default", icon: defaultIcon, darkIcon: DefaultDark },
  {
    name: "eCommerce",
    icon: ecommerceIcon,
    darkIcon: EcommerceDark,
    subItems: [{ name: "Products" }, { name: "Orders" }],
  },
  {
    name: "Projects",
    icon: projectIcon,
    darkIcon: ProjectDark,
    subItems: [{ name: "Project 1" }, { name: "Project 2" }],
  },
  {
    name: "Online Courses",
    icon: onlineIcon,
    darkIcon: OnlineCourseDark,
    subItems: [{ name: "Course 1" }, { name: "Course 2" }],
  },
];

function Dashboard() {
  const [open, setOpen] = useState<boolean>(true);
  const [selectedItem, setSelectedItem] = useState<string>("Default");
  const theme = useTheme();

  const handleDropdownClick = () => {
    setOpen(!open);
  };

  const handleItemClick = (itemName: string) => {
    setSelectedItem(itemName);
  };

  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box mt={4} width="100%">
      <Typography
        sx={{
          mb: 1.5,
          color: "text.disabled",
          fontSize: "1rem",
        }}
      >
        Dashboards
      </Typography>
      <List sx={{ p: 0 }}>
        {allMenuItems.map((item: MenuItem) => (
          <React.Fragment key={item.name}>
            <ListItem
              button
              selected={selectedItem === item.name}
              onClick={() => handleItemClick(item.name)}
              sx={{
                pl: 2,
                "&:hover": {
                  bgcolor: "action.hover",
                },
                "&.Mui-selected": {
                  bgcolor: "action.hover",
                  color: "text.primary",
                },
              }}
            >
              {item.subItems ? (
                <IconButton
                  onClick={handleDropdownClick}
                  sx={{ p: 0, mr: 0.5, color: "text.secondary" }}
                >
                  {open ? (
                    <ExpandMore fontSize="small" />
                  ) : (
                    <ChevronRight fontSize="small" />
                  )}
                </IconButton>
              ) : (
                <Box sx={{ width: 24, height: 24, mr: 0.5 }} />
              )}
              <Box
                component="img"
                src={isDarkMode ? item.darkIcon : item.icon}
                alt={item.name}
                sx={{
                  mr: 1.5,
                  width: 24,
                  height: 24,
                  filter:
                    selectedItem === item.name
                      ? "grayscale(0%)"
                      : "grayscale(100%)",
                }}
              />
              <ListItemText
                primary={item.name}
                sx={{
                  "& .MuiTypography-root": {
                    fontWeight: selectedItem === item.name ? "bold" : "normal",
                  },
                }}
              />
            </ListItem>
            {item.subItems && (
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem: { name: string }) => (
                    <ListItem
                      key={subItem.name}
                      button
                      selected={selectedItem === subItem.name}
                      onClick={() => handleItemClick(subItem.name)}
                      sx={{
                        pl: 6,
                        "&:hover": {
                          bgcolor: "action.hover",
                        },
                        "&.Mui-selected": {
                          bgcolor: "action.hover",
                          color: "text.primary",
                        },
                      }}
                    >
                      <ListItemText primary={subItem.name} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}

export default Dashboard;
