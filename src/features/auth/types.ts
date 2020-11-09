export type role =
  | "admin"
  | "contractsManager"
  | "tradesman"
  | "apprentice"
  | "office";

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  type: role;
}

export interface IUserBody {
  user: IUser;
  ttl: number;
  created: string;
  authToken: string;
}

export interface IAuth {
  authToken: string | null;
  loggedIn: boolean;
  user: IUser | null;
  loading: boolean;
  error: any;
}

export interface ILoginDetail {
  username: string;
  password: string;
}
