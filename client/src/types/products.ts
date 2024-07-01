export interface IProducts {
	id: number;
	name: string;
	image_src: string;
	price: string;
}

export interface IProductsState {
	items: IProducts[];
}
