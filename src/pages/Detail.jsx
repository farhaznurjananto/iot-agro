import Navbar from "../components/navbar/Navbar";
import Menu from "../components/menu/Menu";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../lib/handle";
import Loading from "../components/loading/Loading";

// Register Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function Detail() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const data = await fetchData();
        setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  // const data = {
  //   labels: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
  //   datasets: [
  //     {
  //       label: "Dataset 1",
  //       data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
  //       borderColor: "red",
  //       fill: false,
  //     },
  //     {
  //       label: "Dataset 2",
  //       data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
  //       borderColor: "green",
  //       fill: false,
  //     },
  //     {
  //       label: "Dataset 3",
  //       data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
  //       borderColor: "blue",
  //       fill: false,
  //     },
  //   ],
  // };

  // const options = {
  //   plugins: {
  //     legend: {
  //       display: true,
  //     },
  //   },
  // };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <main className="px-6 pt-3 pb-6">
          {" "}
          {location.pathname === "/suhu" ? (
            <p className="text-center text-2xl font-medium">Suhu</p>
          ) : location.pathname === "/kelembaban" ? (
            <p className="text-center text-2xl font-medium">Kelembaban</p>
          ) : location.pathname === "/aktuator" ? (
            <p className="text-center text-2xl font-medium">Aktuator</p>
          ) : (
            <p>Path tidak dikenal</p>
          )}
          {location.pathname == "/suhu" && (
            <>
              <div className="my-6 md:max-w-screen-sm mx-auto">
                <p className="font-medium text-xl">Grafik Data</p>
                {/* <Line data={data} options={options} /> */}
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
                  <td>Suhu</td>
                  <td>Berat</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <th>1 Des 2024</th>
                  <td>8 minute</td>
                  <td>80℃</td>
                  <td>1 Kg</td>
                </tr>
                <tr>
                  <th>2</th>
                  <th>2 Des 2024</th>
                  <td>8 minute</td>
                  <td>80℃</td>
                  <td>1 Kg</td>
                </tr>
                <tr>
                  <th>3</th>
                  <th>3 Des 2024</th>
                  <td>8 minute</td>
                  <td>80℃</td>
                  <td>1 Kg</td>
                </tr>
              </tbody>
            </table> */}
                  <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead>
                      <tr>
                        <th>No</th>
                        <td>Waktu</td>
                        <td>Suhu</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <th>11.21</th>
                        <td>80℃</td>
                      </tr>
                      <tr>
                        <th>1</th>
                        <th>11.21</th>
                        <td>80℃</td>
                      </tr>
                      <tr>
                        <th>1</th>
                        <th>11.21</th>
                        <td>80℃</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
          {location.pathname == "/kelembaban" && (
            <>
              <div className="my-6 md:max-w-screen-sm mx-auto">
                <p className="font-medium text-xl">Grafik Data</p>
                {/* <Line data={data} options={options} /> */}
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
                  <td>Suhu</td>
                  <td>Berat</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <th>1 Des 2024</th>
                  <td>8 minute</td>
                  <td>80℃</td>
                  <td>1 Kg</td>
                </tr>
                <tr>
                  <th>2</th>
                  <th>2 Des 2024</th>
                  <td>8 minute</td>
                  <td>80℃</td>
                  <td>1 Kg</td>
                </tr>
                <tr>
                  <th>3</th>
                  <th>3 Des 2024</th>
                  <td>8 minute</td>
                  <td>80℃</td>
                  <td>1 Kg</td>
                </tr>
              </tbody>
            </table> */}
                  <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead>
                      <tr>
                        <th>No</th>
                        <td>Waktu</td>
                        <td>Kelembaban</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <th>11.21</th>
                        <td>8%</td>
                      </tr>
                      <tr>
                        <th>1</th>
                        <th>11.21</th>
                        <td>8%</td>
                      </tr>
                      <tr>
                        <th>1</th>
                        <th>11.21</th>
                        <td>8%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
          {location.pathname == "/aktuator" && (
            <>
              <div className="card my-3 bg-base-100 image-full w-full shadow-xl md:max-w-80 mx-auto">
                <figure>
                  <img src="https://ksj.co.id/wp-content/uploads/2023/06/Fungsi-Aktuator-dan-Jenisnya.webp" alt="aktuator" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-bold">Pompa Air</h2>
                  <p>
                    Terakhir Beroprasi: <span className="font-medium">11.14</span>
                  </p>
                  <div className="card-actions justify-end">
                    <input type="checkbox" className="toggle toggle-success" defaultChecked />
                  </div>
                </div>
              </div>
            </>
          )}
        </main>
      )}
      <Menu />
    </div>
  );
}

export default Detail;
