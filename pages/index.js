import Head from 'next/head'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Roadmap from './components/Roadmap'
import Team from './components/Team'

export default function Home() {

  return (
    <div>
      <Head>
        <title>NFT Minting dApp</title>
        <meta name="NFT Minting dApp" content="This is NFT Minting dApp by YashKVR" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gradient-to-t from-slate-900 via-lime-700 to-slate-900">
        <Navbar />
        <Hero />
        <About />
        <Roadmap />
        <Team />
      </main>

      <footer className="bg-slate-900 text-white text-center font-semibold py-3">
        <div>
          <p>All Rights Reserved © Duck NFT, 2023.</p>
        </div>
      </footer>
    </div>
  )
}
