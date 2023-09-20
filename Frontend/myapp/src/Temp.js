import { useState } from "react";
import Weather from "./weather";

function TempDetails(props) {
    const renderData = ()=> {
       if ( props.data!=null) {
        console.log(props.data);
           var list = props.data.timelines[0].intervals.map(
               temp => {
                   return <tr key={temp.startTime}><td>{temp.startTime}</td><td>{temp.values.temperature}</td></tr>
               }
           )
           return list;
       }
   }
   return (
       <div>
           <table border="1" width="100%">
               <thead>
                   <tr>    
                       <th>Start Time</th>
                       <th>Temperature</th>
                   </tr>
               </thead>
               <tbody>
                   {renderData()}
               </tbody>
           </table>

       </div>
   )
   
}
export default TempDetails()