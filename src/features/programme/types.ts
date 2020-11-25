type addressType = {
  addressLine1: string;
  city: string;
  postalCode: string;
};

type workerType = {
  id: number;
  firstname: string;
  lastname: string;
};

export interface IProgramme {
  id: number;
  JobSchedID: number;
  date: string;
  customer: string;
  site: string;
  siteId: number;
  address: addressType;
  worker: workerType;
  plotId: number;
  plotNumber: number;
  houseType: string;
  area: number | null;
  areaDone: number | null;
  vents: number | null;
  ventsDone: number | null;
  hipCuts: number | null;
  hipCutsDone: number | null;
  valleyCuts: number | null;
  valleyCutsDone: number | null;
  beads: number | null;
  beadsDone: number | null;
  ingoes: number | null;
  ingoesDone: number | null;
  percentageDone: number | null;
  attended: boolean;
  reassigned: boolean;
  blockID: number | null;
  type: string;
  issues: string[];
  notes: string | null;
  plots?: IProgrammeBlock[];
}

export interface IProgrammeBlock {
  MenAllocID: number;
  JobSchedID: number;
  plotNumber: number;
  area: number | null;
  areaDone: number | null;
  vents: number | null;
  ventsDone: number | null;
  valleyCuts: number | null;
  valleyCutsDone: number | null;
  hipCuts: number | null;
  hipCutsDone: number | null;
  beads: number | null;
  beadsDone: number | null;
  ingoes: number | null;
  ingoesDone: number | null;
  notes: string | null;
}

export interface IFetchProgramme {
  startDate: string;
  endDate: string;
}

export interface IProgState {
  loading: boolean;
  programme: [] | IProgramme[];
  error: any;
}
