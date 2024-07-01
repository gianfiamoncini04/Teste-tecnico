interface IProduct {
  id: number;
  name: string;
  price: number;
}

export interface IWishState {
  items: IProduct[];
}
