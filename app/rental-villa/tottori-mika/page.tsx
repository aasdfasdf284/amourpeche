export default function TottoriMika() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 to-pink-50">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              鳥取ミカ邸
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              鳥取の豊かな自然と砂丘を楽しめる貸別荘。静寂な環境で心身をリフレッシュできます。
            </p>
          </div>
        </div>
      </section>

      {/* Villa Details */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Villa Info */}
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                  貸別荘詳細
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-amber-50 to-pink-50 p-6 rounded-2xl">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">基本情報</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>定員：</strong>6名様まで</p>
                      <p><strong>チェックイン：</strong>15:00</p>
                      <p><strong>チェックアウト：</strong>11:00</p>
                      <p><strong>駐車場：</strong>3台まで</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-pink-50 to-amber-50 p-6 rounded-2xl">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">設備・アメニティ</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 砂丘の見えるロケーション</li>
                      <li>• 完全プライベート</li>
                      <li>• キッチン（調理器具完備）</li>
                      <li>• 洗濯機・乾燥機</li>
                      <li>• 無料Wi-Fi</li>
                      <li>• エアコン</li>
                      <li>• テレビ</li>
                      <li>• バーベキュー設備</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">周辺情報</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 鳥取砂丘まで徒歩15分</li>
                      <li>• 鳥取駅まで車で10分</li>
                      <li>• 鳥取空港まで車で20分</li>
                      <li>• スーパーマーケットまで徒歩8分</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Villa Image Placeholder */}
              <div className="bg-gradient-to-br from-pink-100 to-amber-100 h-96 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-24 h-24 text-pink-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <p className="text-gray-600 text-lg">鳥取ミカ邸の写真</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-pink-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                鳥取ミカ邸の特徴
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">砂丘の絶景</h3>
                <p className="text-gray-600 text-sm">
                  鳥取砂丘を一望できる絶好のロケーション。壮大な自然の美しさを満喫できます。
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">静寂な環境</h3>
                <p className="text-gray-600 text-sm">
                  都会の喧騒から離れた静寂な環境で、心身をリフレッシュできます。
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">バーベキュー設備</h3>
                <p className="text-gray-600 text-sm">
                  屋外バーベキュー設備を完備。家族や友人との楽しい時間をお過ごしいただけます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
              料金プラン
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-amber-50 to-pink-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">平日</h3>
                <p className="text-3xl font-bold text-amber-600 mb-4">¥30,000</p>
                <p className="text-gray-600 mb-6">1泊あたり</p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• チェックイン 15:00</li>
                  <li>• チェックアウト 11:00</li>
                  <li>• バーベキュー設備利用可能</li>
                  <li>• 駐車場3台まで</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-amber-50 p-8 rounded-2xl border-2 border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">週末</h3>
                <p className="text-3xl font-bold text-pink-600 mb-4">¥40,000</p>
                <p className="text-gray-600 mb-6">1泊あたり</p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• チェックイン 15:00</li>
                  <li>• チェックアウト 11:00</li>
                  <li>• バーベキュー設備利用可能</li>
                  <li>• 駐車場3台まで</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">連泊</h3>
                <p className="text-3xl font-bold text-orange-600 mb-4">¥25,000</p>
                <p className="text-gray-600 mb-6">1泊あたり（3泊以上）</p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• チェックイン 15:00</li>
                  <li>• チェックアウト 11:00</li>
                  <li>• バーベキュー設備利用可能</li>
                  <li>• 駐車場3台まで</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-pink-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
            鳥取で心身をリフレッシュ
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            鳥取ミカ邸で、100歳まで元気に生きるための癒しの時間をお過ごしください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="btn-primary text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              予約・お問い合わせ
            </a>
            <a href="/rental-villa" className="btn-secondary text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              他の貸別荘を見る
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 