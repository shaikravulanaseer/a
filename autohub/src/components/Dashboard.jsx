import React from "react";
import StatCard from "./StatCard";
import QuickAction from "./QuickAction";

export default function Dashboard({ username, vehicles, appointments, onNavigate, servicesCount }) {
  const active = appointments.filter(a => a.status !== "Cancelled").length;
  return <section className="page-content">
    <div className="welcome-row"><div><span className="eyebrow">YOUR VEHICLE CARE, MADE SIMPLE</span><h1>Hello, {username} <span>👋</span></h1><p>Manage your vehicles and book services easily.</p></div><button className="primary-btn" onClick={() => onNavigate("Book Service")}>＋ Book a Service</button></div>
    <div className="stats-grid"><StatCard icon="🚘" label="My Vehicles" value={vehicles.length} tint="blue"/><StatCard icon="🧰" label="Available Services" value={servicesCount} tint="purple"/><StatCard icon="📅" label="Appointments" value={active} tint="orange"/><StatCard icon="✓" label="Service History" value={appointments.length} tint="green"/></div>
    <div className="hero-banner"><div><span className="eyebrow light">AUTO HUB SERVICE CENTRE</span><h2>Complete Vehicle<br/>Care & Service</h2><p>Book, track, pay and maintain your vehicle with Auto Hub.</p><button className="light-btn" onClick={() => onNavigate("Services")}>Explore Services →</button></div><div className="hero-car">🚘</div></div>
    <div className="section-row"><h2>Quick actions</h2></div>
    <div className="quick-grid"><QuickAction title="Manage Vehicles" desc="Add or update your vehicles" icon="🚙" onClick={() => onNavigate("My Vehicles")}/><QuickAction title="Book Appointment" desc="Choose a service and time slot" icon="📅" onClick={() => onNavigate("Book Service")}/><QuickAction title="View Service History" desc="Check your service progress" icon="◷" onClick={() => onNavigate("Service History")}/></div>
  </section>;
}