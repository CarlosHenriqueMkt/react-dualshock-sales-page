import styled from "styled-components";

export const NewGame = styled.section`
	padding-left: 8%;
	padding-right: 8%;
	margin: 100px 0px;
	box-sizing: border-box;

	.newsTitle {
		text-align: center;
		color: #707070;
	}

	.newsTitle h2 {
		font-size: 34px;
	}

	.newsTitle p {
		color: #707070;
		font-size: 17px;
	}

	h2 {
		margin: 0;
	}

	p {
		margin: 0;
	}

	.flex {
		position: relative;

		display: flex;
		flex-wrap: wrap;

		justify-content: center;
		text-align: center;

		margin-top: 20px;
		gap: 20px;
	}

	.gallery:hover {
		border-radius: 10px;
		background: linear-gradient(to right, #ff469f, #ff6062);
		color: white;
	}

	.gallery img {
		width: 100%;
		object-fit: cover;
		border-radius: 10px;
	}

	.gallery {
		width: 100%;
		overflow-wrap: break-word;
	}

	.paragraph {
		padding: 7px;

		text-align: center;
		font-weight: 550;
		font-size: 22px;

		word-wrap: break-word;
		hyphens: auto;
	}

	.flex > div {
		flex: 0 1 49%;
	}

	@media (max-width: 700px) {
		.flex {
			width: 100%;
			margin: 6px 0;
			justify-content: center;
		}

		.newsTitle {
			justify-content: center;
		}

		.newsTitle h2 {
			font-size: 24px;
		}

		.newsTitle p {
			font-size: 12.5px;
		}
	}

	@media (max-width: 500px) {
		.flex > div {
			flex: 0 0 100%;
			display: flex;
			justify-content: center;
		}

		.flex {
			width: 100%;
			margin-top: 20px;
		}

		.paragraph {
			font-size: 16px;
			font-weight: 600;
		}

		.flex > img {
			width: 300px;
			height: auto;
		}

		h2 {
			font-size: 24px;
		}

		p {
			font-size: 12.5px;
		}
	}

	.clearfix:after {
		content: "";
		display: table;
		clear: both;
	}
`;
