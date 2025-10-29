import { CreditCard, ShoppingBag, Utensils, Wifi } from 'lucide-react'

const categories = [
  {
    name: 'Bills',
    spent: 220,
    budget: 400,
    color: 'from-blue-500 to-indigo-500',
    icon: Wifi,
  },
  {
    name: 'Groceries',
    spent: 180,
    budget: 300,
    color: 'from-emerald-500 to-teal-500',
    icon: ShoppingBag,
  },
  {
    name: 'Dining',
    spent: 96,
    budget: 200,
    color: 'from-rose-500 to-pink-500',
    icon: Utensils,
  },
  {
    name: 'Subscriptions',
    spent: 58,
    budget: 120,
    color: 'from-violet-500 to-purple-500',
    icon: CreditCard,
  },
]

function Progress({ value }) {
  return (
    <div className="h-2 w-full rounded-full bg-gray-200">
      <div
        className="h-2 rounded-full bg-gray-900"
        style={{ width: `${Math.min(100, value)}%` }}
      />
    </div>
  )
}

export default function CategoriesGrid() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">Budgets</h3>
        <button className="text-sm text-indigo-600 hover:text-indigo-700">See all</button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((cat) => {
          const pct = (cat.spent / cat.budget) * 100
          const Icon = cat.icon
          return (
            <div
              key={cat.name}
              className="rounded-xl border border-gray-100 p-4 transition hover:shadow-md"
            >
              <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${cat.color} text-white flex items-center justify-center`}>
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-3 text-sm text-gray-500">{cat.name}</p>
              <div className="flex items-end justify-between">
                <p className="text-lg font-semibold text-gray-900">${cat.spent}</p>
                <p className="text-xs text-gray-500">/${cat.budget}</p>
              </div>
              <div className="mt-2">
                <Progress value={pct} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
