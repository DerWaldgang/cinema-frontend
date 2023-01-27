import { IUser } from "@/shared/types/user.types";

export interface IProfileField extends Pick<IUser, 'email' | 'password'> {}