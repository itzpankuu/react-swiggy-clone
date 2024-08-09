import { useState } from 'react'
import Swiggy from './Swiggy';
import Img1 from './images/1.jpg'
import Img2 from './images/2.jpg'
import Img3 from './images/3.jpg'
import Img4 from './images/4.jpg'
import Img5 from './images/5.jpg'
import Img6 from './images/5.jpg'
import Img7 from './images/7.jpg'
import Img8 from './images/8.jpg'



function App() {
  return(
    <div className="container">
      <Swiggy source = {Img1} title='Agarwal Caters' rating='4.3' time='30-42' desc='Deserts,Sweets' desc1= 'Shastri nagar'/>

      <Swiggy source = {Img2} title='Shree Shyam Bature' rating='4.5' time='30-47' desc='North indian' desc1= 'Vaishali  nagar'/>

      <Swiggy source = {Img3} title='Thaggu Ke Samose' rating='4.7' time='30-43' desc='Snacks, Fast Food' desc1= 'Jhotwara'/>

      <Swiggy source = {Img4} title='DMB Sweets Pvt Lmtd' rating='4.6' time='37-40' desc='Sweets' desc1= 'Jhotwara'/>

      <Swiggy source = {Img5} title='Dosa Point' rating='3.9' time='32-40' desc='South Indian, Fast Food' desc1= 'Jhotwara'/>

      <Swiggy source = {Img6} title='Dosa Plaza' rating='4.3' time='30-40' desc='South Indian, Fast Foodts' desc1= 'Jhotwara'/>

      <Swiggy source = {Img7} title='Parantha House' rating='4.1' time='30-45' desc='Parantha' desc1= 'Shastri nagar'/>

      <Swiggy source = {Img8} title='Cakes' rating='4.5' time='33-40' desc='Bakery' desc1= 'Vaishali Nagar'/>

    </div>

  )
}
export default App;
