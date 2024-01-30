import { Input as InputAntd, InputProps as InputPropsAntd } from 'antd'; //estamos renomeando o 'Input' do antd para 'InputAntd', isso porque ele entra em conflito com o nosso componente local 'Input', ambos devem ter nomes diferentes.
import { BoxInput, TitleInput } from './input.styles';

interface InputProps extends InputPropsAntd { 
    title?: string // '?' significa que o titulo é opcional
    margin?: string
}

const Input = ({ margin, title, ...props }: InputProps) => { // 'title' é uma propriedade do objeto 'props' que esta sendo desestruturada
    return ( 
        <BoxInput style={{margin: margin}} >
            {title && (
                <TitleInput>{title}</TitleInput>  //Se o titulo não existir esse código não será executado
            )}
            <InputAntd {...props} />
        </BoxInput>
    )
}

export default Input