import React from "react";
export default function PageHeading({ title, subtitle, action }) {
  return <div className="page-heading"><div><h1>{title}</h1><p>{subtitle}</p></div>{action}</div>;
}