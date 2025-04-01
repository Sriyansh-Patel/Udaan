import Nab from './Comp/Nab'
import Crausel from './Comp/Crausel'
import Foot from './Comp/Foot'
import NewsBoard from './Comp/News'
import './App.css'
import Intro from './Comp/Intro'
import HiddenTab from './Comp/HiddenTab'

function App() {
  

  return (
    <>
    <div data-theme="night">
      <Nab />
      <Crausel />
      <Intro />
      {/* <HiddenTab /> */}
      <NewsBoard className="p-10 mt-12 text-red-50" />
      <Foot />
    </div>

  </> 
  )
}

export default App
