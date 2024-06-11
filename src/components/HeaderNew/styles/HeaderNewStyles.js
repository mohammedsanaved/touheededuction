import styled from "styled-components";
export const HeaderNewStyles = styled.div`
:root {
  --bgcolor: #1a79cf;
}

* {
  margin: 0;
  padding: 0;
}

.page-header {
  background-color: var(--bgcolor);
  padding: 1.3rem;
  display: flex;
  justify-content: space-between;
}
.logo {
  color: white;
  align-self: center;
  margin-left: 1.2rem;
  font-size: 2.5rem;
}

.nav-bar {
  margin: auto;
}

.nav-bar a {
  color: white;
  padding: 1.5rem;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;
}

.menu-icon {
  color: white;
  cursor: pointer;
  display: none;
}

button {
  font-size: 1rem;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.9rem;
}



`;
