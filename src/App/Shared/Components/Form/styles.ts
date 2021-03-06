import styled from "styled-components";

export const Cupom = styled.form`
    padding-left: 25%;
    padding-right: 25%;
    margin: 100px 0;
    
    
    .registerForm{
        position: relative;
        margin-bottom: 10px;
    }


    .formField {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
    }

    button {
        background: linear-gradient(to right, #ff54a2, #ff575a);
        border: none;
        color: white;
        padding: 16px 32px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
    }

    .subscribeTitle {
        text-align: center;
        padding-left: 8%;
        padding-right: 8%;
    }

    @media (max-width:700px) {

    flex-direction: row;
    margin: 50px 0;
    padding-left: 8%;
    padding-right: 8%;
    align-items: center;

    }

`