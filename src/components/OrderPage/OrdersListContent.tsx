import React, { useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  TextField,
  Pagination,
  Avatar,
  Checkbox,
  Popover,
} from "@mui/material";

import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AddIcon from "@mui/icons-material/Add";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface Order {
  id: string;
  user: string;
  avatarSrc: string;
  project: string;
  address: string;
  date: string;
  status: "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected";
}

// Dummy data with more entries for demonstration
const ordersData: Order[] = [
  {
    id: "#CM9801",
    user: "Natali Craig",
    avatarSrc: "https://i.pravatar.cc/150?img=1",
    project: "Lending Page",
    address: "Larry Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: "Kate Morrison",
    avatarSrc: "https://i.pravatar.cc/150?img=2",
    project: "CRM Admin pages",
    address: "Bogwell Avenue Ocala",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: "Drew Cano",
    avatarSrc: "https://i.pravatar.cc/150?img=3",
    project: "Client Project",
    address: "Mendow Lane Oakland",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: "Orlando Diggs",
    avatarSrc: "https://i.pravatar.cc/150?img=4",
    project: "Admin Dashboard",
    address: "Westburn Button Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: "Andi Lane",
    avatarSrc: "https://i.pravatar.cc/150?img=5",
    project: "App Landing Page",
    address: "Next Lane Oakland",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9806",
    user: "Jessie Cooper",
    avatarSrc: "https://i.pravatar.cc/150?img=6",
    project: "App Landing Page",
    address: "New York",
    date: "Jan 15, 2023",
    status: "In Progress",
  },
  {
    id: "#CM9807",
    user: "Steve Smith",
    avatarSrc: "https://i.pravatar.cc/150?img=7",
    project: "Online Store",
    address: "Los Angeles",
    date: "Dec 10, 2022",
    status: "Complete",
  },
  {
    id: "#CM9808",
    user: "Chris Evans",
    avatarSrc: "https://i.pravatar.cc/150?img=8",
    project: "Portfolio Website",
    address: "Chicago",
    date: "Dec 1, 2022",
    status: "Pending",
  },
  {
    id: "#CM9809",
    user: "Anna White",
    avatarSrc: "https://i.pravatar.cc/150?img=9",
    project: "Blog Platform",
    address: "Houston",
    date: "Nov 20, 2022",
    status: "Approved",
  },
  {
    id: "#CM9810",
    user: "David Brown",
    avatarSrc: "https://i.pravatar.cc/150?img=10",
    project: "E-commerce App",
    address: "Phoenix",
    date: "Oct 5, 2022",
    status: "Rejected",
  },
  {
    id: "#CM9811",
    user: "Lisa Green",
    avatarSrc: "https://i.pravatar.cc/150?img=11",
    project: "Food Delivery App",
    address: "Philadelphia",
    date: "Sep 22, 2022",
    status: "In Progress",
  },
  {
    id: "#CM9812",
    user: "James Wilson",
    avatarSrc: "https://i.pravatar.cc/150?img=12",
    project: "Social Media App",
    address: "San Antonio",
    date: "Aug 14, 2022",
    status: "Complete",
  },
];

const ROWS_PER_PAGE = 10;

const statusColors = {
  "In Progress": "primary.main",
  Complete: "success.main",
  Pending: "warning.main",
  Approved: "info.main",
  Rejected: "error.main",
};

const allStatuses: Order["status"][] = [
  "In Progress",
  "Complete",
  "Pending",
  "Approved",
  "Rejected",
];

const OrdersListContent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [filterAnchorEl, setFilterAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1); // State for the current page

  const handleSort = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const handleFilterClick = (event: React.MouseEvent<HTMLElement>) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const handleStatusChange = (status: string) => {
    setSelectedStatuses((prevStatuses) => {
      const newStatuses = prevStatuses.includes(status)
        ? prevStatuses.filter((s) => s !== status)
        : [...prevStatuses, status];
      setPage(1); // Reset to first page on filter change
      return newStatuses;
    });
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const sortedAndFilteredOrders = ordersData
    .filter((order) => {
      const matchesSearch = Object.values(order).some((value) =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      );

      const matchesStatus =
        selectedStatuses.length === 0 ||
        selectedStatuses.includes(order.status);

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      const comparison = a.id.localeCompare(b.id);
      return sortDirection === "asc" ? comparison : -comparison;
    });

  // Pagination logic
  const pageCount = Math.ceil(sortedAndFilteredOrders.length / ROWS_PER_PAGE);
  const paginatedOrders = sortedAndFilteredOrders.slice(
    (page - 1) * ROWS_PER_PAGE,
    page * ROWS_PER_PAGE
  );

  const openFilterPopover = Boolean(filterAnchorEl);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Orders List
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton onClick={handleFilterClick}>
            <FilterListIcon />
          </IconButton>
          <Popover
            open={openFilterPopover}
            anchorEl={filterAnchorEl}
            onClose={handleFilterClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Filter by Status
              </Typography>
              {allStatuses.map((status) => (
                <Box
                  key={status}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Checkbox
                    size="small"
                    checked={selectedStatuses.includes(status)}
                    onChange={() => handleStatusChange(status)}
                  />
                  <Typography variant="body2">{status}</Typography>
                </Box>
              ))}
            </Box>
          </Popover>

          <IconButton onClick={handleSort}>
            {sortDirection === "asc" ? (
              <ArrowUpwardIcon />
            ) : (
              <ArrowDownwardIcon />
            )}
          </IconButton>
        </Box>

        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: <SearchIcon color="action" sx={{ mr: 1 }} />,
          }}
        />
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>Order ID</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Project</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>{order.id}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Avatar
                      src={order.avatarSrc}
                      sx={{ width: 24, height: 24 }}
                    />
                    <Typography variant="body2">{order.user}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{order.project}</TableCell>
                <TableCell>{order.address}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <CalendarTodayIcon
                      sx={{ fontSize: 16, color: "text.secondary" }}
                    />
                    <Typography variant="body2">{order.date}</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        bgcolor: statusColors[order.status],
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: statusColors[order.status],
                        fontWeight: 500,
                      }}
                    >
                      {order.status}
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: "flex", justifyContent: "right", mt: 2 }}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChangePage}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default OrdersListContent;
