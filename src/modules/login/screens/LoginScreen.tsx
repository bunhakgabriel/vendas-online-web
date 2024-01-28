//Versões anteriores do react 17, é necessario importar o react

import { BackgroundImage, ContainerLogin, LogoImage, LimitedContainer, ContainerLoginScreen } from "../styles/LoginScreen.style"
import Input from "../../../shared/inputs/input/input";

const LoginScreen = () => {
    return (
        <ContainerLoginScreen>
            <BackgroundImage src="./background.png" />
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo.png" />
                    <Input title='Usuário'/> 
                    <Input title='Senha' />
                </LimitedContainer>
            </ContainerLogin>
        </ContainerLoginScreen>
    )
}

export default LoginScreen