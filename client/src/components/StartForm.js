import React, { useState, useEffect } from "react";
import { Form, Text, Select, Option,useFormState,Relevant,Checkbox,TextArea   } from "informed";
import ChipForm from "./ChipForm";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import HowTo from "./HowTo"


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const StartForm = (props) => {
  const classes = useStyles();
  

  const validate = (value) => {
    if (!value || value.length < 0)
      return "Field must be at least five characters";
  };
  const [startingInfoSubmitted, setStartingInfoSubmitted] = useState(true);
  const [staringInfo, setStartingInfo] = React.useState({
    startStack: {},
    roundLength: {},
    tournName: {},
    occurrence: {},
    buyIn:{},
    startTime:{},
    occurrenceExtra:{},
    rebuy:false,
    rebuyLevel:{},
    reentry:false,
    reentryLevel:{},
    realMoneyStart:{},
    bounty:false,
    anteType:{},
    linkToDocument:{},
    addOn:false,
    addOnType:{},
    addOnAmountChips:{},
    addOnAmountMoney:{},
    addOnLevel:{},
    addOnNotes:{},
    
    
  });
const [daysHook,setDaysHook]=React.useState({
    monday:false,
    tuesday:false,
    wednesday:false,
    thursday:false,
    friday:false,
    saturday:false,
    sunday:false
})
  const submitForm = (e) => {
    let occurrenceExtra
    // let days = staringInfo.occurrenceExtra
    e.occurrence==="daily"?(occurrenceExtra=daysHook ):(occurrenceExtra=e.occurrenceExtra)
    props.startStackSubmit(e,occurrenceExtra);
    setStartingInfoSubmitted(false);
    
 

    let realMoneyStart=e.buyIn - e.deductions

    setStartingInfo({
      ...staringInfo,
      roundLength: e.roundLength,
      startStack: e.startStack,
      tournName: e.tournName,
      occurrence: e.occurrence,
      buyIn:e.buyIn,
      startTime:e.startTime,
      occurrenceExtra:occurrenceExtra,
      realMoneyStart:realMoneyStart,
      anteType:e.anteType,
      linkToDocument:e.linkToDocument,
      addOn:e.addOn,addOnType:e.addOnType,addOnAmountChips:e.addOnAmountChips,addOnAmountMoney:e.addOnAmountMoney,addOnLevel:e.addOnLevel,addOnNotes:e.addOnNotes
    })
   
    
  
 
  };
 const setDays =(e)=>{
  const target = e.target
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;
  setDaysHook({
    ...daysHook,
      [name]:value
    
  })

 
 }

  const clearForm = ()=>{
    setStartingInfoSubmitted(true);
    props.setClearCurItemIdToNull()
  }
  
  
  // const ComponentUsingFormState = () => {
  //   const formState = useFormState();
  //   return (
  //     <pre>
  //       <code>{JSON.stringify(formState, null, 2)}</code>
  //     </pre>
  //   );
  // };
  return startingInfoSubmitted === true ? (
    <div className="field">
  {/* <Popup trigger={<Button variant="contained" color="primary">
        How To
      </Button>}position="right center">
    <div><HowTo/></div>
  </Popup> */}
  <HowTo/>
     
      <Form className={classes.root}onSubmit={submitForm} initialValues={{
        rebuy:false,
        reentry:false,
        bounties:false,
        rebuyLevel:{},
        reentryLevel:{},
        bountiesAmount:{}
      }}>
       {/* <ComponentUsingFormState /> */}
        
       
        <label>Tournament Name:
           <br></br>
        <Text className="text"field="tournName" type="text" validate={validate} initialValue="laura"/>
        </label>
   
        <label>Time:<br></br><Text className="text" field="startTime" type = "time" validate={validate} initialValue = "18:00"/>
        </label>

        
        <label>Starting Chips:<br></br>
        <Text className="text"
          field="startStack"
          type="number"
          validate={validate}
          initialValue="100"
        />
        </label>
        
        <label>
        Round Length:<br></br>
        <Text className="text"
          field="roundLength"
          type="number"
          validate={validate}
          initialValue="10"
        />
        </label>
        
        <label>
        Buy in amount:<br></br>
        $<Text className="text"
          field="buyIn"
          type="number"
          validate={validate}
          initialValue="10"
        />
        </label>
        
        
        <label>
          Deduction aka fees:<br></br>
        $<Text className="text"
          field="deductions"
          type="number"
          validate={validate}
          initialValue="1"
        />
        </label>
        
        
        
        <label>
          Guarantee<br></br>
        $<Text className="text"
          field="guarantee"
          type="number"
          validate={validate}
          initialValue="1"
        />
        </label>
        
        <label>
          Break Frequency/Level<br></br>
        Every<Text className="text"
          field="breakFreq"
          type="text"
          validate={validate}
          initialValue="1"
        />
        </label>
        <label>
           Break Length<br></br>
        <Text className="text"
          field="breakLength"
          type="text"
          validate={validate}
          initialValue="1"
        />
        </label>
        
        <label>
          Late Registration/Level<br></br>
        <Text className="text"
          field="lateReg"
          type="text"
          validate={validate}
          initialValue="1"
        />
        </label>
        <label>
            Link to Document<br></br>
        <Text className="text"
          field="linkToDocument"
          type="text"
          validate={validate}
          initialValue="https://www.visitwynn.com/documents/Poker-All_Daily_Structures.pdf"
        />
        </label>
        <p></p>
                Occurrence:
                
        <Select field="occurrence" validate={validate} >
          <Option value="" disabled>
            Select One...
          </Option>
          <Option value="daily">daily</Option>
          <Option value="weekly">weekly</Option>
          <Option value="biweekly">bi-weekly</Option>
          <Option value="monthly">monthly</Option>
          <Option value="yearly">yearly</Option>
          <Option value="biyearly">bi-yearly</Option>
          <Option value="onetime">one time</Option>
          <Option value="other">other</Option>
        </Select>


        <Relevant when={({values})=>values.occurrence ==="daily"}>
          <p></p>
        <span className="clickOptions">
       <label className="clickDays">

      
         Monday<Checkbox field="monday" onClick={(e)=>setDays(e)} checked={daysHook.monday}></Checkbox>

         

       </label>
       <label className="clickDays">
         Tuesday<Checkbox field="tuesday"onClick={(e)=>setDays(e)} checked={daysHook.tuesday}></Checkbox>
       </label>
       <label className="clickDays">
         Wednesday<Checkbox field="wednesday"onClick={(e)=>setDays(e)}checked={daysHook.wednesday}></Checkbox>
       </label>
       
       <label className="clickDays">
         Thursday<Checkbox field="thursday"onClick={(e)=>setDays(e)}checked={daysHook.thursday}></Checkbox>
       </label>
       <label className="clickDays">
         Friday<Checkbox field="friday"onClick={(e)=>setDays(e)}checked={daysHook.friday}></Checkbox>
       </label>
       <label className="clickDays">
         Saturday<Checkbox field="saturday"onClick={(e)=>setDays(e)}checked={daysHook.saturday}></Checkbox>
       </label>
       <label className="clickDays">
         Sunday<Checkbox field="sunday"onClick={(e)=>setDays(e)}checked={daysHook.sunday}></Checkbox>
       </label>

       </span>
        </Relevant>
         




        <Relevant when={({values})=>values.occurrence ==="other"}>
          <br></br>
          When does it happen?
          <Text className="text"
          field="occurrenceExtra"
          type="text"
          validate={validate}
          
        />
        <br></br>
        </Relevant>
        <Relevant when={({values})=>values.occurrence ==="biweekly"}>
        <br></br>
        Select one date that the tournament is happening, we'll do the rest
        <Text className="text"
          field="occurrenceExtra"
          type="date"
          validate={validate}
          
        />
        <br></br>
        </Relevant>
        <Relevant when={({values})=>values.occurrence ==="monthly"}>
        <br></br>
        What day? For example "Last Sunday of each month"
        <Text className="text"
          field="occurrenceExtra"
          type="text"
          validate={validate}
          
        />
        <br></br>
        </Relevant>
        <Relevant when={({values})=>values.occurrence ==="yearly"}>
        <br></br>
        What day? For example "Last Sunday of June"
        <Text className="text"
          field="occurrenceExtra"
          type="text"
          validate={validate}
          
        />
        <br></br>
        </Relevant>
        <Relevant when={({values})=>values.occurrence ==="biyearly"}>
        <br></br>
        What day? For example "Last Sunday of June and December"
        <Text className="text"
          field="occurrenceExtra"
          type="text"
          validate={validate}
          
        />
       
        </Relevant>
        <br></br>
        
        <Relevant when={({values})=>values.occurrence ==="weekly"}>What Day?
        <Select field="occurrenceExtra" validate={validate} >
          <Option value="" disabled>
            Select Day
          </Option>
          <Option value="monday">Monday</Option>
          <Option value="tuesday">Tuesday</Option>
          <Option value="wednesday">Wednesday</Option>
          <Option value="thursday">Thursday</Option>
          <Option value="friday">Friday</Option>
          <Option value="saturday">Saturday</Option>
          <Option value="sunday">Sunday</Option>
         
        </Select>
       
        </Relevant>
        <Relevant when={({values})=>values.occurrence ==="onetime"}>
        <br></br>
        Select one date that the tournament is happening, even if it is the past
        <Text className="text"
          field="occurrenceExtra"
          type="date"
          validate={validate}
          
        />
        <br></br>
        </Relevant>
       








<br></br>

        Ante Type:
         <Select field="anteType" validate={validate} >
           
          <Option value="" disabled>
            Select Ante Type
          </Option>
          <Option value="normal">Normal/None</Option>
          <Option value="bigBlind">Big Blind Only</Option>
          <Option value="dealer">Button Only</Option>
          
         
        </Select>
    {/* Rebuy? <Select field="rebuy" initialValue={falseBoo}>
      <Option value={falseBoo}>False</Option>
    <Option value={trueBoo}>True</Option>
    </Select> */}
    <span className="clickOptions">
    <label className="click">
    Rebuy?: <Checkbox field="rebuy"  />
 
  <Relevant when={({values})=>values.rebuy ===true}>
      <p></p>
          Rebuys until what level?
          <Text className="text"
          field="rebuyLevel"
          type="number"
          validate={validate}
          initialValue="3"
          
        />
        </Relevant>
        </label>
          <label className="click">
    Re-Entry? <Checkbox field="reentry"  />
  <Relevant when={({values})=>values.reentry ===true}>
      <p></p>
          Re-Entries until what level?
          <Text className="text"
          field="reentryLevel"
          type="number"
          validate={validate}
          initialValue="5"
          
        />
        </Relevant>
        </label>
        



        <label className="click">
          Bounties? <Checkbox field="bounties" />
        
        <Relevant when={({values})=>values.bounties ===true}>
            <p></p>
                How Much Per Bounty $
                <Text className="text"
                field="bountiesAmount"
                type="text"
                validate={validate}
                initialValue="30"
                
              />
              </Relevant>
              </label>
              <label className="click">
          
    Add Ons? <Checkbox field="addOn"  />
  </label>
  <label className="click">
  <Relevant when={({values})=>values.addOn ===true}>
   <br></br>
        <Select field="addOnType" validate={validate} >
          <Option value="" disabled>
            What Type of Add On
          </Option>
          <Option value="beginning">Beginning</Option>
          <Option value="other">Other</Option>
        </Select>
        <br></br>
        <Relevant when={({values})=>values.addOnType ==="other"}>
        Add on notes:
          <TextArea className="text"
          field="addOnNotes"
          type="text"
          initialValue="Anytime under 10,000 chips"
          
        />
         <br></br>
        </Relevant>
         Add ons until what level?
          <Text className="text"
          field="addOnLevel"
          type="number"
          initialValue="5"
          
        />
        <br></br>
           Add ons chips received? $
          <Text className="text"
          field="addOnAmountChips"
          type="number"
          initialValue="5"
          
        />
        <br></br>
          Add ons cost?$
          <Text className="text"
          field="addOnAmountMoney"
          type="number"
          initialValue="5"
          
        />
        </Relevant>
        

        </label>
        </span>


        <button type="submit">Continue</button>
      </Form>
     
    </div>
  ) : (
    <div><ChipForm
    startStack={staringInfo.startStack}
    roundLength={staringInfo.roundLength}
    buyIn={staringInfo.buyIn}
    saveData={props.saveData}
    realMoneyStart={staringInfo.realMoneyStart}
    anteType={staringInfo.anteType}
    addOnType={staringInfo.addOnType}
    addOnAmountMoney={staringInfo.addOnAmountMoney}
    addOnAmountChips={staringInfo.addOnAmountChips}
    isEditing={props.isEditing}
    
  ></ChipForm>
  <button onClick={clearForm}>Clear/Start Over</button></div>
    
  );
};
export default StartForm;
