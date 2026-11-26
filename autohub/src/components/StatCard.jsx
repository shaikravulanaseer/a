import React from "react";
export default function StatCard({ icon, label, value, tint }) {
  return <div className={`stat-card ${tint}`}><span>{icon}</span><div><p>{label}</p><strong>{value}</strong></div></div>;
}