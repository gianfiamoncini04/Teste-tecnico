import { styled } from "styled-components";

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	gap: 3rem;
	padding: 1.5rem;
	flex-wrap: wrap;
	justify-content: center;

	@media (min-width: 768px){
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	@media (min-width: 1280px){
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
`;

export const List = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
    align-items: center;
	gap: 1rem;
	padding: 1rem;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
	background-color: #fff;
	transition-duration: 200ms;

	&:hover{
		transform: scale(1.1);
	}
`;

export const Item = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
    align-items: center;
	gap: 1rem;
	padding: 1rem;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
`;

export const Image = styled.img`
	width: 200px;
`;
