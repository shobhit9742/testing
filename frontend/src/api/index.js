// import axios from "axios";

// const API = axios.create({
//   baseURL: "https://fitbuddy-w7mg.onrender.com",
// });

// export const UserSignUp = async (data) => API.post("/user/signup", data);
// export const UserSignIn = async (data) => API.post("/user/signin", data);

// export const getDashboardDetails = async (token) =>
//   API.get("/user/dashboard", {
//     headers: { Authorization: `Bearer ${token}` },
//   });

// export const getWorkouts = async (token, date) =>
//   await API.get(`/user/workout${date}`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });

// export const addWorkout = async (token, data) =>
//   await API.post(`/user/workout`, data, {
//     headers: { Authorization: `Bearer ${token}` },
//   });

//   export const fetchData = async () => {
//     try {
//       const response = await axios.get('https://union-ubuntu-046.onrender.com/foods');
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       return [];
//     }
//   };

//   export const getMeals = async (token, queryParams = '') => {
//     try {
//       const response = await API.get(`/getAllMeals`, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       return response;
//     } catch (error) {
//       console.error('Error fetching meals:', error);
//       throw error;
//     }
//   };

import axios from "axios";

const API = axios.create({
  baseURL: "https://fitbuddy-w7mg.onrender.com",
});

export const UserSignUp = async (data) => API.post("/user/signup", data);
export const UserSignIn = async (data) => API.post("/user/signin", data);

export const getDashboardDetails = async (token) =>
  API.get("/user/dashboard", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getWorkouts = async (token, date = "") =>
  API.get(`/user/workout${date ? `?date=${date}` : ""}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addWorkout = async (token, data) =>
  API.post(`/user/workout`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://union-ubuntu-046.onrender.com/foods"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getMeals = async (token, queryParams = "") => {
  try {
    const response = await API.get(`/getAllMeals${queryParams}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching meals:", error);
    throw error;
  }
};
