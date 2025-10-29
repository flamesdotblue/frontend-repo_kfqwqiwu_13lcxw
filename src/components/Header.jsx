import { User, Settings } from 'lucide-react'

export default function Header() {
  return (
    <div className="flex items-center justify-between py-4">
      <button className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center font-semibold">
          <User className="h-5 w-5" />
        </div>
        <div className="text-left hidden sm:block">
          <p className="text-xs text-gray-500">Welcome back</p>
          <p className="font-semibold text-gray-900">Alex Morgan</p>
        </div>
      </button>
      <div className="text-center">
        <p className="text-xs uppercase tracking-wide text-gray-500">Overview</p>
        <h1 className="text-xl font-bold text-gray-900">Dime Style</h1>
      </div>
      <button className="h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center">
        <Settings className="h-5 w-5 text-gray-700" />
      </button>
    </div>
  )
}
