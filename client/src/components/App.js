import React, { Component } from "react";
import "./styles/App.css";
// import { async, reject } from "q";
// import ChipForm from "./ChipForm";
// import StartForm from "./StartForm";
// import TournReview from "./TournReview";
import AddLocation from "./AddLocation";
import USAAreas from "../AreasApi";
// import EditForm from "./EditForm"
// import { closestIndexTo } from "date-fns";
// import TestStyles from "./TestStyles"
import Login from "./Login";
import firebase from "../firebase";
import TournCards from "./TournCards";
let api2 = "/api/casinos";
let api = "/api";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      country: {},
      region: {},
      area: {},
      city: {},
      casino: {},
      curItem: {

      country: {},
      region: {},
      area: {},
      city: {},
      casino: {},
      startTime:{},
      rebuy:false,
      rebuyLevel:null,
      reentry:false,
      reentryLevel:null,
      communitySubmitted:false,
      bounties:false,
      bountiesAmount:null,
      deductions:{},
      guarantee:{},
      breakFreq:{},
      breakLength:{},
      lateReg:{},
      realMoneyStart:{},
      perDollarReal:{},
      allBlinds:{},
      resultLength:{},
      perDollar:{},
      notes:{},
      // perDollarReal:{},
      score:{},
      startingStack: {},
      buyIn: {},
      occurrence:{},
      occurrenceExtra:{},
      name:{},
      // perDollar: {},
      roundLength: {},
      forDeletion:false,
      anteType:{},
      linkToDocument:{},
      addOn:false,
      addOnType:{},
      addOnAmountChips:{},
      addOnAmountMoney:{},
      addOnLevel:{},
      addOnNotes:{},
      user:{},
      dailyDays:{}
    },
      tourns: null,
      location: false,     
      usaAreas: USAAreas,
      casinos: {},
      tournsLoaded: false,
      casinosLoaded: false,
      isEditing:false,
      beforeDelete:{},
      user:{},
      // loggedIn:true
    };

   
    this.startStackSubmit = this.startStackSubmit.bind(this);
    this.saveData = this.saveData.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.setArea = this.setArea.bind(this);
    this.addOneContinue = this.addOneContinue.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.setCity=this.setCity.bind(this);
    this.setItemForDeletion=this.setItemForDeletion.bind(this)
    this.setItemForDeletion=this.setItemForDeletion.bind(this)
    this.setLogIn = this.setLogIn.bind(this);
    this.setClearCurItemIdToNull=this.setClearCurItemIdToNull.bind(this)
    this.setIsEditingToFalse=this.setIsEditingToFalse.bind(this)
  }

  componentDidMount() {
    this.callBackendAPI2()
      .then((res) => {
        const casinosData = res.express;
        
        
        this.setState({ casinos: casinosData });
        this.setState({ casinosLoaded: true });
      })

      .catch((err) => console.log(err));
    this.callBackendAPI1()
      .then((res) => {
        const tournsData = res.express;
        this.setState({ tourns: tournsData });
        this.setState({ tournsLoaded: true });
      })

      .catch((err) => console.log(err));
  }

  callBackendAPI1 = async () => {
    const response = await fetch("/api");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
  callBackendAPI2 = async () => {
    const response = await fetch(api2);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };


  startStackSubmit = (e,f) => {
    let occurrenceExtraSubmit
    e.occurrence==="daily"?(occurrenceExtraSubmit=f):(occurrenceExtraSubmit=e.occurrenceExtra)
    let buyIn = e.buyIn;
    let guarantee=e.guarantee
    let realMoneyStart = buyIn - guarantee
    let user = this.state.user
    this.setState(prevState=>({ curItem:{
      ...prevState.curItem,roundLength: e.roundLength,startingStack: e.startStack,buyIn: e.buyIn,occurrence:e.occurrence,occurrenceExtra:occurrenceExtraSubmit,name:e.tournName,startTime:e.startTime,rebuy:e.rebuy,rebuyLevel:e.rebuyLevel,reentry:e.reentry,reentryLevel:e.reentryLevel,bounties:e.bounties, bountiesAmount:e.bountiesAmount,deductions:e.deductions,guarantee:e.guarantee,breakFreq:e.breakFreq,breakLength:e.breakLength,lateReg:e.lateReg,realMoneyStart:realMoneyStart,casino:this.state.casino,_id:null,forDeletion:false,anteType:e.anteType, linkToDocument:e.linkToDocument,addOn:e.addOn,addOnType:e.addOnType,addOnAmountChips:e.addOnAmountChips,addOnAmountMoney:e.addOnAmountMoney,addOnLevel:e.addOnLevel,addOnNotes:e.addOnNotes,user:user
    }}))

  };
 ////
 ///
 //
 //

  saveData = (e,f,g) => {
    
  
    let name = this.state.curItem.name
    let user = this.state.curItem.user
    this.setState(prevState=>({curItem:{
      ...prevState.curItem,
      allBlinds:f,resultLength:g.time,perDollar:g.perDollar,level:g.level,notes:e.notes,perDollarReal:g.perDollarReal,score:g.time,user:user}}))

    let isEditing = this.state.isEditing

      const editing=()=>{
        if(isEditing===true){
          return(
          // newItem.score=this.state.curItem.score,
          newItem.allBlinds=this.state.curItem.allBlinds,
          newItem.resultLength=this.state.curItem.resultLength,
          newItem.perDollar=this.state.curItem.perDollar,
          newItem.level=this.state.curItem.level,
          newItem.notes=this.state.curItem.notes,
          newItem.perDollarReal=this.state.curItem.perDollarReal,
          newItem.score=this.state.curItem.resultLength,
          newItem.forDeletion=this.state.curItem.forDeletion
          )
          
        }else{
          return(
          newItem.allBlinds=f,
          newItem.resultLength=g.time,
          newItem.perDollar=g.perDollar,
          newItem.level=g.level,
          newItem.notes=e.notes,
          newItem.perDollarReal=g.perDollarReal,
          newItem.score=g.time
          )
        }
      }
      let newItem=this.state.curItem

    console.log(newItem);
    editing()
    fetch(`${api}/add?=${name}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => {
        if (res.ok) {
          // console.log(newItem);
          return res.json();
        } else {
          throw Error(`Request rejected with status ${res.status}`);
        }
      })
      .then((json) => {
        let newData;
        console.log("no id???")
        if(!newItem._id){
          this.setState((state) => {
            newItem._id = json._id;
            const tourns = [...state.tourns, newItem];
            this.setState(prevState=>({
              curItem:{
                ...prevState.curItem,
                _id:json._id
              }
            }))
            return {
              tourns,
              newItem: "",
            }
          })
        }else{
          console.log("id???????")
          newData=this.state.tourns.map((item)=>{
            if(item._id===newItem._id){
              item = newItem
            }
            return item
          })
          this.setState({tourns:newData})
          
        }
        
      })
      .catch((error) => {
        console.log("this be your error brah" + error);
      });
      
  };
 /////
 ///
 //
 //
  setLocation = (e, f) => {
    if (f === "country") {
      this.setState({ country: e });
      this.setState(prevState=>({
        curItem:{
          ...prevState.curItem,
          country:e
        }
      }))
    } else if (f === "region") {
      this.setState({ region: e });
      this.setState(prevState=>({
        curItem:{...prevState.curItem,region:e}}))
    } 
    
    else {
      if (f === "area") {
        this.setState({ area: e.target.value })
       
      } else if(f==="casino") {
        this.setState({ casino: e.target.value });
        
      } 
    }
    this.setState(prevState=>({
      curItem:{...prevState.curItem,area:this.state.area,}
    }))

  };
  setArea = () => {
    this.setState({ location: true });
  };
  addOneContinue = (e) => {
    console.log(e.country);
  };
  handleDelete = (e)=>{

  }

  setCity = (e)=>{
    
    this.setState({city:e})
    this.setState(prevState=>({
      curItem:{
        ...prevState.curItem,
        city:e
      }
    }))
    
  }
  setItemForDeletion=(e)=>{
    let tourns =this.state.tourns
    // let beforeDeleteCurItem=this.state.curItem
    // this.setState({beforeDelete:beforeDeleteCurItem})
    this.setState({isEditing:true})
    let user = this.state.user
    tourns.map((item)=>{
      if(item._id===e._id){

       
        this.setState({curItem:item})
        let alreadyDeleted = item.forDeletion
        this.setState(prevState=>({
          curItem:{
            ...prevState.curItem,
            forDeletion:!alreadyDeleted,
            editedBy:user
          }
        }))
        
        
      }
    })
   
  }

  saveItemForDeletion=()=>{
    let name = this.state.curItem.name
    let newItem = this.state.curItem
    
    
    fetch(`${api}/add?=${name}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => {
        if (res.ok) {
          // console.log(newItem);
          return res.json();
        } else {
          throw Error(`Request rejected with status ${res.status}`);
        }
      })
      .then((json) => {
        let newData;
        
        if(!newItem._id){
          console.log("no id???")
          this.setState((state) => {
            newItem._id = json._id;
            const tourns = [...state.tourns, newItem];
            
            return {
              tourns,
              newItem: "",
            }
          })
        }else{
          console.log("id???????")
          newData=this.state.tourns.map((item)=>{
            if(item._id===newItem._id){
              item = newItem
            }
            return item
          })
          this.setState({tourns:newData})
        }
        
      })
      .then(()=>{
        this.setState({isEditing:false})
      
      })
      .catch((error) => {
        console.log("this be your error brah" + error);
      });
  }
  setLogIn = (email, password) => {
    this.setState(prevState=>({ curItem:{
      ...prevState.curItem,user:email
    },user:email}))
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.setState({ loggedIn: true });
      })
      .catch((error) => console.log(error));
  };
  setClearCurItemIdToNull =()=>{
    this.setState(prevState=>({
      curItem:{
        ...prevState.curItem,
        _id:{}
      }
    }))
  }
  setIsEditingToFalse =()=>{
    this.setState({isEditing:false})
    let user = this.state.user
    this.setState(prevState=>({
      curItem:{
        ...prevState.curItem,
        user:user
      }
    }))
  }
  render() {
    let loggedIn = this.state.loggedIn;
    let casinosLoaded = this.state.casinosLoaded
    let tournsLoaded = this.state.tournsLoaded
    let loaded = casinosLoaded||tournsLoaded
    // return(
    //   <div className="App">
    //     <StartForm/>
    //   </div>
      
    // )
    return(
      <div className="App">
        {!loaded?(
          <h1>Loading</h1>
        ):(
          loggedIn ?(
      <AddLocation
      setLocation={this.setLocation}
      usaAreas={this.state.usaAreas}
      regionSet={this.state.region}
      setArea={this.setArea}
      tourns={this.state.tourns}
      casinos={this.state.casinos}
      tournsLoaded={this.state.tournsLoaded}
      casinosLoaded={this.state.casinosLoaded}
      startStackSubmit={this.startStackSubmit}
      level={this.state.level}
      chipCount={this.state.chipCount}
      saveData={this.saveData}
      addOneContinue={this.addOneContinue}
      setCity={this.setCity}
      setItemForDeletion={this.setItemForDeletion}
      saveItemForDeletion={this.saveItemForDeletion}
      curItem={this.state.curItem}
      setClearCurItemIdToNull={this.setClearCurItemIdToNull}
      isEditing={this.state.isEditing}
      setIsEditingToFalse={this.setIsEditingToFalse}
    

    />
    
          ):(
            <Login setLogIn={this.setLogIn} />
          )
        )}



      </div>
    )
  }
}

export default App;

//The Codeslinger's creed
//I do not click with my hand; he who clicks with his hand has forgotten the face of his father
//I click with my eye
//
//I do not type with my hand; he who types with his hand has forgotten the face of his father
//I type with my mind
//
//I do not code with my computer; he who codes with his computer has forgotten the face of his father
//I code with my heart



