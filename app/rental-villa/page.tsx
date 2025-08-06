export default function RentalVilla() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-minimal overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Traditional Japanese villa with mountain view"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container-custom text-center relative z-10">
          <h1 className="hero-text mb-16">
            貸別荘サービス
          </h1>
          <p className="body-text max-w-3xl mx-auto">
            美しい自然に囲まれた貸別荘で、心身をリフレッシュ。
            <br />
            100歳まで元気に生きるための癒しの時間をお届けします。
          </p>
        </div>
      </section>

      {/* Villa Gallery */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-light text-black mb-8 tracking-wide">
              VILLA COLLECTION
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-32">
            <div className="aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Atami villa with ocean view"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Tottori villa with sand dunes"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Nagano villa with mountain view"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <div className="minimal-card text-center">
              <h3 className="text-2xl font-light text-black mb-8 tracking-wide">熱海ミカ邸</h3>
              <p className="body-text mb-8">
                熱海の美しい海と温泉を楽しめる貸別荘。心身を癒す贅沢な時間をお過ごしいただけます。
              </p>
              <div className="space-y-4 mb-12">
                <p className="text-sm font-light text-black tracking-wide">海の見えるテラス</p>
                <p className="text-sm font-light text-black tracking-wide">温泉付き</p>
                <p className="text-sm font-light text-black tracking-wide">4名様まで</p>
              </div>
              <a href="/contact" className="btn-primary">
                詳細・予約
              </a>
            </div>
            
            <div className="minimal-card text-center">
              <h3 className="text-2xl font-light text-black mb-8 tracking-wide">鳥取ミカ邸</h3>
              <p className="body-text mb-8">
                鳥取の豊かな自然と砂丘を楽しめる貸別荘。静寂な環境で心身をリフレッシュできます。
              </p>
              <div className="space-y-4 mb-12">
                <p className="text-sm font-light text-black tracking-wide">砂丘の見えるロケーション</p>
                <p className="text-sm font-light text-black tracking-wide">完全プライベート</p>
                <p className="text-sm font-light text-black tracking-wide">6名様まで</p>
              </div>
              <a href="/contact" className="btn-primary">
                詳細・予約
              </a>
            </div>
            
            <div className="minimal-card text-center">
              <h3 className="text-2xl font-light text-black mb-8 tracking-wide">長野ミカ邸</h3>
              <p className="body-text mb-8">
                長野の山々と温泉を楽しめる貸別荘。四季折々の自然を満喫できる癒しの空間です。
              </p>
              <div className="space-y-4 mb-12">
                <p className="text-sm font-light text-black tracking-wide">山の見えるロケーション</p>
                <p className="text-sm font-light text-black tracking-wide">温泉付き</p>
                <p className="text-sm font-light text-black tracking-wide">8名様まで</p>
              </div>
              <a href="/contact" className="btn-primary">
                詳細・予約
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-minimal bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-light text-black mb-8 tracking-wide">
                FEATURES
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              <div className="minimal-card text-center">
                <h3 className="text-2xl font-light text-black mb-8 tracking-wide">プライベート空間</h3>
                <p className="body-text mb-8">
                  他のお客様との接触がない、完全にプライベートな空間でご利用いただけます。
                </p>
                <p className="body-text">
                  美しいデザインと機能性を両立させ、心身の癒しを追求しています。
                </p>
              </div>
              
              <div className="minimal-card text-center">
                <h3 className="text-2xl font-light text-black mb-8 tracking-wide">自然との共生</h3>
                <p className="body-text mb-8">
                  各地域の豊かな自然環境を活かした、心身を癒すロケーション。
                </p>
                <p className="body-text">
                  100歳まで元気に生きるための、健康的なライフスタイルをサポートします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large Image Section */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="aspect-[16/9] mb-16">
            <img 
              src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Villa interior with natural light and minimal design"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-minimal bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-6xl font-light text-black mb-16 tracking-wide">
            心身をリフレッシュする時間を。
          </h2>
          <p className="body-text mb-24 max-w-3xl mx-auto">
            アムルペッシュの貸別荘で、100歳まで元気に生きるための
            <br />
            癒しの時間をお過ごしください。
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="btn-primary">
              お問い合わせ・予約
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