import { z } from "zod";

export const DataSchema = z.object({
  id: z.string(),
  type: z.enum(["Game", "Platform", "Bank", "Others"]),
  name: z.string(),
  account: z.string(),
  password: z.string(),
});

export type DataTypes = "Game" | "Platform" | "Bank" | "Others";

export type AccountData = z.infer<typeof DataSchema>;

export type SingleSectionData = {
  type: "Game" | "Platform" | "Bank" | "Others";
  data: AccountData[] | [];
};

export type SectionData = SingleSectionData[];
