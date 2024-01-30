//Versões anteriores do react 17, é necessario importar o react

import { BackgroundImage, ContainerLogin, LogoImage, LimitedContainer, ContainerLoginScreen, TitleLogin } from "../styles/LoginScreen.style"
import Input from "../../../shared/inputs/input/input";
import Button from "../../../shared/buttons/button/button";

const LoginScreen = () => {
    return (
        <ContainerLoginScreen>
            <BackgroundImage src="./background.png" />
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo.png" />
                    <TitleLogin level={2} type="secondary">LOGIN</TitleLogin> 
                    <Input title='Usuário'/> 
                    <Input title='Senha'/>
                    <Button type="primary" margin='15px 0px 6px 0px'>ENTRAR</Button>
                </LimitedContainer>
            </ContainerLogin>
        </ContainerLoginScreen>
    )
}

//Estamos passando style margin por props, ele esta funcionando como se fosse um atributo
//level={2} vem do antd, serve para estilizar o <TitleLogin />

export default LoginScreen









