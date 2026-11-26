import React from "react";
export default function QuickAction({ title, desc, icon, onClick }) {
  return <button className="panel quick-card" onClick={onClick}><span>{icon}</span><div><b>{title}</b><small>{desc}</small></div><i>→</i></button>;
}