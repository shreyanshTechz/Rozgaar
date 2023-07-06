import React, { useState } from 'react'
import { View, Text } from 'react-native'

import styles from './about.style'
import { COLORS, SIZES } from '../../../constants';
import Company from '../company/Company';
import { JobTabs, Specifics} from '../..';
import Info from '../info/Info';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '../footer/Footer';
import { SafeAreaView } from 'react-native-safe-area-context';
const tabs = ["About","Qualification","Responsibilty"]
const About = (props) => {
  const job = props.userdata;
  // console.log(job.job_highlights);
  const [activeTab,setActiveTab] = useState(tabs[0]);
  const displayTabContent = ()=>{
    switch (activeTab) {
      case "Qualification":
        return <Specifics
          title = "Qualification"
          points = {job.job_highlights?.Qualifications??['N/A']}
        />
        case "About":
          return <Info
          title = "About"
          info = {job?job.job_description:""}
        />
        
        case "Responsibilty":
          return <Specifics
          title = "Responsibilty"
          points = {job.job_highlights?.Responsibilities??['N/A']}
        />
        break;
    
      default:
        break;
    }
  }


  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
      <>
    <ScrollView>
        <View style={{padding:SIZES.medium,paddingBottom:100}}>
        <Company
        companylogo = {job.employer_logo}
        jobTitle = {job.job_title}
        companyname = {job.employer_name}
        location = {job.job_country}
        />

        <JobTabs
          tabs={tabs}
          activeTab= {activeTab}
          setActiveTab = {setActiveTab}
        />
       
        {displayTabContent()}
      </View>
      </ScrollView>
      <Footer url={job?.job_google_link ?? 'https;//careers.google.com/jobs/results'}/>
      </>
      </SafeAreaView>
  )
}

export default About