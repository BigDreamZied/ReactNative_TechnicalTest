import { useRoute } from '@react-navigation/native'
import React, { FC } from 'react'
import { ImageBackground, StyleSheet, Text } from 'react-native'
import { HomeScreenRouteProp } from '../../navigation/mainNavigation'
import { IMAGE_BASE_URL } from 'react-native-dotenv'
import { View } from 'react-native'
import { fontValue, heightPercentageToDP, widthPercentageToDP } from '../../utils/dimensions'
import { AppImage } from '../../components/shared/image'
import { Spacer } from '../../components'
import { COLORS } from '../../config/constants/colors'
import { BackButton } from '../../components/shared'

const DetailsScreen: FC<{}> = () => {

  const { data } = useRoute<HomeScreenRouteProp>().params || undefined

  return (
    <ImageBackground source={{ uri: IMAGE_BASE_URL + data.backdrop_path }} style={StyleSheet.absoluteFillObject} blurRadius={2}>
      <BackButton/>
      <View style={styles.section}>
        <AppImage
          source={data.poster_path}
          props={{
            style: styles.posterImage
          }}
        />
        <Spacer height={0} width={widthPercentageToDP(1)} />
        <View>
          <View style={styles.mediaInfos}>
            <Text style={styles.text}>{data.media_type.toLocaleUpperCase()}</Text>
            {!data.adult ? <Text style={styles.adultText}> +18</Text> : null}
          </View>
          <Text style={styles.movieTitle}>{data.name ? data.name : "Title name unknown"}</Text>
          <Text style={styles.text}>{data.first_air_date ? "Release date: " + new Date(data.first_air_date).toLocaleDateString() : ''}</Text>
          <Spacer height={heightPercentageToDP(0.5)} />
        </View>
      </View>
      <View style={[styles.section,styles.overlay]}>
        <Text style={styles.subtitle}>Description</Text>
        <Spacer height={heightPercentageToDP(0.5)} />
        <Text ellipsizeMode='tail' style={styles.overview}>{data.overview}</Text>
      </View>
    </ImageBackground>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  section: {
    padding: widthPercentageToDP(5),
    height: heightPercentageToDP(50),
    widthPercentageToDP: widthPercentageToDP(100),
    flexDirection: 'row',
    alignItems: 'center'
  },
  posterImage: {
    width: widthPercentageToDP(40),
    height: heightPercentageToDP(40)
  },
  mediaInfos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'45%'
  },
  movieTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: fontValue(26),
  },
  text: {
    color: COLORS.white,
    fontSize: fontValue(18),
  },
  adultText: {
    color: COLORS.darkRed,
    fontSize: fontValue(22),
    fontWeight: 'bold',

  },
  overview: {
    color: COLORS.white,
    fontSize: fontValue(22),
  },
  subtitle: {
    color: COLORS.white,
    fontSize: fontValue(28),
    fontWeight: 'bold',
  },
  overlay:{
    alignItems: "flex-start",
    flexDirection: 'column',
    backgroundColor:COLORS.black+'55',
    height: heightPercentageToDP(40),
  }
})