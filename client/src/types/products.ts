interface IProducts {
	id: number;
	name: string;
	image_src: string;
	price: string;
}

export const data: IProducts[] = [
	{
		"id": Math.random(),
        "name": "185/60R14 82H Westlake ZuperEco Z108",
		"image_src":
			"https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-18560r14-82h-westlake-zupereco-z108-1.png?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg",
		"price": "R$ 219,00",
	},
	{
		"id": Math.random(),
        "name": "185/60R14 82H SAFERICH FRC16",
		"image_src":
			"https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-18560r14-saferich-frc16-82h-1.png?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
		"price": "199.99",
	},
	{
		"id": Math.random(),
        "name": "185/60R15 84H APTANY RP203",
		"image_src":
			"https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-18560r15-84h-aptany-rp203-1.png?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
		"price": "149.99",
	},
	{
		"id": Math.random(),
        "name": "195/55R15 85V WESTLAKE ZUPERECO Z108",
		"image_src":
			"https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-19555r15-85v-westlake-zupereco-z108-1.png?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
		"price": "179.99",
	},
	{
		"id": Math.random(),
        "name": "195/60R15 88V WESTLAKE ZUPERECO Z108",
		"image_src":
			"https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-19560r15-88v-westlake-zupereco-z108-1.png?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
		"price": "139.99",
	},
	{
		"id": Math.random(),
        "name": "195/55R15 85V SAFERICH FRC16",
		"image_src":
			"https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-19555r15-85v-saferich-frc16-1.png?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
		"price": "119.99",
	},
	{
		"id": Math.random(),
        "name": "185/55R15 82V SAFERICH FRC16",
		"image_src":
			"https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-18555r15-82v-saferich-frc16-1.png?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
		"price": "249.99",
	},
	{
		"id": Math.random(),
        "name": "185/60R15 84H SAFERICH FRC16",
		"image_src":
			"https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-18560r15-84h-saferich-frc16-1.png?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
		"price": "199.99",
	},
	{
		"id": Math.random(),
        "name": "175/65R15 84H Saferich FRC16",
		"image_src":
			"https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-17565r15-84h-saferich-frc16-1.png?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
		"price": "169.99",
	},
	{
		"id": Math.random(),
        "name": "185/60R15 84H Westlake ZuperEco Z108",
		"image_src":
			"https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-18560r15-84h-westlake-zupereco-z108-1.png?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
		"price": "189.99",
	},
];

export interface IProductsState {
	data: IProducts[];
}
