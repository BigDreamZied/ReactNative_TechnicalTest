import { Image, ImageProps } from 'react-native'
import React, { FC } from 'react'
import { IMAGE_BASE_URL } from 'react-native-dotenv'

interface IAppImage {
    source: string,
    props: Partial<ImageProps>
}

const AppImage: FC<IAppImage> = ({ source,props}) => {
    return (<Image source={{ uri: IMAGE_BASE_URL + source }} {...props} />)
}

export default AppImage