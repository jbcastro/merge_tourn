import React, { useState, useEffect } from "react";
import { Form, Text } from "informed";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import TournCardsData from "./TournCardsData";
// import ChipForm from "./ChipForm";
import StartForm from "./StartForm";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const AddLocation = (props) => {
  const classes = useStyles();
  // const [country, setCountry] = useState("");
  // const [region, setRegion] = useState("");
  const [allLocation, setAllLocation] = React.useState({
    country: {},
    region: {},
    area: {},
    casino: null,
    city:{}
  });
  const [readyToAdd, setReadyToAdd] = useState(false);
  const addingOne = (e) => {
    e.preventDefault();
    setReadyToAdd(true);
  };
 
  // console.log(country);
  const selectCountryAndRegion = (e, f) => {
    setAllLocation({ ...allLocation, [f]: e });
    props.setLocation(e, f);
    setShowAddButton(false)
   
  };
  useEffect(() => {
    setAllLocation({ ...allLocation, area: {} });
  }, [allLocation.region]);
  useEffect(() => {
    setAllLocation({ ...allLocation, casino: {} });
  }, [allLocation.area]);

  
  const [showAddButton, setShowAddButton] = useState(false);
  const selectArea = (e, f) => {
    setAllLocation({ ...allLocation, [f]: e.target.value });
    props.setLocation(e, f);
    setShowAddButton(false)
    // console.log(e, [f]);
  };
 
  const selectCasino = (e, f, g) => {
    setShowAddButton(true);
    
    setAllLocation({ ...allLocation, [f]: e.target.value});
    
    props.setLocation(e,f)
 
  const city1 = casinos.filter(item=>item.name.trim()===e.target.value.trim())

   props.setCity(city1[0].city)
  };
  
useEffect(()=>{

},[])

 
  let selectableAreas = [];

  {
    props.usaAreas.map((item) => {
      if (item.state == props.regionSet) {
        selectableAreas = item.areas;
      }
    });
  }

  const casinos = props.casinos;

  const [allAreaCasinos, setAllAreaCasinos] = React.useState({
    allInfo: {},
  });

  useEffect(() => {
    setAllAreaCasinos({
      ...allAreaCasinos,
      allInfo: Object.values(casinos).filter(
        (item) => item.area === allLocation.area
      ),
    });
  }, [allLocation.area]);
  

 


  const tourns = props.tourns;
  const [filteredTourns, setFilteredTourns] = React.useState({
    toune: {},
  });
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (props.tournsLoaded && props.casinosLoaded) {
      setLoad(true);
    }
  }, [props]);

  useEffect(() => {
    
    if (load === true) {
    
      setFilteredTourns({
        ...filteredTourns,
        toune: Object.values(tourns).filter(
          (item) => item.casino === allLocation.casino && item.area ===allLocation.area
        ),
      });
    }
  }, [allLocation.casino],[props.tourns]);
  useEffect(() => {
    if (load == true) {
    
      setFilteredTourns({
        ...filteredTourns,
        toune: Object.values(tourns).filter(
          (item) => item.casino === allLocation.casino && item.area ===allLocation.area
        ),
      });
    }
  }, [props.tourns]);

  useEffect(() => {
    setReadyToAdd(false);
  }, [allLocation]);

  const listItems = Object.values(filteredTourns.toune);


  return (
    <div className={classes.root}>
     {/* <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup> */}

  <Popup trigger={<Button variant="contained" color="primary">
        How To
      </Button>}position="right center">
    <div>Selecting each dropdown will narrow the area down to a specific casino. For demo please select the first in each drop down to see entered examples</div>
  </Popup>
      
      <br></br>
      <h2>Please Select From The Dropdowns Below</h2>
      <br></br>
      <CountryDropdown
        value={allLocation.country}
        onChange={(e) => selectCountryAndRegion(e, "country")}
        priorityOptions={["US", "CA", "GB"]}
      />
      
      <br></br>
      <RegionDropdown
        country={allLocation.country}
        value={allLocation.region}
        onChange={(e) => selectCountryAndRegion(e, "region")}
      />
      
      <br></br>
      {/* {viewStuff} */}
      <form id="formz" onSubmit={addingOne}>
        {/* asfg */}
        <select
          onChange={(e) => selectArea(e, "area")}
          id="area"
          value={allLocation.area}
        >
          <option value="0">Select Area</option>
          {selectableAreas.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
        <br></br>
        <br></br>
        <select
          onChange={(e) => selectCasino(e, "casino","city")}
          id="casino"
          value={allLocation.casino}
          
        >
          <option value="0">Select Casino</option>
          {Object.values(allAreaCasinos.allInfo).map((item, i) => (
            <option key={i}>{item.name}</option>
          ))}
        </select>
       
        <br></br>
        <br></br>
        {showAddButton === true ? (
          <span>
          <input type="submit" value="Add One" disabled={props.isEditing}></input>
        
         </span>
        ) : null}
      </form>
      {readyToAdd === true  ? (
        <span>
          <StartForm
            startStackSubmit={props.startStackSubmit}
            saveData={props.saveData}
            allLocation={allLocation}
            setLocation={props.setLocation}
            setClearCurItemIdToNull={props.setClearCurItemIdToNull}
            isEditing={props.isEditing}
          ></StartForm>
        </span>
      ) : null}
      <br></br>
        {showAddButton===true?(
               <h1>Already entered for {allLocation.casino}</h1>
        ):(null)}
     <TournCardsData listItems={listItems} 
                setItemForDeletion={props.setItemForDeletion}
                saveItemForDeletion={props.saveItemForDeletion}
                curItem={props.curItem}
                setIsEditingToFalse={props.setIsEditingToFalse}
                isEditing={props.isEditing}>
                  
                </TournCardsData>
    </div>
  );
};
export default AddLocation;
