import { Cert } from "../types/models";

export default function CertBox({ cert }: { cert: Cert }) {
  return (
    <li className="certbox flex from-gray-200 bg-gradient-to-b grad rounded-xl py-2 px-5 hover:bg-gray-400 my-4">
      <h3 className="text-slate-100 font-bold bg-blue-400 px-3 py-1 rounded-md">
        {cert.id}
      </h3>
      <p>{cert.description.substring(0, 250) + "..."}</p>

      <p>
        <a href={cert.url} target="_blank">
          {cert.url}
        </a>
      </p>
    </li>
  );
}
