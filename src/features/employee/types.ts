export interface IOperative {
  EmployeeID: number;
  FirstName: string;
  LastName: string;
  EmployeeType: number;
  Tradesman: boolean;
  JobID: number;
  Current: boolean;
}

export interface IOperativeState {
  loading: boolean;
  operatives: [] | IOperative[];
  error: any;
}
