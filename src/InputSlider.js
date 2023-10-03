import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";

export default function InputSlider({ max, onChange, isPercentage }) {
  const [value, setValue] = React.useState(0);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  const marks = (isPercentage, max) => {
    if (isPercentage) {
      return [
        {
          value: 1,
          label: "1%",
        },
        {
          value: 100,
          label: "100%",
        },
      ];
    } else {
      return [
        {
            value: 1,
            label: "1",
          },
          {
            value: max,
            label: max.toLocaleString("sv"),
          },
        {
          value: parseInt(max/2) ,
          label: parseInt(max/2).toLocaleString("sv"),
        },
      ];
    }
  };
  
  return (
    <Box sx={{ pl:1, width: 200 }}>
    
      <Slider
        valueLabelDisplay="auto"
        valueLabelFormat={isPercentage ? value + '%' : value.toLocaleString("sv")}
        value={typeof value === "number" ? value : 0}
        marks={marks(isPercentage, max)}
        onChange={handleSliderChange}
        aria-labelledby="input-slider"
        max={max}
      />
    </Box>
  );
}
