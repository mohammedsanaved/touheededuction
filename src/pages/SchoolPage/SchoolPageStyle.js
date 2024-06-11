import { styled } from "styled-components";

export const SchoolPageStyle = styled.div`

.school-title{
    font-family: Inter;
font-size: 36px;
font-weight: 700;
line-height: 43.57px;
text-align: left;
margin-bottom: 40px;
color: white;

}

.school-description{
    font-family: Inter;
font-size: 20px;
font-weight: 500;
line-height: 24.2px;
text-align: center;
margin-bottom: 70px;
color: white;
display: -webkit-box;
-webkit-box-orient: vertical;
overflow: hidden;
-webkit-line-clamp: 5;
text-align:justify;
}

.video-element{
    height: 700px;
    object-fit: cover;
}


.video-banner-text{
    position: relative;
    max-width: 815px;
    width: 100%;
    /* margin-top: -46%;
    margin-bottom: 70vh; */

    top: 30%;
left: 0;
right: 0;
bottom: 0;
margin: auto;

}

.school-buttons button{
    background-color: rgba(4, 156, 80, 1);
    font-family: Inter;
font-size: 24px;
font-weight: 500;
line-height: 29.05px;
text-align: left;
color: white;
padding: 10px;
border: none;
border-radius: 5px;

}


.school-buttons {
    max-width: 450px;
    width: 100%;
    column-gap: 80px;
}




.breadcrumbs-div{
    max-width: 1207px;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;


}

.breadcrumbs-div p{
    text-transform: uppercase;
    font-family: Inter;
font-size: 16px;
font-weight: 700;
line-height: 19.36px;
text-align: left;
color: rgba(4, 156, 80, 1);


}

.color-purple{
    color: rgba(26, 48, 129, 1);
}


.event-container{

max-width: 1207px;
column-gap: 40px;

display: grid;
grid-template-columns: auto auto;

}

.contact-us-title{
    font-family: Inter;
font-size: 36px;
font-weight: 700;
line-height: 43.57px;
text-align: center;
color: black;
margin-top: 80px;
margin-bottom: 80px;
}

.contact-info-container{
    background-color: white !important;
}

@media screen and (max-width: 1000px) {


    .school-description{
        font-size: 16px;
    }

    .video-banner-text{
        top: 26%;
        
    
    }
    .breadcrumbs-div p{
        text-align: center;
    }


    .video-banner-text,.breadcrumbs-div{
        padding: 15px;
        
    }


.school-buttons{
 flex-direction: column;
 align-items: center;
}

.event-container{
    /* flex-direction: column; */
    grid-template-columns: auto;
}


}

.school-details-video::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    
}

.latest-event-title{
    font-family: Inter;
font-size: 36px;
font-weight: 700;
line-height: 43.57px;
text-align: center;
color:black;
margin-top: 100px;
}

@media screen and (max-width: 1100px) {

.breadcrumbs-div{
    padding-left:20px;
    padding-right:20px;
}
}
`;

