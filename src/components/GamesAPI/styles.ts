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
        margin-left: 50px;
        margin-bottom: 10px;
    }

    .gameTittle::after {
        content:'';
        width: 10px;
        height: 60%;
        background: linear-gradient(#ff469f, #ff6062);
        position: absolute;
        left: -40px;
        top: 8px;
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
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        margin-left: 41px;
        margin-top: 20px;
        
    }

    .gameBox {
        justify-content: center;
        text-align: center;
        margin-bottom: 30px;
        max-width: 100%;
    }

    .gameBox > img {
        background-color: #8ca0ff;
        max-width: 280px;
        max-height: 280px;
        margin: 10px;
    }

    @media (max-width:700px) {

        flex-direction: column-reverse;
        margin: 50px 0;

        .flexMaster {
            padding-left: 9px;
        }
        .gameTittle {
            max-width: 233px;
        }

        h2 {
            font-size: 25px;
        }
        
        p {
            font-size: 12.5px;
        }

        .flex {
            margin-left: 0px;
        }
    }
`