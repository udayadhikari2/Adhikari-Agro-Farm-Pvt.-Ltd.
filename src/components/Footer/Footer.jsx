import React from 'react'
import FooterItems from './FooterItems';
import FooterSocialMedia from './FooterSocialMedia'
import AdhikariLogo from '../../assets/AdhikariDark.png'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
        <div className="footer-container">
         <section className="footer-section">
            <div className="footer-heading">
                <h1 className="footer-heading-info">ADHIKARI AGRO FARM PVT. LTD.</h1>
            </div>
            <div className="footer-logo">
                <img src={AdhikariLogo} width="60px" alt="" />
            </div>
            <div className="form">
                <form className="subscrib-form">
                    <label for="subscription-email">Suscribe :</label>
                    <input className="form-email-input" type="email" name="email" placeholder="Your Subscription Email"></input>
                    <input type="submit"></input>
                </form>
            </div>
            </section>
            <section>
            <div className="footer-info-container">
                <div className="footer-wapper">
                    <ul className="footer-items">
                        <FooterItems
                            text="Privacy and Policies"
                            title="Privacy"
                            icons="fas fa-user-secret"
                            path="/Privacy"
                        />
                        <FooterItems
                            text="Publication"
                            title="Reports"
                            icons="fas fa-chart-line"
                            path="/Publication"
                        />
                        <FooterItems
                            text="Animals"
                            title="Productions"
                            icons="fas fa-fish"
                            path="/Privacy"
                        />
                        <FooterItems
                            text="Blogs"
                            title="Blogs"
                            icons="fas fa-blog"
                            path="/Privacy"
                        />
                    </ul>
                    <ul className="footer-items">
                        <FooterItems
                            text="Services"
                            title="Services"
                            icons="fas fa-user-cog"
                            path="/Services"
                        />
                        <FooterItems
                            text="Production"
                            title="Services"
                            icons="fab fa-product-hunt"
                            path="/Services"
                        />
                        <FooterItems
                            text="About us"
                            title="About"
                            icons="fas fa-info-circle"
                            path="/About"
                        />
                        <FooterItems
                            text="Contact"
                            title="Contact"
                            icons="fas fa-address-book"
                            path="/Contact"
                        />
                    </ul>
                </div>
            </div>
            </section>
        </div>
        <div className="copyRight-socialMedia-container"> <FooterSocialMedia /></div>
       
        </div>
    )
}

export default Footer
