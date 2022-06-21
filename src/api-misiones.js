export const getAllMissions = async () => {
  try {
    const response = await fetch("https://api.spacexdata.com/v3/missions");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// var requestOptions = {
//   method: "GET",
//   redirect: "follow"
// };
// const url = "https://api.spacexdata.com/v3/history";
// export const fetchHistory = async () => {
//   try {
//     const respuesta = await fetch(url, requestOptions);
//     const data = respuesta.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };
