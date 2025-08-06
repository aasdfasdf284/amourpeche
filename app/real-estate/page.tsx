export default function RealEstate() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-minimal overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Modern architecture and interior design"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container-custom text-center relative z-10">
          <h1 className="hero-text mb-16">
            不動産・空間デザイン
          </h1>
          <p className="body-text max-w-3xl mx-auto">
            地方物件の販売、空間デザイン、リフォーム事業で理想の住空間を実現。
            <br />
            100歳まで美しく生きるための空間づくりを提案します。
          </p>
        </div>
      </section>

      {/* Services Gallery */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-light text-black mb-8 tracking-wide">
              SERVICES
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-32">
            <div className="aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Beautiful rural property exterior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Modern minimalist interior design"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Traditional house renovation project"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <div className="minimal-card text-center">
              <h3 className="text-2xl font-light text-black mb-8 tracking-wide">地方物件販売</h3>
              <p className="body-text mb-8">
                地方の魅力的な物件を厳選してご紹介。移住や投資に最適な物件を提案いたします。
              </p>
              <div className="space-y-4">
                <p className="text-sm font-light text-black tracking-wide">地方物件の紹介・販売</p>
                <p className="text-sm font-light text-black tracking-wide">移住支援サービス</p>
                <p className="text-sm font-light text-black tracking-wide">投資物件の提案</p>
                <p className="text-sm font-light text-black tracking-wide">物件価値の評価</p>
              </div>
            </div>
            
            <div className="minimal-card text-center">
              <h3 className="text-2xl font-light text-black mb-8 tracking-wide">空間デザイン</h3>
              <p className="body-text mb-8">
                美しく機能的な空間デザインで、理想の住環境を創造いたします。
              </p>
              <div className="space-y-4">
                <p className="text-sm font-light text-black tracking-wide">インテリアデザイン</p>
                <p className="text-sm font-light text-black tracking-wide">空間プランニング</p>
                <p className="text-sm font-light text-black tracking-wide">カラーコーディネート</p>
                <p className="text-sm font-light text-black tracking-wide">照明デザイン</p>
              </div>
            </div>
            
            <div className="minimal-card text-center">
              <h3 className="text-2xl font-light text-black mb-8 tracking-wide">リフォーム事業</h3>
              <p className="body-text mb-8">
                既存物件を美しく生まれ変わらせ、新しい価値を創造いたします。
              </p>
              <div className="space-y-4">
                <p className="text-sm font-light text-black tracking-wide">住宅リフォーム</p>
                <p className="text-sm font-light text-black tracking-wide">商業施設改装</p>
                <p className="text-sm font-light text-black tracking-wide">古民家再生</p>
                <p className="text-sm font-light text-black tracking-wide">バリアフリー対応</p>
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
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Minimalist architecture with natural materials"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="section-minimal bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-black mb-24 tracking-wide">
              PHILOSOPHY
            </h2>
            
            <div className="minimal-card text-center">
              <h3 className="text-3xl font-light text-black mb-12 tracking-wide">100歳まで美しく生きるための空間づくり</h3>
              <p className="body-text mb-12">
                私たちは、人々が100歳まで心身ともに健やかに生きられる空間を創造することを目指しています。
              </p>
              <p className="body-text mb-12">
                美しさと機能性を両立させ、自然との共生を大切にしたデザインを提案いたします。
              </p>
              <p className="body-text">
                愛と美しさに満ちた環境で、豊かなライフスタイルを実現する空間づくりに取り組んでいます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-minimal bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-light text-black mb-8 tracking-wide">
                VALUES
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              <div className="minimal-card text-center">
                <h3 className="text-2xl font-light text-black mb-8 tracking-wide">美意識と健康</h3>
                <p className="body-text mb-8">
                  アムルペッシュの美意識に基づいた、上質で心地よい空間デザイン。
                </p>
                <p className="body-text">
                  100歳まで元気に生きるための、健康的な空間設計を重視します。
                </p>
              </div>
              
              <div className="minimal-card text-center">
                <h3 className="text-2xl font-light text-black mb-8 tracking-wide">自然との共生</h3>
                <p className="body-text mb-8">
                  自然素材を活用し、環境に配慮した持続可能な空間づくり。
                </p>
                <p className="body-text">
                  地方の魅力を活かした空間づくりで、地域社会の発展に貢献します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-minimal bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-6xl font-light text-black mb-16 tracking-wide">
            理想の住空間を創造しませんか。
          </h2>
          <p className="body-text mb-24 max-w-3xl mx-auto">
            アムルペッシュと一緒に、100歳まで美しく生きるための
            <br />
            理想の空間を実現しましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="btn-primary">
              お問い合わせ
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