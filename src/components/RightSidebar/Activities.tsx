import React from "react";
import { Box, Typography } from "@mui/material";
import ActivityItem from "./ActivityItem";

// Sample data for activities
const activitiesData = [
  {
    id: 1,
    avatar: "/path/to/avatar1.jpg",
    title: "You have a bug that needs...",
    time: "Just now",
  },
  {
    id: 2,
    avatar: "/path/to/avatar2.jpg",
    title: "Released a new version",
    time: "59 minutes ago",
  },
  {
    id: 3,
    avatar: "/path/to/avatar3.jpg",
    title: "Submitted a bug",
    time: "12 hours ago",
  },
  {
    id: 4,
    avatar: "/path/to/avatar4.jpg",
    title: "Modified A data in Page X",
    time: "Today, 11:59 AM",
  },
  {
    id: 5,
    avatar: "/path/to/avatar5.jpg",
    title: "Deleted a page in Project X",
    time: "Feb 2, 2023",
  },
];

const Activities = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 1,
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: 600 }}>
        Activities
      </Typography>
      {activitiesData.map((activity) => (
        <ActivityItem
          key={activity.id}
          avatarSrc={activity.avatar}
          title={activity.title}
          time={activity.time}
        />
      ))}
    </Box>
  );
};

export default Activities;
