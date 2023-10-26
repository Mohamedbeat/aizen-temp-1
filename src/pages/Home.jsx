import Header from '../components/Header'
import Footer from '../components/Footer'
import Landing from '../components/Landing'
import MiniCatogiries from '../components/MiniCatogiries'
import NewCollection from '../components/NewCollection'


export default function Home() {
  return (
    <div className=''>
        <Header />
        <Landing />
        <MiniCatogiries />
        <NewCollection />
        <Footer />
    </div>
  )
}
