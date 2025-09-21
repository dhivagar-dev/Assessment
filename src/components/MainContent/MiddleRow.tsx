import React from "react";
import { Grid, Box, Typography, LinearProgress, useTheme } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const MiddleRow = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  // Example dataset
  const dataset = [
    { day: "Mon", value: 5000 },
    { day: "Tue", value: 7000 },
    { day: "Wed", value: 6000 },
    { day: "Thu", value: 8000 },
    { day: "Fri", value: 7500 },
    { day: "Sat", value: 9000 },
    { day: "Sun", value: 6500 },
  ];
  const locations = [
    { name: "New York", value: 72000, color: "primary" },
    { name: "San Francisco", value: 39000, color: "primary" },
    { name: "Sydney", value: 25000, color: "primary" },
  ];

  const chartBgColor = isDarkMode ? "#212328" : "var(--Primary-Light, #F7F9FB)";
  const boxBgColor = isDarkMode ? "#191B1F" : "white";
  const primaryTextColor = isDarkMode ? "#E0E0E0" : "text.primary";
  const secondaryTextColor = isDarkMode ? "#A0A0A0" : "text.secondary";
  const lineChartColors = {
    current: isDarkMode ? "#A8C5DA" : "blue",
    previous: isDarkMode ? "#9E9E9E" : "black",
  };
  const mapColors = {
    fill: isDarkMode ? "#2D3035" : "#DDEAF6",
    stroke: isDarkMode ? "#191B1F" : "#FFF",
    circle: isDarkMode ? "#FFFFFF" : "#000",
  };
  const progressColors = {
    track: isDarkMode ? "#33363D" : "#E0E0E0",
    bar: isDarkMode ? "#A8C5DA" : "#A8C5DA",
  };

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Box
          sx={{
            width: 662,
            height: 318,
            minWidth: 662,
            borderRadius: 2,
            p: 3,
            gap: 2,
            bgcolor: chartBgColor,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: 437,
              height: 22,
              borderRadius: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 1,
              opacity: 1,
              transform: "rotate(0deg)",
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: 12,
                ml: 2,
                color: primaryTextColor,
              }}
            >
              Revenue |
            </Typography>
            <Typography
              sx={{ fontWeight: 500, color: secondaryTextColor, fontSize: 12 }}
            >
              Current Week $58,211
            </Typography>
            <Typography
              sx={{ fontWeight: 500, color: secondaryTextColor, fontSize: 12 }}
            >
              Previous Week $68,768
            </Typography>
          </Box>

          <Box
            sx={{
              width: 614,
              height: 232,
              borderRadius: 2,
              bgcolor: boxBgColor,
            }}
          >
            <LineChart
              xAxis={[
                {
                  data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                  scaleType: "point",
                },
              ]}
              series={[
                {
                  id: "current",
                  data: [13, 15, 8, 18, 12, 23],
                  color: lineChartColors.current,
                },
                {
                  id: "previous",
                  data: [12, 11, 15, 17, 19, 20],
                  color: lineChartColors.previous,
                  sx: { strokeDasharray: "5 5" },
                },
              ]}
              height={200}
              sx={{
                width: "100%",
                "& .MuiChartsAxis-line, & .MuiChartsAxis-tick": {
                  stroke: secondaryTextColor,
                },
                "& .MuiChartsAxis-tickLabel": {
                  fill: secondaryTextColor,
                },
                "& .MuiChartsLegend-mark": {
                  fill: primaryTextColor,
                },
              }}
            />
          </Box>
        </Box>
      </Grid>

      {/* Second Column */}
      <Box
        sx={{
          width: 202,
          height: 318,
          borderRadius: 2,
          p: 3,
          bgcolor: chartBgColor, // Dynamic background color
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* First row: Map */}
        <Typography
          sx={{ fontWeight: 600, fontSize: 12, color: primaryTextColor }}
        >
          Revenue by Location
        </Typography>
        <Box sx={{ width: "100%", height: 120, borderRadius: 2 }}>
          <ComposableMap
            projectionConfig={{ scale: 100 }}
            width={200}
            height={120}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={mapColors.fill} // Dynamic map fill color
                    stroke={mapColors.stroke} // Dynamic map stroke color
                    strokeWidth={0.5}
                  />
                ))
              }
            </Geographies>

            {locations.map((loc, i) => {
              // Note: For real coordinates, use projection([lng, lat])
              // This example uses random positions for demonstration
              const cx = Math.random() * 200;
              const cy = Math.random() * 120;
              return (
                <circle key={i} cx={cx} cy={cy} r={3} fill={mapColors.circle} />
              ); // Dynamic circle color
            })}
          </ComposableMap>
        </Box>

        {/* Second row: Revenue by location list */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {locations.map((loc, index) => (
            <Box
              key={index}
              sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 11,
                }}
              >
                <Typography sx={{ color: primaryTextColor }}>
                  {loc.name}
                </Typography>
                <Typography sx={{ color: primaryTextColor }}>
                  {(loc.value / 1000).toLocaleString()}K
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={(loc.value / 72000) * 100} // scale to max 72K
                sx={{
                  height: 6,
                  borderRadius: 1,
                  bgcolor: progressColors.track, // Dynamic progress track color
                  "& .MuiLinearProgress-bar": { bgcolor: progressColors.bar }, // Dynamic progress bar color
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Grid>
  );
};

export default MiddleRow;
