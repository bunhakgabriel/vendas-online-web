//Esse arquivo vai ser o css da pagina de login, nós vamos usar a biblioteca
//style-components para escrever os estilos css com javascript

import styled from 'styled-components'

export const ContainerLoginScreen = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
`

export const BackgroundImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover; //object-fit: cover diz ao elemento para dimensionar seu conteúdo para se ajustar à proporção do elemento que o contém, enquanto cobre completamente o elemento que o contém .
    z-index: -1;
`

export const LogoImage = styled.img`

`

export const ContainerLogin = styled.div`
    padding: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d9d9d9;
    width: 100%;
    height: 100vh;
    max-width: 550px;
`

export const LimitedContainer = styled.div`
    width: 100%;
    max-width: 332px;
    display: flex;
    justify-content: center;
`











