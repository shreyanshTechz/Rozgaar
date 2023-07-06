import React from 'react'
import { View, Text } from 'react-native'
import { Image } from 'react-native'
import styles from './popularjobcard.style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import image from '../../../../assets/icons/search.png'
import { useRouter } from 'expo-router'
const PopularJobCard = ({item,selectedJob,index}) => {
  console.log(index);
  const router = useRouter();
  return (
    // handleNavigate = {()=>}
    <TouchableOpacity style={styles.container(selectedJob,item) }
      onPress={()=>router.push(`job-details/${index}`)}
    >
        <TouchableOpacity style={styles.logoContainer(selectedJob,item)}>
            <Image
              source = {{uri:item.employer_logo}}
              resizeMode = "contain"
              style = {styles.logoImage}
            />
        </TouchableOpacity>
        <Text style={styles.companyName}>{item.employer_name}</Text>
        <View style={styles.infoContainer}>
          {/* <Text style={styles.jobName(selectedJob,item)}>
              {item.job_title}
          </Text> */}
          <Text style={styles.location}>
          {item.job_title}
          </Text>
        </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard