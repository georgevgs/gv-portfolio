const START_DATE = new Date(2013, 3, 10);
const MS_PER_YEAR = 31_556_952_000;
const TIMER_INTERVAL_MS = 100;

function initCounter(): void {
  const yearsEl = document.getElementById("years");
  const timerEl = document.getElementById("timer");

  if (yearsEl) {
    const elapsedYears = Math.floor(
      (Date.now() - START_DATE.getTime()) / MS_PER_YEAR,
    );
    yearsEl.textContent = String(elapsedYears);
  }

  if (timerEl) {
    const intervalId = setInterval(() => {
      if (!document.getElementById("timer")) {
        clearInterval(intervalId);
        return;
      }

      const elapsedMs = Date.now() - START_DATE.getTime();
      timerEl.textContent = (elapsedMs / 1000).toFixed(3).replace(".", "");
    }, TIMER_INTERVAL_MS);
  }
}

initCounter();
document.addEventListener("astro:after-swap", initCounter);
