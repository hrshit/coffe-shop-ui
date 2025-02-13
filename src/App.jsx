import Hero from './Components/Hero/Hero'
import Service from './Components/Service/Service'
import WhereToBuy from './Components/WhereToBuy/WhereToBuy'
import AppBanner from './Components/AppBanner/AppBanner'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <Service />
      <WhereToBuy />
      <AppBanner/>
    </div>
  )
}

export default App
