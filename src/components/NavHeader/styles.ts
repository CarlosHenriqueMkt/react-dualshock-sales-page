import styled from "styled-components";

export const Header = styled.header`
    padding-left: 8%;
    padding-right: 8%;
    overflow: hidden;
    
    nav {
    width: 100%;
    display: flex;
    align-items: center;
    }
    
    li {
        margin-right: 30px;
    }

    ul, li {
        list-style: none;
        display: inline-block;
        text-align: right;
        flex: 1;
    }

    nav, ul, li, a {
        text-decoration: none;
        color: #000;
        font-size: 14px;
    }

    nav, ul, li, a:hover{
        color: #ff5ea2;
    }

    .logo {
        width: 50px;
        cursor: pointer;
        margin: 30px 0;
    }

    .menu-icon{
        width: 25px;
        cursor: pointer;
        display: none;
    }

    .closedMenu, .openMenu {
        transition: height 0.7s ease-in-out;
        overflow: hidden;
    }

    @media (max-width:700px) {
        
        nav {
            justify-content: space-between;
        }
       
        nav ul {
            display: inline-block;
            width: 100%;
            background: linear-gradient(#fb54a2, #ff575a);
            position: absolute;
            top: 75px;
            right: 0;
            z-index: 2;
        }

        .openMenu {
            height: 118px;
            display: inline-block;
        }

        .closedMenu {
            height: 0;
            display: inline-block;
        }

        nav ul li {
            display: block;
            margin-top: 10px;
            margin-bottom: 10px;
        }

        nav ul li a {
            color: #fff;
        }
        .menu-icon{
            display: block;
        }
        

    }
`;