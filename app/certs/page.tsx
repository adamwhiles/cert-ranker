// "use client";

// import { useEffect, useState } from "react";
import CertList from "../components/certList";

export default async function Page() {
  // const [certs, setCerts] = useState([]);
  // useEffect(() => {
  //   const fetchCerts = async () => {
  //     const req = await fetch("/api/certs");
  //     const data = await req.json();
  //     setCerts(data.resources);
  //   };
  //
  //   fetchCerts();
  // }, []);
  const res = await fetch('http://127.0.0.1:3000/api/certs', {
    cache: "no-store"
  });
  const certs = await res.json();
  return (
    <div className="">
      <h1 className="text-5xl text-center">CERTS</h1>
      {certs ? <CertList certs={certs} /> : null}
    </div>
  );
}
