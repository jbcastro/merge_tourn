import React, { useState, useEffect  } from "react";
import { Form, Text,useFormState,useArrayField } from "informed";
import TournReview from "./TournReview";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const ChipForm = (props) => {
  const classes = useStyles();
  const anteType = props.anteType
  const addOnType=props.addOnType
  const startStack=props.startStack
  let initialChips
  let buyIn
  let realMoneyStart
  if(addOnType=="beginning"){
    initialChips=Number(startStack) + Number(props.addOnAmountChips)
    buyIn=Number(props.buyIn)+Number(props.addOnAmountMoney)
    realMoneyStart=Number(props.realMoneyStart) + Number(props.addOnAmountMoney)
  }else{
    initialChips=startStack
    buyIn=props.buyIn
    realMoneyStart=props.realMoneyStart 
  }
  
  
  const [currentLevelAndStack, setCurrentLevelAndStack] = React.useState({
    level: 1,
    chipCount: initialChips,
  });
  const [eachLevelBlinds, setEachLevelBlinds] = React.useState({});
  const [outOfChips, setOutOfChips] = useState(false);
  const roundLength = props.roundLength;
  const [infoToBeSaved, setInfoToBeSaved] = React.useState({
    buyIn:buyIn
  });
 
  const handleSubmit = (e) => {
    let ante
    if(anteType=="normal"){
       ante = Number(e.ante);
    }else{
      ante=Number(e.ante/10)
    }
    let smallBlind = Number(e.smallBlind);
    let bigBlind = Number(e.bigBlind);
    
    
    let numberOfBlinds1 = roundLength / 2;
    let numberOfBlinds = numberOfBlinds1 / 10;
    // console.log(numberOfBlinds);
    let numberOfAntes = roundLength / 2;
    let comboBlinds = smallBlind + bigBlind;
    let totalOfBlinds = comboBlinds * numberOfBlinds;
    // console.log(totalOfBlinds);
    let totalOfAntes = numberOfAntes * ante;
    let blindsPlusAntes = totalOfAntes + totalOfBlinds;
    let newChipCount = currentLevelAndStack.chipCount - blindsPlusAntes;

    if (newChipCount > 0) {
      let curLevel = currentLevelAndStack.level + 1;
      const bigg = "bigBlind" + currentLevelAndStack.level;
      const smalll = "smallBlind" + currentLevelAndStack.level;
      const antee = "ante" + currentLevelAndStack.level;
      // console.log(bigg);
      setCurrentLevelAndStack({
        ...currentLevelAndStack,
        level: curLevel,
        chipCount: newChipCount,
      });
      setEachLevelBlinds({
        
        ...eachLevelBlinds,
        [bigg]: bigBlind,
        [smalll]: smallBlind,
        [antee]: ante,
      });
    } else {
      const level = currentLevelAndStack.level;
      setOutOfChips(true);
      const timeLasted = level * roundLength;
      const perDollar = Number(timeLasted)/Number(buyIn)
      const perDollarReal=Number(timeLasted)/Number(realMoneyStart)
      setInfoToBeSaved({
        time: timeLasted,
        perDollar:perDollar,
        perDollarReal:perDollarReal,
        level:level,
        
      });
    }
  };


  return outOfChips === false ? (
    <div className="field">
      <br></br>
      Level {currentLevelAndStack.level}
      <br></br>
      Chip Count: {currentLevelAndStack.chipCount}
      <Form className={classes.root} onSubmit={handleSubmit}>
        <p></p>

        <label>
          Level {props.level} Small Blind:<br></br>
          <Text className="text" field="smallBlind" type="number" initialValue="10" />
        </label>
        <label>
          Level {props.level} Big Blind:<br></br>
          <Text  className="text"field="bigBlind" type="number" initialValue="10" />
        </label>
        <label>
          Level {props.level} Ante:<br></br>
          <Text className="text" field="ante" type="number" initialValue="0" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </div>
  ) : (
    <div>
      <br></br>
      Level {currentLevelAndStack.level}
      <br></br>
      Chip Count: {currentLevelAndStack.chipCount}
      <Form onSubmit={handleSubmit}>
        <p></p>

        <label>
          Level {props.level} Small Blind:
          <Text className="text" field="smallBlind" type="number" initialValue="10" />
        </label>
        <label>
          Level {props.level} Big Blind:
          <Text className="text" field="bigBlind" type="number" initialValue="10" />
        </label>
        <label>
          Level {props.level} Ante:
          <Text className="text" field="ante" type="number" initialValue="0" />
        </label>
        {/* <button type="submit">Submit</button> */}
      </Form>
      <TournReview 
      currentLevelAndStack={currentLevelAndStack}
      infoToBeSaved={infoToBeSaved}
      saveData={props.saveData}
      eachLevelBlinds={eachLevelBlinds}
      isEditing={props.isEditing}
      
      />
    </div>
  );
};
export default ChipForm;
