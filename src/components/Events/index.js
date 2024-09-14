import {useState} from "react";
import Loading from "react-loader-spinner"
import Header from "../Header"
import EventContext from "../../context/EventContext"
import EventDetailedView from "../EventDetailedView"

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import {Container,EventListItems,EventItem,EventDate,EventTitle,Heading,LoadingContainer} from "./styledComponent"

const Events =()=>{
    const [loading,setLoading]=useState(true) 
    const [eventData,setEventData]=useState()  

    return (

        <EventContext.Consumer>
            {
                value=>{
                    const {eventList} = value 
                    setLoading(false)
                    setEventData(eventList) 
                   
                    const onEventDetailedView = (data) =>{
                        return (
                            <EventDetailedView eventData={data} />
                        )
                    }
                    

        return (
        <>
        <Header/>
        <Container>
            {loading===true? (<LoadingContainer> <Loading type="ThreeDots" color="white" height={100} width={100} /></LoadingContainer> ):
             (<EventListItems>
             <Heading>Events:</Heading>
             {eventData.map(event=>(
                 <EventItem key={event.id} onClick={()=>onEventDetailedView(event)} >
                     <EventTitle>
                         {event.title}
                     </EventTitle>
                     <EventDate>{event.date}</EventDate>
                 </EventItem>
             ))}
         </EventListItems>)
        }
       
        </Container>
        </>
        )
        
    }
}
</EventContext.Consumer>

    )
}

export default Events