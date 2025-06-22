function updateClock() {
  const now = new Date();
  // extrai horas, minutos e segundos
  let h = String(now.getHours()).padStart(2, '0');
  let m = String(now.getMinutes()).padStart(2, '0');
  let s = String(now.getSeconds()).padStart(2, '0');
  
  // monta string “HH:MM:SS”
  document.getElementById('clock').textContent = `${h}:${m}:${s}`;
}

// atualiza de 1 em 1 segundo
setInterval(updateClock, 1000);
// dispara imediatamente para não esperar 1s
updateClock();