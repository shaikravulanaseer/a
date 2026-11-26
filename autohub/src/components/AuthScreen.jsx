import React, { useState } from "react";
export default function AuthScreen({ onLogin }) {
  const [name,setName] = useState("SHAIK NASEER");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [register,setRegister] = useState(false);
  return <div className="auth-screen"><form className="auth-card" onSubmit={e => {e.preventDefault();onLogin(name);}}><div className="brand auth-brand">🚘 Auto Hub</div><h1>{register ? "Create Account" : "Welcome Back"}</h1><p>{register ? "Register to book vehicle services" : "Login to your account"}</p>{register && <label>Full name<input value={name} onChange={e=>setName(e.target.value)} required/></label>}<label>Email or phone<input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter email or phone" required/></label><label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter password" required/></label><button className="primary-btn full">{register ? "Register" : "Login"}</button><p className="auth-switch">{register ? "Already have an account?" : "Don't have an account?"} <button type="button" onClick={()=>setRegister(!register)}>{register ? "Login" : "Register"}</button></p><small className="muted">Demo UI: authentication is not connected to a backend.</small></form></div>;
}