import "./home.css"
import { useState, useEffect, useRef } from "react"
import PizzaHand from "../assets/pizza-hand.webp"
import Arrow from "../assets/arrow.svg"
import DiscountLabel from "../assets/discount.svg"
import AboutCard from "../components/AboutCard"
import { gsap } from "gsap";

const Home = () => {

    const [offerHover, setOfferHover] = useState(false)

    // GSAP
    const titleRefLine1 = useRef();
    const titleRefLine2 = useRef();

    const card1Ref = useRef();
    const card2Ref = useRef();
    const card3Ref = useRef();

    useEffect(() => {

        gsap.timeline()
            .fromTo(titleRefLine1.current, {
                duration: 0.4,
                opacity: 0,
                x: -100,
                ease: "power4.out"
            }
            , {opacity: 1, x: 0})
            .fromTo(titleRefLine2.current, {
                duration: 0.4,
                opacity: 0,
                x: -100,
                ease: "power4.out"
            }
            , {opacity: 1, x: 0})

        gsap.timeline()    
            .fromTo(card1Ref.current, {
                duration: 0.4,
                opacity: 0,
                stagger: 1,
                y: 100,
                ease: "power4.out"
            }
            , {opacity: 1, y: 0})
            .fromTo(card2Ref.current, {
                duration: 0.4,
                stagger: 1,
                opacity: 0,
                y: 100,
                ease: "power4.out"
            }
            , {opacity: 1, y: 0})
            .fromTo(card3Ref.current, {
                duration: 1,
                opacity: 0,
                y: 100,
                ease: "power4.out"
            }
            , {opacity: 1, y: 0})

    }, [])

    return (
        <div className="page home">
            <div className="hero">
                <img className="pizza-hand" src={PizzaHand} alt="pizza hand" />
                <div className="hero-elements side-padding">
                    <p className="offer" onMouseOver={() => setOfferHover(true)} onMouseOut={() => setOfferHover(false)}>Take 50% off your first order today!<img src={DiscountLabel} className={offerHover ? 'rotate-label' : ''} alt="discount label"></img></p>
                    <h1><span ref={titleRefLine1}>Deliver your pizza</span><span ref={titleRefLine2}>within 35 min</span></h1>
                    <button><p>Order now</p><img src={Arrow} alt="arrow"/></button>
                </div>
            </div>
            <div class="custom-shape-divider-bottom-1667036396">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="white-section">
                <div className="about-cards side-padding">
                    <AboutCard refe={card1Ref} title="How do we cook?" height={200} paragraph="Our cooks always use only the freshest and natural ingredients. Taste the chef's pizza and enjoy the taste of our great love."/>
                    <AboutCard refe={card2Ref} title="About delivery?" height={160} paragraph="We process your order quickly and deliver your order within 35 minutes. Fast and simple!"/>
                    <AboutCard refe={card3Ref} title="Our strategy?" height={120} paragraph="Every day we improve our service for you."/>
                </div>
            </div>
        </div>
    )
}

export default Home;

// Photo by <a href="https://unsplash.com/@tamasp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tamas Pap</a> on <a href="https://unsplash.com/s/photos/delivery-man-pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  