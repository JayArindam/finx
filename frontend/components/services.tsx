import { Lightbulb, TrendingUp, Shield, PieChart, CreditCard, BarChart3 } from "lucide-react"

const services = [
  {
    id: 1,
    title: "AI Investment Analysis",
    description:
      "Our AI analyzes market trends and provides personalized investment recommendations based on your financial goals and risk tolerance.",
    icon: TrendingUp,
  },
  {
    id: 2,
    title: "Smart Budget Planning",
    description:
      "Automatically categorize your expenses and get AI-powered insights to optimize your budget and increase savings.",
    icon: PieChart,
  },
  {
    id: 3,
    title: "Secure Transactions",
    description: "Bank-level encryption and advanced security measures to keep your financial data safe and secure.",
    icon: Shield,
  },
  {
    id: 4,
    title: "Financial Insights",
    description:
      "Get personalized insights and recommendations to improve your financial health and achieve your goals faster.",
    icon: Lightbulb,
  },
  {
    id: 5,
    title: "Expense Tracking",
    description: "Automatically track and categorize your expenses across all your accounts in real-time.",
    icon: CreditCard,
  },
  {
    id: 6,
    title: "Wealth Management",
    description: "Comprehensive wealth management solutions powered by AI to maximize your returns and minimize risks.",
    icon: BarChart3,
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our AI-powered financial management tools can transform your financial future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 rounded-xl p-6 transition-all hover:translate-y-[-5px] group"
              style={{
                boxShadow: "0 4px 20px -5px rgba(236, 72, 153, 0.3), 0 4px 20px -5px rgba(249, 115, 22, 0.3)",
              }}
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center mb-6">
                <service.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
