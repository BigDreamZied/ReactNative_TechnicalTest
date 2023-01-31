import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import { COLORS } from '../../../config/constants/colors';
import { useSelector } from 'react-redux';
import { Selectors } from '../../../redux/reducers';

const Loader: FC<{}> = () => {
    const loaderDATA = useSelector(Selectors.loader)
    if (!loaderDATA.isShowed) return null;

    return (
        <View style={Styles.container}>
            <ActivityIndicator size="large" color={COLORS.primary} animating={true}/>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: "absolute",
        justifyContent: "center",
        alignItems: "center"
    }
});
  
export default Loader
