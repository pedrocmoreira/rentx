import React from "react";
import { useTheme } from 'styled-components';

import * as S from './styles';

interface Props {
    title: string;
    color?: string;
    onPress: () => void;
}

export function Button({
    title,
    color,
    onPress,
}: Props){
    const theme = useTheme();
    return(
        <S.Container color={color ? color : theme.colors.main} onPress={onPress}>
            <S.Title>{title}</S.Title>
        </S.Container>
    )
}