import styled from "styled-components";

export const Games = styled.section`
    margin: 100px 0;  
    padding-left: 8%;
    padding-right: 8%;

    .gameTittle {
        text-align: center;
        color: #707070
    }
    
    h2 {
    font-size: 34px;
    }

    p {
        font-weight: 600;
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

    @media (max-width:1065px){
        display: flex;
        flex-direction: column;
        flex: 0 1 48%;
        margin-top: 50px 0;
        
        .flex {
        justify-content: center;
        }

        h2 {
        font-size: 24px;
        }

        .gallery img {
        width: 300px;
        object-fit: cover;
        }

    }


    @media (max-width:700px) {

    display: flex;
    flex-direction: column;
    margin: 50px 0;

    .flex {
    justify-content: center;
    
    }

    h2 {
        font-size: 24px;
    }

    img {
    width: 300px;
    height: auto;
    }
}

    @media (max-width: 500px) {
    
    display: flex;
    flex-direction: column;
    margin: 50px 0;

    .flex {
    justify-content: center;
    }

    h2 {
        font-size: 24px;
    }

    img {
    width: 250px;
    height: auto;
    }
}
`