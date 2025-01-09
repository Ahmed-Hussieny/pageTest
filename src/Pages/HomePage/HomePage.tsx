import imageS1 from '../../assets/Images/section1.png'
import imageS2 from '../../assets/Images/section2.png'
import imageS3 from '../../assets/Images/section3.png'
import sec2con1 from '../../assets/Icons/Vector (1).png'
import sec2con2 from '../../assets/Icons/check.png'
import sec2con3 from '../../assets/Icons/shopping-bag.png'
import imageS4 from '../../assets/Images/section4 1.png'
import imageS42 from '../../assets/Images/Group 35932.png'
import googlePlay from '../../assets/Images/Badges.png'
import appStore from '../../assets/Images/Group.png'

import arrow from '../../assets/Icons/Vector 1.png'
import './HomePage.css'
export default function HomePage() {
  return (
    <div className="container mt-5">
        {/* section one */}
        <div className="section-one pt-5">
            <div className="row gy-3 align-items-center">
                <div className="col-md-6">
                    <img src={imageS1} alt="section1" className="img-fluid" />
                </div>
                <div className="col-md-6 px-4 position-relative">
                    <div className='imageS4'>
                    <p className="title bigFont" >استمتع بتجربة</p>
                    <p className="title bigFont" >  التسوق الأفضل مع </p>
                    <p className="title bigFont" > Instamart </p>
                    <p className="title smallFont" >تسوق كل ما تحتاجه من منتجات، وتمتع بعروض حصرية من خلال تطبيق Instamart </p>
                    <button style={{backgroundColor:'#FF9F24'}} className="btn rounded-1 px-5 py-3" type="submit"
                    >
                        <img className='ms-2' src={arrow} alt="arrow" />
                        ابدأ الآن 
                        
                    </button>
                    </div>
                    <div className='div-imageS1'>
                    <img src={imageS42} alt="imageS42" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>

        {/* section two */}
        <div className="section-two pt-5 my-5">
            <div className="row gy-3 align-items-center">
                <div className="col-md-6">
                    <img src={imageS2} alt="section2" className="img-fluid" />
                </div>
                <div className="col-md-6 px-4">
                <p style={{color:'#FF9F24'}}>المزايا  </p>
                <p className="title bigFont" > إنستامارت بريميوم</p>
                <div>
                    <p className="title mt-3" >
                        <img src={sec2con1} alt='sec2con1' className='ms-2' />
                        سلة التسوق الذكية 
                    </p>
                    <p className="title smallFont">
                        اضف أي منتج إلى سلة التسوق الخاصة بك بسهولة وراحة.
                    </p>
                </div>

                <div>
                    <p className="title mt-3" >
                        <img src={sec2con2} alt='sec2con2' className='ms-2' />
                        إتمام الشراء بسرعة  
                    </p>
                    <p className="title smallFont">
                    تسوق وادفع بسهولة باستخدام طرق الدفع المتعددة، وكن جاهزًا للتوصيل فورًا. 
                    </p>
                </div>


                <div>
                    <p className="title mt-3" >
                        <img src={sec2con3} alt='sec2con3' className='ms-2' />
                        الوصول إلى الأسواق المحلية   
                    </p>
                    <p className="title smallFont">
                    اكتشف منتجاتك المفضلة من الأسواق المحلية مباشرة، وتسوق من تجار قريبين منك. 
                    </p>
                </div>

                </div>
            </div>
        </div>



        {/* section three */}
        <div className="section-three pt-5 my-5">
            <div className="row gy-3 align-items-center">
            <div className="col-md-6 px-4">
                <p style={{color:'#FF9F24'}}>المزايا  </p>
                    <p className="title bigFont" > لماذا تختار Instamart؟   </p>
                    <ul className="text-secondary">
                        <li className="list-item">
                        توصيل سريع وآمن 
                        </li>
                        <li className="list-item">
                        واجهة مستخدم سهلة وواضحة 
                        </li>

                        <li className="list-item">
                        أسعار منافسة وجودة عالية 
                        </li>
                    </ul>

                </div>

                <div className="col-md-6">
                    <img src={imageS3} alt="section3" className="img-fluid" />
                </div>
                
            </div>
        </div>

        {/* section four */}
        <div className=" bg-black rounded-3 pt-5 px-3 my-5 text-white">
            <div className="row gy-3 align-items-center">
                <div className="col-md-6 text-center position-relative overflow-hidden">
                    <img src={imageS4} alt="imageS4" className="img-fluid imageS4" />
                    <div className='div-imageS42'>
                    <img src={imageS42} alt="imageS42" className="img-fluid" />
                    </div>
                </div>
                <div className="col-md-6 px-4 pb-3">
                    <p className="title bigFont" > ابدأ تجربة Instamart الآن  </p>
                    <p className="title bigFont" >قم بتحميل التطبيق! </p>
                    <div className='mt-3'>
                        <button  className="bg-transparent border-0 rounded-1 ms-" type="submit">
                            <img src={googlePlay} alt="googlePlay" />
                        </button>
                        <button  className="bg-transparent border-0 rounded-1 " type="submit">
                            <img src={appStore} alt="appStore" />
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
