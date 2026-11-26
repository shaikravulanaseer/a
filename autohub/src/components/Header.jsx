import React from "react";
export default function Header({ page, username }) {
  return <header className="topbar"><div className="mobile-brand">🚘 Auto Hub</div><div className="breadcrumb">Customer Portal <span>/</span> {page}</div><div className="top-actions"><button aria-label="Notifications" className="icon-button">♧</button><div className="profile-pill"><span className="avatar small">{username.charAt(0).toUpperCase()}</span>{username}</div></div></header>;
}