import React from "react";
import { Bar } from "react-chartjs-2";

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

function QuestionGraph({ selectedQuestion, userGuesses }) {
  const labels = ["handlagda", ...Object.keys(selectedQuestion.properties)];
  const trueData = [];
  const userData = [];
  const mappedLabels = labels.map((label) => mapColumnNames(label));

  labels.forEach((label) => {
    const isHandlagda = label === "handlagda";

    // Calculate the true value for each label, 'handlagda' has a different calculation logic.
    const trueValue = isHandlagda
      ? selectedQuestion.handlagda
      : label === "lagforingsprocent" || label === "personuppklaringsprocent"
      ? parseInt(
          (selectedQuestion.properties[label].value / 100) *
            selectedQuestion.handlagda
        )
      : selectedQuestion.properties[label].value;

    // Push the true value to trueData array if it's 'handlagda' or it is visible and has been guessed by the user.
    if (
      isHandlagda ||
      (selectedQuestion.properties[label]?.visible &&
        userGuesses[label] !== undefined)
    ) {
      trueData.push(trueValue);
    } else {
      trueData.push(null); // Push null if the true value should not be visible.
    }

    // Don’t display user guess for the 'handlagda' bar, push the user guess value or null for other bars.
    if (isHandlagda) {
      userData.push(null); // 'handlagda' should not have a user guess.
    } else {
      userData.push(
        userGuesses[label] !== undefined
          ? label === "lagforingsprocent" ||
            label === "personuppklaringsprocent"
            ? parseInt((userGuesses[label] / 100) * selectedQuestion.handlagda)
            : userGuesses[label]
          : null // Push null if the user hasn't guessed yet.
      );
    }
  });

  const data = {
    labels: mappedLabels.filter(
      (_, index) =>
        labels[index] === "handlagda" ||
        userGuesses[labels[index]] !== undefined
    ),
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
      {
        label: "Din gissning",
        data: userData,
        backgroundColor: "#efefef",
      },
    ].filter((dataset) => dataset.data.some((value) => value !== null)), // filter out datasets with all null values
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
    <Bar data={data} options={options} />
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
