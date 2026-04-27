const START_DATE = new Date(2013, 3, 10);
const MS_PER_YEAR = 31_556_952_000;
const TIMER_INTERVAL_MS = 100;

let intervalId: number | undefined;

function initCounter(): void {
  if (intervalId !== undefined) {
    clearInterval(intervalId);
    intervalId = undefined;
  }

  const yearsEl = document.getElementById("years");
  const timerEl = document.getElementById("timer");

  if (yearsEl) {
    const elapsedYears = Math.floor(
      (Date.now() - START_DATE.getTime()) / MS_PER_YEAR,
    );
    yearsEl.textContent = String(elapsedYears);
  }

  if (timerEl) {
    intervalId = window.setInterval(() => {
      if (!document.getElementById("timer")) {
        if (intervalId !== undefined) clearInterval(intervalId);
        intervalId = undefined;
        return;
      }
      const elapsedMs = Date.now() - START_DATE.getTime();
      timerEl.textContent = (elapsedMs / 1000).toFixed(3).replace(".", "");
    }, TIMER_INTERVAL_MS);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCounter, { once: true });
} else {
  initCounter();
}
document.addEventListener("astro:page-load", initCounter);
