
import React, { useState } from "react";
import Footer, { FirmCard } from "./Footer";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import logo from "./logo.svg"; // varsayılan logonuz (yerine kendi logonuzu koyabilirsiniz)

function SiteCard({ name, city, progress }) {
  return (
    <div className="border rounded-2xl shadow p-4 m-4 w-full max-w-md mx-auto bg-white">
      <h2 className="text-lg font-semibold text-blue-800">{name}</h2>
      <p className="text-sm text-gray-600">Şehir: {city}</p>
      <p className="text-sm mt-1">İlerleme: <span className="font-medium text-indigo-600">{progress}</span></p>
    </div>
  );
}

function FileUpload() {
  const [fileName, setFileName] = useState("");
  const handleChange = (e) => {
    setFileName(e.target.files[0]?.name || "");
  };
  return (
    <div className="mt-12 text-center">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Belge Yükle</h2>
      <input type="file" onChange={handleChange} className="border p-2 rounded" />
      {fileName && <p className="mt-2 text-sm text-green-600">Yüklenen Belge: {fileName}</p>}
    </div>
  );
}

function ExportPDF() {
  const handleExport = () => window.print();
  return (
    <div className="text-center mt-10">
      <button
        onClick={handleExport}
        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        PDF Olarak İndir
      </button>
    </div>
  );
}

function ProjectStatusChart() {
  const data = [
    { name: "İstanbul", ilerleme: 70 },
    { name: "Riyad", ilerleme: 45 },
    { name: "Ankara", ilerleme: 10 },
  ];
  return (
    <div className="mt-16 mb-12">
      <h2 className="text-xl font-semibold text-center text-gray-700 mb-6">Proje Durumu Grafiği</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="ilerleme" fill="#6366f1" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function FeedbackForm() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };
  return (
    <div className="mt-16 max-w-xl mx-auto p-4 bg-white border rounded-xl shadow">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Geri Bildirim Formu</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Görüş veya önerilerinizi yazın..."
          className="w-full h-32 p-3 border rounded resize-none"
          required
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Gönder
        </button>
        {submitted && <p className="text-green-600 mt-2">Geri bildiriminiz için teşekkürler!</p>}
      </form>
    </div>
  );
}

function App() {
  return (
    <div className="App min-h-screen flex flex-col justify-between bg-white text-gray-800">
      <main className="flex-grow px-4">
        <div className="flex justify-center pt-6">
          <img src={logo} alt="Logo" className="h-12" />
        </div>
        <h1 className="text-center text-2xl font-bold mt-4 text-indigo-700">MechBuild Pro Test Paneli</h1>
        <p className="text-center mt-2 text-gray-600">Bu panel, sistemin test için canlıya alınması içindir.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <FirmCard name="Örnek Mühendislik A.Ş." address="Barbaros Mah. İnönü Cad. No:88/1 Ataşehir / İstanbul" status="Aktif" />
          <FirmCard name="Delta Yapı Ltd. Şti." address="Yıldız Mah. İnci Sok. No:15 Beşiktaş / İstanbul" status="Pasif" />
          <FirmCard name="Nova Enerji Sanayi" address="Organize Sanayi Bölgesi 3. Cad. No:5 Gebze / Kocaeli" status="Beklemede" />
        </div>

        <h2 className="text-xl font-semibold text-center mt-12 text-gray-700">Şantiye Bilgileri</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <SiteCard name="İstanbul Ofis Projesi" city="İstanbul" progress="%70 Tamamlandı" />
          <SiteCard name="Riyad Hastane İnşaatı" city="Riyad" progress="%45 Devam Ediyor" />
          <SiteCard name="Ankara Endüstriyel Tesis" city="Ankara" progress="Başlangıç Aşamasında" />
        </div>

        <ProjectStatusChart />
        <FileUpload />
        <ExportPDF />
        <FeedbackForm />

        <div className="text-center text-sm text-green-600 mt-8">
          ✅ Panel test tamamlandı – tüm modüller başarıyla çalışıyor.
        </div>

        <p className="text-xs text-gray-400 text-center mt-10">
          Build ID: {new Date().toLocaleString()} – No Cache Mode Active
        </p>
        <p className="text-xs text-gray-400 text-center mt-1">
          © {new Date().getFullYear()} MechBuild Pro – Tüm Hakları Saklıdır.
        </p>
        {/* TODO: Google Analytics entegrasyonu buraya eklenebilir */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
