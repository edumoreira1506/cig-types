export interface IBreeder {
  id: string;
  name: string;
  description: string;
  address: IBreederAddress;
  active: boolean;
  foundationDate: Date;
  profileImageUrl?: string;
  mainVideo?: string;
}

export interface IBreederAddress {
  city: string;
  province: string;
  street: string;
  zipcode: string;
  number: number;
}

export interface IBreederImage {
  id: string;
  breederId: string;
  imageUrl: string;
}

export interface IBreederUser {
  id: string;
  userId: string;
  breederId: string;
}
