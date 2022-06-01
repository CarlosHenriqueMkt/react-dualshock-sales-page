import styled from "styled-components";

export const NewGame = styled.section`
    padding-left: 8%;
    padding-right: 8%;
    margin: 100px 0;

.newsTitle {
  position: relative;
  margin-left: 50px;
  margin-bottom: 10px;
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

p{
  margin: 0;
}

.newsTitle::after {
        content:'';
        width: 10px;
        height: 57%;
        background: linear-gradient(#ff469f, #ff6062);
        position: absolute;
        left: -40px;
        top: 8px;
}
    
.flex {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  max-width: 100%;
  margin-left: 41px;
  margin-top: 20px;
    }

img {
        background-color: #8ca0ff;
        max-width: 280px;
        max-height: 280px;
    }

.gallery {
  border: 0px solid #ccc;
}

.gallery:hover {
  border: 1px solid #777;
  background: linear-gradient(to right, #ff469f, #ff6062);
  color: white;
}

.gallery img {
  width: 100%;
  height: auto;
}

.paragraph {
  padding: 10px;
  text-align: center;
  font-size: 15px;
}

* {
  box-sizing: border-box;
}



@media (max-width: 700px) {
  .flex {
    width: 50%;
    margin: 6px 0;
  }
}

@media (max-width: 500px) {
  .flex {
    width: 100%;
  }
}

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
`