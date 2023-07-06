import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from 'react-native'
import styles from './screenheader.style'
import { icons } from '../../../constants'

const ScreenHeaderBtn = ({iconUrl,dimension,handlepress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image source = {iconUrl} resizeMode="cover" style={styles.btnImg(dimension)}/>
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn