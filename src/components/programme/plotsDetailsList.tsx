import React from "react";
import { IProgramme } from "../../features/programme/types";
import PlotDetails from "./plotDetails";

interface ICursorsSingle {
  cursorVentsDone: number | null;
  cursorHipCutsDone: number | null;
  cursorValleyCutsDone: number | null;
  cursorBeadsDone: number | null;
  cursorIngoesDone: number | null;
}

interface ICursors {
  [key: string]: number | null;
}

interface Props {
  programme: IProgramme;
  isActive: boolean;
  cursors: ICursors;
  handleUpdate: (value: number, cursor: string) => void;
}

const plotsDetailsList = ({
  programme,
  isActive,
  cursors,
  handleUpdate,
}: Props) => {
  const {
    plotNumber,
    vents,
    ventsDone,
    hipCuts,
    hipCutsDone,
    valleyCuts,
    valleyCutsDone,
    beads,
    beadsDone,
    ingoes,
    ingoesDone,
    type,
    plots,
  } = programme;

  return !plots ? (
    <PlotDetails
      plotNumber={plotNumber}
      isActive={isActive}
      type={type}
      cursorVentsDone={cursors.cursorVentsDone}
      ventsDone={ventsDone}
      vents={vents}
      cursorHipCutsDone={cursors.cursorHipCutsDone}
      hipCutsDone={hipCutsDone}
      hipCuts={hipCuts}
      cursorValleyCutsDone={cursors.cursorValleyCutsDone}
      valleyCutsDone={valleyCutsDone}
      valleyCuts={valleyCuts}
      cursorBeadsDone={cursors.cursorBeadsDone}
      beadsDone={beadsDone}
      beads={beads}
      cursorIngoesDone={cursors.cursorIngoesDone}
      ingoesDone={ingoesDone}
      ingoes={ingoes}
      handleUpdate={(value: number, cursor: string) =>
        handleUpdate(value, `${cursor}`)
      }
    />
  ) : (
    plots.map((plot) => {
      // don't show anything if plot has no extra details
      if (!plot.vents && !plot.hipCuts && !plot.valleyCuts) return null;
      return (
        <PlotDetails
          key={plot.plotNumber}
          plotNumber={plot.plotNumber}
          isActive={isActive}
          type={type}
          cursorVentsDone={cursors[`cursorVentsDone${plot.plotNumber}`]}
          ventsDone={plot.ventsDone}
          vents={plot.vents}
          cursorHipCutsDone={cursors[`cursorHipCutsDone${plot.plotNumber}`]}
          hipCutsDone={plot.hipCutsDone}
          hipCuts={plot.hipCuts}
          cursorValleyCutsDone={
            cursors[`cursorValleyCutsDone${plot.plotNumber}`]
          }
          valleyCutsDone={plot.valleyCutsDone}
          valleyCuts={plot.valleyCuts}
          cursorBeadsDone={cursors[`cursorBeadsDone${plot.plotNumber}`]}
          beadsDone={plot.beadsDone}
          beads={plot.beads}
          cursorIngoesDone={cursors[`cursorIngoesDone${plot.plotNumber}`]}
          ingoesDone={plot.ingoesDone}
          ingoes={plot.ingoes}
          handleUpdate={(value, cursor) =>
            handleUpdate(value, `${cursor}${plot.plotNumber}`)
          }
        />
      );
    })
  );
};

export default plotsDetailsList;
