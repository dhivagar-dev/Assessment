import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

interface ContactItemProps {
  avatarSrc: string;
  name: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ avatarSrc, name }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        p: 1,
        borderRadius: 1,
      }}
    >
      <Avatar src={avatarSrc} sx={{ width: 32, height: 32 }} />
      <Typography variant="body2" sx={{ fontWeight: 500 }}>
        {name}
      </Typography>
    </Box>
  );
};

export default ContactItem;
