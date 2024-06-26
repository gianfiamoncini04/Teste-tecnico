import { styled } from "styled-components";

export const Container = styled.div`
	display: flex;
	gap: 1rem;
	padding: 1rem;
	flex-wrap: wrap;
	justify-content: center;
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
    cursor: pointer;
`;

export const Image = styled.img`
	width: 200px;
`;
