export default function SystemDevelopment() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 to-pink-50">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              システム開発
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              デジタル技術を通じて豊かな暮らしを提案。100歳まで元気に生きるためのシステムソリューションを提供します。
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              開発サービス
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="bg-gradient-to-br from-amber-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Web開発</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                美しく使いやすいWebサイト・Webアプリケーションを開発いたします。
              </p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• コーポレートサイト</li>
                <li>• ECサイト</li>
                <li>• Webアプリケーション</li>
                <li>• レスポンシブデザイン</li>
              </ul>
            </div>
            
            {/* Mobile App */}
            <div className="bg-gradient-to-br from-pink-50 to-amber-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">モバイルアプリ</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                iOS・Android対応のモバイルアプリケーションを開発いたします。
              </p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• iOSアプリ開発</li>
                <li>• Androidアプリ開発</li>
                <li>• クロスプラットフォーム</li>
                <li>• アプリストア対応</li>
              </ul>
            </div>
            
            {/* System Integration */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">システム統合</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                既存システムとの連携や、業務効率化のためのシステムを構築いたします。
              </p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 業務システム開発</li>
                <li>• API開発・連携</li>
                <li>• データベース設計</li>
                <li>• クラウド構築</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-pink-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                技術スタック
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">フロントエンド</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• React / Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Vue.js</li>
                </ul>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">バックエンド</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Node.js</li>
                  <li>• Python</li>
                  <li>• PHP</li>
                  <li>• Java</li>
                </ul>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">データベース</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• PostgreSQL</li>
                  <li>• MySQL</li>
                  <li>• MongoDB</li>
                  <li>• Redis</li>
                </ul>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">インフラ</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• AWS</li>
                  <li>• GCP</li>
                  <li>• Docker</li>
                  <li>• Kubernetes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
              開発プロセス
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-600">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">要件定義</h3>
                <p className="text-gray-600 text-sm">
                  お客様のご要望を詳しくヒアリングし、最適なソリューションを提案いたします。
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">設計・開発</h3>
                <p className="text-gray-600 text-sm">
                  最新技術を活用し、美しく使いやすいシステムを開発いたします。
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">テスト・運用</h3>
                <p className="text-gray-600 text-sm">
                  徹底したテストと、安定した運用体制でシステムをサポートいたします。
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">保守・サポート</h3>
                <p className="text-gray-600 text-sm">
                  長期的な保守・サポートで、システムの安定運用を継続いたします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-pink-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
            デジタルで豊かな暮らしを
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            アムルペッシュと一緒に、100歳まで元気に生きるためのデジタルソリューションを実現しましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="btn-primary text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              お問い合わせ
            </a>
            <a href="/brand-story" className="btn-secondary text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              ブランドストーリー
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 