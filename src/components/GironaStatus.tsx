import { useEffect, useState } from "react";

const localTime = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Madrid",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

// Current variables and WMO codes: https://open-meteo.com/en/docs
const weatherUrl =
  "https://api.open-meteo.com/v1/forecast?latitude=41.9794&longitude=2.8214&current=temperature_2m,weather_code&timezone=Europe%2FMadrid";

function conditionFor(code: number): string | undefined {
  if ([0, 1].includes(code)) return "Clear";
  if ([2, 3].includes(code)) return "Cloudy";
  if ([45, 48].includes(code)) return "Fog";
  if ([51, 53, 55, 56, 57].includes(code)) return "Drizzle";
  if ([61, 63, 65, 66, 67].includes(code)) return "Rain";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "Snow";
  if ([80, 81, 82].includes(code)) return "Showers";
  if ([95, 96, 97, 99].includes(code)) return "Storm";
  return undefined;
}

interface Weather {
  temperature: number;
  condition: string;
}

export function GironaStatus() {
  const [now, setNow] = useState(() => new Date());
  const [weather, setWeather] = useState<Weather>();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    function updateClock() {
      setNow(new Date());
      timer = setTimeout(updateClock, 60_000 - (Date.now() % 60_000));
    }
    updateClock();
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let disposed = false;
    let controller: AbortController | undefined;
    let requestTimeout: ReturnType<typeof setTimeout> | undefined;

    async function refreshWeather() {
      controller = new AbortController();
      const requestController = controller;
      const timeout = setTimeout(() => requestController.abort(), 8_000);
      requestTimeout = timeout;

      try {
        const response = await fetch(weatherUrl, { signal: requestController.signal });
        if (!response.ok) throw new Error("Weather unavailable");
        const payload: unknown = await response.json();
        if (!payload || typeof payload !== "object" || !("current" in payload)) {
          throw new Error("Invalid weather response");
        }
        const current = payload.current;
        if (
          !current ||
          typeof current !== "object" ||
          !("temperature_2m" in current) ||
          !("weather_code" in current) ||
          typeof current.temperature_2m !== "number" ||
          !Number.isFinite(current.temperature_2m) ||
          typeof current.weather_code !== "number"
        ) {
          throw new Error("Invalid weather values");
        }
        const condition = conditionFor(current.weather_code);
        if (!condition) throw new Error("Unknown weather code");
        if (!disposed) {
          setWeather({ temperature: Math.round(current.temperature_2m), condition });
        }
      } catch {
        if (!disposed) setWeather(undefined);
      } finally {
        clearTimeout(timeout);
      }
    }

    void refreshWeather();
    const refreshTimer = setInterval(() => void refreshWeather(), 15 * 60_000);
    return () => {
      disposed = true;
      clearInterval(refreshTimer);
      clearTimeout(requestTimeout);
      controller?.abort();
    };
  }, []);

  return (
    <div className="girona-status" role="group" aria-label="Girona local time and weather">
      <span className="weather-city">Girona</span>
      <time dateTime={now.toISOString()}>{localTime.format(now)}</time>
      {weather && (
        <>
          <span>{weather.temperature}°C</span>
          <a
            className="weather-condition"
            href="https://open-meteo.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Weather data by Open-Meteo"
            aria-label={`${weather.condition}, weather data by Open-Meteo (opens in a new tab)`}>
            {weather.condition}
          </a>
        </>
      )}
    </div>
  );
}
