import styled from "styled-components";

export const NewGame = styled.section`
  padding-left: 8%;
  padding-right: 8%;
  margin: 100px 0px;
  box-sizing: border-box;

.newsTitle {
  position: relative;
  margin-bottom: 10px;
  text-align: center;
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
    
.flex {
  position: relative;
  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  max-width: 1200px;
  
  text-align: center;
  
  margin-top: 20px;
  justify-content: space-between;
    }

.gallery:hover {
  border-radius: 10px;
  background: linear-gradient(to right, #ff469f, #ff6062);
  color: white;
}

.gallery img {
  max-width: 280px;
  height: auto;
  border-radius: 10px;
}

.gallery {
  max-width: 280px;
  overflow-wrap: break-word;
}

.paragraph {
  padding: 7px;
  
  text-align: center;
  font-weight: 550;
  font-size: 10px;
  
  word-wrap: break-word;
  hyphens: auto;
}

figure {
    display: block;
    margin: 10px;
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
  .flex {
    width: 100%;
    margin-top: 20px;
  }

  .gallery{
    max-width: 250px;
    justify-content: center;
  }

  .flex{
    justify-content: center;
  }

  img {
    width: 250px;
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
`