export async function GET(req: Request) {
  const apiKey = process.env.WEATHER_KEY;
  const { searchParams } = new URL(req.url);

  const q = searchParams.get("q");
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  let url = "";

  if (lat && lon) {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  } else if (q) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${apiKey}&units=metric`;
  } else {
    // fallback default
    url = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${apiKey}&units=metric`;
  }

  const res = await fetch(url);
  const data = await res.json();

  return Response.json(data);
}
