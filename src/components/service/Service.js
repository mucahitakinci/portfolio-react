import pencil from '../../assets/imgs/pencil-case.svg';
import responsive from '../../assets/imgs/responsive.svg';
import toolbox from '../../assets/imgs/toolbox.svg';
import analytics from '../../assets/imgs/analytics.svg';

const Service = () => {
  return (
    <section className="section" id="service">
        <div className="container text-center">
            <p className="section-subtitle">Ne Yaparım ?</p>
            <h6 className="section-title mb-6">Hizmetler</h6>
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="service-card">
                        <div className="body">
                            <img src={pencil} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" className="icon"/>
                            <h6 className="title">Adipisicing</h6>
                            <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="service-card">
                        <div className="body">
                            <img src={responsive} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" className="icon"/>
                            <h6 className="title">Sapiente</h6>
                            <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="service-card">
                        <div className="body">
                            <img src={toolbox} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" className="icon"/>
                            <h6 className="title">Placeat</h6>
                            <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="service-card">
                        <div className="body">
                            <img src={analytics} alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" className="icon"/>
                            <h6 className="title">Iusto</h6>
                            <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service
