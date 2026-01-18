index.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Globe,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Wifi,
  LineChart,
  Clock,
  Download,
} from "lucide-react";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700">
    {children}
  </span>
);

const Card = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div mt-3 text-xs text-slate-500>
    <div className="flex items-start gap-4">
      <div className="rounded-xl border border-slate-200 bg-slate-100 p-3 text-[#0F2A44] group-hover:bg-white/10 transition">
        {icon}
      </div>
      <div>
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{children}</p>
      </div>
    </div>
  </div>
);

export default function ValleLogicSample() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-slate-100 blur-3xl" />
        <div className="absolute top-24 left-10 h-[420px] w-[420px] rounded-full bg-slate-100 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-slate-100 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,42,68,0.10),transparent_60%)]" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(15,42,68,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,42,68,0.06)_1px,transparent_1px)] [background-size:96px_96px]" />
      </div>

      {/* Header */}
      <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl border border-slate-200 bg-white p-2">
            <Activity className="h-full w-full" />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-wide">ValleLogic</div>
            <div className="text-xs text-slate-500">NetRunner</div>
          </div>
        </div>

        <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
          <a className="hover:text-[#0F2A44] transition" href="#product">
            Product
          </a>
          <a className="hover:text-[#0F2A44] transition" href="#how">
            How it works
          </a>
          <a className="hover:text-[#0F2A44] transition" href="#metrics">
            Metrics
          </a>
          <a className="hover:text-[#0F2A44] transition" href="#pilot">
            Pilot
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#pilot"
            className="hidden rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-[#0F2A44] hover:bg-slate-100 transition md:inline-flex"
          >
            Request access
          </a>
          <a
            href="#pilot"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0F2A44] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0B1F33] transition"
          >
            Join the pilot <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-8">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <FadeIn>
              <div className="flex flex-wrap items-center gap-2">
                <Pill>
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-white/70" />
                  Edge-first web performance
                </Pill>
                <Pill>
                  <Wifi className="mr-2 h-3.5 w-3.5" />
                  Wi‑Fi realism
                </Pill>
                <Pill>
                  <ShieldCheck className="mr-2 h-3.5 w-3.5" />
                  Vendor‑neutral
                </Pill>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                Measure real web performance over Wi‑Fi — from the edge.
              </h1>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                <span className="font-semibold text-[#0F2A44]">NetRunner</span> places lightweight agents at real locations and continuously tests real websites and downloads.
                Get clean, defensible data for IT ops—without guessing.
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#pilot"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0F2A44] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0B1F33] transition"
                >
                  Join the pilot <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#product"
                  <h3 className="text-base font-semibold text-[#0F2A44]">
                >
                  See what it measures
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.32}>
              <div className="mt-8 flex flex-wrap gap-6 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  TTFB, DNS, TLS, total time
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  File download timing
                </div>
                <div className="flex items-center gap-2">
                  <LineChart className="h-4 w-4" />
                  Trends + CSV export
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Hero visual */}
          <FadeIn delay={0.18}>
            <div className="relative">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-[#0F2A44]">Live sample</div>
                  <Pill>
                    <Cpu className="mr-2 h-3.5 w-3.5" />
                    Agent: NY‑Office‑01
                  </Pill>
                </div>

                <div className="mt-6 grid gap-3">
                  {[
                    { site: "microsoft.com", ttfb: 128, total: 612, dns: 22 },
                    { site: "github.com", ttfb: 182, total: 744, dns: 19 },
                    { site: "google.com", ttfb: 96, total: 388, dns: 14 },
                    { site: "zoom.us", ttfb: 210, total: 980, dns: 31 },
                  ].map((r) => (
                    <div
                      key={r.site}
                      className="rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-slate-600" />
                          <div className="text-sm font-medium text-[#0F2A44]">{r.site}</div>
                        </div>
                        <div className="text-xs text-slate-500">total {r.total}ms</div>
                      </div>
                      <div className="mt-2 grid grid-cols-3 gap-2 text-xs text-slate-500">
                        <div className="rounded-xl bg-slate-100 px-2 py-1">dns {r.dns}ms</div>
                        <div className="rounded-xl bg-slate-100 px-2 py-1">ttfb {r.ttfb}ms</div>
                        <div className="rounded-xl bg-slate-100 px-2 py-1">ok</div>
                      </div>
                      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          className="h-full bg-white/70"
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min(100, Math.round((r.total / 1200) * 100))}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-slate-500">Last run</div>
                    <div className="text-xs text-slate-500">Wi‑Fi RSSI: −56 dBm</div>
                  </div>
                  <div className="mt-2 text-sm font-semibold">17 Jan 2026 • 7:58 PM</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Product */}
        <section id="product" className="mt-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight">What NetRunner does</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Simple, repeatable measurements that reflect how the internet feels on Wi‑Fi.
              No controller dependency. No guesswork.
            </p>
          </FadeIn>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <FadeIn delay={0.05}>
              <Card icon={<Clock className="h-5 w-5" />} title="Real response timings">
                DNS, TLS, TTFB, and total time per URL—captured from the edge where users connect.
              </Card>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Card icon={<Download className="h-5 w-5" />} title="Download checks">
                Optionally fetch test objects to validate sustained throughput and detect transient slowdowns.
              </Card>
            </FadeIn>
            <FadeIn delay={0.15}>
              <Card icon={<LineChart className="h-5 w-5" />} title="Trends & export">
                Cloud history with charts over time and CSV export for reporting, audits, and evidence.
              </Card>
            </FadeIn>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mt-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
          </FadeIn>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Deploy an agent", "Assign a test set", "See results"].map((t, i) => (
              <FadeIn key={t} delay={0.06 * i}>
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="text-xs text-slate-500">Step {i + 1}</div>
                  <div className="mt-2 text-base font-semibold">{t}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-600">
                    {i === 0 && "Plug in a Pi at a real location. Connect it to Wi‑Fi. It runs headless and phones home."}
                    {i === 1 && "Upload up to 100 URLs, choose schedules, and target one or many agents across locations."}
                    {i === 2 && "View live and historical performance, compare locations, export CSV, and trend over time."}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Metrics */}
        <section id="metrics" className="mt-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight">Metrics that matter</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Start with fundamentals. Expand later. Keep it defensible.
            </p>
          </FadeIn>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
              {[
                { k: "DNS", v: "resolver latency" },
                { k: "TLS", v: "handshake time" },
                { k: "TTFB", v: "server responsiveness" },
                { k: "Total", v: "page/object time" },
                { k: "Download", v: "object fetch" },
                { k: "Wi‑Fi RSSI", v: "signal strength" },
                { k: "Loss/Jitter", v: "optional" },
                { k: "Agent Health", v: "CPU/temp" },
              ].map((m) => (
                <div key={m.k} className="bg-slate-50 p-5">
                  <div className="text-xs text-slate-500">{m.v}</div>
                  <div className="mt-2 text-sm font-semibold">{m.k}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pilot */}
        <section id="pilot" className="mt-20">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 backdrop-blur">
            <FadeIn>
              <h2 className="text-2xl font-semibold tracking-tight">Join the NetRunner pilot</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                We’re onboarding a small set of early teams to validate multi-location Wi‑Fi performance testing.
                Leave your email and we’ll follow up with pilot details.
              </p>
            </FadeIn>

            <FadeIn delay={0.08}>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-6 grid gap-3 sm:grid-cols-[1fr_1fr_auto]"
              >
                <input
                  className="h-12 rounded-2xl border border-slate-200 bg-slate-100 px-4 text-sm text-white placeholder:text-slate-40 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="Work email"
                  type="email"
                />
                <input
                  className="h-12 rounded-2xl border border-slate-200 bg-slate-100 px-4 text-sm text-white placeholder:text-slate-40 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="Company / team"
                  type="text"
                />
                <button
                  className="h-12 rounded-2xl bg-[#0F2A44] px-6 text-sm font-semibold text-white hover:bg-[#0B1F33] transition"
                  type="submit"
                >
                  Request pilot
                </button>
              </form>
              <div className="mt-3 text-xs text-slate-500">
                By requesting access, you agree to be contacted by ValleLogic about NetRunner.
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10 py-10">
          <div className="flex flex-col justify-between gap-6 text-sm text-slate-500 md:flex-row">
            <div>
              <div className="text-slate-700 font-semibold">ValleLogic</div>
              <div className="mt-1">NetRunner — Edge-first web performance over Wi‑Fi.</div>
            </div>
            <div className="flex flex-wrap gap-6">
              <a className="hover:text-[#0F2A44] transition" href="#product">
                Product
              </a>
              <a className="hover:text-[#0F2A44] transition" href="#how">
                How it works
              </a>
              <a className="hover:text-[#0F2A44] transition" href="#pilot">
                Pilot
              </a>
              <a className="hover:text-[#0F2A44] transition" href="#">
                Privacy
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
