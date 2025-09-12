import Card from "./card"
import Footer from "./footer"
import Messagesection from "../messageSection"
import {useInView} from 'react-intersection-observer'
import Testimonial from "./testimonial"
import Features from "./features"


function App() {
  const { ref:inter, inView} = useInView({
    threshold:0.5,
    triggerOnce:true
  })

  return (
    <>
    
    <div className="w-full bg-[#081247] text-center pb-10">
      <h1 className="text-5xl text-[maroon] mb-2"style={{textShadow:"3px 3px 3px #000000d2"}}>Welcome Back 👋</h1>
   
   <Messagesection className={`opacity-0 transition-all duration-500 ${inView ? 'opacity-30':''}`} ref={inter} />


   <Features />
    <Testimonial />

   <h1 className="text-white text-4xl my-3"> Subcription Plans</h1>
 
<div className={`grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 transition-all duration-1000 w-[80%] m-auto ${inView ?'opacity-100 ':'opacity-0'}`} ref={inter}>
  <Card  data ="Free Trial" />
<Card  data ="Pro"/>
<Card  data ="Team"/>

</div>
  <p className="text-[18px] text-white"> You can cancel anythime ❌</p>

    </div>
    <Footer  />
    </>
  )
}

export default App
