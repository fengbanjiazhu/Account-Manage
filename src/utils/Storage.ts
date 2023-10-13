import AsyncStorage from "@react-native-async-storage/async-storage";
import { z } from "zod";
import { DataSchema } from "../types/type";
import { type AccountData } from "../types/type";

export const save = async (key: string, value: AccountData[]): Promise<void> => {
  const strValue = JSON.stringify(value);
  try {
    await AsyncStorage.setItem(key, strValue);
  } catch (error) {
    console.log(error);
  }
};

export const load = async (key: string): Promise<AccountData[] | [] | undefined> => {
  try {
    const res = await AsyncStorage.getItem(key);
    if (!res) return [];

    // console.log(res);
    const result = z.array(DataSchema).safeParse(JSON.parse(res));

    if (!result.success) throw new Error("something went wrong");
    const data = result.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (key: string) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

export const clearAll = async () => {
  try {
    return await AsyncStorage.clear();
  } catch (error) {
    console.log(error);
  }
};
