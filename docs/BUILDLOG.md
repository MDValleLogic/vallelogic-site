# ValleLogic / NetRunner Build Log

## 2026-01-19 — WebRunner MVP (Edge)
- Built WebRunner agent on Raspberry Pi 5
- Dockerized with restart policy
- Curl-based synthetic web checks with browser User-Agent
- Scheduled execution (5–60 min)
- Persistent CSV + JSONL storage via mounted volume
- Clean start/stop and unattended operation

## 2026-01-19 — Decision: Production Cloud Control Plane
- Goal: Investor-grade NetRunner platform
- Cloud-managed Web UI for configuration
- Secure agent model (edge + cloud)
- Stack chosen: Vercel (Next.js) + Supabase (DB + Auth)
- This repo will host the Cloud UI
