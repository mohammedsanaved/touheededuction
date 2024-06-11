import { styled } from "styled-components";

export const HeaderNew2Styles = styled.div`
  .navbar-container {
    position: relative;
    margin-bottom: -120px;
    z-index: 2;
    background-color: rgba(245, 245, 245, 0.65);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    position: fixed;
  }

  .nav-link {
    font-size: 14px;
    color: #182b49;
    text-transform: uppercase;
    font-weight: 500;
    padding: 10px 10px 20px;
  }

  .nav-link-container.navbar-nav {
    align-items: center;
  }

  .apply-btn a {
    font-size: 13px;
    background: rgba(4, 156, 80, 1);
    padding: 7px 15px;
    border: none;
    border-radius: 10px;
    color: #eee;
    font-weight: 600;
    font-size: 20px;
  }

  .basic-navbar-nav {
    justify-content: flex-end;
  }

  .apply-btn-div {
    width: fit-content;
  }

  #basic-navbar-nav {
    justify-content: flex-end;
  }

  .nav-link {
    padding: 10px;
  }

  .nav-link-container {
    column-gap: 20px;
  }

  #basic-navbar-nav {
    column-gap: 20px;
  }

  .la-clipboard-list:before {
    margin-right: 10px;
  }

  .dropdown-toggle::after {
    margin-left: 6px;
  }

  .dropdown-menu.show .dropdown-item {
    font-family: Inter;
    font-size: 15px;
    font-weight: 500;
    line-height: 24.2px;
    color: black;
  }

  a.nav-link:hover,
  a#basic-nav-dropdown:hover {
    color: rgba(4, 156, 80, 1);
  }

  @media only screen and (max-width: 1100px) {

    img.header-logo {
        width: 70px;

    }


    .navbar-container {
      background-color: white;
      position: relative;
    }

    .navbar-toggler-icon {
      filter: invert(1);
    }

    .nav-link-container.navbar-nav {
      align-items: flex-start;
    }

    .dropdown-menu.show {
      border: none;
    }

    .navbar-nav {
      margin-top: 30px;
    }

    .nav-link,
    #basic-nav-dropdown , .nav-item.show.dropdown {
      width: 100%;
    }

    .dropdown-menu.show{
        background-color:#dbe0d1;
    }
    .header-div.container {
      padding-left: 0px;
      padding-right: 0px;
  }

  }


  img.header-logo{
    max-width:80px;
    
  }
`;
