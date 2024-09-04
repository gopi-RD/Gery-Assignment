import React from "react";

const EventContext=React.createContext({
    eventList:[],
    addEvent:()=>{},
    deleteEvent:()=>{},
    updateEvent:()=>{} 
})

export default EventContext;