import { SEOHead } from "@/components/seo-head";
import { Link } from "wouter";

export default function EditorialPolicy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Editorial Policy - Authenticity and Source Verification Standards",
    "description": "Our editorial policy outlining source verification processes, reference standards, and accuracy guarantees for Islamic content.",
    "author": {
      "@type": "Organization",
      "name": "Daily Azkar"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Daily Azkar",
      "url": "https://dailyazkar.site"
    }
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <SEOHead
        title="Editorial Policy - Authenticity and Source Verification Standards | Daily Azkar"
        description="Our editorial policy outlining source verification processes, reference standards, and accuracy guarantees for Islamic content. Learn about our authenticity and verification standards."
        keywords="editorial policy, authenticity standards, source verification, islamic content accuracy, reference standards, hadith verification, quran authenticity, islamic scholarship standards, content verification process"
        canonical="https://dailyazkar.site/editorial-policy"
        structuredData={structuredData}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-book text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Editorial Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Authenticity and source verification standards
          </p>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Our Commitment to Authenticity
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              At Daily Azkar, we recognize the immense responsibility of sharing Islamic content with our community. Our editorial policy reflects our unwavering commitment to accuracy, authenticity, and scholarly rigor in presenting Islamic teachings, azkar, and supplications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              This policy outlines our comprehensive approach to verifying sources, ensuring accuracy, and maintaining the highest standards of Islamic scholarship in all our content.
            </p>
          </div>
        </div>

        {/* Source Verification Process */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
            Source Verification Process
          </h2>
          
          <div className="space-y-6">
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-search mr-3 text-amber-500"></i>
                Primary Source Consultation
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Direct consultation of the Quran and authentic hadith collections</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Cross-referencing with multiple reliable sources</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Verification against established scholarly works</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Consultation of classical commentaries and modern interpretations</span>
                </li>
              </ul>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-layer-group mr-3 text-orange-500"></i>
                Multi-Level Verification
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Initial verification by qualified researchers</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Secondary review by Islamic scholarship experts</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Final approval by senior religious advisors</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                  <span className="text-gray-600 dark:text-gray-300">Regular audits and updates to existing content</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reference Standards */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Reference Standards
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-book-open mr-3 text-amber-500"></i>
                Primary Sources
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-chevron-circle-right text-amber-500 mt-1 mr-2"></i>
                  <span className="text-gray-600 dark:text-gray-300">Quran (verified through multiple accepted manuscripts)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-chevron-circle-right text-amber-500 mt-1 mr-2"></i>
                  <span className="text-gray-600 dark:text-gray-300">Sahih Bukhari and Sahih Muslim</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-chevron-circle-right text-amber-500 mt-1 mr-2"></i>
                  <span className="text-gray-600 dark:text-gray-300">Sunan Abu Dawud</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-chevron-circle-right text-amber-500 mt-1 mr-2"></i>
                  <span className="text-gray-600 dark:text-gray-300">Jami` at-Tirmidhi</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-chevron-circle-right text-amber-500 mt-1 mr-2"></i>
                  <span className="text-gray-600 dark:text-gray-300">Sunan an-Nasa'i</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-chevron-circle-right text-amber-500 mt-1 mr-2"></i>
                  <span className="text-gray-600 dark:text-gray-300">Sunan Ibn Majah</span>
                </li>
              </ul>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <i className="fas fa-graduation-cap mr-3 text-orange-500"></i>
                Scholarly References
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-chevron-circle-right text-orange-500 mt-1 mr-2"></i>
                  <span className="text-gray-600 dark:text-gray-300">Works of Imam Nawawi</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-chevron-circle-right text-orange-500 mt-1 mr-2"></i>
                  <span className="text-gray-600 dark:text-gray-300">Commentaries of Ibn Kathir</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-chevron-circle-right text-orange-500 mt-1 mr-2"></i>
                  <span className="text-gray-600 dark:text-gray-300">Al-Adhkar by Imam Nawawi</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-chevron-circle-right text-orange-500 mt-1 mr-2"></i>
                  <span className="text-gray-600 dark:text-gray-300">Hisn al-Muslim by Sa'id ibn Ali ibn Wahf al-Qahtani</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-chevron-circle-right text-orange-500 mt-1 mr-2"></i>
                  <span className="text-gray-600 dark:text-gray-300">Contemporary scholarly works</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-chevron-circle-right text-orange-500 mt-1 mr-2"></i>
                  <span className="text-gray-600 dark:text-gray-300">Verified fatwas from recognized authorities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Content Accuracy Guarantees */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Content Accuracy Guarantees
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glassmorphism rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-check text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Verified Sources
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                All content is backed by verified Islamic sources
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-file-contract text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Scholarly Review
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Content undergoes multiple expert reviews
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="fas fa-sync-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Regular Updates
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Content is regularly audited and updated
              </p>
            </div>
          </div>
        </div>

        {/* Hadith Classification */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Hadith Classification and Authentication
          </h2>
          
          <div className="glassmorphism rounded-2xl p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We follow the established classification system for hadith authentication, clearly indicating the grade of each hadith according to scholarly consensus:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Authentication Categories</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs font-bold px-2 py-1 rounded mr-3 mt-1">Sahih</span>
                    <span className="text-gray-600 dark:text-gray-300">Authentic and reliable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs font-bold px-2 py-1 rounded mr-3 mt-1">Hasan</span>
                    <span className="text-gray-600 dark:text-gray-300">Good, slightly less reliable than sahih</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-xs font-bold px-2 py-1 rounded mr-3 mt-1">Da'if</span>
                    <span className="text-gray-600 dark:text-gray-300">Weak but not fabricated</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Verification Process</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-amber-500 mt-1 mr-3"></i>
                    <span className="text-gray-600 dark:text-gray-300">Analysis of isnad (chain of narration)</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-amber-500 mt-1 mr-3"></i>
                    <span className="text-gray-600 dark:text-gray-300">Evaluation of matn (content)</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-amber-500 mt-1 mr-3"></i>
                    <span className="text-gray-600 dark:text-gray-300">Cross-referencing with scholarly verdicts</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-amber-500 mt-1 mr-3"></i>
                    <span className="text-gray-600 dark:text-gray-300">Consultation of hadith authentication experts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Transparency and Corrections */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Transparency and Corrections
          </h2>
          
          <div className="glassmorphism rounded-2xl p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Transparency Policy</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-info-circle text-amber-500 mt-1 mr-3"></i>
                    <span className="text-gray-600 dark:text-gray-300">Clear attribution of all sources</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-info-circle text-amber-500 mt-1 mr-3"></i>
                    <span className="text-gray-600 dark:text-gray-300">Indication of hadith grades and authenticity</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-info-circle text-amber-500 mt-1 mr-3"></i>
                    <span className="text-gray-600 dark:text-gray-300">Disclosure of scholarly differences of opinion</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-info-circle text-amber-500 mt-1 mr-3"></i>
                    <span className="text-gray-600 dark:text-gray-300">Clear indication of personal opinions vs. established rulings</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Correction Process</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-edit text-orange-500 mt-1 mr-3"></i>
                    <span className="text-gray-600 dark:text-gray-300">Prompt correction of identified errors</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-edit text-orange-500 mt-1 mr-3"></i>
                    <span className="text-gray-600 dark:text-gray-300">Transparent acknowledgment of corrections</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-edit text-orange-500 mt-1 mr-3"></i>
                    <span className="text-gray-600 dark:text-gray-300">Review by multiple scholars before correction</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-edit text-orange-500 mt-1 mr-3"></i>
                    <span className="text-gray-600 dark:text-gray-300">Open channel for community feedback</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Team Qualifications */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Editorial Team Qualifications
          </h2>
          
          <div className="glassmorphism rounded-2xl p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Our editorial team consists of qualified Islamic scholars and researchers with:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-university text-white text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Academic Credentials</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Advanced degrees from recognized Islamic institutions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-book text-white text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Scholarly Training</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Extensive training in hadith science and Quranic exegesis</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-chalkboard-teacher text-white text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Teaching Experience</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Years of experience teaching Islamic studies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact for Feedback */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Have Questions About Our Content?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We welcome feedback and inquiries about our content authenticity and verification process.
            </p>
            <Link to="/contact" className="inline-block px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Internal Links */}
        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
            Related Topics
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about-islam" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors">
              About Islam
            </Link>
            <Link href="/authentic-hadith-on-azkar" className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-colors">
              Authentic Hadith
            </Link>
            <Link href="/quran" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors">
              Holy Quran
            </Link>
            <Link href="/privacy-policy" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}