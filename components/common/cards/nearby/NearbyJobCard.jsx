import React from 'react'
import { View, Text } from 'react-native'
import { Image } from 'react-native'
import styles from './nearbyjobcard.style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import image from '../../../../assets/icons/search.png'
const NearByJobCard = ({job,handleNavigate}) => {
  // console.log(job);
  return (

    <TouchableOpacity style={styles.container}
      onPress={handleNavigate}>
        <TouchableOpacity style={styles.logoContainer}>
            <Image
              source = {{uri:job.employer_logo}}
              resizeMode = "contain"
              style = {styles.logImage}
            />
        </TouchableOpacity> 
        <View style={styles.textContainer}>
          <Text style={styles.jobName} numberOfLines={1}>
                {job.employer_name}
          </Text>
          <Text style={styles.jobType}>
                {job.job_employment_type}
          </Text>
        </View>
     </TouchableOpacity>
  )
}

export default NearByJobCard;