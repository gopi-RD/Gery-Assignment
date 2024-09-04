import {useState} from "react";
import Loading from "react-loader-spinner"
import Header from "../Header"
import EventContext from "../../context/EventContext"


import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import {Container,EventListItems,EventItem,EventDate,EventTitle,Heading,LoadingContainer,EventLink} from "./styledComponent"

const Events =()=>{
    const [loading,setLoading]=useState(true) 

    return (

        <EventContext.Consumer>
            {
                value=>{
                    const {eventList} = value 
                    setLoading(false)
                    
                   
                  
                    

        return (
        <>
        <Header/>
        <Container>
            {loading===true? (<LoadingContainer> <Loading type="ThreeDots" color="white" height={100} width={100} /></LoadingContainer> ):
             (<EventListItems>
             <Heading>Events:</Heading>
             {eventList.map(event=>(
                 <EventItem key={event.id}> 
                 <EventLink to={`events/${event.id}`}>
                     <EventTitle>
                         {event.title}
                     </EventTitle>
                     <EventDate>{event.date}</EventDate>
                     </EventLink>
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