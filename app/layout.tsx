import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'アムルペッシュ株式会社 | 100歳まで、愛と元気に',
  description: '愛と桃と、100歳の美しさ。貸別荘・不動産・空間デザインを通じて、100歳まで心身ともに健やかに生きられるライフスタイルを提案します。',
  keywords: 'アムルペッシュ, 貸別荘, 不動産, 空間デザイン, 100歳まで元気, 愛と桃',
  openGraph: {
    title: 'アムルペッシュ株式会社 | 100歳まで、愛と元気に',
    description: '愛と桃と、100歳の美しさ。100歳まで心身ともに健やかに生きられるライフスタイルを提案します。',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        <nav className="nav-minimal border-b border-gray-100">
          <div className="container-custom">
            <div className="flex justify-between items-center h-16">
              <a href="/" className="text-2xl font-light text-black">
                AMOUR PECHE
              </a>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
                <a href="/" className="text-black hover:text-gray-600 transition-colors duration-300 font-light text-xs xl:text-sm tracking-wide uppercase">Home</a>
                <a href="/about" className="text-black hover:text-gray-600 transition-colors duration-300 font-light text-xs xl:text-sm tracking-wide uppercase">About</a>
                <a href="/brand-story" className="text-black hover:text-gray-600 transition-colors duration-300 font-light text-xs xl:text-sm tracking-wide uppercase">Story</a>
                <a href="/rental-villa" className="text-black hover:text-gray-600 transition-colors duration-300 font-light text-xs xl:text-sm tracking-wide uppercase">Villa</a>
                <a href="/real-estate" className="text-black hover:text-gray-600 transition-colors duration-300 font-light text-xs xl:text-sm tracking-wide uppercase">Estate</a>
                <a href="/contact" className="text-black hover:text-gray-600 transition-colors duration-300 font-light text-xs xl:text-sm tracking-wide uppercase">Contact</a>
              </div>

              {/* Mobile menu button */}
              <button className="lg:hidden p-2 text-black hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
        
        <main className="pt-16">{children}</main>
        
        {/* Footer */}
        <footer className="bg-white border-t border-gray-100 mt-32">
          <div className="container-custom py-16">
            <div className="text-center">
              <h3 className="text-2xl font-light text-black mb-8 tracking-wide">AMOUR PECHE</h3>
              <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8">
                <a href="/about" className="text-gray-600 hover:text-black transition-colors font-light text-xs md:text-sm tracking-wide uppercase">About</a>
                <a href="/brand-story" className="text-gray-600 hover:text-black transition-colors font-light text-xs md:text-sm tracking-wide uppercase">Story</a>
                <a href="/rental-villa" className="text-gray-600 hover:text-black transition-colors font-light text-xs md:text-sm tracking-wide uppercase">Villa</a>
                <a href="/real-estate" className="text-gray-600 hover:text-black transition-colors font-light text-xs md:text-sm tracking-wide uppercase">Estate</a>
                <a href="/contact" className="text-gray-600 hover:text-black transition-colors font-light text-xs md:text-sm tracking-wide uppercase">Contact</a>
              </div>
              <p className="text-gray-500 text-sm font-light tracking-wide">&copy; 2024 AMOUR PECHE Co., Ltd. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}