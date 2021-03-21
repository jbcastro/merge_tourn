import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";




const TournCards = ({ data,setItemForDeletion,saveItemForDeletion,curItem,setIsEditingToFalse,isEditing }) => {
  const [expanded, setExpanded] = React.useState(false);

  let wide
  let displayExtra
  let showMoreorLess
  expanded ?(wide="100%"):(wide=345)
  expanded ?(displayExtra=""):(displayExtra="none")
  expanded ?(showMoreorLess="Show Less"):(showMoreorLess="Show More")
  const handleExpandClick = ()=>{
    setExpanded(!expanded)
  }
  const useStyles = makeStyles({
    notDeleted: {
      minWidth: 275,
      maxWidth: wide,
      overflow:"hidden",
      display:"inline-block",
      backgroundColor:"lightblue"
    },
    deleted: {
      minWidth: 275,
      maxWidth: 345,
      overflow:"hidden",
      display:"inline-block",
      backgroundColor:"red"
    },
    bland: {
      minWidth: 275,
      maxWidth: 345,
      overflow:"hidden",
      display:"inline-block",
      backgroundColor:"gray"
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    posHidden:{
      display:displayExtra,
      marginBottom: 12,
    }
  });
  let deleteButtonTrueOrFalse 
  const checkIfDeleted=(data)=>{
    if(isEditing){
      if(curItem._id===data._id){
        if(!data.forDeletion){
          return classes.notDeleted
        }else{
          return classes.deleted
        }
      }else{
        return classes.bland
      }
    }else{
      if(!data.forDeletion){
        return classes.notDeleted
      }else{
        return classes.deleted
      }
    }
  }
  const checkIfDeletedButton=(data)=>{
   
      if(!data.forDeletion){
        return deleteButtonTrueOrFalse="Delete?"
      }else{
        return deleteButtonTrueOrFalse="UnDelete?"
      }
    
  }
  checkIfDeletedButton(data)

  const [deleteSecondButton, setDeleteSecondButton]=React.useState(false)
  const setFirstButtonForDeletion =(data)=>{
    setItemForDeletion(data)
    setDeleteSecondButton(!deleteSecondButton)
   
  }
  const saveDeletion=()=>{
    saveItemForDeletion()
    setDeleteSecondButton(!deleteSecondButton)
  }
  const cancelDelete=()=>{
    setDeleteSecondButton(!deleteSecondButton)
    setIsEditingToFalse()
  }
  const classes = useStyles();

  
  const occurrenceExtraOnCard =(data)=>{
    if(data.occurrence==="daily"){
     let arr =[]
     const propertyNames = Object.keys(data.occurrenceExtra);
      propertyNames.forEach((e)=>{
        if(data.occurrenceExtra[e]===true){
         
          arr.push(e)
        }
      })

     
      console.log(arr)
      
     
    
    
    return arr.map(x =>x+ " ")
    }else{
      return data.occurrenceExtra
    }
  }
  
  // const bull = <span className={classes.bullet}>•</span>;
  return (
    <div className="cards">
     
      {" "}
      <Card className={checkIfDeleted(data)} key={data._id}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {data.casino}
          </Typography>
          <Typography variant="h5" component="h2">
            {data.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
                    
            <br></br>Score: {data.score}
            <br></br> Starting Stack: {data.startingStack}
            <br></br>Occurrence: {data.occurrence}
            
            <br></br>Start Time: {data.startTime}
            <br></br>Notes: {data.notes}
          </Typography>
          <Typography className={classes.posHidden} color="textSecondary">
            
            <br></br> Buy In: {data.buyIn}
            <br></br>Notes: {data.notes}
            <br></br>Round Length: {data.roundLength}
            <br></br>Occurrence Extra: {occurrenceExtraOnCard(data)}
            <br></br>
            <button onClick={()=>setFirstButtonForDeletion(data)}disabled={deleteSecondButton}>{deleteButtonTrueOrFalse}</button>
            <br></br>
            <button onClick={saveDeletion} disabled={!deleteSecondButton}>Are you sure you want to change </button>
            <br></br>
            <button onClick={cancelDelete} disabled={!deleteSecondButton}>Cancel </button>
            <br></br>
           
           {/* {Object.keys(data.allBlinds).map(key=>(
             <>
               <strong>{key.charAt(0).toUpperCase()+key.slice(1)}:</strong>
              {data.allBlinds[key]}
             </>
           ))} */}
          </Typography>
          <Typography variant="body2" component="p">
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" disabled={isEditing} onClick={handleExpandClick}>{showMoreorLess}</Button>
        </CardActions>
      </Card>
      
    </div>
  );
};
export default TournCards;

// const listItems = props.listItems;
// console.log(listItems);
