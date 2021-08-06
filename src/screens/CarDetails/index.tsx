import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../ImageSlider';


import * as S from './styles'

export function CarDetails() {
    return (
        <S.Container>
            <S.Header>
                <BackButton onPress={() => { }} />
            </S.Header>

            <S.CarImages>
                <ImageSlider
                    imagesUrl={['https://www.motortrend.com/uploads/sites/10/2018/05/2018-audi-rs5-4wd-coupe-angular-front.png?fit=around%7C875:492.1875']}
                />
            </S.CarImages>

            <S.Content>
                <S.Details>
                    <S.Description>
                        <S.Brand>Lamborghini</S.Brand>
                        <S.Name>Huracan</S.Name>
                    </S.Description>
                    <S.Rent>
                        <S.Period>Ao dia</S.Period>
                        <S.Price>R$ 580</S.Price>
                    </S.Rent>
                </S.Details>
                <S.About>
                    Este é um automóvel esportivo. Surgiu do lendário 
                    touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                </S.About>
            </S.Content>
        </S.Container>
    )
}
