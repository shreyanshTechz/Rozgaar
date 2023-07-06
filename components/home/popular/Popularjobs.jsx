import React, { useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "./popularjobs.style";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard.jsx";
import useFetch from '../../../hook/useFetch'
import Data from "../../../hook/data";
const Popularjobs = () => {

  const {isloading,error,refetch} = useFetch();
  // console.log(Data.data);
  const data = Data["data"];
  // console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Roles Offered</Text>
        <TouchableOpacity>
          {/* <Text style={styles.headerBtn}>Show All</Text> */}
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isloading ?(
            <ActivityIndicator size="large" colors={COLORS.primary} />
          ):(
        <FlatList
          data={data}
          
          renderItem={({ item,index }) => (<PopularJobCard item={item} selectedJob={item} index={index}  />)}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
