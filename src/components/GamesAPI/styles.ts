import styled from "styled-components";

export const Games = styled.section`
    position: relative;
    justify-content: space-between;
    align-items: center;
    margin: 100px 0;  
    padding-left: 8%;
    padding-right: 8%;

    .gameTittle {
        position: relative;
        margin-bottom: 10px;
        text-align: center;
    }

    h2 {
        font-size: 34px;
    }

    p {
        color: #707070;
        font-size: 17px;
    }

    h2, p {
        margin: 0px;
    }

    .flex {
        display: flex;
        flex-wrap: wrap;
        
        justify-content: space-between;
        
        margin-top: 20px;
        
    }

    .gameBox {
        justify-content: center;
        text-align: center;
        margin-bottom: 30px;
        max-width: 100%;
    }

    .gameBox a > img {
        background-color: #8ca0ff;
        max-width: 280px;
        max-height: 157px;
        margin: 10px;
        border-radius: 10px;
    }

    @media (max-width:700px) {

        display: flex;
        flex-direction: column;
        margin: 50px 0;

        h2 {
            font-size: 24px;
        }
        
        p {
            font-size: 12.5px;
        }

        .flex {
            justify-content: center;
        }

        img {
            width: 300px;
            height: auto;
        }
    }
`