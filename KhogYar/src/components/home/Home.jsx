import React, { useEffect, useState } from 'react'
import './home.css'
import heroImg1 from '../../assets/heroImg1.jpeg'
import heroImg2 from '../../assets/heroImg2.jpg'
import heroImg3 from '../../assets/heroImg3.jpg'
import heroImg4 from '../../assets/heroImg4.webp'
import { FaArrowRightLong } from 'react-icons/fa6'
import { GiFruitBowl } from 'react-icons/gi'
import vallayimg1 from '../../assets/vallayimg1.jpeg'
import vallayimg2 from '../../assets/vallayimg2.jpg'
import vallayimg3 from '../../assets/vallayimg3.jpg'
import vallayimg4 from '../../assets/vallayimg4.webp'
import vallayimg5 from '../../assets/vallayimg5.jpeg'
import Testimonial from '../testimonial/Testimonial'
import signatureImg1 from '../../assets/signatureProductImg1.jpg'
import signatureImg2 from '../../assets/signatureProductImg2.jpg'
import signatureImg3 from '../../assets/signatureProductImg3.jpg'
import signatureImg4 from '../../assets/signatureProductImg4.jpg'
import heroVideo from '../../assets/heroSectionVideo.mp4'

function Home() {

      const heroImgsArray = [heroImg1, heroImg2, heroImg3, heroImg4]
      const [recipeHeroSectionPageBgImg, setRecipeHeroSectionPageBgImg] = useState(0)
       useEffect(() => {
          const interval = setInterval(() => {
            setRecipeHeroSectionPageBgImg((prev) => (prev + 1) % heroImgsArray.length);
          }, 2000);
      
          return () => clearInterval(interval);
        }, []);
        const vallayItems = [
          {img:vallayimg1, side:"GILGIT-BALTISTAN", name:"Hunza" , detail: "Farming families who have tended these apricot orchards for generations. Gold elevation, mineral soils, air-dried at altitude."},
          {img:vallayimg2, side:"NORTHERN PAKISTAN", name:"Gilgit-Baltistan" , detail:"Walnuts, mulberries, and mountain honey. Genuine terroir as flavour-carrying elevation traditions."},
          {img:vallayimg3, side:"SOUTH-WEST PAKISTAN", name:"Balochistan" , detail:"Sharing extraordinary Chilghoza pine nuts. The ceremony and soil are distinctly irreplaceable."},
          {img:vallayimg4, side:"KHYBER PAKHTUNKHWA", name:"KPK" , detail:"Saffron, dried figs, and ancient mulberry forests. Skilled artisanal harvest traditions."},
          {img:vallayimg5, side:"CENTRAL PAKISTAN", name:"Punjab" , detail:"Chaunsa mangoes, Kinnow citrus, and the fertile plains of the Indus heartland."}
        ]
        const [currentVallayItem, setCurrentVallayItem] = useState(0)

        const SignatureProductItems = [
          {img:signatureImg1, heading:"Chilghoza Pine Nuts",
           origin:"Chighoza", peragaraph:"Hand-gathered from 2,500m forests. The rarest pine nut on earth, slow-dried in mountain air."
          },
          
          {img:signatureImg2, heading:"Hunza Apricots",
           origin:"Apricot", peragaraph:"Sun-dried at altitude. Mineral-sweet, irreplaceable character from the world's most fertile valleys."
          },

          {img:signatureImg3, heading:"Multan Mango Collection",
           origin:"Chighoza", peragaraph:"Chaunsa & Anwar Ratol varieties dried at peak sweetness from the orchards of Central Punjab."
          },

          {img:signatureImg4, heading:"Artisan Chocolate Collection",
           origin:"Chocolate", peragaraph:"Premium couverture infused with saffron, Hunza apricot, and Chilghoza pine nut."
          },

        ]
        const [currentSignatureProduct, setCurrentSignatureProduct] = useState(0)
         
  return (
    <>
    <div className='homePage'>

      <div className='hoemPageHeroSec'>

        

        <div className='heroSectionLeftSide'>
          <p className='headingP'>Balochistan Harvest 2025</p>
          <h1>From the Valleys of Pakistan to the <span> World's Finest tables.</span></h1>
            
          {/* <p>Bringing extraordinary, rare harvests from Pakistan's mountains and valleys to discerning connoisseurs worldwide.</p> */}

          <div className='heroBtnSec'>
            <button>PRODUCTS</button>
            <button>CONTACT US</button>
          </div>
        </div>

        <div className='heroSectionRightSide'>
          
        </div>
        <div className='heroVideoSec'>
          {/* <video src={heroVideo} autoPlay muted loop></video> */}
        </div>

      </div>

      <div className='homePageFiveSection'>
        <h1>The Five Houses of KHOGYAR</h1>
        <p className='headingP'>Editorial storytelling with large-scale photography celebrating heritage and provenance from Pakistan's valleys.</p>
        
        <div className='fiveImgSection'>

          <div className='fiveImgSectionItem'>

            <div className='fiveItemContentSec'>
              <div className='fiveFirstIcon'><GiFruitBowl /></div>
              <div className='fiveItemTextSection'>
                <h3>Harvest Collection</h3>
                <p>DRY FRUITS · FRUIT ROLLS · FRESH</p>
              </div>
              {/* <div className='fiveLastIcon'><FaArrowRightLong /></div> */}
            </div>

          </div>

          <div className='fiveImgSectionItem'>

            <div className='fiveItemContentSec'>
              <div className='fiveFirstIcon'><GiFruitBowl /></div>
              <div className='fiveItemTextSection'>
                <h3>Artisan Chocolates</h3>
                <p>SIGNATURE · CORPORATE · WEDDING</p>
              </div>
              {/* <div className='fiveLastIcon'><FaArrowRightLong /></div> */}
            </div>

          </div>

          <div className='fiveImgSectionItem'>

            <div className='fiveItemContentSec'>
              <div className='fiveFirstIcon'><GiFruitBowl /></div>
              <div className='fiveItemTextSection'>
                <h3>The Gift House</h3>
                <p>LUXURY BOXES · BESPOKE GIFTING</p>
              </div>
              {/* <div className='fiveLastIcon'><FaArrowRightLong /></div> */}
            </div>

          </div>

          <div className='fiveImgSectionItem'>

            <div className='fiveItemContentSec'>
              <div className='fiveFirstIcon'><GiFruitBowl /></div>
              <div className='fiveItemTextSection'>
                <h3>Gourmet Pantry</h3>
                <p>FRUIT POWDERS · INGREDIENTS</p>
              </div>
              {/* <div className='fiveLastIcon'><FaArrowRightLong /></div> */}
            </div>

          </div>

          <div className='fiveImgSectionItem'>

            <div className='fiveItemContentSec'>
              <div className='fiveFirstIcon'><GiFruitBowl /></div>
              <div className='fiveItemTextSection'>
                <h3>Heritage Collection</h3>
                <p>DESI GHEE · OILS · DAIRY</p>
              </div>
              {/* <div className='fiveLastIcon'><FaArrowRightLong /></div> */}
            </div>

          </div>
          
        </div>
      </div>

      <div className='homeValleys'>

        <h1>The Valleys</h1>
        <p className='headingP'>Editorial storytelling with large-scale photography celebrating heritage and provenance from Pakistan's valleys.</p>

        <div className='valleySection'>
          <div className='vallaySectionLeft'>
            <p className={`${(currentVallayItem == 0)? "active" : ""}`} onClick={()=>setCurrentVallayItem(0)}>Hunza</p>
            <p className={`${(currentVallayItem == 1)? "active" : ""}`} onClick={()=>setCurrentVallayItem(1)}>Gilgit-Baltistan</p>
            <p className={`${(currentVallayItem == 2)? "active" : ""}`} onClick={()=>setCurrentVallayItem(2)}>Balochistan</p>
            <p className={`${(currentVallayItem == 3)? "active" : ""}`} onClick={()=>setCurrentVallayItem(3)}>KPK</p>
            <p className={`${(currentVallayItem == 4)? "active" : ""}`} onClick={()=>setCurrentVallayItem(4)}>Punjab</p>
          </div>

          <div className='vallaySectionRight'>
            <div className='vallayDetailSection'>
              <h6>{vallayItems[currentVallayItem].side}</h6>
              <h3>{vallayItems[currentVallayItem].name}</h3>
              <p>{vallayItems[currentVallayItem].detail}</p>
            </div>
            <div className='vallaySetionRightImg'>
              <div style={{backgroundImage: `url(${vallayItems[currentVallayItem].img})` }}></div>
            </div>
          </div>

        </div>
      </div>


      <div className='homeProductShowcase'>
        <h1>Signature Product Showcase</h1>
        <p className='headingP'>Hand-selected from Pakistan's orchards and valleys. Each product named for its origin, its season, and its singular character.</p>

        <div className='showcaseOItemSec'>

          <div className='showcaseLeftSec'>
            <h4>SIGNATURE HARVEST</h4>
            <p>Each product named for its origin, its season, and its singular character.</p>

            <div className='showcaseLeftSecDiv'>
              <h5 className={currentSignatureProduct == 0? "active" : ""} onClick={()=> setCurrentSignatureProduct(0)}>The Harvest Box</h5>
              <h5 className={currentSignatureProduct == 1? "active" : ""} onClick={()=> setCurrentSignatureProduct(1)}>The Collector's Edition</h5>
              <h5 className={currentSignatureProduct == 2? "active" : ""} onClick={()=> setCurrentSignatureProduct(2)}>The Atelier Parcel</h5>
              <h5 className={currentSignatureProduct == 3? "active" : ""} onClick={()=> setCurrentSignatureProduct(3)}>The Celebration Box</h5>
            </div>

          </div>

          <div className='showcaseRightSec'>
            <div className='showcaseRightSecImg' style={{backgroundImage: `url(${SignatureProductItems[currentSignatureProduct].img})`}}></div>
            <h3>{SignatureProductItems[currentSignatureProduct].heading}</h3>
            <p className='startingP'>{SignatureProductItems[currentSignatureProduct].peragaraph}</p>
            <div className='showcaseRifhtSecBottom'>
              <span>
                <h6>ORIGIN</h6>
                <p>{SignatureProductItems[currentSignatureProduct].origin}</p>
              </span>
              <span>
                <h6>HARVEST</h6>
                <p>2025</p>
              </span>
            </div>
          </div>
           
        </div>
      </div>

      <Testimonial />

      <div className='globelMap'>

        <h1>GLOBAL PRESENCE</h1>
        <p className='headingP'>Eight priority markets where KHOGYAR is building its global house.</p>
        <div className='globelMapImgSec'>
          
        </div>
      </div>


    </div>

    </>
  )
}

export default Home
