import { PromiseProvider } from "mongoose";
import React, { useState, useEffect } from "react";
import TournCards from "./TournCards";

const TournCardsData = ({ listItems,setItemForDeletion,saveItemForDeletion,curItem,setIsEditingToFalse,isEditing }) => {
  const data = listItems;
  let ready
  
  const cells = data.map((data) => {
    return <TournCards data={data} key={data._id} 
   setItemForDeletion={setItemForDeletion}
   saveItemForDeletion={saveItemForDeletion} curItem={curItem} setIsEditingToFalse={setIsEditingToFalse}isEditing={isEditing}/>;
  });
  return <div>{cells}</div>;
};
export default TournCardsData;
//   const cells = data.map((data) => {
//     return <TournCards data={data} key={data._id} 
//     setEditing={setEditing} deleteOne={deleteOne}/>;
//   });
//   return <div>{cells}</div>;
// };
// export default TournCardsData;
