'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
    privacy: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // フォーム送信のシミュレーション
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitMessage('お問い合わせを受け付けました。3営業日以内にご返信いたします。')
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: '',
        privacy: false
      })
    } catch (error) {
      setSubmitMessage('送信に失敗しました。もう一度お試しください。')
    }
    
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-minimal relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Modern office space with natural light"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container-custom text-center relative z-10">
          <h1 className="hero-text mb-16">
            CONTACT
          </h1>
          <p className="body-text max-w-3xl mx-auto">
            アムルペッシュへのお問い合わせ・ご相談は、こちらのフォームからお気軽にお寄せください。
          </p>
        </div>
      </section>

      {/* Large Image Section */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="aspect-[16/9] image-reveal">
            <img 
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Beautiful workspace with natural materials"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-minimal bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="section-title mb-8 tracking-wide">
                GET IN TOUCH
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
              {/* Company Info */}
              <div className="minimal-card">
                <h3 className="text-2xl font-light text-black mb-8 tracking-wide">INFORMATION</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-light text-black mb-2 tracking-wide uppercase">Company</h4>
                    <div className="body-text space-y-2">
                      <p>アムルペッシュ株式会社</p>
                      <p>代表者：フロケミカ</p>
                      <p>設立：2024年</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-light text-black mb-2 tracking-wide uppercase">Services</h4>
                    <div className="body-text space-y-2">
                      <p>貸別荘サービス</p>
                      <p>不動産・空間デザイン</p>
                      <p>システム開発</p>
                      <p>地方創生プロジェクト</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-light text-black mb-2 tracking-wide uppercase">Response</h4>
                    <p className="body-text">
                      お問い合わせから3営業日以内にご返信いたします。
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="minimal-card">
                <h3 className="text-2xl font-light text-black mb-8 tracking-wide">CONTACT FORM</h3>
                
                {submitMessage && (
                  <div className={`mb-8 p-4 ${submitMessage.includes('受け付けました') 
                    ? 'bg-green-50 text-green-800' 
                    : 'bg-red-50 text-red-800'
                  }`}>
                    {submitMessage}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="お名前 *"
                      className="w-full bg-transparent border-0 border-b border-gray-300 py-3 text-black placeholder-gray-500 font-light focus:border-black focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="メールアドレス *"
                      className="w-full bg-transparent border-0 border-b border-gray-300 py-3 text-black placeholder-gray-500 font-light focus:border-black focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="電話番号"
                      className="w-full bg-transparent border-0 border-b border-gray-300 py-3 text-black placeholder-gray-500 font-light focus:border-black focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  
                  <div>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-0 border-b border-gray-300 py-3 text-black font-light focus:border-black focus:outline-none transition-colors duration-300"
                    >
                      <option value="">お問い合わせ種別を選択してください *</option>
                      <option value="rental-villa">貸別荘予約・お問い合わせ</option>
                      <option value="real-estate">不動産・デザインのご相談</option>
                      <option value="system-development">システム開発のご依頼</option>
                      <option value="media">メディア取材のお申し込み</option>
                      <option value="other">その他のご相談</option>
                    </select>
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="お問い合わせ内容を詳しくお聞かせください *"
                      className="w-full bg-transparent border border-gray-300 p-4 text-black placeholder-gray-500 font-light focus:border-black focus:outline-none transition-colors duration-300 resize-none"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      name="privacy"
                      checked={formData.privacy}
                      onChange={handleChange}
                      required
                      className="mt-1 h-4 w-4 text-black focus:ring-black border-gray-300"
                    />
                    <label className="ml-3 body-text">
                      プライバシーポリシーに同意します *
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50"
                  >
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-minimal bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="section-title mb-8 tracking-wide">
                お気軽にお問い合わせください。
              </h2>
              <p className="body-text mb-24 max-w-3xl mx-auto">
                アムルペッシュでは、100歳まで元気に生きるためのライフスタイル提案について、
                <br />
                お客様一人ひとりに寄り添ったご相談を承っております。
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              <div className="minimal-card text-center fade-in stagger-1">
                <h3 className="text-xl font-light text-black mb-8 tracking-wide">迅速な対応</h3>
                <p className="body-text">
                  お問い合わせいただいてから、原則3営業日以内にご返信いたします。
                </p>
              </div>
              
              <div className="minimal-card text-center fade-in stagger-2">
                <h3 className="text-xl font-light text-black mb-8 tracking-wide">専門スタッフ</h3>
                <p className="body-text">
                  各分野の専門スタッフが、お客様のご要望に最適なソリューションを提案いたします。
                </p>
              </div>
              
              <div className="minimal-card text-center fade-in stagger-3">
                <h3 className="text-xl font-light text-black mb-8 tracking-wide">継続サポート</h3>
                <p className="body-text">
                  お客様との長期的な関係を大切にし、継続的なサポートを提供いたします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}