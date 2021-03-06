import React, { useRef, useState } from "react";
import { FlatList, ViewToken } from "react-native";

import * as S from './styles';

interface Props {
    imagesUrl: string[];
}

interface ChangeImageProps {
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

export function ImageSlider({ imagesUrl }: Props) {
    const [ indexImage, setIndexImage ] = useState(0);

    const indexChange = useRef((info: ChangeImageProps)=>{
        const index = info.viewableItems[0].index!;
        setIndexImage(index);
    });


    return (
        <S.Container>
            <S.ImageIndexes>
                {
                    imagesUrl.map((_, index) => (
                        <S.ImageIndex
                            key={String(index)}
                            active={index === indexImage}
                        />
                    ))
                }
            </S.ImageIndexes>



            <FlatList
                data={imagesUrl}
                keyExtractor={key => key}
                renderItem={({ item }) => (
                    <S.CarImageWrapper>
                        <S.CarImage
                            source={{ uri: item }}
                            resizeMode="contain"
                        />
                    </S.CarImageWrapper>
                )}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={indexChange.current}
            />

        </S.Container>
    )
}