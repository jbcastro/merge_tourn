import React, { useState, useEffect } from "react";
import { Form, Text, Select, Option,useFormState,Relevant,Checkbox   } from "informed";
import { render } from "mustache";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
const EditForm = (props)=>{
    const classes = useStyles();
    const data = props.curItem
    console.log(data.name)
    return(
        <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField id="name" label="Name" 
        defaultValue={data.name} field="name" onBlur={(e)=>props.editIt(e)}/>

        <TextField id="notes" label="Notes" 
        defaultValue={data.notes} field="notes" onBlur={(e)=>props.editIt(e)}/>

        <TextField id="breakFreq" label="Break Frequency" 
        defaultValue={data.breakFreq} field="breakFreq" onBlur={(e)=>props.editIt(e)}/>

        <TextField id="breakLength" label="Break Length" 
        defaultValue={data.breakFreq} field="breakLength" onBlur={(e)=>props.editIt(e)}/>

        <TextField id="lateReg" label="Late Registration" 
        defaultValue={data.breakFreq} field="lateReg" onBlur={(e)=>props.editIt(e)}/>
        {/* <Checkbox
            checked={data.forDeletion}
            onBlur={(e)=>props.editIt(e)}
            id="forDeletion"

            indeterminate
          /> */}
      </div>
    </form>
    )
}
 export default EditForm

//  name: { type: String },
//  casino: { type: String },
//  starting: { type: Number },
//  roundLength: { type: Number },
//  resultLength: { type: Number },
//  score: { type: String },
//  buyIn: { type: Number },
//  perDollar: { type: Number },
//  country: { type: String },
//  region: { type: String },
//  area: { type: String },
//  city: { type: String },
//  occurrence: { type: String },
//  occurrenceExtra: { type: String },
//  startTime: { type: String },
//  notes:{type:String},
//  level:{type:Number},
//  allBlinds:{type:Object},
//  rebuy:{type:Boolean},
//  rebuyLevel:{type:Number},
//  reentry:{type:Boolean},
//  reentryLevel:{type:Number},
//  communitySubmitted:{type:Boolean},
//  bounties:{type:Boolean},
//  bountiesAmount:{type:String},
//  deductions:{type:Number},
//  guarantee:{type:Number},
//  breakFreq:{type:String},
//  breakLength:{type:String},
//  lateReg:{type:String},
//  realMoneyStart:{type:Number},
//  perDollarReal:{type:Number}