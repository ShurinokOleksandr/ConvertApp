import {getCovertValueType} from "src/store/slices/currencySlice";


// function for convert array obj type => [
//                                              {
//                                                  cc:"USD",
//                                                  rate:12.33
//                                              }
//                                         ]
//                                         to => [{'USD':12.33},]
export function convertArrayToObject(arr: getCovertValueType[]): { [key: string]: number }[] {
    const result: { [key: string]: number } = {};
    arr.forEach(obj => {
        result[obj.cc] = obj.rate;
    });
    return [result];
}