"use client";

import { useEffect, useState } from "react";
import CertList from "../components/certList";

export default function Page() {
  const [certs, setCerts] = useState([]);
  useEffect(() => {
    const fetchCerts = async () => {
      const req = await fetch("http://127.0.0.1:3000/api/certs");
      const data = await req.json();
      setCerts(data.resources);
    };

    fetchCerts();
  }, []);
  return (
    <div className="prose">
      <h1>Certs...</h1>
      {certs ? <CertList certs={certs} /> : null}
    </div>
  );
}
