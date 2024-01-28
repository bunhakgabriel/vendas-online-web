//Versões anteriores do react 17, é necessario importar o react

import { BackgroundImage, ContainerLogin, LogoImage, LimitedContainer, ContainerLoginScreen } from "../styles/LoginScreen.style"

const LoginScreen = () => {
    return (
        <ContainerLoginScreen>
            <BackgroundImage src="./background.png" />
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo.png" />
                </LimitedContainer>
            </ContainerLogin>
        </ContainerLoginScreen>
    )
}

export default LoginScreen