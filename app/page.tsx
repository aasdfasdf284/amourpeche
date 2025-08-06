export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-minimal overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2792&q=80"
            alt="Japanese traditional house in nature"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container-custom text-center relative z-10">
          <h1 className="hero-text mb-12">
            愛と桃と、
            <br />
            100歳の美しさ。
          </h1>
          <p className="body-text mb-16 max-w-2xl mx-auto">
            100歳まで元気に、美しく、幸せに生きる人のための
            <br />
            ライフスタイルを提案します。
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/rental-villa" className="btn-primary">
              VIEW VILLA SERVICE
            </a>
            <a href="/brand-story" className="btn-secondary">
              BRAND STORY
            </a>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="section-minimal bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-24">
            <h2 className="section-title mb-8 tracking-wide">
              CONCEPT
            </h2>
            <p className="body-text max-w-3xl mx-auto">
              「Amour＝愛」「Pêche＝桃」を意味する、
              <br />
              100歳まで元気に生きることを願うライフスタイルブランドです。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <div className="minimal-card text-center">
              <h3 className="text-xl font-light text-black mb-6 tracking-wide">貸別荘サービス</h3>
              <p className="body-text mb-8">
                熱海・鳥取・長野の美しい自然に囲まれた貸別荘で、心身をリフレッシュ。
              </p>
              <a href="/rental-villa" className="text-black hover:text-gray-600 font-light text-sm tracking-wide uppercase transition-colors">
                View More →
              </a>
            </div>
            
            <div className="minimal-card text-center">
              <h3 className="text-xl font-light text-black mb-6 tracking-wide">不動産・空間デザイン</h3>
              <p className="body-text mb-8">
                地方物件の販売、空間デザイン、リフォーム事業で理想の住空間を実現。
              </p>
              <a href="/real-estate" className="text-black hover:text-gray-600 font-light text-sm tracking-wide uppercase transition-colors">
                View More →
              </a>
            </div>
            
            <div className="minimal-card text-center">
              <h3 className="text-xl font-light text-black mb-6 tracking-wide">システム開発</h3>
              <p className="body-text mb-8">
                各種システム・アプリ開発事業で、デジタル技術を通じた豊かな暮らしを提案。
              </p>
              <a href="/system-development" className="text-black hover:text-gray-600 font-light text-sm tracking-wide uppercase transition-colors">
                View More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-32">
            <div className="aspect-[4/5] image-reveal fade-in stagger-1">
              <img 
                src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Traditional Japanese villa exterior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] image-reveal fade-in stagger-2">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Beautiful nature landscape"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] image-reveal fade-in stagger-3">
              <img 
                src="https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Japanese traditional interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-minimal bg-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="section-title mb-16 tracking-wide">
              100歳まで、愛と元気に。
            </h2>
            <p className="body-text mb-24 max-w-3xl mx-auto">
              人と暮らし、空間と地域に「愛」と「活力」を注ぎ、
              <br />
              100歳まで心身ともに健やかに生きられる社会をつくります。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-4xl mx-auto">
              <div className="minimal-card text-center">
                <h3 className="text-2xl font-light text-black mb-8 tracking-wide">VISION</h3>
                <p className="body-text">
                  100歳まで心身ともに健やかに生きられる社会の実現
                </p>
              </div>
              <div className="minimal-card text-center">
                <h3 className="text-2xl font-light text-black mb-8 tracking-wide">MISSION</h3>
                <p className="body-text">
                  愛を感じられる空間の再生と、美しい暮らしの提案
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-minimal bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="section-title mb-16 tracking-wide">
            あなたの人生に、愛と元気と美しさを。
          </h2>
          <p className="body-text mb-16 max-w-3xl mx-auto">
            アムルペッシュと一緒に、100歳まで美しく生きるライフスタイルを始めませんか？
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="btn-primary">
              CONTACT
            </a>
            <a href="/brand-story" className="btn-secondary">
              BRAND STORY
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 