import { Cert } from "@/app/types/models";
import CertList from "../components/certList";
import { getAllCerts } from "@/app/actions/certs"

export const dynamic = "force-dynamic";

export default async function Page() {
  const certs: Cert[] = await getAllCerts();
  return (
    <div className="">
      <h1 className="text-5xl text-center">CERTS</h1>
      <CertList certs={certs} />
    </div>
  );
}
