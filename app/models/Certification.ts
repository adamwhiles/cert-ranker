import { DataTypes, Model, Optional } from "sequelize";
import { getSequelizeConnection } from "@/app/utility/dbClient";

const sequelize = getSequelizeConnection();

// Define attributes interface
export interface CertificationAttributes {
  id: string;
  name: string;
  description?: string;
  vendor?: string;
  url?: string;
  submitted_by: string;
  status: "pending" | "approved" | "rejected";
  reviewed_by?: string | null;
  reviewed_at?: Date | null;
  created_at?: Date;
  short_name: string;
}

// Define Optional attributes for creation (fields auto-generated)
type CertificationCreationAttributes = Optional<
  CertificationAttributes,
  "id" | "status" | "reviewed_by" | "reviewed_at" | "created_at"
>;

class Certification
  extends Model<CertificationAttributes, CertificationCreationAttributes>
  implements CertificationAttributes
{
  public id!: string;
  public name!: string;
  public description?: string;
  public vendor?: string;
  public url?: string;
  public submitted_by!: string;
  public status!: "pending" | "approved" | "rejected";
  public reviewed_by?: string | null;
  public reviewed_at?: Date | null;
  public created_at?: Date;
  public short_name!: string;
}

// Initialize the model
Certification.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // Equivalent to NEWID()
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true, // Matches the UNIQUE constraint on the name column
    },
    description: {
      type: DataTypes.TEXT, // NVARCHAR(MAX) is best mapped to TEXT
      allowNull: true,
    },
    vendor: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    submitted_by: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pending", "approved", "rejected"),
      defaultValue: "pending",
      allowNull: false,
    },
    reviewed_by: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    reviewed_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, // Equivalent to GETUTCDATE()
    },
    short_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Certification",
    tableName: "Certifications",
    timestamps: false, // Since created_at is managed manually
  }
);

export default Certification;
