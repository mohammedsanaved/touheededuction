import styled from "styled-components";

export const EventsStyles = styled.div`
  .event-page-div {
    max-width: 1032px;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 50px;
  }

  .filter-event-div {
    column-gap: 50px;
  }

  .event-page-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left:20px;
    padding-right:20px;
}
div#schoolsearch{
  padding-left:0px;
  padding-right:0px;
}

div#schoolsearch select{
  padding:10px;
  padding-right:50px;
  -webkit-appearance: none;
  appearance: none;
  background-image: url("/assets/images/down-arrow.png");
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: calc(100% - 8px) center;
  width:100%;
 
}

.select-school-text{
  display: flex;
  align-items: center;
  max-width:210px;
  font-family: Inter;
font-size: 16px;
font-weight: 700;
line-height: 19.36px;
text-align: left;
color:black;
}

@media only screen and (max-width: 600px){
.select-div{
  flex-direction:column;
}
}

  .pagination-btn {
    background: rgba(4, 156, 80, 1);
    font-family: Inter;
    font-size: 18px;
    font-weight: 400;
    line-height: 16.94px;
    text-align: center;
    color: white;
    padding: 11px 15px;
    border: none;
    border-radius: 6px;
    margin-top: 28px;
  }


.load-more-btn{
  margin-top:100px;
  background: rgba(4, 156, 80, 1);
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.94px;
  text-align: center;
  color: white;
  padding: 11px 15px;
  border: none;
  border-radius: 6px;
}


.pagination-buttons{
  margin-top: 50px;
}

button.pagination-button{
  background: rgba(4, 156, 80, 1);
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.94px;
    text-align: center;
    color: white;
    padding: 11px 15px;
    border: none;
    border-radius: 6px;
    max-width:100px;
    width: 200px;
    
}


.pcount{
  margin:50px;
}


`;