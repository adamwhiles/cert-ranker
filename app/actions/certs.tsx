import Certification from "../models/Certification";

export async function getAllCerts() {
  return await Certification.findAll({
    order: [["short_name", "ASC"]],
    raw: true,
  });
}

export async function getCertById(id: string) {
  return await Certification.findOne({
    where: { short_name: id },
    raw: true,
  });
}
