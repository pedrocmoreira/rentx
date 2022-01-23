import React from 'react';

import { BackButton } from '../../components/BackButton';
import { Accessory } from '../Accessory';
import { ImageSlider } from '../ImageSlider';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';


import * as S from './styles'
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function CarDetails() {
    const navigation = useNavigation();

    function handleConfirmRental(){
        navigation.navigate('Scheduling');
    }

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
                <S.Accesories>
                    <Accessory name="380Km/h" icon={speedSvg}/>
                    <Accessory name="3.2s" icon={accelerationSvg}/>
                    <Accessory name="800 HP" icon={forceSvg}/>
                    <Accessory name="Gasolina" icon={gasolineSvg}/>
                    <Accessory name="Auto" icon={exchangeSvg}/>
                    <Accessory name="2 Pessoas" icon={peopleSvg}/>
                </S.Accesories>
                <S.About>
                    Este é um automóvel esportivo. Surgiu do lendário 
                    touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                </S.About>
                
            </S.Content>

            <S.Footer>
                <Button 
                    title="Escolher período do aluguel"
                    onPress={handleConfirmRental}
                />
            </S.Footer>

        </S.Container>
    )
}
