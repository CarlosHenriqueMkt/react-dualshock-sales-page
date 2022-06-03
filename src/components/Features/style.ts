import styled from "styled-components";

export const Features = styled.section`
    position: relative;
    justify-content: space-between;
    align-items: center;
    margin: 100px 0;  
    padding-left: 8%;
    padding-right: 8%;  

.row {
  display: flex;
  flex-wrap: wrap;
}

.featuresTitle {
  position: relative;
  margin-bottom: 20px;
  text-align: center;
}

h2, p {
        margin: 0px;
    }

.column {
  padding: 1em;
}
.card {
  padding: 3em 1.25em;
  text-align: center;
  background: linear-gradient(0deg, #ff469f 10px, transparent 10px);
  background-repeat: no-repeat;
  background-position: 0 0.62em;
  box-shadow: 0 0 2.5em rgba(0, 0, 0, 0.15);
  border-radius: 0.5em;
  transition: 0.5s;
  cursor: pointer;
}
.card .icon {
  font-size: 2.5em;
  height: 2em;
  width: 2em;
  margin: auto;
  background-color: #ff469f;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: #ffffff;
}
.icon:before {
  position: absolute;
  content: "";
  height: 1.5em;
  width: 1.5em;
  border: 0.12em solid #ff469f;
  border-radius: 50%;
  transition: 0.5s;
}
.card h3 {
  font-size: 1.3em;
  margin: 1em 0 1.4em 0;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: #070024;
}
.card p {
  line-height: 2em;
  color: #625a71;
}
.card:hover {
  background-position: 0;
}
.card:hover .icon:before {
  height: 2.25em;
  width: 2.25em;
}
@media (min-width: 768px) {
  section {
    padding: 1em 7em;
  }
}
@media (min-width: 992px) {
  section {
    padding: 1em;
  }
  .card {
    padding: 5em 2em;
  }
  .column {
    flex: 0 0 33.33%;
    max-width: 30%;
    padding: 0 1em;
  }
}
`