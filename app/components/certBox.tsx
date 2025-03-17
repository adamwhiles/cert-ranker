import Link from "next/link";
import { CertificationAttributes } from "@/app/models/Certification";

import Image from "next/image";
import VoteButtons from "./voteButtons";
import Markdown from "react-markdown";

export default function CertBox({ cert }: { cert: CertificationAttributes }) {
  return (
    <div className="relative p-6 border border-gray-100 rounded-lg w-3/4 mx-auto mt-10 flex">
      {/* Insert Vote Buttons */}
      <VoteButtons buttonAlignment={"vertical"} />
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-white to-blue-600"></span>
      <div className="flex-1">
        <div className="align-middle">
          <Link href={`/certs/${cert.short_name}`}>
            <h3 className="bg-blue-600 inline-block text-white py-1 px-2 text-md  lg:text-sm font-medium rounded-md">
              {cert.short_name}
            </h3>
            <Image
              src="/images/10018-icon-service-Azure-A.svg"
              alt="Microsoft Azure"
              height="40"
              width={40}
              className="inline-block ml-2 h-6"
            />
            <span className="ml-1 mt-2 font-medium justify-center align-middle">
              {cert.name}
            </span>
          </Link>
        </div>
        <div className="mt-5 ml-4">
          <Markdown>
            {(cert.description ?? "").indexOf(".") !== -1
              ? (cert.description ?? "")
                  .split("\n")
                  .slice(1)
                  .join("\n")
                  .substring(0, (cert.description ?? "").indexOf(".") + 1)
              : (cert.description ?? "")
                  .split("\n")
                  .slice(1)
                  .join("\n")
                  .substring(0, 100) + "..."}
          </Markdown>
        </div>

        <p className="text-right text-gray-400 mt-5">
          <a href={cert.url} target="_blank">
            {cert.url}
          </a>
        </p>
      </div>
    </div>
  );
}
