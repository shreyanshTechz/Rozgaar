import React, { useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "./nearbyjobs.style";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, SIZES } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard.jsx";
import useFetch from '../../../hook/useFetch'
import { useRouter } from "expo-router";
import Data from "../../../hook/data";
import { Button } from "react-native-web";
const Nearbyjobs = () => {
  const router = useRouter();
  const {isloading,error,refetch} = useFetch();
  const data = Data["data"];
  let counter=0;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          {/* <Text style={styles.headerBtn}>Show All</Text> */}
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isloading ?(
            <ActivityIndicator size="large" colors={COLORS.primary} />
          ):(
                data?.map((job,idx)=>(
                  // <Text>rgerg</Text>
                  <NearbyJobCard
                      job = {job}
                      key = {`nearby-job-${job?.job_id}`}
                      handleNavigate = {()=>router.push(`job-details/${idx}`)}
                      horizontal
                  />
                )) 
        
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
