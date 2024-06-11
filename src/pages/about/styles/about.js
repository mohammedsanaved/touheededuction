import styled from "styled-components";

export const Styles = styled.div`
    .about-page {
        .icon-box-area {
            padding-bottom : 72px;
            .full-icon-box {
                .icon-box {
                    position: inherit;
                    top: 0;
                    left: 0;
                    width: unset;
                }
            }

            @media(max-width: 767px) {
                padding: 0 0 10px;
            }
        }
    }
    .readmore-btn{
        display:none;
    }

    section.about-us-section {
        margin-bottom: 100px;
    }

    .EventsHeader{
        font-family: Inter;
        font-size: 36px;
        font-weight: 700;
        line-height: 43.57px;
        text-align:center;
        color:black;
        margin-bottom:75px;
        margin-top:75px;
    }

    .accordion-title{
        padding:10px 16px;
    }

`;