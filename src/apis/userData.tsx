import axios, { AxiosRequestConfig } from "axios";
import { ProductionURl } from "../../env";

export const UserData = async (accessToken: any, id: number) => {
  console.log(id);
  return new Promise(async (resolve, reject) => {
    var config: AxiosRequestConfig = {
      method: "get",
      url: ProductionURl + `/application/member_details?id=${id}`,
      headers: {
        Authorization: accessToken,
        "Content-Type": "application/json"
      }
    };

    axios(config)
      .then(response => {
        // console.log('res ' + response);
        resolve(response.data);
      })
      .catch(error => {
        console.log("error" + error);
        reject(error.response);
      });
  });
};
