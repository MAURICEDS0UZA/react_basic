import React from "react";

export default function Card({ children ,bg='bg-indigo-100'}) {
  return <div className={`p-4 rounded-lg ${bg}`}>{children}</div>;
}
