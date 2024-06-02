import { BarChart } from "react-native-gifted-charts";
import { useState } from "react";

const colorMapper = {
  first: "red",
  second: "blue",
  third: "green",
  fourth: "yellow",
  fifth: "purple",
  sixth: "orange",
  seventh: "pink",
  eighth: "brown",
  ninth: "black",
  tenth: "grey",
};

function sortByStackSum(data) {
  return data.sort((a, b) => {
    const sumA = a.stacks.reduce((acc, curr) => acc + curr.value, 0);
    const sumB = b.stacks.reduce((acc, curr) => acc + curr.value, 0);
    return sumB - sumA; // Descending order (highest sum first)
  });
}

// 14 example player data
const data = [
  {
    stacks: [
      { value: 1, color: colorMapper["first"] },
      { value: 2, color: colorMapper["second"] },
      { value: 3, color: colorMapper["third"] },
      { value: 4, color: colorMapper["fourth"] },
      { value: 5, color: colorMapper["fifth"] },
      { value: 6, color: colorMapper["sixth"] },
      { value: 7, color: colorMapper["seventh"] },
      { value: 8, color: colorMapper["eighth"] },
      { value: 9, color: colorMapper["ninth"] },
      { value: 1, color: colorMapper["tenth"] },
    ],
    label: "Peter Test",
  },
  {
    stacks: [
      { value: 1, color: colorMapper["first"] },
      { value: 2, color: colorMapper["second"] },
      { value: 1, color: colorMapper["third"] },
      { value: 2, color: colorMapper["fourth"] },
      { value: 3, color: colorMapper["fifth"] },
      { value: 4, color: colorMapper["sixth"] },
      { value: 4, color: colorMapper["seventh"] },
      { value: 6, color: colorMapper["eighth"] },
      { value: 8, color: colorMapper["ninth"] },
      { value: 3, color: colorMapper["tenth"] },
    ],
    label: "John Test",
  },
  {
    stacks: [
      { value: 7, color: colorMapper["first"] },
      { value: 2, color: colorMapper["second"] },
      { value: 4, color: colorMapper["third"] },
      { value: 1, color: colorMapper["fourth"] },
      { value: 5, color: colorMapper["fifth"] },
      { value: 9, color: colorMapper["sixth"] },
      { value: 3, color: colorMapper["seventh"] },
      { value: 8, color: colorMapper["eighth"] },
      { value: 6, color: colorMapper["ninth"] },
      { value: 10, color: colorMapper["tenth"] },
    ],
    label: "Dennis Test",
  },
  {
    stacks: [
      { value: 4, color: colorMapper["first"] },
      { value: 1, color: colorMapper["second"] },
      { value: 3, color: colorMapper["third"] },
      { value: 8, color: colorMapper["fourth"] },
      { value: 2, color: colorMapper["fifth"] },
      { value: 6, color: colorMapper["sixth"] },
      { value: 5, color: colorMapper["seventh"] },
      { value: 7, color: colorMapper["eighth"] },
      { value: 9, color: colorMapper["ninth"] },
      { value: 1, color: colorMapper["tenth"] },
    ],
    label: "Jennifer Test",
  },
  {
    stacks: [
      { value: 2, color: colorMapper["first"] },
      { value: 5, color: colorMapper["second"] },
      { value: 8, color: colorMapper["third"] },
      { value: 1, color: colorMapper["fourth"] },
      { value: 3, color: colorMapper["fifth"] },
      { value: 7, color: colorMapper["sixth"] },
      { value: 6, color: colorMapper["seventh"] },
      { value: 4, color: colorMapper["eighth"] },
      { value: 9, color: colorMapper["ninth"] },
      { value: 10, color: colorMapper["tenth"] },
    ],
    label: "Michael Test",
  },
  {
    stacks: [
      { value: 9, color: colorMapper["first"] },
      { value: 3, color: colorMapper["second"] },
      { value: 1, color: colorMapper["third"] },
      { value: 4, color: colorMapper["fourth"] },
      { value: 6, color: colorMapper["fifth"] },
      { value: 8, color: colorMapper["sixth"] },
      { value: 2, color: colorMapper["seventh"] },
      { value: 5, color: colorMapper["eighth"] },
      { value: 7, color: colorMapper["ninth"] },
      { value: 10, color: colorMapper["tenth"] },
    ],
    label: "Samantha Test",
  },
  {
    stacks: [
      { value: 1, color: colorMapper["first"] },
      { value: 1, color: colorMapper["second"] },
      { value: 1, color: colorMapper["third"] },
      { value: 1, color: colorMapper["fourth"] },
      { value: 1, color: colorMapper["fifth"] },
      { value: 2, color: colorMapper["sixth"] },
      { value: 2, color: colorMapper["seventh"] },
      { value: 2, color: colorMapper["eighth"] },
      { value: 2, color: colorMapper["ninth"] },
      { value: 2, color: colorMapper["tenth"] },
    ],
    label: "Tom Test",
  },
  {
    stacks: [
      { value: 3, color: colorMapper["first"] },
      { value: 1, color: colorMapper["second"] },
      { value: 5, color: colorMapper["third"] },
      { value: 7, color: colorMapper["fourth"] },
      { value: 2, color: colorMapper["fifth"] },
      { value: 4, color: colorMapper["sixth"] },
      { value: 8, color: colorMapper["seventh"] },
      { value: 6, color: colorMapper["eighth"] },
      { value: 9, color: colorMapper["ninth"] },
      { value: 10, color: colorMapper["tenth"] },
    ],
    label: "Steep Mountain",
  },
  {
    stacks: [
      { value: 10, color: colorMapper["first"] },
      { value: 9, color: colorMapper["second"] },
      { value: 8, color: colorMapper["third"] },
      { value: 7, color: colorMapper["fourth"] },
      { value: 6, color: colorMapper["fifth"] },
      { value: 5, color: colorMapper["sixth"] },
      { value: 4, color: colorMapper["seventh"] },
      { value: 3, color: colorMapper["eighth"] },
      { value: 2, color: colorMapper["ninth"] },
      { value: 1, color: colorMapper["tenth"] },
    ],
    label: "Descending Ramp",
  },
  {
    stacks: [
      { value: 5, color: colorMapper["first"] },
      { value: 5, color: colorMapper["second"] },
      { value: 5, color: colorMapper["third"] },
      { value: 5, color: colorMapper["fourth"] },
      { value: 5, color: colorMapper["fifth"] },
      { value: 6, color: colorMapper["sixth"] },
      { value: 6, color: colorMapper["seventh"] },
      { value: 6, color: colorMapper["eighth"] },
      { value: 6, color: colorMapper["ninth"] },
      { value: 6, color: colorMapper["tenth"] },
    ],
    label: "Flat Plateau",
  },
  {
    stacks: [
      { value: 1, color: colorMapper["first"] },
      { value: 3, color: colorMapper["second"] },
      { value: 5, color: colorMapper["third"] },
      { value: 7, color: colorMapper["fourth"] },
      { value: 9, color: colorMapper["fifth"] },
      { value: 7, color: colorMapper["sixth"] },
      { value: 5, color: colorMapper["seventh"] },
      { value: 3, color: colorMapper["eighth"] },
      { value: 1, color: colorMapper["ninth"] },
      { value: 10, color: colorMapper["tenth"] },
    ],
    label: "Wavy Hills",
  },
  {
    stacks: [
      { value: 4, color: colorMapper["first"] },
      { value: 8, color: colorMapper["second"] },
      { value: 2, color: colorMapper["third"] },
      { value: 6, color: colorMapper["fourth"] },
      { value: 10, color: colorMapper["fifth"] },
      { value: 1, color: colorMapper["sixth"] },
      { value: 5, color: colorMapper["seventh"] },
      { value: 9, color: colorMapper["eighth"] },
      { value: 3, color: colorMapper["ninth"] },
      { value: 7, color: colorMapper["tenth"] },
    ],
    label: "Scattered Peaks",
  },
  {
    stacks: [
      { value: 2, color: colorMapper["first"] },
      { value: 4, color: colorMapper["second"] },
      { value: 6, color: colorMapper["third"] },
      { value: 8, color: colorMapper["fourth"] },
      { value: 10, color: colorMapper["fifth"] },
      { value: 8, color: colorMapper["sixth"] },
      { value: 6, color: colorMapper["seventh"] },
      { value: 4, color: colorMapper["eighth"] },
      { value: 2, color: colorMapper["ninth"] },
      { value: 1, color: colorMapper["tenth"] },
    ],
    label: "Mirrored Mountain",
  },
  {
    stacks: [
      { value: 1, color: colorMapper["first"] },
      { value: 2, color: colorMapper["second"] },
      { value: 2, color: colorMapper["third"] },
      { value: 3, color: colorMapper["fourth"] },
      { value: 3, color: colorMapper["fifth"] },
      { value: 4, color: colorMapper["sixth"] },
      { value: 4, color: colorMapper["seventh"] },
      { value: 5, color: colorMapper["eighth"] },
      { value: 5, color: colorMapper["ninth"] },
      { value: 6, color: colorMapper["tenth"] },
    ],
    label: "Incremental Steps",
  },
  {
    stacks: [
      { value: 10, color: colorMapper["first"] },
      { value: 1, color: colorMapper["second"] },
      { value: 10, color: colorMapper["third"] },
      { value: 1, color: colorMapper["fourth"] },
      { value: 10, color: colorMapper["fifth"] },
      { value: 1, color: colorMapper["sixth"] },
      { value: 10, color: colorMapper["seventh"] },
      { value: 1, color: colorMapper["eighth"] },
      { value: 10, color: colorMapper["ninth"] },
      { value: 1, color: colorMapper["tenth"] },
    ],
    label: "Alternating Peaks",
  },
];

const CustomStackedBarChart = () => {
  const [stackData, setStackData] = useState(sortByStackSum(data));
  return (
    <BarChart
      stackData={stackData}
      rotateLabel
      barWidth={16}
      barBorderRadius={5}
    />
  );
};

export default CustomStackedBarChart;
