import React from 'react'
import { View, Text,TextInput,FlatList,Image,TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { ScrollView } from 'react-native'
import styles from './welcome.style'
import { SIZES, icons } from '../../../constants'
import { useRouter } from 'expo-router'
import Popularjobs from '../popular/Popularjobs'
import Nearbyjobs from '../nearby/Nearbyjobs'
const jobTypes = ["Full-time","Part-time","FreeLance"]
const Welcome = () => {
  const [activeJobTypes,setActiveJobTypes] = useState('Full-time');
  const router = useRouter();
  return (<ScrollView>
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Shreyansh</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      {/* <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}
          value=''
          onChange={()=>{}}
          placeholder='What Are you looking'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
        <Image
          source={icons.search}
          resizeMode='contain'
          style={styles.searchBtnImage}
        />
      </TouchableOpacity>

      </View>
      <View style={styles.tabsContainer}>
        <FlatList data={jobTypes}
        renderItem={({item})=>(
          <TouchableOpacity style={styles.tab(activeJobTypes,item)}
            onPress={()=>{
              setActiveJobTypes(item);
              router.push(`/search/${item}`)

            }}
          
          >
            <Text style={styles.tabText(activeJobTypes,item)}>{item}</Text>
          </TouchableOpacity>
        )}
        // keyExtractor={key=>item}
        contentContainerStyle = {{columnGap:SIZES.small}}
        horizontal
        
        
        />

        
      </View> */}

      
            
    </View>
    <Popularjobs/>
    <Nearbyjobs/>
    </ScrollView>
  )
}

export default Welcome