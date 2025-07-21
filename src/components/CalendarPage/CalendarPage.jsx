import React, { useState } from "react";

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState("");

  const handleChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Agende seu horário
        </h1>

        <label className="block text-gray-700 font-medium mb-2">
          Selecione a data:
        </label>
        <input
          type="date"
          value={selectedDate}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 mb-6"
        />

        <button
          disabled={!selectedDate}
          className={`w-full py-3 rounded-lg font-semibold transition ${
            selectedDate
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-gray-400 cursor-not-allowed text-white"
          }`}
        >
          {selectedDate ? "Avançar para o agendamento" : "Escolha uma data"}
        </button>
      </div>
    </div>
  );
}
