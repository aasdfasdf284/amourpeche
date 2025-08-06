export default function BrandStory() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-minimal relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Peaceful Japanese garden with cherry blossoms"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="container-custom text-center relative z-10">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-black mb-16 tracking-wide leading-none">
            STORY
          </h1>
          <p className="body-text max-w-3xl mx-auto">
            Amour Pecheの由来と、100歳まで元気に生きるという想いの物語
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="aspect-[21/9] mb-32">
            <img 
              src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Traditional Japanese villa surrounded by nature"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Brand Origin */}
      <section className="section-minimal bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-light text-black mb-8 tracking-wide">
                ORIGIN
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              <div className="minimal-card">
                <h3 className="text-2xl font-light text-black mb-8 tracking-wide">AMOUR（愛）</h3>
                <p className="body-text mb-8">
                  フランス語で「愛」を意味する「Amour」。私たちは、人々への深い愛と理解を持ち、心の豊かさを大切にします。
                </p>
                <p className="body-text">
                  愛は、人と人との絆、自然との共生、そして自分自身への慈しみを表しています。
                </p>
              </div>
              
              <div className="minimal-card">
                <h3 className="text-2xl font-light text-black mb-8 tracking-wide">PÊCHE（桃）</h3>
                <p className="body-text mb-8">
                  フランス語で「桃」を意味する「Pêche」。桃は、長寿・健康・愛の象徴として古くから親しまれてきました。
                </p>
                <p className="body-text">
                  桃の花は春の訪れを告げ、実は豊かな恵みを表し、100歳まで元気に生きることを願う象徴です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Peach */}
      <section className="section-minimal bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-black mb-24 tracking-wide">
              なぜ「桃」なのか？
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              <div className="minimal-card text-center">
                <h3 className="text-xl font-light text-black mb-8 tracking-wide">長寿の象徴</h3>
                <p className="body-text">
                  桃は古くから長寿の象徴として親しまれ、100歳まで元気に生きることを願う想いを表現しています。
                </p>
              </div>
              
              <div className="minimal-card text-center">
                <h3 className="text-xl font-light text-black mb-8 tracking-wide">健康の象徴</h3>
                <p className="body-text">
                  桃は栄養豊富で、心身の健康を支える果実として、健やかな生活を象徴しています。
                </p>
              </div>
              
              <div className="minimal-card text-center">
                <h3 className="text-xl font-light text-black mb-8 tracking-wide">愛の象徴</h3>
                <p className="body-text">
                  桃の花は美しく、愛と美しさの象徴として、豊かな心の世界を表現しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-minimal bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-6xl font-light text-black mb-16 tracking-wide">
            100歳まで元気に生きる
          </h2>
          <p className="body-text mb-24 max-w-3xl mx-auto">
            私たちは、100歳まで心身ともに健やかに生きられる社会の実現を目指しています。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-4xl mx-auto">
            <div className="minimal-card text-center">
              <h3 className="text-2xl font-light text-black mb-8 tracking-wide">心の健康</h3>
              <p className="body-text">
                愛と美しさに満ちた環境で、心の豊かさを育みます。貸別荘での癒しの時間、美しい空間での暮らしを通じて、心身のバランスを整えます。
              </p>
            </div>
            
            <div className="minimal-card text-center">
              <h3 className="text-2xl font-light text-black mb-8 tracking-wide">体の健康</h3>
              <p className="body-text">
                自然との共生、健康的なライフスタイルを提案します。地方の豊かな自然環境での暮らしを通じて、体の健康をサポートします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="section-minimal bg-white">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-light text-black mb-16 tracking-wide">
              「愛と桃と、100歳の美しさ」
            </h2>
            <p className="body-text mb-16">
              私たちは、人と暮らし、空間と地域に「愛」と「活力」を注ぎ、100歳まで心身ともに健やかに生きられる社会の実現を目指しています。
            </p>
            <p className="body-text">
              貸別荘サービス、不動産・空間デザイン、システム開発を通じて、豊かなライフスタイルを提案し、地域社会の発展に貢献してまいります。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 