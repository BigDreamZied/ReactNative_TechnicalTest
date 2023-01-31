import { useNavigation } from '@react-navigation/native'
import React, { FC, useEffect, useState } from 'react'
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { HomeCard } from '../../components'
import Spacer from '../../components/shared/spacer/spacer'
import { COLORS } from '../../config/constants/colors'
import { HomeScreenNavigationProp } from '../../navigation/mainNavigation'
import { setTrendingMovieAction } from '../../redux/actions/homeActions'
import { hideLoader, showLoader } from '../../redux/actions/loader'
import { Selectors } from '../../redux/reducers'
import { DetailsService, HomeService } from '../../services'
import { Result } from '../../types/homeType'
import { widthPercentageToDP } from '../../utils/dimensions'

const HomeScreen: FC<any> = () => {

    // Todo add navigation props and routes
    const navigation = useNavigation<HomeScreenNavigationProp>()
    const dispatch = useDispatch();
    const moviesData = useSelector(Selectors.home)

    const [isRefreshing, setIsRefreshing] = useState(false)

    const getInitMovies = () => {
        dispatch(showLoader())
        HomeService.Instance.getHome()
            .then((data) => {
                dispatch(setTrendingMovieAction(data))
            })
            .finally(() => {
                dispatch(hideLoader())
            })
    }

    useEffect(() => {
        getInitMovies()
    }, [])

    const handleRefresh = () => {
        setIsRefreshing(true)
        HomeService.Instance.getHome()
            .then((data) => {
                dispatch(setTrendingMovieAction(data))
            })
            .finally(() => {
                setIsRefreshing(false)
            })

    }

    const _renderItem: ListRenderItem<Result> = ({ item, index }) => {
        return <HomeCard
            data={item}
            onPress={() => {
                dispatch(showLoader())
                DetailsService.Instance.getMovieDetails(item.id)
                .then((res)=>{
                    console.log(res);
                    // Details serivce response not passed yet Timeout sorry :)
                    navigation.navigate("details", { data: item })
                }).finally(()=>{
                    dispatch(hideLoader())
                })
            }} />
    }

    return (
        <View style={styles.baseView}>
            <FlatList
                contentContainerStyle={styles.FLcontentContainerStyle}
                horizontal
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
                data={moviesData.results}
                renderItem={_renderItem}
                ItemSeparatorComponent={() => <Spacer width={widthPercentageToDP(1)} />}
                ListHeaderComponent={() => <Spacer width={widthPercentageToDP(1)} />}
                ListFooterComponent={() => <Spacer width={widthPercentageToDP(0.2)} />}
                keyExtractor={(item) => item?.id?.toString()}
            />
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    baseView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.grey

    },
    FLcontentContainerStyle: { alignItems: 'center' }
})