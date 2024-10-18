import React from "react";
import { Bar } from "react-chartjs-2";
import { Checkbox, FormControlLabel } from "@mui/material";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

import "chartjs-plugin-datalabels";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ChartDataLabels
);

function mapColumnNames(columnName) {
  const nameMapping = {
    handlagda: "Handlagda",
    utredda: "Utredda",
    direktavskrivna: "Direktavskrivna",
    lagforingsprocent: "Lagförda",
    personuppklaringsprocent: "Personuppklarade",
  };
  return nameMapping[columnName] || columnName; // Return the original columnName if it's not found in the mapping
}

function QuestionGraph({ selectedQuestion, userGuesses, hideUserGuesses }) {
  const labels = ["handlagda", "utredda", "direktavskrivna", "personuppklaringsprocent"];
  const trueData = [];
  const userData = [];

  const mappedLabels = labels.map((label) => {
    if (label === "lagforingsprocent") {
      return null;
    }
    return mapColumnNames(label);
  });

  labels.forEach((label) => {
    const isHandlagda = label === "handlagda";

    let trueValue = selectedQuestion.handlagda;

    if (label === "personuppklaringsprocent") {
      trueValue = parseInt((selectedQuestion.properties[label].value / 100) * selectedQuestion.handlagda);
    } else if (label === "direktavskrivna") {
      trueValue = selectedQuestion.properties["direktavskrivna"].value;
    } else if (label === "utredda") {
      trueValue = selectedQuestion.properties[label].value;
    }

    // Push the true value to trueData array regardless of user guess visibility.
    trueData.push(trueValue);

    // Don’t display user guess for the 'handlagda' bar, push the user guess value or null for other bars.
    if (isHandlagda) {
      userData.push(null); // 'handlagda' should not have a user guess.
    } else {
      userData.push(
        userGuesses[label] !== undefined
          ? label === "personuppklaringsprocent"
            ? parseInt((userGuesses[label] / 100) * selectedQuestion.handlagda)
            : userGuesses[label]
          : null // Push null if the user hasn't guessed yet.
      );
    }
  });

  const data = {
    labels: mappedLabels.filter((_, index) => labels[index] !== "lagforingsprocent"),
    datasets: [
      {
        label: "2022",
        data: trueData,
        backgroundColor: [
          "#1862a8",
          "#ffcc33",
          "#bb2b20",
          "#97bf0d",
          "#0099cc",
        ],
        skipNull: true,
      },
      !hideUserGuesses && {
        label: "Din gissning",
        data: userData,
        backgroundColor: "#efefef",
      },
    ].filter((dataset) => dataset && dataset.data.some((value) => value !== null)), // filter out datasets with all null values
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback(value) {
            return Number(value).toLocaleString("sv");
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += Number(context.parsed.y).toLocaleString("sv");
            }
            return label;
          },
        },
      },
      datalabels: {
        anchor: "end",
        display: true,
        color: "black",
        align: "top",
        font: {
          weight: "bold",
        },
        labels: {
          value: {
            color: "black",
          },
        },
        formatter: function (value) {
          return value > 0 ? Number(value).toLocaleString("sv") : "";
        },
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
    // <Card sx={{ minWidth: 275, mb:2 }}>
    //   {/* <CardHeader
    //     title={selectedQuestion.kategori}
    //     subheader={selectedQuestion.underkategori}
    //   /> */}
    //   <CardContent >
    //   </CardContent>
    // </Card>
  );
}

export default QuestionGraph;
