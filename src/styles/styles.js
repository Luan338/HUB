import styled from "styled-components";

export const Wrap = styled.section`
width: 100%;
max-width: 1900px;
margin: 0 auto;
`;

export const Header = styled.h1`
width: 100%;
`;

export const ContainerHeader = styled.div`
width: 100%;
border-bottom: 1px solid #DCF0FB;
display: flex;
justify-content: space-around;
`;

export const ImgLogo = styled.img`
width: 200px;
`;

export const BoxHeader = styled.div`
width: 40%;
display: flex;
justify-content: space-evenly;
align-items: center;
`;

export const Paragraph = styled.p`
cursor: pointer;
font-size: .8em;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
transition: .3s all;
&:hover{
    color: #0175b8;
}
@media(max-width: 1075px){
    font-size: .6em;
}
`;

export const Span = styled.span`
background-color: black;
width: 60px;
height: 2px;
transform: rotate(90deg);
`;

export const BoxLogin = styled.div`
width: 20%;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const Link = styled.a`
text-decoration: none;
color: #0175b8;
`;

export const Main = styled.section`

`;

export const Contain = styled.section`
background-color: #DCF0FB;
width: 100%;
`;

export const Box = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 85%;
margin: 0 auto;
`;

export const Text = styled.h2`
color: #212330;
font-size: 3em;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

export const ImgGrafismo = styled.img`
width: 40%;
`;