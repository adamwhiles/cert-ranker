import { Cert } from "../types/models";

export default function CertBox({ cert }: { cert: Cert }) {
  return (
    <li className="certbox bg-gray-200 rounded-xl py-2 px-5 hover:bg-gray-400">
      <h3>{cert.id}</h3>
      <p>{cert.description.substring(0, 250) + "..."}</p>

      <p>
        <a href={cert.url} target="_blank">
          {cert.url}
        </a>
      </p>
    </li>
  );
}
