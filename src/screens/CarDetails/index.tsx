import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import Animated, {
    useSharedValue,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    interpolate,
    Extrapolate
} from 'react-native-reanimated';

import { BackButton } from '../../components/BackButton';
import { Accessory } from '../Accessory';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import * as S from './styles'
import { Button } from '../../components/Button';
import { ImageSlider } from '../../components/ImageSlider';
import { CarDTO } from '../../dtos/CarDTO';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

interface Params {
    car: CarDTO;
}

export function CarDetails() {
    const navigation = useNavigation();
    const route = useRoute();
    const theme = useTheme();
    const { car } = route.params as Params;

    const scrollY = useSharedValue(0);
    const scrollHandler = useAnimatedScrollHandler(event => {
        scrollY.value = event.contentOffset.y;
        // console.log(event.contentOffset.y);
    });

    const headerStyleAnimation = useAnimatedStyle(() => {
        return {
            height: interpolate(
                scrollY.value,
                [0, 200],
                [200, 70],
                Extrapolate.CLAMP
            )
        }
    });

    const sliderCarsStyleAnimation = useAnimatedStyle(() => {
        return{ 
            opacity: interpolate(
                scrollY.value,
                [0, 150],
                [1, 0],
                Extrapolate.CLAMP
            )
        }
    })

    function handleConfirmRental() {
        navigation.navigate('Scheduling', { car });
    }

    function handleGoBack() {
        navigation.navigate('Home');
    }

    return (
        <S.Container>
            <StatusBar
                barStyle='dark-content'
                translucent
                backgroundColor='transparent'
            />
            <Animated.View 
                style={[
                    headerStyleAnimation, 
                    styles.header, 
                    {backgroundColor: theme.colors.background_secondary }
                ]}
            >
                <S.Header>
                    <BackButton onPress={handleGoBack}/>
                </S.Header>
                
                <Animated.View style={sliderCarsStyleAnimation}>
                    <S.CarImages>
                    <ImageSlider
                        imagesUrl={car.photos}
                    />
                    </S.CarImages>
                </Animated.View>
            </Animated.View>
            <Animated.ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 24,
                    paddingTop: getStatusBarHeight() + 160,
                }}
                showsHorizontalScrollIndicator={false}
                onScroll={scrollHandler}
                scrollEventThrottle={16}
            >
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
                <S.About>
                    {car.about}
                    {car.about}
                    {car.about}
                    {car.about}
                    {car.about}
                </S.About>
            </Animated.ScrollView>

            <S.Footer>
                <Button
                    title="Escolher período do aluguel"
                    onPress={handleConfirmRental}
                />
            </S.Footer>

        </S.Container>
    )
}


const styles = StyleSheet.create({
    header:{
        position: 'absolute',
        overflow: 'hidden',
        zIndex: 1,
    }
})