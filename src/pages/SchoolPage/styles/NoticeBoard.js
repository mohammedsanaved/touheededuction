import { styled } from "styled-components";

export const Styles = styled.div`

.notice-board-title{
  font-family: Inter;
font-size: 36px;
font-weight: 700;
line-height: 43.57px;
text-align: center;
color:black;
margin-top:100px;
margin-bottom:80px;
}


  .notice-background {
    background: #f6f9ff;
    height: auto;
    width: auto;
    padding: 25px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-bottom: 20px;
    border-radius: 12px;
    max-width:1207px;
    width:100%;
  }
  .notice-scroll {
    height: 400px;
    margin: auto;
    background: #fff;
    overflow-y: scroll;
    border-radius: 20px;
    font-size: 16px;
    padding-right:40px;
  }

.inner_background{
  max-width:661px;
  width:100%;
  background-color:white;
  padding-left:100px;
  padding-right:100px;
  padding-bottom:50px;
  border-radius:10px;

}
 

  .PinIcon {
    text-align: center;
    margin-bottom: 12px;
    font-size: 50px;
    color: #11b67a;
  }
  .noticeContent {
    display: flex;
    gap: 15px;
    margin-bottom:20px;
  }

.notice-scroll .noticeContent svg{
  color:rgba(163, 200, 255, 1);
}

.notice-content{
  font-family: Inter;
font-size: 20px;
font-weight: 400;
line-height: 27px;
text-align: left;
color:black;
}

::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
  background:rgba(246, 249, 255, 1);
}
 
::-webkit-scrollbar-thumb {
  background: rgba(15, 169, 88, 1); 
  border-radius: 10px;
}

@media screen and (max-width: 600px) {
.inner_background{
  padding-left: 15px;
    padding-right: 15px;
}


.notice-board-title{
  font-size:25px;
  margin-top: 50px;
    margin-bottom: 40px;
}

}



`;
