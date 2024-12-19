import Navbar from "../components/navbar/Navbar";
import Menu from "../components/menu/Menu";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/loading/Loading";
import { getSensorReadings, getActuators, postActuators } from "../lib/handle";
import { format } from "date-fns";
import { id } from "date-fns/locale";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function Detail() {
  const location = useLocation();
  const [sensorData, setSensorData] = useState([]);
  const [actuatorData, setActuatorData] = useState([]);
  const [loading, setLoading] = useState(false);

  const formatTimestamp = (timestamp) => {
    return format(new Date(timestamp), "dd MMMM yyyy HH:mm:ss", { locale: id });
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const data = await getSensorReadings();
        const dataActuator = await getActuators();
        setSensorData(data);
        setActuatorData(dataActuator);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const handleStatusChange = async (id, checked) => {
    const status = checked ? "ON" : "OFF";
    const data = { status };

    try {
      await postActuators(id, data);
      console.log(`Status actuator dengan ID ${id} berhasil diperbarui menjadi ${status}`);
    } catch (error) {
      console.error("Gagal memperbarui status actuator:", error.message);
    }
  };

  const recentSensorData = sensorData.slice(-5);

  const chartData = {
    labels: recentSensorData.map((item) => formatTimestamp(item.timestamp)),
    datasets: [
      {
        label: "ldr",
        data: location.pathname === "/ldr" ? recentSensorData.map((item) => item.ldr) : [],
        borderColor: "red",
        fill: false,
      },
      {
        label: "ir",
        data: location.pathname === "/ir" ? recentSensorData.map((item) => item.ir) : [],
        borderColor: "green",
        fill: false,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <main className="px-6 pt-3 pb-6">
          {" "}
          {location.pathname === "/ldr" ? (
            <p className="text-center text-2xl font-medium">ldr</p>
          ) : location.pathname === "/ir" ? (
            <p className="text-center text-2xl font-medium">ir</p>
          ) : location.pathname === "/aktuator" ? (
            <p className="text-center text-2xl font-medium">Aktuator</p>
          ) : (
            <p>Path tidak dikenal</p>
          )}
          {location.pathname == "/ldr" && (
            <>
              <div className="my-6 md:max-w-screen-sm mx-auto">
                <p className="font-medium text-xl">Grafik Data</p>
                <Line data={chartData} options={options} />
              </div>

              <div className="my-3 flex flex-col gap-2 md:max-w-screen-sm mx-auto">
                <p className="font-medium text-xl">Riwayat</p>
                <div className="overflow-x-auto">
                  {/* <table className="table table-xs table-pin-rows table-pin-cols">
              <thead>
                <tr>
                  <th>No</th>
                  <td>Tanggal</td>
                  <td>Timer</td>
                  <td>ldr</td>
                  <td>Berat</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <th>1 Des 2024</th>
                  <td>8 minute</td>
                  <td>80</td>
                  <td>1 Kg</td>
                </tr>
                <tr>
                  <th>2</th>
                  <th>2 Des 2024</th>
                  <td>8 minute</td>
                  <td>80</td>
                  <td>1 Kg</td>
                </tr>
                <tr>
                  <th>3</th>
                  <th>3 Des 2024</th>
                  <td>8 minute</td>
                  <td>80</td>
                  <td>1 Kg</td>
                </tr>
              </tbody>
            </table> */}
                  <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead>
                      <tr>
                        <th>No</th>
                        <td>Waktu</td>
                        <td>ldr</td>
                      </tr>
                    </thead>
                    <tbody>
                      {sensorData.map((item, index) => (
                        <tr key={item.id}>
                          <th>{index + 1}</th>
                          <th>{formatTimestamp(item.timestamp)}</th>
                          <td>{item.ldr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
          {location.pathname == "/ir" && (
            <>
              <div className="my-6 md:max-w-screen-sm mx-auto">
                <p className="font-medium text-xl">Grafik Data</p>
                <Line data={chartData} options={options} />
              </div>

              <div className="my-3 flex flex-col gap-2 md:max-w-screen-sm mx-auto">
                <p className="font-medium text-xl">Riwayat</p>
                <div className="overflow-x-auto">
                  {/* <table className="table table-xs table-pin-rows table-pin-cols">
              <thead>
                <tr>
                  <th>No</th>
                  <td>Tanggal</td>
                  <td>Timer</td>
                  <td>ldr</td>
                  <td>Berat</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <th>1 Des 2024</th>
                  <td>8 minute</td>
                  <td>80</td>
                  <td>1 Kg</td>
                </tr>
                <tr>
                  <th>2</th>
                  <th>2 Des 2024</th>
                  <td>8 minute</td>
                  <td>80</td>
                  <td>1 Kg</td>
                </tr>
                <tr>
                  <th>3</th>
                  <th>3 Des 2024</th>
                  <td>8 minute</td>
                  <td>80</td>
                  <td>1 Kg</td>
                </tr>
              </tbody>
            </table> */}
                  <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead>
                      <tr>
                        <th>No</th>
                        <td>Waktu</td>
                        <td>ir</td>
                      </tr>
                    </thead>
                    <tbody>
                      {sensorData.map((item, index) => (
                        <tr key={item.id}>
                          <th>{index + 1}</th>
                          <th>{formatTimestamp(item.timestamp)}</th>
                          <td>{item.ir}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
          {location.pathname == "/aktuator" &&
            actuatorData.map((item, index) => (
              <div key={index} className="card my-3 bg-base-100 image-full w-full shadow-xl md:max-w-80 mx-auto">
                <figure>
                  <img src="https://ksj.co.id/wp-content/uploads/2023/06/Fungsi-Aktuator-dan-Jenisnya.webp" alt="aktuator" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-bold">{item.name}</h2>
                  <p>
                    Terakhir Beroprasi: <span className="font-medium">{formatTimestamp(item.timestamp)}</span>
                  </p>
                  <div className="card-actions justify-end">
                    <input
                      type="checkbox"
                      className="toggle toggle-success"
                      onChange={(e) => handleStatusChange(item.id, e.target.checked)} // Mengirim id dan status ke handleStatusChange
                      defaultChecked={item.status === "ON"}
                    />
                  </div>
                </div>
              </div>
            ))}
        </main>
      )}
      <Menu />
    </div>
  );
}

export default Detail;
