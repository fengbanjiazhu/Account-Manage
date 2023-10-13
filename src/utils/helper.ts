import { type AccountData, SectionData } from "../types/type";
import { load } from "./Storage";

export const dataSorter = function (array: AccountData[] | [], type: string) {
  const sortedData = array.filter((item) => item.type === type) || [];
  return sortedData;
};

export const getAndFilterData = async () => {
  const allData = await load("accountList");
  if (!allData) return;

  const filteredData: SectionData = [
    { type: "Game", data: dataSorter(allData, "Game") },
    { type: "Platform", data: dataSorter(allData, "Platform") },
    { type: "Bank", data: dataSorter(allData, "Bank") },
    { type: "Others", data: dataSorter(allData, "Others") },
  ];

  return filteredData;
};
