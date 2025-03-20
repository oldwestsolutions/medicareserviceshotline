import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Medicare Services Hotline | 24/7 Support</title>
        <meta name="description" content="Get immediate Medicare assistance 24/7. Expert support for coverage, claims, enrollment, and provider information. Call 1-800-MEDICARE now." />
        <meta name="keywords" content="Medicare, healthcare, insurance, medical coverage, senior care, Medicare support" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.logo}>Medicare Services Hotline</div>
          <div className={styles.navLinks}>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <a href="#resources">Resources</a>
            <button className={styles.emergencyBtn}>Emergency Support</button>
          </div>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={inter.className}>
              24/7 Medicare Support <br />
              <span className={styles.highlight}>When You Need It Most</span>
            </h1>
            <p className={styles.description}>
              Expert assistance with your Medicare benefits, claims, and coverage questions.
              Our trained professionals are here to help you navigate your healthcare journey.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>Call 1-800-MEDICARE</button>
              <button className={styles.secondaryButton}>Live Chat</button>
            </div>
          </div>
          <div className={styles.trustBadges}>
            <span>✓ Licensed Experts</span>
            <span>✓ 24/7 Support</span>
            <span>✓ Secure & Confidential</span>
          </div>
        </div>

        <section id="services" className={styles.services}>
          <h2>Our Support Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>📋</div>
              <h3>Coverage & Benefits</h3>
              <p>Understanding your Medicare coverage options and benefits</p>
              <ul>
                <li>Part A & B Coverage</li>
                <li>Medicare Advantage Plans</li>
                <li>Prescription Drug Coverage</li>
                <li>Supplemental Insurance</li>
              </ul>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>⚕️</div>
              <h3>Claims Assistance</h3>
              <p>Expert help with Medicare claims and billing</p>
              <ul>
                <li>Claims Status Check</li>
                <li>Appeals Process</li>
                <li>Billing Questions</li>
                <li>Payment Issues</li>
              </ul>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>📅</div>
              <h3>Enrollment Support</h3>
              <p>Guidance through the Medicare enrollment process</p>
              <ul>
                <li>Initial Enrollment</li>
                <li>Special Enrollment Periods</li>
                <li>Plan Changes</li>
                <li>Deadline Information</li>
              </ul>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>🏥</div>
              <h3>Provider Network</h3>
              <p>Find Medicare-approved healthcare providers</p>
              <ul>
                <li>Doctor Search</li>
                <li>Hospital Locations</li>
                <li>Specialist Referrals</li>
                <li>Provider Verification</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.contactSection} id="contact">
          <div className={styles.contactBox}>
            <div className={styles.contactInfo}>
              <h2>Need Immediate Assistance?</h2>
              <p className={styles.phoneNumber}>1-800-MEDICARE</p>
              <p className={styles.availabilityText}>Available 24 hours a day, 7 days a week</p>
              <div className={styles.contactButtons}>
                <button className={styles.callButton}>
                  Call Now
                </button>
                <button className={styles.scheduleButton}>
                  Schedule Callback
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.resources} id="resources">
          <h2>Helpful Resources</h2>
          <div className={styles.resourceGrid}>
            <a href="#" className={styles.resourceCard}>
              <h4>Medicare Basics Guide</h4>
              <p>Download our comprehensive guide to Medicare</p>
            </a>
            <a href="#" className={styles.resourceCard}>
              <h4>Coverage Calculator</h4>
              <p>Estimate your Medicare costs and coverage</p>
            </a>
            <a href="#" className={styles.resourceCard}>
              <h4>FAQ Center</h4>
              <p>Find answers to common Medicare questions</p>
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className={styles.footerSection}>
            <h4>Contact Info</h4>
            <p>1-800-MEDICARE</p>
            <p>support@medicare-services.gov</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a href="#">Twitter</a>
              <a href="#">Facebook</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2024 Medicare Services Hotline. All rights reserved.</p>
          <p className={styles.disclaimer}>This is NOT an official U.S. Government website. This is a private service providing Medicare information and assistance.</p>
        </div>
      </footer>
    </div>
  )
} 