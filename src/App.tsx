import { useState } from "react";
import { createQueue } from "./Queue";

const queue = createQueue(); //antrian

function App() {
  const [nama, setNama] = useState<string>("");
  const [antrian, setAntrian] = useState<string[]>([]);
  const [dipanggil, setDipanggil] = useState<string | null>(null);

  const tambahAntrian = () => {
    if (nama.trim()) {
      queue.enqueue(nama.trim()); //antrian_pasien['fadli']
      setNama("");
      setAntrian(queue.getItems());
    }
  };

  const panggilPasien = () => {
    if (!queue.isEmpty()) {
      const pasien = queue.dequeue();
      setDipanggil(pasien || null);
      setAntrian(queue.getItems());
    } else {
      setDipanggil("Tidak ada pasien.");
    }
  };

  return (
    <div className="w-full ">
      <div className="h-screen flex justify-center items-center">
        <div className="max-w-md mx-auto mt-10 p-8 bg-white shadow-xl rounded-xl space-y-6">
          <h1 className="text-2xl mb-8 font-bold text-center text-blue-600">SimpleQueue - Antrian RS</h1>

          <input type="text" placeholder="Masukkan nama pasien" value={nama} onChange={(e) => setNama(e.target.value)} className="w-full border-1 border-slate-600 text-slate-600 rounded-lg p-2  focus:ring-2 focus:ring-blue-400" />

          <div className="flex justify-center space-x-2">
            <button onClick={tambahAntrian} className="bg-blue-500 text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Tambah Antrian
            </button>
            <button onClick={panggilPasien} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition cursor-pointer">
              Panggil Pasien
            </button>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700">Antrian Saat Ini:</h3>
            {antrian.length > 0 ? (
              <ul className="list-disc list-inside text-gray-800 space-y-1 mt-2">
                {antrian.map((nama, i) => (
                  <li key={i}>{nama}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500 italic mt-2">Belum ada pasien.</p>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700">Pasien Dipanggil:</h3>
            <p className="text-blue-600 text-lg mt-1 font-medium">{dipanggil || "(Belum ada yang dipanggil)"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
