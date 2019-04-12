import React, { Component} from 'react';
import styled, { css,keyframes } from 'styled-components';

class App extends Component {
  render() {
    return (
      <Container>
        <Button danger>버튼이다@</Button>
        <Button > HELLO</Button>
        <Anchor href="http://google.com">go to 구글</Anchor>     
      </Container>
    );
  }
}

const Container = styled.div`
height:100vh;
width:100%;
background-color:#ff7675;
`;

const Button = styled.button`
border-radius: 50px;
padding: 5px;
min-width: 120px;
color: white;
font-weight: 600;
-webkit-appearance: none;
cursor: pointer;

&:active,
&:focus{
  outline:none;
}
background-color: ${props=> (props.danger ? "#e74c3c":"#27ae60")};

${props=> {
  if(props.danger){
    return css `animation:${rotation} 2s linear infinite`
  }

}}

`;

const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;

const rotation = keyframes`
  from {
    transform: rotate(0deg)
  } 
  to {
    transform: rotate(360deg)
  }
`

export default App;
