import 'normalize.css/normalize.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../../styles/globals.css'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import NavBar from '../components/navbar/NavBar'

config.autoAddCss = false 
library.add(faBars)

function MyApp({ Component, pageProps }) {

  return (
    <div>
      <NavBar />
      <div className='container'>
       <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
