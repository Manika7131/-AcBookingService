import { useState } from "react";

export default function AdminLogin() {
  const [creds, setCreds] = useState({ user: "", pass: "" });
  const onChange = (e: any) => setCreds({...creds, [e.target.name]: e.target.value});
  const onSubmit = (e: any) => { e.preventDefault(); alert("Admin login demo — implement real auth"); };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h3 className="font-bold mb-4">Admin Login</h3>
      <form onSubmit={onSubmit} className="space-y-3">
        <input name="user" onChange={onChange} className="input" placeholder="Username" />
        <input name="pass" onChange={onChange} type="password" className="input" placeholder="Password" />
        <button className="btn-primary w-full">Login</button>
      </form>
    </div>
  );
}
