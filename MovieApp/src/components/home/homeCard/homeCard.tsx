import React, { FC, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS } from '../../../config/constants/colors'
import { Result } from '../../../types/homeType'
import { fontValue, heightPercentageToDP, widthPercentageToDP } from '../../../utils/dimensions'
import { AppImage } from '../../shared/image'
import Spacer from '../../shared/spacer/spacer'
import AntDesign from 'react-native-vector-icons/AntDesign'

interface IHomeCard {
    data: Result,
    onPress?: () => void
}
const HomeCard: FC<IHomeCard> = ({ data, onPress }) => {
    //  Like test
    const [isLiked, setIsLiked] = useState(false)

    const handleLike = () => {
        setIsLiked(prev => !prev)
    }
    return (
        <Pressable onPress={onPress} style={styles.homeCard}>
            <Pressable onPress={handleLike} style={styles.likeContainer}>
                <AntDesign name={isLiked ? "heart" : "hearto"} size={25} color={COLORS.red} />
            </Pressable>
            <AppImage
                source={data.backdrop_path}
                props={{
                    style: styles.bgImage
                }}
            />
            <View style={styles.infoSection}>
                <LinearGradient colors={[COLORS.lightGrey, COLORS.lightGrey + 'FA', COLORS.lightGrey + 'AA', COLORS.lightGrey + '00']} angle={0} useAngle style={styles.linearGradient} />
                <Spacer height={heightPercentageToDP(0.1)} />
                <View style={styles.descriptionSection}>
                    <View style={styles.mediaInfos}>
                        <Text style={styles.text}>{data.media_type.toLocaleUpperCase()}</Text>

                        {!data.adult ? <View style={[styles.likeContainer,{right:0,elevation:0}]}>
                            <Text style={styles.adultText}>+18</Text>
                        </View> : null}
                    </View>
                    <Text style={styles.movieTitle}>{data.name ? data.name : "Title name unknown"}</Text>
                    <Text style={styles.text}>{data.first_air_date ? "Release date: " + new Date(data.first_air_date).toLocaleDateString() : ''}</Text>
                    <Spacer height={heightPercentageToDP(0.5)} />
                    <Text ellipsizeMode='tail' style={styles.overview} numberOfLines={3}>{data.overview}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default HomeCard

const styles = StyleSheet.create({
    homeCard: {
        elevation: 3,
        width: widthPercentageToDP(90),
        height: heightPercentageToDP(90),
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: "column",
        borderRadius: fontValue(30),
        backgroundColor: COLORS.lightGrey,
        overflow: 'hidden',
    },
    linearGradient: {
        position: 'absolute',
        top: -100,
        width: '100%',
        height: '60%',
    },
    infoSection: {
        position: 'relative',
        width: '100%',
    },
    descriptionSection: {
        padding: fontValue(20),
        width: '100%',
    },
    likeContainer: {
        elevation: 3,
        position: 'absolute',
        backgroundColor: "white",
        top: 10,
        right: 10,
        width: 50,
        height: 50,
        borderRadius: 25,
        zIndex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bgImage: {
        width: '100%',
        height: '60%',
        resizeMode: 'cover'
    },
    mediaInfos: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    movieTitle: {
        color: COLORS.black,
        fontWeight: 'bold',
        fontSize: fontValue(26),
    },
    text: {
        color: COLORS.black,
        fontSize: fontValue(18),
    },
    adultText: {
        color: COLORS.red,
        fontSize: fontValue(22),
        fontWeight: 'bold',
    },
    overview: {
        color: COLORS.black,
        fontSize: fontValue(22),
    },
})