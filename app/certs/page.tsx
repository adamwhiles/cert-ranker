"use client";

import { useEffect, useState } from "react";
import { Cert } from "../types/models";

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
    <div>
      <h1>Certs...</h1>
      <ul>
        {certs
          ? certs.map((cert: Cert) => {
              return <li key={cert.id}>{cert.id}</li>;
            })
          : null}
      </ul>
    </div>
  );
}
