import styled from "styled-components";

import { Space, Typography } from 'antd';

const { Text, Link } = Typography;

export const BoxInput = styled.div`
    width: 100%;
`

export const TitleInput = styled(Text)` //Substituimos o 'h3' por 'Text' que vem do antd na seção tipografia
    margin: 8px;
`