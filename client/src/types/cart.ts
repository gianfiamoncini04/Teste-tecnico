interface IProduct {
  id: number;
  name: string;
  price: number;
}

export interface ICartState {
  items: IProduct[];
}
