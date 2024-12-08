import Hero from "./components/Hero"
import Highights from "./components/Highights"

import Navbar from "./components/Navbar"

const App = () => {
  return (
   <main className="bg-black">
    <Navbar />
    <Hero />
    <Highights />

   </main>
  )
}

export default App
