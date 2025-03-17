import { CertificationAttributes } from "@/app/models/Certification";
import CertList from "../components/certList";
import { getAllCerts } from "@/app/actions/certs";

export const dynamic = "force-dynamic";

export default async function Page() {
  const certs: CertificationAttributes[] = await getAllCerts();
  return (
    <div className="">
      <h1 className="text-5xl text-center">CERTS</h1>
      <CertList certs={certs} />
    </div>
  );
}
