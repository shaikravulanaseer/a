import React from "react";
import PageHeading from "./PageHeading";
export default function Vehicles({ vehicles, setVehicles, newVehicle, setNewVehicle, showAddVehicle, setShowAddVehicle, setSelectedVehicle, flash }) {
  function addVehicle(e) {
    e.preventDefault();
    if (!newVehicle.name.trim() || !newVehicle.number.trim()) return;
    setVehicles(prev => [...prev, { ...newVehicle, id: Date.now() }]);
    setSelectedVehicle(newVehicle.name);
    setNewVehicle({ name:"", number:"", fuel:"Petrol" });
    setShowAddVehicle(false); flash("Vehicle added successfully.");
  }
  return <section className="page-content"><PageHeading title="My Vehicles" subtitle="Add and manage the vehicles registered to your account." action={<button className="primary-btn" onClick={() => setShowAddVehicle(v=>!v)}>＋ Add Vehicle</button>}/>
    {showAddVehicle && <form className="panel vehicle-form" onSubmit={addVehicle}><h3>Add a vehicle</h3><div className="form-grid">
      <label>Vehicle name<input value={newVehicle.name} onChange={e=>setNewVehicle({...newVehicle,name:e.target.value})} placeholder="e.g. Maruti Brezza" required/></label>
      <label>Registration number<input value={newVehicle.number} onChange={e=>setNewVehicle({...newVehicle,number:e.target.value.toUpperCase()})} placeholder="e.g. AP39AB1234" required/></label>
      <label>Fuel type<select value={newVehicle.fuel} onChange={e=>setNewVehicle({...newVehicle,fuel:e.target.value})}><option>Petrol</option><option>Diesel</option><option>CNG</option><option>Electric</option></select></label>
    </div><button className="primary-btn">Save Vehicle</button></form>}
    <div className="vehicle-grid">{vehicles.map(v=><div className="panel vehicle-card" key={v.id}><div className="car-emoji">🚙</div><div className="vehicle-info"><h3>{v.name}</h3><p>{v.number}</p><span className="tag">{v.fuel}</span></div><button className="text-danger" onClick={()=>{setVehicles(prev=>prev.filter(x=>x.id!==v.id));flash("Vehicle removed.");}}>Remove</button></div>)}</div>
  </section>;
}