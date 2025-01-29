import { Cert } from "../types/models";

export default function CertBox({ cert }: { cert: Cert }) {
  return (
    <div className="relative block p-6 border border-gray-100 rounded-lg max-w-x mx-auto mt-10">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-white to-blue-600"></span>
      <h3 className="bg-blue-600 inline-block text-white py-1 px-2 text-lg font-medium rounded-md">
        {cert.id}
      </h3>
      <p className="mt-5">{cert.description.substring(0, 250) + "..."}</p>

      <p className="text-right text-gray-400 mt-5">
        <a href={cert.url} target="_blank">
          {cert.url}
        </a>
      </p>
    </div>
  );
}
