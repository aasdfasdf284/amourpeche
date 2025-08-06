export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-minimal">
        <div className="container-custom text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-black mb-16 tracking-wide leading-none">
            ABOUT
          </h1>
          <p className="body-text max-w-3xl mx-auto">
            アムルペッシュ株式会社は、100歳まで心身ともに健やかに生きられる社会の実現を目指すライフスタイルブランドです。
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="aspect-[16/9] mb-16">
            <img 
              src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Beautiful Japanese landscape with traditional architecture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section-minimal bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-light text-black mb-8 tracking-wide">
                COMPANY
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              <div className="minimal-card">
                <h3 className="text-2xl font-light text-black mb-8 tracking-wide">INFORMATION</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-light text-black mb-2 tracking-wide uppercase">Company Name</h4>
                    <p className="body-text">アムルペッシュ株式会社</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-light text-black mb-2 tracking-wide uppercase">Representative</h4>
                    <p className="body-text">フロケミカ</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-light text-black mb-2 tracking-wide uppercase">Established</h4>
                    <p className="body-text">2024年</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-light text-black mb-2 tracking-wide uppercase">Business</h4>
                    <div className="body-text space-y-2">
                      <p>貸別荘サービス</p>
                      <p>不動産・空間デザイン</p>
                      <p>システム開発</p>
                      <p>地方創生プロジェクト</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="minimal-card">
                <h3 className="text-2xl font-light text-black mb-8 tracking-wide">MESSAGE</h3>
                <div className="space-y-8">
                  <p className="body-text">
                    「Amour（愛）とPêche（桃）」という名前には、100歳まで元気に、美しく、幸せに生きることを願う想いが込められています。
                  </p>
                  <p className="body-text">
                    私たちは、人と暮らし、空間と地域に「愛」と「活力」を注ぎ、100歳まで心身ともに健やかに生きられる社会の実現を目指しています。
                  </p>
                  <p className="body-text">
                    貸別荘サービス、不動産・空間デザイン、システム開発を通じて、豊かなライフスタイルを提案し、地域社会の発展に貢献してまいります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-minimal bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-black mb-24 tracking-wide">
              PHILOSOPHY
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              <div className="minimal-card text-center">
                <h3 className="text-2xl font-light text-black mb-8 tracking-wide">VISION</h3>
                <p className="body-text mb-8">
                  100歳まで心身ともに健やかに生きられる社会の実現
                </p>
                <p className="body-text">
                  人と暮らし、空間と地域に「愛」と「活力」を注ぎ、誰もが100歳まで美しく生きられる世界を目指します。
                </p>
              </div>
              
              <div className="minimal-card text-center">
                <h3 className="text-2xl font-light text-black mb-8 tracking-wide">MISSION</h3>
                <p className="body-text mb-8">
                  愛を感じられる空間の再生と、美しい暮らしの提案
                </p>
                <p className="body-text">
                  貸別荘、不動産、空間デザインを通じて、人々の心身の健康と地域の活性化に貢献します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-minimal bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-light text-black mb-8 tracking-wide">
                VALUES
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              <div className="minimal-card text-center">
                <h3 className="text-xl font-light text-black mb-8 tracking-wide">愛</h3>
                <p className="body-text">
                  人々への深い愛と理解を持ち、心の豊かさを大切にします。
                </p>
              </div>
              
              <div className="minimal-card text-center">
                <h3 className="text-xl font-light text-black mb-8 tracking-wide">健康</h3>
                <p className="body-text">
                  心身の健康を最優先に考え、長寿社会の実現に貢献します。
                </p>
              </div>
              
              <div className="minimal-card text-center">
                <h3 className="text-xl font-light text-black mb-8 tracking-wide">美しさ</h3>
                <p className="body-text">
                  内面と外面の美しさを追求し、豊かなライフスタイルを提案します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 