import React, { useMemo, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AuthScreen from "./components/AuthScreen";
import Dashboard from "./components/Dashboard";
import Vehicles from "./components/Vehicles";
import Services from "./components/Services";
import BookService from "./components/BookService";
import Appointments from "./components/Appointments";
import ServiceHistory from "./components/ServiceHistory";
import Payments from "./components/Payments";
import Feedback from "./components/Feedback";

const initialVehicles = [
  { id:1, name:"Maruti Brezza", number:"AP39AB1234", fuel:"Petrol" },
  { id:2, name:"Honda City", number:"AP39CD5678", fuel:"Petrol" }
];
const services = [
  {name:"General Service",detail:"Oil, filter, checkup",icon:"🛠️",price:2650},
  {name:"Engine Service",detail:"Engine tuning",icon:"⚙️",price:4200},
  {name:"Brake Service",detail:"Brake check & replace",icon:"🛑",price:1800},
  {name:"Battery Service",detail:"Check & replace",icon:"🔋",price:2200},
  {name:"AC Service",detail:"Cooling & cleaning",icon:"❄️",price:1500},
  {name:"Tyre Service",detail:"Rotation & replacement",icon:"⭕",price:1200}
];

export default function App() {
  const [page,setPage]=useState("Dashboard");
  const [username,setUsername]=useState("SHAIK NASEER");
  const [loggedIn,setLoggedIn]=useState(true);
  const [vehicles,setVehicles]=useState(initialVehicles);
  const [appointments,setAppointments]=useState([{id:1001,vehicle:"Maruti Brezza",number:"AP39AB1234",service:"General Service",date:"25 Nov 2026",time:"10:00 AM – 11:00 AM",status:"Upcoming",price:2650}]);
  const [selectedVehicle,setSelectedVehicle]=useState("Maruti Brezza");
  const [selectedService,setSelectedService]=useState("General Service");
  const [date,setDate]=useState("2026-11-25");
  const [time,setTime]=useState("10:00 AM – 11:00 AM");
  const [notice,setNotice]=useState("");
  const [billPaid,setBillPaid]=useState(false);
  const [rating,setRating]=useState(4);
  const [feedback,setFeedback]=useState("");
  const [newVehicle,setNewVehicle]=useState({name:"",number:"",fuel:"Petrol"});
  const [showAddVehicle,setShowAddVehicle]=useState(false);
  const latestAppointment=appointments[0];
  const formattedDate=useMemo(()=>date?new Date(`${date}T00:00:00`).toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}):"",[date]);

  function flash(message){setNotice(message);window.setTimeout(()=>setNotice(""),2800);}
  function bookAppointment(e){
    e.preventDefault();
    const vehicle=vehicles.find(v=>v.name===selectedVehicle);
    if(!vehicle)return flash("Please add or select a vehicle first.");
    const service=services.find(s=>s.name===selectedService)||services[0];
    setAppointments(prev=>[{id:Date.now(),vehicle:vehicle.name,number:vehicle.number,service:selectedService,date:formattedDate,time,status:"Upcoming",price:service.price},...prev]);
    setPage("Appointments");flash("Your service appointment has been booked.");
  }
  function cancelAppointment(id){setAppointments(prev=>prev.map(a=>a.id===id?{...a,status:"Cancelled"}:a));flash("Appointment cancelled.");}
  function rescheduleAppointment(id){
    const nextDate=window.prompt("Enter new date (e.g. 28 Nov 2026):");
    if(!nextDate)return;
    setAppointments(prev=>prev.map(a=>a.id===id?{...a,date:nextDate,status:"Rescheduled"}:a));flash("Appointment rescheduled.");
  }
  function submitFeedback(e){e.preventDefault();setFeedback("");flash("Thank you for your feedback!");}

  if(!loggedIn)return <AuthScreen onLogin={name=>{setUsername(name||"Customer");setLoggedIn(true);setPage("Dashboard");}}/>;

  return <div className="app-shell">
    <Sidebar page={page} setPage={setPage} username={username} onLogout={()=>setLoggedIn(false)}/>
    <main className="main-area"><Header page={page} username={username}/>{notice&&<div className="toast">✓ {notice}</div>}
      {page==="Dashboard"&&<Dashboard username={username} vehicles={vehicles} appointments={appointments} onNavigate={setPage} servicesCount={services.length}/>}
      {page==="My Vehicles"&&<Vehicles vehicles={vehicles} setVehicles={setVehicles} newVehicle={newVehicle} setNewVehicle={setNewVehicle} showAddVehicle={showAddVehicle} setShowAddVehicle={setShowAddVehicle} setSelectedVehicle={setSelectedVehicle} flash={flash}/>}
      {page==="Services"&&<Services services={services} setSelectedService={setSelectedService} setPage={setPage}/>}
      {page==="Book Service"&&<BookService vehicles={vehicles} services={services} selectedVehicle={selectedVehicle} setSelectedVehicle={setSelectedVehicle} selectedService={selectedService} setSelectedService={setSelectedService} date={date} setDate={setDate} time={time} setTime={setTime} onSubmit={bookAppointment}/>}
      {page==="Appointments"&&<Appointments appointments={appointments} cancelAppointment={cancelAppointment} rescheduleAppointment={rescheduleAppointment}/>}
      {page==="Service History"&&<ServiceHistory latestAppointment={latestAppointment}/>}
      {page==="Payments"&&<Payments amount={latestAppointment?.price||0} billPaid={billPaid} onPay={()=>{setBillPaid(true);flash("Demo payment marked as successful.");}}/>}
      {page==="Feedback"&&<Feedback rating={rating} setRating={setRating} feedback={feedback} setFeedback={setFeedback} onSubmit={submitFeedback}/>}
    </main>
  </div>;
}
