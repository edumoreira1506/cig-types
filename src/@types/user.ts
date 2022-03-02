export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  register: string;
  birthDate?: Date;
  registerType: string;
  externalId?: string;
}
