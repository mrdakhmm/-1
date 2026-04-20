export default async function handler(req, res) {
  try {
    const response = await fetch(
      `https://api.ipgeolocation.io/astronomy?apiKey=${process.env.API_KEY}`
    );

    const data = await response.json();

    res.status(200).json({
      distance: data.moon_distance
    });

  } catch (e) {
    res.status(500).json({ error: "Ошибка" });
  }
}
