import React from 'react';
import { View } from 'react-native';
import { Switch } from 'react-native-paper';
import styled, {useTheme} from 'styled-components/native';

const sizesVariants = {
    small: 1,
    medium: 2,
    large: 3,
};

const positionsVariants = {
    top: "marginTop",
    left: "marginLeft",
    right: "marginRight",
    bottom: "marginBottom"
};

const getVarient = (position, size, theme) =>{
    const sizeIndex = sizesVariants[size];
    const property = positionsVariants[position];
    const value = theme.space[sizeIndex];
    
    return `${property}:${value}`;
};

const SpacerView = styled.View`
    ${({variant}) => variant}
` 

export const Spacer = ({position, size, children}) =>{
    const theme = useTheme()
    const variant = getVarient(position, size, theme)
    return (
        <SpacerView variant={variant}>
            {children}
        </SpacerView>
    )
}
    

// export const Spacer = styled.View`
//     ${({position, size, theme}) => getVarient(position, size, theme) }
// `;

Spacer.defaultProps = {
    position: "top",
    size: "small",
};








// const TopSmall = styled.View`
//     marginTop: ${(props) => props.theme.space[2]};
// `
// const TopMedium = styled.View`
//     marginTop: ${(props) => props.theme.space[3]};
// `

// const LeftLarge = styled.View`
//     marginLeft: ${(props) => props.theme.space[4]};
// `
// const LeftSmall = styled.View`
//     marginLeft: ${(props) => props.theme.space[2]};
// `
// const LeftMedium = styled.View`
//     marginLeft: ${(props) => props.theme.space[3]};
// `

// const TopLarge = styled.View`
//     marginTop: ${(props) => props.theme.space[4]};
// `


// export const  Spacer = ({variant}) => {
//     switch (variant) {
//         case "top.small":
            
//             return <TopSmall />
//         case "left.small":
            
//             return <LeftSmall />
//         case "top.medium":
            
//             return <TopMedium />
//         case "left.medium":
            
//             return <LeftMedium />
//         case "top.large":
            
//             return <TopLarge />
//         case "left.large":
            
//             return <LeftLarge />
    
//         default:
//             break;
//     }
// }
