import { View, Text, Pressable } from 'react-native'
import React, { FC } from 'react'
import { heightPercentageToDP, widthPercentageToDP } from '../../../utils/dimensions'

interface ISpacer {
    height: number,
    width: number,
}
const Spacer: FC<Partial<ISpacer>> = ({ height = 5, width=100 }) => {
    return (
        <Pressable style={{ width: widthPercentageToDP(width), height: heightPercentageToDP(height) }} />
    )
}

export default Spacer