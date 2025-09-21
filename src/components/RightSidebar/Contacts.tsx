import React from "react";
import { Box, Typography } from "@mui/material";
import ContactItem from "./ContactItem";

// Sample data for contacts
const contactsData = [
  { id: 1, avatar: "/path/to/natalia.jpg", name: "Natali Craig" },
  { id: 2, avatar: "/path/to/drew.jpg", name: "Drew Cano" },
  { id: 3, avatar: "/path/to/orlando.jpg", name: "Orlando Diggs" },
  { id: 4, avatar: "/path/to/andi.jpg", name: "Andi Lane" },
  { id: 5, avatar: "/path/to/kate.jpg", name: "Kate Morrison" },
  { id: 6, avatar: "/path/to/koray.jpg", name: "Koray Okumus" },
];

const Contacts = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 1,
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: 600 }}>
        Contacts
      </Typography>
      {contactsData.map((contact) => (
        <ContactItem
          key={contact.id}
          avatarSrc={contact.avatar}
          name={contact.name}
        />
      ))}
    </Box>
  );
};

export default Contacts;
