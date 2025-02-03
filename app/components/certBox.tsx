import { Cert } from "../types/models";

export default function CertBox({ cert }: { cert: Cert }) {
  return (
    <div className="relative block p-6 border border-gray-100 rounded-lg w-3/4 mx-auto mt-10 flex">
      <div className="flex flex-col items-center justify-center mr-4">
        <button className="text-gray-500 hover:text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
        <span className="my-1 text-sm font-bold text-gray-700">123</span>
        <button className="text-gray-500 hover:text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-white to-blue-600"></span>
      <div className="flex-1">
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
    </div>
  );
}
