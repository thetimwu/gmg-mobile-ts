import { IProgramme } from "../../features/programme/types";

const utils = (props: IProgramme): string => {
  let plotNumber: string = "";

  const plotNumbers: number[] = [];
  if (props.type === "single") {
    plotNumber = props.plotNumber.toString();
  } else if (props.type === "block" && props.plots) {
    props.plots.forEach((plot) => plotNumbers.push(plot.plotNumber));
    const sortedPlotNumbers: number[] = plotNumbers.sort();
    if (sortedPlotNumbers.length > 2) {
      plotNumber =
        sortedPlotNumbers[0] +
        " - " +
        sortedPlotNumbers[sortedPlotNumbers.length - 1];
    } else {
      plotNumber = sortedPlotNumbers[0] + ", " + sortedPlotNumbers[1];
    }
  }
  return plotNumber;
};

export default utils;
