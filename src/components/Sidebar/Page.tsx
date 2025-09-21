import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import GroupsIcon from "@mui/icons-material/Groups";
import BookIcon from "@mui/icons-material/Book";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

interface MenuItem {
  name: string;
  icon?: React.ElementType;
  subItems?: { name: string }[];
}

const pagesMenuData: MenuItem[] = [
  {
    name: "User Profile",
    icon: PersonOutlineIcon,
    subItems: [
      { name: "Overview" },
      { name: "Projects" },
      { name: "Campaigns" },
      { name: "Documents" },
      { name: "Followers" },
    ],
  },
  {
    name: "Account",
    icon: AccountBoxIcon,
    subItems: [{ name: "Settings" }, { name: "Billing" }],
  },
  {
    name: "Corporate",
    icon: GroupsIcon,
    subItems: [{ name: "About" }, { name: "Team" }],
  },
  {
    name: "Blog",
    icon: BookIcon,
    subItems: [{ name: "All Posts" }, { name: "New Post" }],
  },
  {
    name: "Social",
    icon: ChatBubbleOutlineIcon,
    subItems: [{ name: "Messages" }, { name: "Notifications" }],
  },
];

const PagesMenu = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
    "User Profile": true,
  });
  const [selectedItem, setSelectedItem] = useState<string>("User Profile");

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
    <Box mt={4} width="100%">
      <Typography
        sx={{ mb: 1.5, color: "text.disabled", pl: 2, fontSize: "1rem" }}
      >
        Pages
      </Typography>
      <List sx={{ p: 0 }}>
        {pagesMenuData.map((item) => (
          <React.Fragment key={item.name}>
            <ListItem
              button
              selected={selectedItem === item.name}
              onClick={() => handleItemClick(item.name)}
              sx={{
                "&.Mui-selected": {
                  bgcolor: "action.selected",
                  color: "text.primary",
                  "&:hover": { bgcolor: "action.hover" },
                },
                "&:hover": {
                  bgcolor: "action.hover",
                },
                pl: 2,
              }}
            >
              <Box
                component="span"
                sx={{
                  color: "text.secondary",
                  display: "flex",
                  alignItems: "center",
                  mr: 1,
                }}
              >
                {openItems[item.name] ? (
                  <ExpandMoreIcon fontSize="small" />
                ) : (
                  <ChevronRightIcon fontSize="small" />
                )}
              </Box>

              {item.icon && (
                <Box
                  component={item.icon}
                  sx={{
                    mr: 1.5,
                    color: "action.active",
                    filter:
                      selectedItem === item.name
                        ? "grayscale(0%)"
                        : "grayscale(100%)",
                  }}
                />
              )}
              <ListItemText primary={item.name} />
            </ListItem>

            <Collapse in={openItems[item.name]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.subItems?.map((subItem) => (
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
                        bgcolor: "grey.200",
                        color: "text.primary",
                      },
                    }}
                  >
                    <ListItemText primary={subItem.name} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default PagesMenu;
