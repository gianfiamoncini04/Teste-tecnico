import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
	text-decoration: none;
	padding: 0.8rem 1.6rem;
	background-color: #000;
	color: #fff;
	border-radius: 10px;
`;

export const Container = styled.div`
	display: flex;
    padding-top: 10rem;
	flex-wrap: nowrap;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;
