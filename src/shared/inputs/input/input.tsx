import { Input as InputAntd } from 'antd'; //estamos renomeando o 'Input' do antd para 'InputAntd', isso porque ele entra em conflito com o nosso componente local 'Input', ambos devem ter nomes diferentes.
import { BoxInput, TitleInput } from './input.styles';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { //Estamos dizendo que o InputProps é do tipo html
    title?: string // '?' significa que o titulo é opcional
}

const Input = ({ title }: InputProps) => { // 'title' é uma propriedade do objeto 'props' que esta sendo desestruturada
    return ( 
        <BoxInput>
            {title && (
                <TitleInput>{title}</TitleInput>  //Se o titulo não existir esse código não será executado
            )}
            <InputAntd />
        </BoxInput>
    )
}

export default Input