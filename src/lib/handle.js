import axios from "axios";

export const getSensorReadings = async () => {
  try {
    const response = await axios.get("https://0396flbb-3000.asse.devtunnels.ms/api/sensor_readings/");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getActuators = async () => {
  try {
    const response = await axios.get("https://0396flbb-3000.asse.devtunnels.ms/api/sensor_readings/aktuator");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const postActuators = async (id, data) => {
  try {
    const response = await axios.put(`https://0396flbb-3000.asse.devtunnels.ms/api/sensor_readings/aktuator/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error posting data to actuators API:", error.message);
    throw error;
  }
};
