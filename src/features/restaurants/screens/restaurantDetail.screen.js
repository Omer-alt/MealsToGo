import React, {useState} from 'react';
import { SafeAreaView, ScrollView } from "react-native";
import { List } from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-infoCard.components';

const RestaurantDetailScreen = ({route}) => {
    const [breakfastExpended, setBreakfastExpended] = useState(false)
    const [lunchExpended, setLunchExpended] = useState(false)
    const [dinnerExpended, setDinnerExpended] = useState(false)
    const [drinksExpended, setDrinksExpended] = useState(false)

    const { restaurant } = route.params;

    // casser la logic d'utilisation de SafeArea parce que cela me donnait les un margintop inutile sur android
  return (
    < SafeAreaView>
        <RestaurantInfoCard restaurant={restaurant}/>
        <ScrollView
            style={{height: '42%'}}
        >
            <List.Accordion
                
                title="Breakfast"
                left={props => <List.Icon {...props} icon="bread-slice" />}
                expanded={breakfastExpended}
                onPress={()=>setBreakfastExpended(!breakfastExpended)}
            >
                <List.Item title="Eggs Benedict" />
                <List.Item title="Classic Break fast" />
            </List.Accordion>
            <List.Accordion
                title="lunch"
                left={props => <List.Icon {...props} icon="hamburger" />}
                expanded={lunchExpended}
                onPress={()=>setLunchExpended(!lunchExpended)}
            >
                <List.Item title="Burger w/ Fries" />
                <List.Item title="Steack sandwich" />
                <List.Item title="Mushroom soup" />
            </List.Accordion>
            <List.Accordion
                title="dinner"
                left={props => <List.Icon {...props} icon="food" />}
                expanded={dinnerExpended}
                onPress={()=>setDinnerExpended(!dinnerExpended)}
            >
                <List.Item title="Spagetti Bolonaise" />
                <List.Item title="Veal cutlet with Chicken Mushroom" />
                <List.Item title="Steack Frites" />
            </List.Accordion>
            <List.Accordion
                title="drinks"
                left={props => <List.Icon {...props} icon="cup" />}
                expanded={drinksExpended}
                onPress={()=>setDrinksExpended(!drinksExpended)}
            >
                <List.Item title="First item" />
                <List.Item title="Second item" />
            </List.Accordion>
        </ScrollView>
    </ SafeAreaView>
  )
}

export default RestaurantDetailScreen