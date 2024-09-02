import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types"

//utils
import { getInterFont } from "../utils/FontUtils/interFontHelper";
import { normalize } from "../utils/dimensionUtils";

const Header = (props) => {
    const styleToApply = () => {
        switch(props.type) {
            case 1:
                return styles.title1
            case 2:
                return styles.title2
            case 3:
                return styles.title3
            default :
                return styles.title1          
        }
    }
    return(
        <View>
            <Text style={[styleToApply(), props.color && {color: props.color}]}>{props.title}</Text>
        </View>
    )
}

Header.default = {
    title: '',
    type: 1,
    color: "#000"
}

Header.prototype = {
    title: PropTypes.string.isRequired,
    type: PropTypes.number.isRequired,
    color: PropTypes.string
}

export default Header

const styles = StyleSheet.create({
    title1: {
        ...getInterFont(24, 'SemiBold'),
        fontSize: normalize(24),
        lineHeight: normalize(29),
        color: "#000"
    },
    title2 : {
        ...getInterFont(24, 'SemiBold'),
        fontSize: normalize(18),
        lineHeight: normalize(22),
        color: "#000"
    },
    title3: {
        ...getInterFont(24, 'SemiBold'),
        fontSize: normalize(16),
        lineHeight: normalize(19),
        color: "#000"
    }
})