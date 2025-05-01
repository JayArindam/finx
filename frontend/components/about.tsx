import Image from "next/image"
import { CheckCircle } from "lucide-react"
import cimage1 from "../public/cimage1.jpg"
import cimage3 from "../public/cimage3.jpg"

const features = [
  "AI-powered financial analysis and recommendations",
  "Real-time market data and insights",
  "Personalized investment strategies",
  "Automated expense tracking and categorization",
  "Secure and encrypted data protection",
  "24/7 access to your financial dashboard",
]

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-6">
              About FinX
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              FinX is a cutting-edge financial management platform powered by artificial intelligence. We combine
              advanced algorithms with financial expertise to provide you with personalized solutions that optimize your
              finances and help you achieve your financial goals.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Our team of financial experts and AI specialists work together to develop innovative tools that make
              financial management accessible, efficient, and effective for everyone, from individuals to large
              corporations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-gradient-to-r from-pink-500 to-orange-500 flex-shrink-0 text-pink-500" />
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div
              className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl"
              style={{
                boxShadow: "0 10px 30px -5px rgba(236, 72, 153, 0.3), 0 10px 30px -5px rgba(249, 115, 22, 0.3)",
              }}
            >
              <Image src={cimage1} alt="About FinX" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-lg overflow-hidden border-4 border-gray-900">
              <Image src={cimage3} alt="FinX Feature" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
