import { useState, useEffect, Fragment } from 'react'
import Loading from '../animation/Loading';
import Navbar from '../page/Navbar';
import Footer from '../page/Footer';
import Home404 from './Home404';

const Page404 = () => {

  const [loading, setLoading] = useState(false);
  const time = 500;
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, time);
  }, [])


  return (
    <>
      {loading ?
        <Loading /> :
        <Fragment>
          <Navbar />
            <Home404 />
          <Footer />
        </Fragment>
      }
    </>
  )
}

export default Page404
