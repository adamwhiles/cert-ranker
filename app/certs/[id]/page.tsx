import Link from "next/link";
import { Cert } from "../../types/models";
import { getCertById } from "@/app/actions/certs";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import Image from "next/image";
import VoteButtons from "@/app/components/voteButtons";

type Params = Promise<{ id: string }>;

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;
  const cert: Cert | null = await getCertById(id);
  console.log(cert?.description);
  if (!cert) {
    return <div>Error Fetching Post</div>;
  }
  return (
    <div>
      <div className="relative p-6 border border-gray-100 rounded-lg w-7/8 mx-auto mt-10 flex">
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
          <div className="mt-5 ml-4 single-cert-description">
            <Markdown remarkPlugins={[remarkBreaks]}>
              {cert.description.split("\n").slice(1).join("\n")}
            </Markdown>
          </div>
          <div className="mt-5 flex items-center">
            <div className="p-2 bg-blue-50 border border-blue-300 rounded hover:shadow-lg transition-shadow duration-300">
              <VoteButtons buttonAlignment="horizontal" />
            </div>
            <p className="ml-auto text-gray-400">
              <a href={cert.url} target="_blank">
                {cert.url}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <h2 className="text-2xl font-medium">Learning Resources</h2>
        <div>Resource 1</div>
      </div>
    </div>
  );
}
