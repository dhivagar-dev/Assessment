import React from "react";
import { Box, Typography } from "@mui/material";

import BugIcon from "../../assets/icons/rightSidebar/bugIcon.svg";
import UserIcon from "../../assets/icons/rightSidebar/userIcon.svg";

interface NotificationItemProps {
  icon: string;
  title: string;
  time: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  icon,
  title,
  time,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 1,
        p: 1,
        borderRadius: 1,
      }}
    >
      <Box component="img" src={icon} sx={{ width: 24, height: 24 }} />
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          {title}
        </Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {time}
        </Typography>
      </Box>
    </Box>
  );
};

export default NotificationItem;
