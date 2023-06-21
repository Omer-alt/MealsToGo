import styled from 'styled-components/native';
import {  Card } from 'react-native-paper';

export const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantCard = styled(Card)`
    background-color: white;    
`;
export const RestaurantCardCover = styled(Card.Cover)`
    background-color: white;
    padding: ${(props) => props.theme.space[3]};
`;

export const Adress = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
    color: ${(props) => props.theme.colors.ui.primary};
`;
export const Rating = styled.View`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[2]};
`;
export const Section = styled.View`
    flex-direction: row;
    align-item: center;
`;
export const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    align-item: center;
`;


