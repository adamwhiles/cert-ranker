import Link from "next/link";
import { Cert } from "../../types/models";
import { getCertById } from "@/app/actions/certs";


type Params = Promise<{ id: string }>;

export default async function Page({
  params,
}: {
  params: Params
}) {
  const { id } = await params;
  const cert: Cert | null = await getCertById(id);
  if (!cert) {
    return <div>Error Fetching Post</div>
  }
  return (
    <div className="relative p-6 border border-gray-100 rounded-lg w-7/8 mx-auto mt-10 flex">
      <div className="flex-1">
        <div className="align-middle">
          <Link href={`/certs/${cert.id}`}>
            <h3 className="bg-blue-600 inline-block text-white py-1 px-2 text-md  lg:text-sm font-medium rounded-md">
              {cert.id}
            </h3>
            <img src="/images/10018-icon-service-Azure-A.svg" alt="Microsoft Azure" height="40" className="inline-block ml-2 h-6" />
            <span className="ml-1 mt-2 font-medium justify-center align-middle">{cert.name}</span>
          </Link>
        </div>
        <p className="mt-5 ml-4">{cert.description.substring(0, 250) + "..."}</p>

        <p className="text-right text-gray-400 mt-5">
          <a href={cert.url} target="_blank">
            {cert.url}
          </a>
        </p>
      </div>
    </div>
  );
}
