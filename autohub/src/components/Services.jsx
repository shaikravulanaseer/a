import React from "react";
import PageHeading from "./PageHeading";
export default function Services({ services, setSelectedService, setPage }) {
  return <section className="page-content"><PageHeading title="Vehicle Services" subtitle="Choose the right care for your vehicle."/><div className="service-grid">{services.map(s=><div className="panel service-card" key={s.name}><div className="service-icon">{s.icon}</div><h3>{s.name}</h3><p>{s.detail}</p><strong>₹{s.price.toLocaleString("en-IN")}</strong><button className="outline-btn" onClick={()=>{setSelectedService(s.name);setPage("Book Service");}}>Book this service</button></div>)}</div></section>;
}