import { CertificationAttributes } from "@/app/models/Certification";
import CertBox from "./certBox";

export default function CertList({
  certs,
}: {
  certs: CertificationAttributes[];
}) {
  return (
    <div className="">
      {certs.map((cert: CertificationAttributes) => {
        return <CertBox key={cert.id} cert={cert} />;
      })}
    </div>
  );
}
