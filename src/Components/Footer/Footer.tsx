import logo from '../../assets/Icons/Layer_1-2.png';
import footerIco1 from '../../assets/Icons/Vector.png'
import footerIco2 from '../../assets/Icons/Frame.png'

export default function Footer() {
  return (
    <footer className="text-black text-end">
  {/* Grid container */}
  <div className="container p-4">
    {/*Grid row*/}
    <img src={logo} alt='logo' width='160px'/>
    <div className="row">
      {/*Grid column*/}
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        
        <p className="text-uppercase fw-bold">دعم إنستامارت  </p>
        <p className='text-black m-0 p-0'>
        الرياض، المملكة العربية السعودية 
        </p>
        <p className='text-black m-0 p-0'>
        طريق الأمير محمد بن سلمان، الطابق ١٠٥،  
        </p>
        <p className='text-black m-0 p-0'>
        مكتب رقم ٣٢، الرياض، المملكة العربية السعودية  
        </p>
        <p className="title mt-3" >
                        <img src={footerIco1} alt='footerIco1' className='ms-2' />
                        <a href='support@instamartksa.com' className='text-black'>support@instamartksa.com  </a>
                    </p>

                    <p className="title mt-3" >
                        <img src={footerIco2} alt='footerIco2' className='ms-2' />
                         96611234567+
                    </p>
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase fw-bold fs-5 mb-0">القانونية</h5>
        <div className='d-flex flex-column justify-content-between mt-3'>
        <a href="#!" className="text-black text-decoration-none">شروط الاستخدام</a>
        <a href="#!" className="text-black text-decoration-none my-3">سياسة الخصوصية</a>
        <a href="#!" className="text-black text-decoration-none">سياسة ملفات الارتباط</a>
        </div>
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <p className="text-uppercase fw-bold fs-5 mb-0">الروابط</p>
        <div className='d-flex flex-column justify-content-between mt-3'>
        <a href="#!" className="text-black text-decoration-none">الصفحة الرئيسية</a>
        <a href="#!" className="text-black text-decoration-none my-3">من نحن</a>
        <a href="#!" className="text-black text-decoration-none">الميزات</a>
        </div>
      </div>
      {/*Grid column*/}
    </div>
    {/*Grid row*/}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div className="text-center p-3 text-black" style={{borderTop: '1px solid rgba(0, 0, 0, 0.2)'}}>
  حقوق النشر © 2025 Instamart. كل الحقوق محفوظة. 
  </div>
  {/* Copyright */}
</footer>

  )
}
