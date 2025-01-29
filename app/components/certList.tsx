import { Cert } from "../types/models";
import CertBox from "./certBox";

export default function CertList({ certs }: { certs: Cert[] }) {
  return (
    <div className="">
      {certs.map((cert: Cert) => {
        return <CertBox key={cert.id} cert={cert} />;
      })}
    </div>
  );
}
