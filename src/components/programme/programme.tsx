import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Card, Title, Paragraph, Divider } from "react-native-paper";
import expansionPanel from "../common/expansionPanel";
// import UpdateProgress from "./UpdateProgress";
// import ReportIssueDialog from "./ReportIssueDialog";
import moment from "moment";
// import IssueList from "./IssueList";
import NumberInput from "../common/numberInput";
// import ConfirmProgressDialog from "./ConfirmProgressDialog";
import parsePlotNumber from "./Utils";
import PlotsDetailsList from "./PlotsDetailsList";
// import CameraImage from "./CameraImage";
// import { withNavigation } from "react-navigation";
import { IProgramme } from "../../features/programme/types";
import { IUser } from "../../features/auth/types";
import { AppThunk } from "../../redux-store/store";

interface Props {
  key: number;
  active: boolean;
  programme: IProgramme;
  user: IUser;
  setCurrentProgramme: (id: number) => Promise<AppThunk>;
  displaySnackbar: (type: string, message: string) => void;
  currentProgramme: IProgramme;
}

export interface ICursor {
  cursors: object;
  percentageDone: number | null;
  cursorPercentageDone: number | null;
  ventsPercentageDone: number | null;
  cursorVentsDone: number | null;
  hcPercentageDone: number | null;
  cursorHipCutsDone: number | null;
  vcPercentageDone: number | null;
  cursorValleyCutsDone: number | null;
  cursorBeadsDone: number | null;
  beadsPercentageDone: number | null;
  cursorIngoesDone: number | null;
  ingoesPercentageDone: number | null;
}

const programme = (props: Props) => {
  //   const programme;
  return <div></div>;
};

export default programme;
