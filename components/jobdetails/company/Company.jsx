import React from 'react'
import { View, Text,Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'

const Company = ({companylogo,jobTitle,companyname,location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={{uri:companylogo}}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>
          {jobTitle}
        </Text>
      </View>

      
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>
          {companyname}
        </Text>
        <Image
          source={icons.location}
          resizeMode='contain'
          style={styles.locationImage}
        />
        <Text style={styles.locationName}>{location}</Text>
      </View>
    </View>
  )
}

export default Company