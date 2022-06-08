import styled from "styled-components";

export const MainContent = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;
    padding-left: 8%;
    padding-right: 8%;
    overflow: hidden;



    .col-1 {
        flex-basis: 40%;
        position: relative;
        margin-left: 50px;
        h2 {
            font-size: 54px;
            margin: 0;
        }
        h3 {
            font-size: 30px;
            color: #707070;
            font-weight: 100;
            margin: 20px 0px 10px 0px;
        }
        p {
            font-size: 16px;
            color: #b7b7b7;
            font-weight: 100;
            margin: 0;
        }
        h4 {
            font-size: 20px;
            margin: 30px 0;
        }
        a{
            text-decoration: none;
        }
        button {
            width: 140px;
            border: 0;
            padding: 12px 10px;
            outline: none;
            color: #fff;
            background: linear-gradient(to right, #fb5283, #ff3527);
            border-radius: 6px;
            cursor: pointer;
            transition: width .5s;
        }
            button img{
                width: 30px;
                display: none;
            }

                button:hover img {
                    display: block;
                }

                button:hover{
                    width: 200px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                    
    }
    .col-1::after {
        content:'';
        width: 10px;
        height: 57%;
        background: linear-gradient(#ff469f, #ff6062);
        position: absolute;
        left: -40px;
        top: 8px;
    }

    .col-2{
        position: relative;
        flex-basis: 60%;
        display: flex;
        align-items: center;
        .controller{
            width: 90%;
        }
        .color-box{
            position: absolute;
            right: 0;
            top: 0;
            background: linear-gradient(#ff54a2, #ff575a);
            border-radius: 20px 0 0 20px;
            height: 100%;
            width: 90%;
            z-index: -1;
            transform: translateX(150px); 
        }
    }

    .add-btn{
        text-align: center;
        color: #fff;
        cursor: pointer;
        margin-bottom: 0;
        
        p{
            margin: 0;
        }

        img{
            width: 35px;
            margin-bottom: 5px;
        }
    }
    @media (max-width:700px) {
        flex-direction: column-reverse;
        margin: 50px 0;
        

        .col-2{
            flex-basis: 100%;
            margin-bottom: 50px;
        }

        .col-2 .controller{
            width: 77%;
        }

        .col-2 .color-box{
            transform: translateX(75px);
        }

        .col-1 {
            flex-basis: 100%;
        }

        .col-1 h2 {
            font-size: 35px;
        }

        .col-1 h3 {
            font-size: 14.5px;
        }
    }
`;