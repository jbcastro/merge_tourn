import React, { useState, useEffect } from "react";
import { Form, Text, Select, Option,useFormState,Relevant,Checkbox   } from "informed";
import ChipForm from "./ChipForm";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
const TestStyles = ()=>{
    const classes = useStyles();

    const validate = (value) => {
        if (!value || value.length < 0)
          return "Field must be at least five characters";
      };
return(
    <div className="field">
    <Form className={classes.root}>
      {/* <ComponentUsingFormState /> */}
        {/* <h1>TOURNAMENT CALCULATOR!!1!!!!!!</h1> */}
       
       <label>Tournament Name:
           <br></br>
        <Text className="text"field="tournName" type="text" validate={validate} initialValue="laura"/>
        </label>
   
        <label>Time:<br></br><Text className="text" field="startTime" type = "time" validate={validate} initialValue = "18:00"/>
        </label>

        <span class="input-symbol">
        <label>Starting Stack:<br></br>
        <Text className="text"
          field="startStack"
          type="number"
          validate={validate}
          initialValue="100"
        />
        </label>
        </span>
        <label>
        Round Length:<br></br>
        <Text className="text"
          field="roundLength"
          type="number"
          validate={validate}
          initialValue="10"
        />
        </label>
        <span class="input-symbol">
        <label>
        Buy in amount<br></br>
        <Text className="text"
          field="buyIn"
          type="number"
          validate={validate}
          initialValue="10"
        />
        </label>
        </span>
        <span class="input-symbol">
        <label>
          Deduction aka fees<br></br>
        <Text className="text"
          field="deductions"
          type="number"
          validate={validate}
          initialValue="1"
        />
        </label>
        </span>
        
        <span class="input-symbol">
        <label>
          guarantee<br></br>
        <Text className="text"
          field="guarantee"
          type="number"
          validate={validate}
          initialValue="1"
        />
        </label>
        </span>
        <label>
          Break Frequency<br></br>
        <Text className="text"
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
          Late Registration<br></br>
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
        
        <Relevant when={({values})=>values.occurrence =="other"}>
          When does it happen?
          <Text className="text"
          field="occurrenceExtra"
          type="text"
          validate={validate}
          
        />
        </Relevant>
        <Relevant when={({values})=>values.occurrence =="biweekly"}>
        
        Select one date that the tournament is happening, we'll do the rest
        <Text className="text"
          field="occurrenceExtra"
          type="date"
          validate={validate}
          
        />
        </Relevant>
        <Relevant when={({values})=>values.occurrence =="monthly"}>
        
        What day? For example "Last Sunday of each month"
        <Text className="text"
          field="occurrenceExtra"
          type="text"
          validate={validate}
          
        />
        </Relevant>
        <Relevant when={({values})=>values.occurrence =="yearly"}>
        
        What day? For example "Last Sunday of June"
        <Text className="text"
          field="occurrenceExtra"
          type="text"
          validate={validate}
          
        />
        </Relevant>
        <Relevant when={({values})=>values.occurrence =="biyearly"}>
        
        What day? For example "Last Sunday of June and December"
        <Text className="text"
          field="occurrenceExtra"
          type="text"
          validate={validate}
          
        />
        </Relevant>
        <Relevant when={({values})=>values.occurrence =="weekly"}>
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
        <Relevant when={({values})=>values.occurrence =="onetime"}>
        
        Select one date that the tournament is happening, even if it is the past
        <Text className="text"
          field="occurrenceExtra"
          type="date"
          validate={validate}
          
        />
        </Relevant>
        {/* end of occirance */}










        
         <Select field="anteType" validate={validate} >
          <Option value="" disabled>
            Select Ante Type
          </Option>
          <Option value="normal">Normal</Option>
          <Option value="bigBlind">Big Blind Only</Option>
          <Option value="dealer">Button Only</Option>
          
         
        </Select>
    {/* Rebuy? <Select field="rebuy" initialValue={falseBoo}>
      <Option value={falseBoo}>False</Option>
    <Option value={trueBoo}>True</Option>
    </Select> */}
    <label className="click">
    Rebuy?: <Checkbox field="rebuy"  />
 
  <Relevant when={({values})=>values.rebuy ==true}>
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
  <Relevant when={({values})=>values.reentry ==true}>
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
        
        <Relevant when={({values})=>values.bounties ==true}>
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
  </label><label className="click">
  <Relevant when={({values})=>values.addOn ==true}>
        <Select field="addOnType" validate={validate} >
          <Option value="" disabled>
            What Type of Add On
          </Option>
          <Option value="beginning">Beginning</Option>
          <Option value="other">Other</Option>
        </Select>
        <Relevant when={({values})=>values.addOnType =="other"}>
        Add on notes:
          <Text className="text"
          field="addOnNotes"
          type="text"
          initialValue="Anytime under 10,000 chips"
          
        />
        </Relevant>
         Add ons until what level?
          <Text className="text"
          field="addOnLevel"
          type="number"
          initialValue="5"
          
        />
           Add ons chips received?
          <Text className="text"
          field="addOnAmountChips"
          type="number"
          initialValue="5"
          
        />
          Add ons cost?
          <Text className="text"
          field="addOnAmountMoney"
          type="number"
          initialValue="5"
          
        />
        </Relevant>
        

        </label>
        


        <button type="submit">Continue</button>
      </Form>
     
    </div>
)
}
export default TestStyles