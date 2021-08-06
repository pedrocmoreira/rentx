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
        </S.Container>
    )
}
