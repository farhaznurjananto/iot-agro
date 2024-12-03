import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Loading from "../components/loading/Loading";
import { DropHalfBottom, Nut, Thermometer } from "@phosphor-icons/react";
import Menu from "../components/menu/Menu";
import { fetchData } from "../lib/handle";

function Home() {
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
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <main className="px-6 pt-3 pb-6">
          {/* <Loading/> */}

          <p className="text-center text-2xl font-medium">Dashboard</p>

          {/* stat */}
          <div className="my-3">
            <div className="carousel w-full flex gap-3">
              {/* <div id="item1" className="carousel-item overflow-hidden">
              <div className="bg-base-200 min-w-[312px] p-6 text-center min-h-60 flex flex-col items-center justify-center rounded-3xl relative">
                <div className="z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="font-medium text-2xl">Riwayat</div>
                    <div className="text-8xl font-bold">3</div>
                    <div className="text-base">Pemakaian</div>
                  </div>
                  <a className="link text-sm" href="">
                    Lihat lebih detail
                  </a>
                </div>
                <div className="bg-base-300 rounded-full p-3 absolute -bottom-1/2">
                  <ClockCounterClockwise size={240} weight="fill" className="opacity-10" />
                </div>
              </div>
            </div> */}
              <div id="item1" className="carousel-item overflow-hidden">
                <div className="bg-base-200 min-w-[312px] p-6 text-center min-h-60 flex flex-col items-center justify-center rounded-3xl relative">
                  <div className="z-10 flex flex-col h-full justify-between">
                    <div>
                      <div className="font-medium text-2xl">Suhu</div>
                      <div className="text-8xl font-bold">24℃</div>
                      <div className="text-base">Suhu saat ini</div>
                    </div>
                    <a className="link text-sm" href="">
                      Lihat lebih detail
                    </a>
                  </div>
                  <div className="bg-base-300 rounded-full p-3 absolute -bottom-1/2">
                    <Thermometer size={240} weight="fill" className="opacity-10" />
                  </div>
                </div>
              </div>
              {/* <div id="item2" className="carousel-item overflow-hidden">
              <div className="bg-base-200 min-w-[312px] p-6 text-center min-h-60 flex flex-col items-center justify-center rounded-3xl relative">
                <div className="z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="font-medium text-2xl">Berat</div>
                    <div className="text-8xl font-bold">30</div>
                    <div className="text-base">Kilogram</div>
                  </div>
                  <a className="link text-sm" href="">
                    Lihat lebih detail
                  </a>
                </div>
                <div className="bg-base-300 rounded-full p-3 absolute -bottom-1/2">
                  <Barbell size={240} weight="fill" className="opacity-10" />
                </div>
              </div>
            </div> */}
              <div id="item2" className="carousel-item overflow-hidden">
                <div className="bg-base-200 min-w-[312px] p-6 text-center min-h-60 flex flex-col items-center justify-center rounded-3xl relative">
                  <div className="z-10 flex flex-col h-full justify-between">
                    <div>
                      <div className="font-medium text-2xl">Kelembaban</div>
                      <div className="text-8xl font-bold">30%</div>
                      <div className="text-base">Kelembaban saat ini</div>
                    </div>
                    <a className="link text-sm" href="">
                      Lihat lebih detail
                    </a>
                  </div>
                  <div className="bg-base-300 rounded-full p-3 absolute -bottom-1/2">
                    <DropHalfBottom size={240} weight="fill" className="opacity-10" />
                  </div>
                </div>
              </div>
              <div id="item3" className="carousel-item overflow-hidden">
                <div className="bg-base-200 min-w-[312px] p-6 text-center min-h-60 flex flex-col items-center justify-center rounded-3xl relative">
                  <div className="z-10 flex flex-col h-full justify-between">
                    <div>
                      <div className="font-medium text-2xl">Aktuator</div>
                      <div className="text-8xl font-bold">1</div>
                      <div className="text-base">Aktuator</div>
                    </div>
                    <a className="link text-sm" href="">
                      Lihat lebih detail
                    </a>
                  </div>
                  <div className="bg-base-300 rounded-full p-3 absolute -bottom-1/2">
                    <Nut size={240} weight="fill" className="opacity-10" />
                  </div>
                </div>
              </div>
              {/* <div id="item3" className="carousel-item overflow-hidden">
              <div className="bg-base-200 min-w-[312px] p-6 text-center min-h-60 flex flex-col items-center justify-center rounded-3xl relative">
                <div className="z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="font-medium text-2xl">Waktu</div>
                    <div className="text-8xl font-bold">8</div>
                    <div className="text-base">Menit</div>
                  </div>
                  <a className="link text-sm" href="">
                    Lihat lebih detail
                  </a>
                </div>
                <div className="bg-base-300 rounded-full p-3 absolute -bottom-1/2">
                  <Timer size={240} weight="fill" className="opacity-10" />
                </div>
              </div>
            </div> */}
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
              <a href="#item1" className="w-1 h-1 bg-slate-500 rounded-full"></a>
              <a href="#item2" className="w-1 h-1 bg-slate-500 rounded-full"></a>
              <a href="#item3" className="w-1 h-1 bg-slate-500 rounded-full"></a>
            </div>
          </div>

          {/* table */}
          <div className="my-3 flex flex-col gap-2">
            <p className="font-medium text-xl">Riwayat Terbaru</p>
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
                    <td>Kelembaban</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <th>11.21</th>
                    <td>80℃</td>
                    <td>3%</td>
                  </tr>
                  <tr>
                    <th>1</th>
                    <th>11.21</th>
                    <td>80℃</td>
                    <td>3%</td>
                  </tr>
                  <tr>
                    <th>1</th>
                    <th>11.21</th>
                    <td>80℃</td>
                    <td>3%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a className="link text-sm text-right" href="">
              Lihat lebih detail
            </a>
          </div>
        </main>
      )}

      <Menu />
    </div>
  );
}

export default Home;
