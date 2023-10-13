import { type AccountData } from "../types/type";

export const dataSorter = function (array: AccountData[] | [], type: string) {
  const sortedData = array.filter((item) => item.type === type) || [];
  return sortedData;
};
