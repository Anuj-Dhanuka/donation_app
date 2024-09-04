import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

//utils
import { normalize } from "../utils/dimensionUtils";

const BackButton = (props) => {
    
    return (
        <Pressable onPress={props.onPress} style={styles.container}>
            <FontAwesomeIcon icon={faArrowLeft} />
        </Pressable>
    )
}

export default BackButton

const styles = StyleSheet.create({
    container: {
        backgroundColor :'#FAFAFA',
        width: normalize(44),
        height: normalize(44),
        borderRadius: normalize(26),
        justifyContent: 'center',
        alignItems: 'center'
    }
})