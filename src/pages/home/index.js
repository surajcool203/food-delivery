import React, { useState } from 'react'
import Foorter from '../../components/common/footer'
import Header from '../../components/common/header'
import TabOption from '../../components/common/tabOptions'
import Delivery from '../../components/delivery';
import DiningOut from '../../components/diningOut';
import NightLife from '../../components/nightLife';

const HomePage  = () => {

    const [activeTab , setActiveTab]= useState("Delivery")


  return (
    <div>
        <Header/> 
        <TabOption activeTab={activeTab} setActiveTab={setActiveTab}/>   
          {getCorrectScreen(activeTab)}
        <Foorter/>
    </div>
)
};

const getCorrectScreen=(tab) =>{
  switch(tab){
    case "Delivery":
      return <Delivery/>;
      case "Dining Out":
        return <DiningOut/> ; 
        case "Nightlife":
          return <NightLife/>  ;
        default :
        return <Delivery/> ;
        }
}

export default HomePage 