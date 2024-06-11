import axios, { AxiosResponse } from "axios";

export interface IUserInterface {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  avatar_url: any;
  phone: any;
  designation: any;
  address: any;
  full_name: any;
  user_role: any;
  join_date: string;
}

export const getAllUsers = async (
  headers: string
): Promise<AxiosResponse<IUserInterface[]>> => {
  const response: AxiosResponse<IUserInterface[]> = await axios.get(
    "http://localhost:1337/api/users",
    {
      headers: { Authorization: `Bearer ${headers}` },
    }
  );
  console.log(response);
  return response;
};
