import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg'
import { Car } from '../../components/Car';

import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
} from './styles'

export function Home() {
    const carDataOne = {
        brand: 'Audi',
        name: 'RS 5 Coupé',
        rent: {
            period: 'AO DIA',
            price:  120
        },
        thumbnail: 'https://www.motortrend.com/uploads/sites/10/2018/05/2018-audi-rs5-4wd-coupe-angular-front.png?fit=around%7C875:492.1875'
    } 
    const carDataTwo = {
        brand: 'Audi',
        name: 'RS 5 Coupé',
        rent: {
            period: 'AO DIA',
            price:  120
        },
        thumbnail: 'https://www.motortrend.com/uploads/sites/10/2018/05/2018-audi-rs5-4wd-coupe-angular-front.png?fit=around%7C875:492.1875'
    }

    const carDataThree = {
        brand: 'Audi',
        name: 'RS 5 Coupé',
        rent: {
            period: 'AO DIA',
            price:  120
        },
        thumbnail: 'https://www.motortrend.com/uploads/sites/10/2018/05/2018-audi-rs5-4wd-coupe-angular-front.png?fit=around%7C875:492.1875'
    }

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <HeaderContent>
                    <Logo
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />
                    <TotalCars>
                        Total de 12 carros
                    </TotalCars>
                </HeaderContent>
            </Header>
            <Car data={carDataOne}/>
            <Car data={carDataTwo}/>
            <Car data={carDataThree}/>
        </Container>
    )

}