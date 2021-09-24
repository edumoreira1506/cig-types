export interface IBreeder {
  id: string;
  name: string;
  description: string;
  address: IBreederAddress;
  active: boolean;
  foundationDate: Date;
}

export interface IBreederAddress {
  city: string;
  province: string;
  street: string;
  zipcode: string;
  number: number;
}

export interface IBreederUser {
  id: string;
  userId: string;
  breederId: string;
}
