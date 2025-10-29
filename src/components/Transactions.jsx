import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

const items = [
  { id: 1, title: 'Stripe Payout', subtitle: 'Income • Mar 24', amount: 1240.55, type: 'in' },
  { id: 2, title: 'Whole Foods', subtitle: 'Groceries • Mar 23', amount: 86.2, type: 'out' },
  { id: 3, title: 'Netflix', subtitle: 'Subscription • Mar 21', amount: 15.99, type: 'out' },
  { id: 4, title: 'Coffee Shop', subtitle: 'Dining • Mar 20', amount: 5.5, type: 'out' },
]

function Row({ title, subtitle, amount, type }) {
  const isIn = type === 'in'
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-full ${
            isIn ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
          }`}
        >
          {isIn ? (
            <ArrowDownRight className="h-5 w-5" />
          ) : (
            <ArrowUpRight className="h-5 w-5" />
          )}
        </div>
        <div>
          <p className="font-medium text-gray-900">{title}</p>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
      </div>
      <p
        className={`font-semibold ${
          isIn ? 'text-emerald-600' : 'text-gray-900'
        }`}
      >
        {isIn ? '+' : '-'}${amount.toFixed(2)}
      </p>
    </div>
  )
}

export default function Transactions() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">Recent Activity</h3>
        <button className="text-sm text-indigo-600 hover:text-indigo-700">View all</button>
      </div>
      <div>
        {items.map((t) => (
          <Row key={t.id} {...t} />
        ))}
      </div>
    </div>
  )
}
