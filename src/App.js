import {Component} from "react"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import { GlobalStyle } from "./styledComponent";
import CalenderView from "./components/CalenderView"
import EventContext from "./context/EventContext"
import Events from "./components/Events";
import EventDetailedView from "./components/EventDetailedView";

const eventData=[
  {
    id:1,
    title:"Meeting",
    description:"Discuss about the project progress",
    date:"2024-09-3",
    startTime:"10:00",
    endTime:"12:00"
  },
  {
    id:2,
    title:"Birthday",
    description:"Celebrate Jane's birthday",
    date:"2024-09-15",
    startTime:"09:00",
    endTime:"11:00"
  }
]

class App extends Component{

  state={eventList:eventData}

  addEvent=(data)=>{
    this.setState(prevState=>({
      eventList:[...prevState.eventList,data]
    }))
  }

  render(){
    const {eventList} = this.state;
  return (
    <EventContext.Provider value={{eventList, addEvent:this.addEvent}}>
 
   <>
    <GlobalStyle/>
   <BrowserRouter>

   <Switch>
    <Route exact path="/" component={CalenderView} />
    <Route exact path="/events" component={Events}/>
    <Route  exact path="/events/:id" component={EventDetailedView}  />
   </Switch>
   
   </BrowserRouter>

   
   </>
   </EventContext.Provider>
  );
}
}

export default App;
