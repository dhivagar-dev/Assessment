import React from "react";
import { Box, Typography } from "@mui/material";

import NotificationItem from "./RightSidebar/NotificationItem";
import BugIcon from "../assets/icons/rightSidebar/bugIcon.svg";
import UserIcon from "../assets/icons/rightSidebar/userIcon.svg";
import Activities from "./RightSidebar/Activities";
import Contacts from "./RightSidebar/Contacts";

const notificationsData = [
  {
    id: 1,
    icon: BugIcon,
    title: "You have a bug that needs...",
    time: "Just now",
  },
  {
    id: 2,
    icon: UserIcon,
    title: "New user registered",
    time: "59 minutes ago",
  },
  {
    id: 3,
    icon: BugIcon,
    title: "You have a bug that needs...",
    time: "12 hours ago",
  },
  {
    id: 4,
    icon: UserIcon,
    title: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
  },
];

const SidebarRight = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 1,
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
          Notifications
        </Typography>
        {notificationsData.map((notification) => (
          <NotificationItem
            key={notification.id}
            icon={notification.icon}
            title={notification.title}
            time={notification.time}
          />
        ))}
      </Box>

      <Activities />

      <Contacts />
    </Box>
  );
};

export default SidebarRight;
