import {
    MD3LightTheme as DefaultTheme,
} from 'react-native-paper';

export const theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
      myOwnColor: '#BADA55',
    },
    shadow:{
        boxShadow: 'rgba(0, 0, 0, 0.24) 0 3 8'
    }
};