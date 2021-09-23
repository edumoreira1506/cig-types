export interface IPoultry {
  id: string;
  name: string;
  description: string;
  address: IPoultryAddress;
  active: boolean;
  foundationDate: Date;
}

export interface IPoultryAddress {
  city: string;
  province: string;
  street: string;
  zipcode: string;
  number: number;
}

export interface IPoultryUser {
  id: string;
  userId: string;
  poultryId: string;
}