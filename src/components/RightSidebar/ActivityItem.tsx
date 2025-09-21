import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

interface ActivityItemProps {
  avatarSrc: string;
  title: string;
  time: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  avatarSrc,
  title,
  time,
}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
      <Avatar src={avatarSrc} sx={{ width: 32, height: 32 }} />
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

export default ActivityItem;
