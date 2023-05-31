import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='main'>
        <div className='width'>
            <div className='grid'>
                <div className='section1'>
                    <div className='footerlogo'>
                        <h1>
                            <span className="the">The</span> Siren
                        </h1>
                    </div>
                    <div className='fdeatils'>
                        <div className='fsub-details'>
                            <div className="description">
                                An All in one blog, bringing you the best of entertainment, knowledge
                                and inspiration.
                            </div>
                            <div className="copywrite">
                                &#169;2023.The Siren. All Rights reserved
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="contact-details">
                    <h2>Contact</h2>
                    <div>
                        <span className="loc-emoji">📍</span> #60, Vidyanagar, Tumkur.
                    </div>
                    <div>
                        <span className="phone-emoji">📞</span> +91 9876543210
                    </div>
                    <div className="last-text">
                        <pre><span className="mail-emoji">✉</span>  qasupport@thesiren.com</pre>
                    </div>
                </div>
                <div className="refernce">
                    <h2 className="heading-ref">References</h2>
                    <Link className="links" to={'/Bollywood'}>Bollywood</Link>
                    <Link className="links" to={'/Hollywood'}>Hollywood</Link>
                    <Link className="links" to={'/Technology'}>Technology</Link>
                    <Link className="links" to={'Fitness'}>Fitness</Link>
                    <Link className="links" to={'/Food'}>Food</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer