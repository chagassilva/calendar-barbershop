import { useState } from "react";
import { CalendarPicker } from "../components/CalendarPicker/CalendarPicker";
import { ScheduleForm } from "../components/ScheduleForm/ScheduleForm";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    // <div className="w-full max-w-[1300px] items-center justify-center m-auto " style={{ backgroundColor: "#ffffff" }}></div>

    <div>

      {/* Fundo geral: #baa77f com margem de 50px */}
      <div
        className="min-h-screen max-w-[1300px] m-[auto] flex items-center justify-center px-4 rounded-[15px] shadow-lg"
        style={{ backgroundColor: "#baa77f" }}
      >
        {/* Container centralizado no meio da tela, fundo escuro, padding 30px */}
        <div
          className="w-full max-w-[800px] p-[60px] flex flex-col items-center gap-6 rounded-[10px] shadow-lg"
          style={{ backgroundColor: "#151515" }}
        >
          <h1 className="text-3xl font-bold text-center text-white">
            Agendamento de Corte
          </h1>
          <CalendarPicker onSelectDate={setSelectedDate} />
          <ScheduleForm selectedDate={selectedDate} />
        </div>
        
      </div>
      {/* Footer */}
      <footer className="w-full text-center py-6 text-gray-500 text-sm">
        ©2025 Barbershop. Todos os direitos reservados.
      </footer>
    </div>

  );
}
