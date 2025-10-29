import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

export default function BalanceCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 text-white p-6 shadow-lg">
      <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute left-[-20px] bottom-[-20px] h-24 w-24 rounded-full bg-white/10 blur-xl" />
      <p className="text-sm text-white/80">Current Balance</p>
      <h2 className="mt-1 text-4xl font-extrabold tracking-tight">$12,480.23</h2>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
          <div className="flex items-center gap-2 text-emerald-200">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20">
              <ArrowDownRight className="h-4 w-4" />
            </span>
            <span className="text-xs uppercase tracking-wide">Income</span>
          </div>
          <p className="mt-1 text-xl font-semibold">$5,240</p>
          <p className="text-xs text-white/70">+12% this month</p>
        </div>
        <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
          <div className="flex items-center gap-2 text-rose-200">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-500/20">
              <ArrowUpRight className="h-4 w-4" />
            </span>
            <span className="text-xs uppercase tracking-wide">Spending</span>
          </div>
          <p className="mt-1 text-xl font-semibold">$3,120</p>
          <p className="text-xs text-white/70">-5% vs last</p>
        </div>
      </div>
    </div>
  )
}
