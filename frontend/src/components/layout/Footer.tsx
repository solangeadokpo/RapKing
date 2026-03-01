import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Instagram, Youtube, Facebook, Mail, Phone } from 'lucide-react'

interface FooterProps {
  lang: string
}

export default function Footer({ lang }: FooterProps) {
  const t = useTranslations()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <Link href={`/${lang}`} className="inline-block mb-3">
              <Image src="/logo.png" alt="RapKing" width={130} height={44} className="object-contain" />
            </Link>
            <p className="text-[#555555] text-sm">{t('footer.tagline')}</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-[#888888]">
              <a href="mailto:rapking634@gmail.com" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} />
                rapking634@gmail.com
              </a>
              <a href="tel:+2250704321146" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={14} />
                +225 07 04 32 11 46
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            <Link href={`/${lang}/articles`} className="text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-wide">
              {t('nav.articles')}
            </Link>
            <Link href={`/${lang}/artistes`} className="text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-wide">
              {t('nav.artists')}
            </Link>
            <Link href={`/${lang}/clips`} className="text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-wide">
              {t('nav.clips')}
            </Link>
            <Link href={`/${lang}/contact`} className="text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-wide">
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Social */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[#555555] mb-4">Suivez-nous</p>
            <div className="flex gap-4 items-center flex-wrap">
              <a
                href="https://www.facebook.com/share/1GtghcZtDh/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://x.com/rapking634"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="X"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L2.25 2.25h6.906l4.256 5.625 4.832-5.625zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/rapkingofficiel?igsh=eGduaHNmc29vZTFt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com/@rapkingofficiel?si=483FfY4h5xQ76Vpw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.threads.com/@rapkingofficiel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Threads"
              >
                <svg width="20" height="20" viewBox="0 0 192 192" fill="currentColor">
                  <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0585 175.059C74.2059 174.89 56.9934 167.575 45.7803 154.061C35.3069 141.564 29.9443 123.079 29.7832 99C29.9443 74.9208 35.3069 56.4357 45.7803 43.9393C56.9934 30.4249 74.2059 23.1098 97.0585 22.9408C119.974 23.1107 137.3 30.4611 148.586 43.9998C154.137 50.6585 158.303 59.2624 161.004 69.4842L176.154 65.4082C172.862 53.0028 167.518 42.3323 160.14 33.5565C145.898 16.7169 125.189 8.0359 97.1032 7.79417C69.0538 8.03402 48.2514 16.717 33.997 33.5985C21.1739 48.7317 14.6198 70.2501 14.4063 99C14.6198 127.75 21.1739 149.268 33.997 164.401C48.2514 181.283 69.0538 189.966 97.1032 190.206C122.25 189.989 140.476 183.137 154.56 169.063C173.286 150.35 172.689 127.119 166.719 113.402C162.688 104.208 155.715 96.8529 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@rapkingofficiel?_r=1&_t=ZN-94IIOUMKMeE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#1A1A1A] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#555555]">
          <p>© {currentYear} RapKing. {t('footer.rights')}.</p>
          <div className="flex gap-4">
            <Link href={`/fr`} className={lang === 'fr' ? 'text-white' : 'hover:text-white transition-colors'}>
              Français
            </Link>
            <Link href={`/en`} className={lang === 'en' ? 'text-white' : 'hover:text-white transition-colors'}>
              English
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
