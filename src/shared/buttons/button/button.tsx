import { ButtonProps } from "antd"
import { ButtonAntd } from "./button.styles"

interface ButtonCurrentProps extends ButtonProps { //ButtonProps é uma interface pré-definida pelo Antd, nossa 'buttonCurrentProps' esta herdando todas as propriedades da 'ButtonProps'
    margin?: string;
}

const Button = ({margin, ...props}: ButtonCurrentProps) => { 
    return(
        <ButtonAntd style={{margin: margin}} {...props} /> //Estamos passando um estilo css por props ao invés de definirmos ele no arquivo button.styles, dessa forma podemos passar valores dinâmicos para margin, isso evita de criar varios componentes com margens diferentes, pois podemos criar o mesmo componente varias vezes alterando sua margin de forma dinâmica
    )
}

export default Button


