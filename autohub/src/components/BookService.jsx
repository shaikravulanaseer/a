import React from "react";
import PageHeading from "./PageHeading";
export default function BookService({ vehicles, services, selectedVehicle, setSelectedVehicle, selectedService, setSelectedService, date, setDate, time, setTime, onSubmit }) {
  const current = services.find(s=>s.name===selectedService) || services[0];
  return <section className="page-content narrow"><PageHeading title="Book a Service" subtitle="Select a vehicle, service and preferred appointment slot."/><form className="panel booking-form" onSubmit={onSubmit}>
    <div className="stepper"><span className="step active">1 <small>Select service</small></span><i></i><span className="step active">2 <small>Date & time</small></span><i></i><span className="step">3 <small>Confirm</small></span></div>
    <div className="form-grid"><label>Select vehicle<select value={selectedVehicle} onChange={e=>setSelectedVehicle(e.target.value)}>{vehicles.map(v=><option key={v.id}>{v.name}</option>)}</select></label><label>Select service<select value={selectedService} onChange={e=>setSelectedService(e.target.value)}>{services.map(s=><option key={s.name}>{s.name}</option>)}</select></label><label>Preferred date<input type="date" min="2026-11-25" value={date} onChange={e=>setDate(e.target.value)} required/></label><label>Preferred time<select value={time} onChange={e=>setTime(e.target.value)}>{["09:00 AM – 10:00 AM","10:00 AM – 11:00 AM","11:00 AM – 12:00 PM","02:00 PM – 03:00 PM","03:00 PM – 04:00 PM"].map(t=><option key={t}>{t}</option>)}</select></label></div>
    <div className="booking-total"><span>Estimated service amount</span><b>₹{current.price.toLocaleString("en-IN")}</b></div><button className="primary-btn full">Confirm Appointment</button>
  </form></section>;
}