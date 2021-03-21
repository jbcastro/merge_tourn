import React, { useEffect, useState } from "react";
import { Form, Text, useFormState, useFieldApi,TextArea  } from "informed";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const TournReview = (props) => {
  const classes = useStyles();
  const eachLevelBlinds = props.eachLevelBlinds
  const infoToBeSaved = props.infoToBeSaved

const saveAll = (e)=>{
  {props.saveData(e,eachLevelBlinds,infoToBeSaved)}
}
let isEditing=props.isEditing

const [disableSubmitButton,setDisableSubmitButton]=React.useState(false)
  useEffect(()=>{
    if(isEditing===true){
      setDisableSubmitButton(true)
    }
  },[isEditing])
  return (
        <div className="field">
        You out of cash homie<br></br>
        You lasted {props.infoToBeSaved.time} minutes<br></br>
        <Form 
        onKeyPress={e=>{
          if(e.which===13){
            e.preventDefault()
          }
        }}
        
        className={classes.root} onSubmit={(e)=>saveAll(e)}>
          <label className="labelTextLarge">
            Any notes you'd like to add:<br></br>
            <TextArea rows="5" cols="70" className="textLarge" field="notes" type="text" />
          </label>     
          <br></br> 
          <button type="submit" disabled={disableSubmitButton}>Submit</button>
        </Form>
        
      </div>
  );
};
export default TournReview;

//  {/* <label>
//           Country
//           <CountryDropdown
//             value={country}
//             field="country"
//             onChange={(val) => setCountry(val)}
//           />
//           <Text field="country" type="text" validate={validate}></Text>
//         </label>
//         <label>
//           State/Province
//           <Text field="state" type="text" validate={validate}></Text>
//         </label> */}
