import { useState } from "react";
import { Search } from "lucide-react";
import Dashboard from "./components/Dashboard";

function App() {
  const [carModel, setCarModel] = useState("");
  const [year, setYear] = useState("");
  const [km, setKm] = useState("");
  const [tires, setTires] = useState("good");
  const [engineLight, setEngineLight] = useState("off");
  const [showDashboard, setShowDashboard] = useState(false);

  const handleAnalyze = () => {
    setShowDashboard(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-8">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-white">
            🚗 AutoMate AI
          </h1>

          <p className="text-slate-400 mt-2">
            Smart Car Health Assistant
          </p>
        </div>

        <input
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
          placeholder="موديل السيارة"
          className="w-full bg-slate-800 text-white p-4 rounded-xl mb-4"
        />

        <input
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="سنة الصنع"
          className="w-full bg-slate-800 text-white p-4 rounded-xl mb-4"
        />

        <input
          value={km}
          onChange={(e) => setKm(e.target.value)}
          placeholder="عداد السيارة (KM)"
          className="w-full bg-slate-800 text-white p-4 rounded-xl mb-4"
        />

        <select
          value={tires}
          onChange={(e) => setTires(e.target.value)}
          className="w-full bg-slate-800 text-white p-4 rounded-xl mb-4"
        >
          <option value="good">الإطارات جيدة</option>
          <option value="bad">الإطارات سيئة</option>
        </select>

        <select
          value={engineLight}
          onChange={(e) => setEngineLight(e.target.value)}
          className="w-full bg-slate-800 text-white p-4 rounded-xl mb-6"
        >
          <option value="off">🟢 لمبة المكينة مطفية</option>
          <option value="on">🔴 لمبة المكينة شغالة</option>
        </select>

        <button
          onClick={handleAnalyze}
          className="w-full bg-blue-600 hover:bg-blue-700 transition p-4 rounded-xl text-white font-bold flex items-center justify-center gap-2"
        >
          <Search size={20} />
          تحليل السيارة
        </button>

        {showDashboard && (
          <Dashboard
            carModel={carModel}
            year={year}
            km={km}
            tires={tires}
            engineLight={engineLight}
          />
        )}

      </div>
    </div>
  );
}

export default App;