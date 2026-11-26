import React from "react";

const items = [["Dashboard","▦"],["My Vehicles","🚘"],["Services","⚙"],["Book Service","▣"],["Appointments","▤"],["Service History","◷"],["Payments","₹"],["Feedback","☆"]];

export default function Sidebar({ page, setPage, username, onLogout }) {
  return <aside className="sidebar">
    <div className="brand"><span className="brand-icon">🚘</span><span>Auto Hub</span></div>
    <div className="nav-label">WORKSPACE</div>
    {items.map(([label, icon]) => <button key={label} className={`nav-link ${page === label ? "active" : ""}`} onClick={() => setPage(label)}><span className="nav-icon">{icon}</span>{label}</button>)}
    <button className="nav-link logout" onClick={onLogout}><span className="nav-icon">↪</span>Logout</button>
    <div className="sidebar-bottom"><div className="avatar">{username.charAt(0).toUpperCase()}</div><div><b>{username}</b><small>Customer account</small></div></div>
  </aside>;
}