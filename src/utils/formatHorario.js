// src/utils/formatHorario.js
export function formatHorario(horaStr) {
  if (!horaStr) return "";
  // Se vier no formato "15:00:00", corta os segundos
  return horaStr.length >= 5 ? horaStr.slice(0, 5) : horaStr;
}
