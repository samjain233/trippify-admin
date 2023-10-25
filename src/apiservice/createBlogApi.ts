import axios from "axios";
const url = "http://localhost:5000/api/createblog";

const createBlogApi = async (data: any) => {
  console.log(data);
  return await axios
    .post(`${url}`, { data })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return { success: false, message: err.message };
    });
};
export default createBlogApi;
