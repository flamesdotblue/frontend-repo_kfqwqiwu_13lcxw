import Header from './components/Header'
import BalanceCard from './components/BalanceCard'
import CategoriesGrid from './components/CategoriesGrid'
import Transactions from './components/Transactions'
import { Plus } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-white">
      <div className="mx-auto max-w-md px-4">
        <Header />
        <div className="space-y-6 pb-24">
          <BalanceCard />
          <CategoriesGrid />
          <Transactions />
        </div>
      </div>

      <button
        className="fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-gray-900 text-white shadow-xl hover:shadow-2xl transition shadow-gray-900/20"
        style={{ width: 64, height: 64 }}
        aria-label="Add transaction"
      >
        <Plus className="h-7 w-7" />
      </button>

      <div className="pointer-events-none fixed inset-x-0 top-0 -z-0">
        <div className="mx-auto h-40 max-w-md bg-gradient-to-b from-indigo-100/60 to-transparent blur-2xl" />
      </div>
    </div>
  )
}

export default App
