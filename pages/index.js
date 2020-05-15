import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/Layout';

const seoData = {
  title: 'Mooni - Easy crypto cash out',
  description: 'Transfer funds from your crypto wallet to your bank account, without KYC !',
  keywords: 'mooni,offramp,crypto off-ramp,fiat,cashout,defi,exchange,ethereum,crypto,cryptocurrency,cryptocurrencies,DAI,ETH',

};

export default () => (
  <Layout>

    <SEO data={seoData} />

    <header id="header">

      <div id="topbar">
        <div className="container">
          <div className="social-links">
            <a href="https://twitter.com/moonidapp" target="_blank" className="twitter"><i className="fab fa-twitter"/></a>
            <a href="https://t.me/moonidapp" target="_blank" className="telegram"><i className="fab fa-telegram-plane"/></a>
            <a href="https://github.com/pakokrew/mooni" target="_blank" className="github"><i className="fab fa-github"/></a>
            <a href="https://medium.com/@pakokrew/introducing-mooni-97d97258756a" target="_blank" className="medium"><i className="fab fa-medium"/></a>
          </div>
        </div>
      </div>

      <div className="container">

        <div className="logo float-left">
          <h1 className="text-light"><a href="#intro" className="scrollto"><span>🌚 Mooni</span></a></h1>
          {/*<a href="#header" className="scrollto"><img src="img/logo.png" alt="" className="img-fluid"/></a> */}
        </div>

        <nav className="main-nav float-right d-none d-lg-block">
          <ul>
            <li className="active"><a href="#intro">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="https://doc.mooni.tech/" target="_blank">Developers</a></li>
          </ul>
        </nav>

      </div>
    </header>

    <section id="intro" className="clearfix">
      <div className="container d-flex h-100">
        <div className="row justify-content-center align-self-center">
          <div className="col-md-6 intro-info order-md-first order-last">
            <h2>The simplest <br/>crypto <span>off ramp</span></h2>
            <div>
              <a href="https://app.mooni.tech" className="btn-info btn-get-started" target="_blank">Use it</a>
              <a href="https://doc.mooni.tech/frontend-integration" className="btn-info btn-integrate" target="_blank">Integrate it</a>
            </div>
          </div>

          <div className="col-md-6 intro-img order-md-last order-first">
            <img src="img/planetsimg.svg" alt="" className="img-fluid"/>
          </div>
        </div>

      </div>
    </section>

    <main id="main">

      <section id="about">
        <div className="container">

          <div className="row feature-item">
            <div className="col-lg-6 wow fadeInUp">
              <div style={{width:200}}>
                <iframe src="https://streamable.com/e/0epyef" frameBorder="0" width="100%" height="100%"
                        allowFullScreen
                        style={{width:'100%',height:'100%',position:'absolute',left:0,top:0,overflow:'hidden'}}/>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
              <h4><b>Mooni</b> is a simple solution to cash out cryptocurrencies in fiat to a bank account, without KYC</h4>
              <p>
                Connect your wallet, choose the currencies and the amount you want to transfer, put your bank account number (IBAN) and you're good to go.
              </p>
              <p>
                Mooni does not requires to sign up, neither to verify identity. Users just need a crypto wallet and a bank account. Personal information can be stored in a private and encrypted storage, so that it can be remember for a latter use. Our service is also decentralized, that is to say that we don’t have any server and no data ever reaches us.
              </p>
              <p>
                Want to see how it works ? Check the <a href="https://doc.mooni.tech/walkthrough" target="_blank" rel="noopener noreferer">walkthrough</a> !
              </p>
            </div>
          </div>

          <div className="row feature-item mt-5 pt-5">
            <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
              <img src="img/about-marketplaces.svg" className="img-fluid" alt=""/>
            </div>

            <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
              <h4>Meant to be used in marketplaces</h4>
              <p>
                Many platforms today enable to generate revenue online, remotely. Anyone can earn crypto by prodiving
                &nbsp;<a href="https://ethlance.com/" target="_blank">services</a>,
                &nbsp;<a href="https://shoporigin.com/" target="_blank">selling goods</a>,
                &nbsp;<a href="https://www.cryptocribs.com/" target="_blank">renting</a>,
                &nbsp;<a href="https://idle.finance/" target="_blank">lending</a>,
                &nbsp;<a href="https://app.nuo.network/trade" target="_blank">speculating</a> or
                &nbsp;<a href="https://www.pooltogether.com/" target="_blank">gambling</a>.
              </p>
              <p>
                The universe of the things we can buy with crypto is expanding, but today, it is still hard to spend a living with it. Things like homing, food, or health insurance still requires to have a bank account and fiat.
              </p>
              <p>
                With Mooni, anyone that generate revenue online in crypto can transfer their money from their crypto wallet to their bank account, and become a decentralized worker.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section id="features" className="section-bg">
        <div className="container">

          <header className="section-header">
            <h3>Features</h3>
          </header>

          <div className="row">

            <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
              <div className="box">
                <div className="icon" style={{ background: '#fceef3' }}><i className="fab fa-btc" style={{ color: '#ff689b' }}/></div>
                <h4 className="title"><a href="">For crypto owners</a></h4>
                <p className="description">Instantly cash out your cryptos to your bank account</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
              <div className="box">
                <div className="icon" style={{ background: '#fff0da' }}><i className="fas fa-user-secret" style={{ color: '#e98e06' }} /></div>
                <h4 className="title"><a href="">No KYC</a></h4>
                <p className="description">You do not need to create an account nor to verify your identity</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
              <div className="box">
                <div className="icon" style={{ background: '#e6fdfc' }}><i className="fas fa-exchange-alt" style={{ color: '#3fcdc7' }} /></div>
                <h4 className="title"><a href="">Pay with any token</a></h4>
                <p className="description">Convert ETH or any ERC20 token into fiat</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
              <div className="box">
                <div className="icon" style={{ background: '#eafde7' }}><i className="fas fa-user-shield" style={{ color:'#41cf2e' }} /></div>
                <h4 className="title"><a href="">Non custodian</a></h4>
                <p className="description">We do not hold your funds at any time <br/> You stay in control of your money</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
              <div className="box">
                <div className="icon" style={{ background: '#e1eeff' }}><i className="fas fa-share-alt" style={{ color: '#2282ff' }} /></div>
                <h4 className="title"><a href="">BYO Wallet</a></h4>
                <p className="description">You can use you favorite web3-compatible wallet</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
              <div className="box">
                <div className="icon" style={{ background: '#ecebff' }}><i className="far fa-clock" style={{ color: '#8660fe' }} /></div>
                <h4 className="title"><a href="">Instant conversion</a></h4>
                <p className="description">Exchange and bank transfer is executed as soon as you transaction is confirmed</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section id="call-to-action" className="wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 text-center text-lg-left">
              <img src="img/grants-logo.svg" className="cta-img" alt=""/>
              <p className="cta-text">We're hosting a grant on Gitcoin, where anyone can participate to the funding of this project. During <a href="https://gitcoin.co/blog/gitcoin-grants-round-4/" target="_blank">CLR rounds</a>, donations are quadraticly matched !</p>
            </div>
            <div className="col-lg-3 cta-btn-container text-center">
              <a className="cta-btn align-middle" href="https://gitcoin.co/grants/225/mooni" target="_blank">Donate</a>
            </div>
          </div>

        </div>
      </section>

      <section id="faq">
        <div className="container">
          <header className="section-header">
            <h3>Frequently Asked Questions</h3>
            <p>Want to know more ? We may have an answer !</p>
          </header>

          <ul id="faq-list" className="wow fadeInUp">
            <li>
              <a data-toggle="collapse" className="collapsed" href="#faq1">What kind of wallet can I use ? <i className="ion-android-remove"/></a>
              <div id="faq1" className="collapse" data-parent="#faq-list">
                <p>
                  Most common web3-compatible wallet can be used. As now, you can use Metamask, Portis, Fortmatic, WalletConnect, Coinbase Wallet, Trust Wallet...
                </p>
              </div>
            </li>

            <li>
              <a data-toggle="collapse" href="#faq2" className="collapsed">How much can I transfer ? <i className="ion-android-remove"/></a>
              <div id="faq2" className="collapse" data-parent="#faq-list">
                <p>
                  Anonymous accounts are allowed up to 5,000 CHF per year.
                </p>
              </div>
            </li>

            <li>
              <a data-toggle="collapse" href="#faq3" className="collapsed">How much does it cost ? <i className="ion-android-remove"/></a>
              <div id="faq3" className="collapse" data-parent="#faq-list">
                <p>
                  The fees we charge depend on the amount you exchange, but stays between 0.5% and 2%, plus blockchain network fees. The precise amount is displayed on the app when placing an order, try it ;)
                </p>
              </div>
            </li>

            <li>
              <a data-toggle="collapse" href="#faq4" className="collapsed">How does it work ? <i className="ion-android-remove"/></a>
              <div id="faq4" className="collapse" data-parent="#faq-list">
                <p>
                  We are not an exchange. We are just providing a sleek user interface glueing different services together. For ETH=>Fiat exchange, we use bity.com, which is a well-established Swiss crypto gateway, with strong regulations rules. For ERC20=>ETH conversion, we use decentralized liquity provider, which are trustless and permissionless.
                </p>
              </div>
            </li>

          </ul>

        </div>
      </section>

    </main>

    <footer id="footer" className="section-bg">
      <div className="footer-top">
        <div className="container">

          <div className="row">

            <div className="col-sm-6">
              <div className="row">
                <div className="col-12 footer-info">
                  <h3>Mooni</h3>
                  <p>The simplest crypto off ramp.</p>
                </div>

                <div className="col-12 footer-links">
                  <h4>Links</h4>

                  <div className="social-links">
                    <a href="https://twitter.com/moonidapp" target="_blank" className="twitter"><i className="fab fa-twitter"/></a>
                    <a href="https://t.me/moonidapp" target="_blank" className="telegram"><i className="fab fa-telegram-plane"/></a>
                    <a href="https://github.com/pakokrew/mooni" target="_blank" className="github"><i className="fab fa-github"/></a>
                    <a href="https://medium.com/@pakokrew/introducing-mooni-97d97258756a" target="_blank" className="medium"><i className="fab fa-medium"/></a>
                    <a href="mailto:usemooni@gmail.com" target="_blank" className="mail"><i className="fa fa-envelope"/></a>
                  </div>
                </div>

              </div>
            </div>


            <div className="col-sm-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>If you want to be informed when new features come alive in the app, you can register to our newsletter.</p>

              <form action="https://tech.us4.list-manage.com/subscribe/post?u=fffb78e61df292478cc59d016&amp;id=103f1ef6ff" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <input type="email" name="EMAIL" className="required email" id="mce-EMAIL"/>
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                <div style={{ position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_fffb78e61df292478cc59d016_103f1ef6ff" tabIndex="-1" value="" readOnly/></div>
              </form>

            </div>

          </div>

        </div>

      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong>Mooni</strong>. All Rights Reserved
        </div>
        <div className="credits">

          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>

    <a href="#" className="back-to-top"><i className="fa fa-chevron-up"/></a>

  </Layout>
)