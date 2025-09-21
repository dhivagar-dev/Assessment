import React from "react";
import { Grid, Box, Typography, useTheme } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import UparrowIcon from "../../assets/icons/maincontent/uparrowIcon.svg";
import DownarrowIcon from "../../assets/icons/maincontent/downarrowUcon.svg";

import UparrowIconDark from "../../assets/icons/Dark-Maincontent/uparrrowIconDark.svg";
import DownarrowIconDark from "../../assets/icons/Dark-Maincontent/downarrowUconDark.svg";

const TopRow = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const cards = [
    { title: "Customer", value: "3,781", change: "+11.01%", trend: "up" },
    { title: "Orders", value: "1,219", change: "-0.03%", trend: "down" },
    { title: "Revenue", value: "$695", change: "+15.03%", trend: "up" },
    { title: "Growth", value: "30.1%", change: "+6.08%", trend: "up" },
  ];

  const rawDataset = [
    { month: "Jan", value: "22M" },
    { month: "Feb", value: "25M" },
    { month: "Mar", value: "23M" },
    { month: "Apr", value: "28M" },
    { month: "May", value: "18M" },
    { month: "Jun", value: "25M" },
  ];

  const dataset = rawDataset.map((item) => ({
    month: item.month,
    value: Number(item.value.replace("M", "")),
  }));

  const cardBgColor = isDarkMode ? "#212328" : "var(--Primary-Light, #F7F9FB)";
  const primaryTextColor = isDarkMode ? "#E0E0E0" : "text.primary";
  const secondaryTextColor = isDarkMode ? "#A0A0A0" : "text.secondary";
  const upArrowIcon = isDarkMode ? UparrowIconDark : UparrowIcon;
  const downArrowIcon = isDarkMode ? DownarrowIconDark : DownarrowIcon;

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Grid
          container
          spacing={1}
          sx={{ width: 432, height: 252, minWidth: 400 }}
        >
          {cards.map((card, i) => (
            <Grid item xs={6} key={i}>
              <Box
                sx={{
                  width: 202,
                  height: 112,
                  minWidth: 200,
                  borderRadius: 2,
                  p: 3,
                  bgcolor: cardBgColor,
                  boxShadow: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 600, color: secondaryTextColor }}
                >
                  {card.title}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 1,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: primaryTextColor }}
                  >
                    {card.value}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 500,
                        ml: 0.5,
                        color:
                          card.trend === "up" ? "success.main" : "error.main",
                      }}
                    >
                      {card.change}
                    </Typography>
                    <img
                      src={card.trend === "up" ? upArrowIcon : downArrowIcon}
                      alt={card.trend}
                      width={16}
                      height={16}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item>
        <Box
          sx={{
            width: 432,
            height: 252,
            minWidth: 400,
            borderRadius: 2,
            p: 3,
            bgcolor: isDarkMode ? "#212328" : "var(--Primary-Light, #F7F9FB)",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 384,
              height: 20,
              borderRadius: 1,
              bgcolor: "transparent",
              display: "flex",
              alignItems: "left",
              justifyContent: "left",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: primaryTextColor }}
            >
              Projection vs Actuals
            </Typography>
          </Box>

          <Box
            sx={{
              width: 384,
              height: 168,
              borderRadius: 2,
              bgcolor: "transparent",
            }}
          >
            <BarChart
              dataset={dataset}
              xAxis={[{ dataKey: "month" }]}
              yAxis={[
                {
                  min: 0,
                  max: 30,
                  ticks: [0, 10, 20, 30],
                  scale: "linear",
                  valueFormatter: (val) => `${val}M`,
                  grid: true,
                },
              ]}
              series={[
                {
                  dataKey: "value",
                  color: isDarkMode
                    ? "#A8C5DA"
                    : "var(--Secondary-Cyan, #A8C5DA)",
                  barSize: 25,
                },
              ]}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TopRow;
