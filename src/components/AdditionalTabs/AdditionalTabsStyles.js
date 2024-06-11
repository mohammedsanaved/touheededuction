import styled from "styled-components";
import { colors } from "../common/element/elements.js";

export const AdditionalTabsStyles = styled.div`


.add-tab-bg{
    background-color: rgba(246, 249, 255, 1);

}


.addtional-tabs-title{
    font-family: Inter;
font-size: 32px;
font-weight: 700;
line-height: 38.73px;
text-align: center;
color:black;
padding-top:80px;
padding-bottom:80px;

}

.Mui-selected{
    color:#049C50 !important;
}

.scrollable-tabs .MuiTabs-hideScrollbar .MuiTabs-flexContainer {
    gap:40px;
    justify-content: center;

}

button.MuiButtonBase-root.MuiTab-root.MuiTab-labelIcon.MuiTab-textColorPrimary{
    font-family: Inter;
font-size: 16px;
font-weight: 700;
line-height: 19.36px;
text-align: center;

}


button.MuiButtonBase-root.MuiTab-root.MuiTab-labelIcon.MuiTab-textColorPrimary svg{
    
font-size: 45px;


}

.MuiTabs-indicator{
    background-color: rgba(4, 156, 80, 1);
}


.additional-tabs-container{
    margin: auto;
    max-width: 1259px;
    // background-color: rgba(246, 249, 255, 1);
}


@media only screen and (max-width: 900px) {
    .scrollable-tabs .MuiTabs-hideScrollbar .MuiTabs-flexContainer {
        
        justify-content:flex-start;
        gap:10px;
    
    }
    button.MuiButtonBase-root.MuiTab-root.MuiTab-labelIcon.MuiTab-textColorPrimary svg{
    
        font-size: 25px;
        
        
        }
        button.MuiButtonBase-root.MuiTab-root.MuiTab-labelIcon.MuiTab-textColorPrimary{
            font-size: 12px;
        }

}

.add-tab-img{
    width:300px;
    height:300px;
    object-fit: cover;
    border-radius:10px;
}



.add-tab-container{
    column-gap:30px;
    align-items: center;
    max-width:950px;
    margin:auto;
    margin-top: 50px;
    // background-color: rgba(246, 249, 255, 1);
    padding: 50px;
}

.add-tab-title{
    font-family: Inter;
font-size: 25px;
font-weight: 700;
line-height: 25px;
text-align: left;
color:black;
margin-bottom: 20px;
}
.add-tab-text{
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    text-align: justify;
    color:rgba(98, 95, 95, 1);
    

}

@media only screen and (max-width: 800px) {
    .add-tab-container {
        flex-direction: column;
        padding:0px;
    }
  

  .add-tab-img{
    width:100%;
    height:auto;
    margin-bottom:30px;
  }




}

button.MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary{
    font-size:18px;
}
svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall{
    font-size:30px;
}


`;