//Versões anteriores do react 17, é necessario importar o react

import { BackgroundImage, ContainerLogin, LogoImage, LimitedContainer, ContainerLoginScreen, TitleLogin } from "../styles/LoginScreen.style"
import Input from "../../../shared/inputs/input/input";
import Button from "../../../shared/buttons/button/button";
import { useState } from "react";

const LoginScreen = () => {
    const [username, setUsername] = useState('') //Primeira posição do array é o valor, segunda posição é modificar o valor, quando você muda um estado qualquer, ele vai renderizar novamente aquela parte da tela, somente o container daquele componente que vai fazer a mudança
    const [password, setPassword] = useState('')

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement> ) => {
        setUsername(event.target.value) //Esse vai ser o novo estado do username sempre que uma tecla for digitada, a cada tecla digitada o estado do input vai ser mudado (renderizado novamente)
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement> ) => {
        setPassword(event.target.value)
    } 

    const handleLogin = () => {
        alert( 'username: ' + username + ' ' + 'password: ' + password )
    }

    return (
        <ContainerLoginScreen>
            <BackgroundImage src="./background.png" />
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo.png" />
                    <TitleLogin level={2} type="secondary">LOGIN</TitleLogin> 
                    <Input title='Usuário' margin="10px" onChange={handleUsername} value={username} /> 
                    <Input type="password" title='Senha' margin="10px" onChange={handlePassword} value={password} />
                    <Button type="primary" margin='15px 0px 6px 0px' onClick={handleLogin} >ENTRAR</Button>
                </LimitedContainer>
            </ContainerLogin>
        </ContainerLoginScreen>
    )
}

//Sempre que uma letra for digitada no 'Input', o 'onChange' vai ser chamado 
//Estamos passando style margin por props, ele esta funcionando como se fosse um atributo
//level={2} vem do antd, serve para estilizar o <TitleLogin />

export default LoginScreen









