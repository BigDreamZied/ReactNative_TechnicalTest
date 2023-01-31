import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { COLORS } from '../../../config/constants/colors'

const BackButton = () => {
    const navigation = useNavigation()

    const handleGoback = () => {
        navigation?.canGoBack() ? navigation.goBack() : null
    }

    return (
        <Pressable
            style={styles.container}
            onPress={handleGoback}
        >
            <AntDesign name={"arrowleft"} size={25} color={COLORS.black} />
        </Pressable>
    )
}

export default BackButton

const styles = StyleSheet.create({
    container: {
        elevation: 3,
        position: 'absolute',
        backgroundColor: "white",
        top: 10,
        left: 10,
        width: 50,
        height: 50,
        borderRadius: 25,
        zIndex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
})