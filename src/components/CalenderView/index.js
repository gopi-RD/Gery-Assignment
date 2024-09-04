import {Component} from "react";
import EventContext from "../../context/EventContext";
import {v4 as uuidv4} from "uuid";
import Header from "../Header";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {BgContainer,SelectedDate,Heading,Container,FormContainer,CustomButton,LabelText,
    CustomInput,Textarea,PopupContainer,ErrorMessage,EventListItems,EventList,CalenderContainer,ButtonsContainer} from "./styledComponent"


class CalenderView extends Component{
    state={date:new Date(),isEvent:false,title:"",description:"",isError:false,errorMsg:""}

    onChangeDate=(value)=>{
        this.setState({date:value,isEvent:true}) 
    }

    onEventTitle=(event)=>{
        this.setState({title:event.target.value})
    }

    onEventDescription=(event)=>{
        this.setState({description:event.target.value})
    }

    
    render(){
        const {date,isEvent}=this.state 
  return (

        <EventContext.Consumer>
            {
                value=>{
                    const {eventList,addEvent}=value 

                    const onAddEvent=(event)=>{
                        event.preventDefault()
                        const {title,description,date}=this.state 
                        if (title===""){
                            this.setState({isError:true,errorMsg:"Event Title is required"})
                            return
                
                        }else if (description===""){
                            this.setState({isError:true,errorMsg:"Event Description is required"})
                            return
                        }
                
                        const eventData={id:uuidv4(),title,description,date}
                        addEvent(eventData)
                        this.setState({isEvent:false,errorMsg:""})
                    }
                
                   const onCancelEvent=()=>{
                        this.setState({isEvent:false})
                    }
                
                   const formContainerEvent=()=>{
                        const {isError,errorMsg,title,description} = this.state
                        return(
                            <>
                            <PopupContainer>
                            <FormContainer onSubmit={onAddEvent}>
                            <LabelText>Event Title</LabelText> 
                            <CustomInput type="text" value={title} placeholder="Enter a Event Title" onChange={this.onEventTitle} />
                            <LabelText>Event Description</LabelText>
                            <Textarea type="text" value={description} placeholder="Enter a Event Content" rows="4" cols="45" onChange={this.onEventDescription} ></Textarea>
                            <ButtonsContainer>
                            <CustomButton type="submit">
                                Add Event 
                            </CustomButton>
                            <CustomButton type="button" onClick={onCancelEvent}>
                                Cancel
                            </CustomButton>
                            </ButtonsContainer>
                           
                            {isError && <ErrorMessage>{errorMsg}</ErrorMessage>}
                        </FormContainer>
                        </PopupContainer>
                        </>
                        )
                    }
           
        return (
            <>
            <Header/>
            <BgContainer>
                <Container>
                    <CalenderContainer>
                        <Heading>Calendar </Heading>
                        <SelectedDate>Selected Date: {date.toLocaleDateString()} </SelectedDate>

                        <Calendar value={date}  onChange={this.onChangeDate} nextLabel="Next" next2Label="Go" prevLabel="Prev" prev2Label="Back"
                        />
                    </CalenderContainer>
                        {
                            isEvent && formContainerEvent()
                        }

                    <>   

                        <EventListItems>
                            <Heading>Events:</Heading>
                            {
                                eventList.map(eachItem=>(<EventList key={eachItem.id}>
                                    {eachItem.title}
                                </EventList>))
                            }
                        </EventListItems>

                    </>    

                </Container>

                </BgContainer>
           </>
        )
    }
}
        </EventContext.Consumer>
  )
}
}

export default CalenderView