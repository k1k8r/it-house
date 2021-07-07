import { IRole } from './';

export interface IProfile {
  id: number;
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
  age: number;
  work_exp: number;
  knowledge: string;
  role: IRole[];
  profile_event: [];
}
