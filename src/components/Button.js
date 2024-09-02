import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types"

//utils
import { getInterFont } from "../utils/FontUtils/interFontHelper";
import { normalize, scaleVertical } from "../utils/dimensionUtils";

const Button = (props) => {
    return (
        <Pressable style={[styles.button, props.isDisabled && styles.disabled]} disabled={props.isDisabled} onPress={props.onPress}>
            <Text style={styles.title}>{props.title}</Text>
        </Pressable>
    )
}

Button.default = {
    isDisabled: false,
    onPress: () => {}
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    onPress: PropTypes.func
}

export default Button

const styles = StyleSheet.create({
    button: {
         backgroundColor: "#2979F2",
         height: scaleVertical(55),
         justifyContent: 'center',
         alignItems: 'center',
         borderRadius: normalize(50)
    },
    disabled : {
        opacity: 0.5
    },
    title: {
        ...getInterFont(24, 'Medium'),
        fontSize: normalize(16),
        lineHeight: normalize(19),
        color: "#FFFFFF",
    }
})