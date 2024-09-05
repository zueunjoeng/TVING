import Hd from './component/layout/Hd'
import Mainbanner from './component/main/Mainbanner'
import Platform from './component/main/Platform'
import Lineup from './component/main/Lineup'
import Faq from './component/main/Faq'
import Wantmedia from './component/main/Wantmedia'
import Service from './component/main/Service'
import Watching from './component/main/watching'
import Ft from './component/layout/Footer'
import Quick from './component/layout/Quick'



function App() {
  return (
    <div className="App">
         <Hd></Hd>
         <Mainbanner btn="textBtn01"></Mainbanner>
         <Platform cls="swiper-c-dim" ea="1.8" btn="textBtn01"></Platform> 
         <Service btn="textBtn01"></Service>
         <Lineup></Lineup>
         <Wantmedia btn="textBtn01"></Wantmedia> 
         {/* <Watching></Watching>  */}
         <Faq></Faq>
         <Quick></Quick>
         <Ft></Ft>     
    </div>
  );
}

export default App;
