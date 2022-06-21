var requestOptions = {
  method: "GET",
  redirect: "follow"
};
const url = "https://api.spacexdata.com/v3/history";

export const fetchHistory = async () => {
  try {
    const respuesta = await fetch(url, requestOptions);
    const data = respuesta.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
