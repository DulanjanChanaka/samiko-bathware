import About from '@/components/About'
import Category from '@/components/Category'
import Footer from '@/components/Footer'
import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import Product from '@/components/Product'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    < >
      <Navbar/>
      <Main/>
      <Product />
      <Category/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}
