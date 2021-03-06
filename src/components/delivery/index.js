import React from 'react'
import Filters from '../common/filters';
import "./delivery.css";
import DeliveryCollection from './deliveryCollection';


const deliveryFilters=[
  {
    id:1, 
    icon:<i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title:"Filters",
  },
  {
    id:2, 
    title:"Rating: 4.0+",
  },
  {
    id:3, 
    title:"Safe and hygenic",
  },
  {
    id:4, 
    title:"Pure veg",
  },
  {
    id:5, 
    title:"Delivery Time",
    icon:<i class="fi fi-rr-apps-sort absolute-center"></i>
  },
  {
    id:6, 
    title:"Great Offers",
  },
]

const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
        <Filters filterList={deliveryFilters}/>
      </div>
       <DeliveryCollection/>  
    </div>
  )
}

export default Delivery;