import { set } from "@vercel/edge-config";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { apiKey, device_id, enabled, interval_minutes, urls } = req.body;

  if (apiKey !== process.env.VALLOGIC_CONTROL_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (!device_id || !Array.isArray(urls)) {
    return res.status(400).json({ error: "Invalid payload" });
  }

  const key = `device:${device_id}`;

  await set(key, {
    device_id,
    enabled,
    interval_minutes,
    urls,
    updated_at: new Date().toISOString()
  });

  res.json({ status: "ok" });
}
