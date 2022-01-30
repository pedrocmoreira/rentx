import React from 'react';

import { BackButton } from '../../components/BackButton';
import { Accessory } from '../Accessory';
import { ImageSlider } from '../ImageSlider';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import * as S from './styles'
import { Button } from '../../components/Button';
import { useNavigation, useRoute} from '@react-navigation/native';
import { CarDTO } from '../../dtos/CarDTO';

interface Params {
    car: CarDTO;
}

export function CarDetails() {
    const navigation = useNavigation();
    const route = useRoute();
    const { car } = route.params as Params;

    function handleConfirmRental(){
        navigation.navigate('Scheduling', { car });
    }

    function handleGoBack(){
        navigation.navigate('Home');
    }

    return (
        <S.Container>
            <S.Header>
                <BackButton onPress={ handleGoBack } />
            </S.Header>

            <S.CarImages>
                <ImageSlider
                    imagesUrl={car.photos}
                />
            </S.CarImages>

            <S.Content>
                <S.Details>
                    <S.Description>
                        <S.Brand>{car.brand}</S.Brand>
                        <S.Name>{car.name}</S.Name>
                    </S.Description>
                    <S.Rent>
                        <S.Period>{car.rent.period}</S.Period>
                        <S.Price>R${car.rent.price}</S.Price>
                    </S.Rent>
                </S.Details>
                <S.Accessories>
                    {
                        car.accessories.map(accessory => (
                            <Accessory 
                                key={accessory.type}
                                name={accessory.name}
                                icon={getAccessoryIcon(accessory.type)}

                            />
                        ))     
                    }   
                </S.Accessories>
                <S.About>{car.about}</S.About>
                
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
