import React from "react";
import {
  Grid,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme,
} from "@mui/material";
import { PieChart } from "@mui/x-charts";

const BottomRow = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const topProducts = [
    {
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: 82,
      amount: "$4,518.18",
    },
    {
      name: "Marco Lightweight Shirt",
      price: "$128.50",
      quantity: 37,
      amount: "$4,764.50",
    },
    {
      name: "Half Sleeve Shirt",
      price: "$59.59",
      quantity: 54,
      amount: "$2,509.36",
    },
    {
      name: "Lightweight Jacket",
      price: "$20.00",
      quantity: 184,
      amount: "$3,680.00",
    },
    { name: "Marco Shoes", price: "$79.49", quantity: 54, amount: "$1,965.81" },
  ];

  const pieData = [
    { id: 0, value: 38.6, label: "Direct", color: "#A8C5DA" },
    { id: 1, value: 13.5, label: "Affiliate", color: "#4D6B9C" },
    { id: 2, value: 15.4, label: "Sponsored", color: "#6A89A6" },
    { id: 3, value: 4.9, label: "E-mail", color: "#92B0C9" },
  ];

  const revenueSources = [
    { name: "Direct", amount: "$300.56" },
    { name: "Affiliate", amount: "$135.18" },
    { name: "Sponsored", amount: "$154.02" },
    { name: "E-mail", amount: "$48.96" },
  ];

  const boxBgColor = isDarkMode ? "#191B1F" : "var(--Primary-Light, #F7F9FB)";
  const tableHeaderBgColor = isDarkMode ? "#2D3035" : "#F7F9FB";
  const tableRowBgColor = isDarkMode ? "#191B1F" : "white";
  const tableBorderColor = isDarkMode ? "#2D3035" : "#E0E0E0";
  const primaryTextColor = isDarkMode ? "#E0E0E0" : "text.primary";
  const secondaryTextColor = isDarkMode ? "#A0A0A0" : "text.secondary";

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Box
          sx={{
            width: 662,
            height: 336,
            minWidth: 662,
            borderRadius: 2,
            p: 3,
            gap: 2,
            bgcolor: boxBgColor,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 600,
              color: primaryTextColor,
              mb: 2,
            }}
          >
            Top Selling Products
          </Typography>

          <TableContainer
            component={Paper}
            sx={{
              maxHeight: 264,
              boxShadow: "none",
              bgcolor: "transparent",
            }}
          >
            <Table stickyHeader size="small">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      bgcolor: tableHeaderBgColor,
                      borderBottom: `1px solid ${tableBorderColor}`,
                      color: primaryTextColor,
                      fontWeight: 600,
                    }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    sx={{
                      bgcolor: tableHeaderBgColor,
                      borderBottom: `1px solid ${tableBorderColor}`,
                      color: primaryTextColor,
                      fontWeight: 600,
                    }}
                  >
                    Price
                  </TableCell>
                  <TableCell
                    sx={{
                      bgcolor: tableHeaderBgColor,
                      borderBottom: `1px solid ${tableBorderColor}`,
                      color: primaryTextColor,
                      fontWeight: 600,
                    }}
                  >
                    Quantity
                  </TableCell>
                  <TableCell
                    sx={{
                      bgcolor: tableHeaderBgColor,
                      borderBottom: `1px solid ${tableBorderColor}`,
                      color: primaryTextColor,
                      fontWeight: 600,
                    }}
                  >
                    Amount
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {topProducts.map((product, index) => (
                  <TableRow key={index} sx={{ bgcolor: "transparent" }}>
                    <TableCell
                      sx={{
                        borderBottom: `1px solid ${tableBorderColor}`,
                        color: secondaryTextColor,
                      }}
                    >
                      {product.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: `1px solid ${tableBorderColor}`,
                        color: secondaryTextColor,
                      }}
                    >
                      {product.price}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: `1px solid ${tableBorderColor}`,
                        color: secondaryTextColor,
                      }}
                    >
                      {product.quantity}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: `1px solid ${tableBorderColor}`,
                        color: secondaryTextColor,
                      }}
                    >
                      {product.amount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>

      <Grid item>
        <Box
          sx={{
            width: 202,
            height: 344,
            minWidth: 200,
            maxWidth: 272,
            borderRadius: 2,
            p: 3,
            gap: 2,
            bgcolor: boxBgColor,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0%",
              color: primaryTextColor,
              mb: 1,
            }}
          >
            Total Sales
          </Typography>

          <Box
            sx={{
              width: 120,
              height: 120,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PieChart
              series={[
                {
                  data: pieData,
                  innerRadius: 40,
                  outerRadius: 60,
                  paddingAngle: 5,
                  cornerRadius: 5,
                  startAngle: -90,
                  endAngle: 270,
                },
              ]}
              width={120}
              height={120}
              sx={{
                "& .MuiChartsLegend-root": {
                  display: "none",
                },
              }}
            />
          </Box>

          <Box
            sx={{
              width: 154,
              height: 124,
              borderRadius: 2,
              gap: 1.5,
              bgcolor: tableHeaderBgColor,
              p: 1.5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {revenueSources.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                <Typography
                  sx={{ fontSize: "12px", color: secondaryTextColor }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: primaryTextColor,
                  }}
                >
                  {item.amount}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BottomRow;
