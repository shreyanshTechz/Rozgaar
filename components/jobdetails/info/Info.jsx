import React from 'react'
import { View, Text } from 'react-native'

import styles from './info.style'
import { ScrollView } from 'react-native-gesture-handler'

const Info = ({info}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText} >About The Job:</Text>
      <View style={styles.headText}>
        <Text style={styles.contentBox}>
            {info}
        </Text>
      </View>
    </View>
  )
}

export default Info