import axios from "axios";

const price=449;
export async function addBuyer(data) {
  const fData = new FormData();
  const keys = Object.keys(data);
  for (const key of keys) {
    fData.append(key, data[key]);
  }
  fData.append('amount', data.quantity*price)
  axios
    .post(`${import.meta.env.VITE_BASE_URL}/api/add_buyer`, fData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
