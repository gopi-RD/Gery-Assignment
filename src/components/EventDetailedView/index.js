import { useState} from "react";
import Header from "../Header"

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {Container, EventDate, EventTitle} from "./styledComponent"
import EventContext from "../../context/EventContext";


const EventDetailedView=()=>{ 
    const [newId,setId]=useState(1) 
    const {match}=this.props;
        const {params}=match;
        const {id}=params; 
        setId(id) 

    
   
    return (
        <EventContext.Consumer>

            {
                value=>{
                    const {eventList}=value 
                    const eventData=eventList.find(eachItem=>(eachItem.id===newId))
                    const {title,description,date,startTime,endTime}=eventData  

                    return (
                        <>
                        <Header/>
                         <Container>
                             <EventTitle>Event: {title}</EventTitle> 
                             <EventDate> Event Content:{description}</EventDate>
                             <EventDate>Date:{date}</EventDate>
                             <EventDate>Time:{startTime} - {endTime}</EventDate>
                 
                         </Container>
                         </>
                 
                     )

                }
            }
        </EventContext.Consumer>
    )
   
}

export default EventDetailedView;