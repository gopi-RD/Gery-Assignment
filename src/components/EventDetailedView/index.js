
import Header from "../Header"

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {Container, EventDate, EventTitle} from "./styledComponent"

const EventDetailedView=(props)=>{
    const {eventData}=props
    console.log(eventData)
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

export default EventDetailedView;