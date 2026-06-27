import React, { useEffect, useState } from 'react'
import './recipe.css'
import { HiMiniRectangleGroup } from 'react-icons/hi2'
import { IoIosSunny } from 'react-icons/io'
import { MdLunchDining, MdWorkspacePremium } from 'react-icons/md'
import { GiCampCookingPot, GiCook, GiHotMeal, GiMeal, GiSandsOfTime } from 'react-icons/gi'
import { LuSalad } from 'react-icons/lu'
import { TbSaladFilled, TbSoupFilled } from 'react-icons/tb'
import { FaCanadianMapleLeaf, FaFire, FaStar, FaWhatsapp } from 'react-icons/fa'
import { TiArrowLeftThick } from 'react-icons/ti'
import img1 from '../../assets/chocolet.png'
// import img2 from '../../assets/Beef_NihariImg.png'
import recipePageBgImg1 from './recipeheroBgImg1.png'
import recipePageBgImg2 from './recipeheroBgImg2.png'
import recipePageBgImg3 from './recipeheroBgImg3.png'

 

import { RiGroupLine } from 'react-icons/ri'
import { LiaWalletSolid } from 'react-icons/lia'
import { GoSun } from 'react-icons/go'
import { BsStars } from 'react-icons/bs'
function Recipe() {

    const recipeItems = {
    'Dried Fruits':[
                                {cardImg: img1, cardHeading: "Dried Strawberry",
                                rating:[4.8, 80], sizes:[["1200","250g"], ["2300","500g"], ["4100","1kg"]],
                                price:"24$",
                                cardParagraph: "Naturally sweet, vibrant, and rich in antioxidants, our dried strawberries are carefully dehydrated to preserve their fresh flavor with no added preservatives or artificial ingredients."},

                                {
                                  cardImg: img1, cardHeading: "Dried Mango",
                                rating:[4.9, 120], sizes:[["1100","250g"], ["2200","500g"], ["4300","1kg"]],
                                cardParagraph: "Enjoy the tropical sweetness of premium dried mango slices, packed with vitamins, fiber, and natural goodness for a delicious and healthy everyday snack."},
                                {
                                  cardImg: img1, cardHeading: "Dried Banana",
                                rating:[4.9, 210], sizes:[["1300","250g"], ["2300","500g"], ["4000","1kg"]],
                                cardParagraph: "Enjoy the tropical sweetness of premium dried mango slices, packed with vitamins, fiber, and natural goodness for a delicious and healthy everyday snack."},

                                {
                                  cardImg: img1, cardHeading: "Dried Cherry",
                                rating:[4.7, 95], sizes:[["1000","250g"], ["2100","500g"], ["3800","1kg"]],
                                cardParagraph: "Bursting with rich, tangy sweetness, our dried cherries are carefully prepared to retain their nutrients and make a perfect healthy snack anytime."},

                                {
                                  cardImg: img1, cardHeading: "Dried Kiwi",
                                rating:[4.8, 175], sizes:[["1100","250g"], ["2250","500g"], ["4000","1kg"]],
                                cardParagraph: "A refreshing balance of sweet and tangy flavors, our dried kiwi offers a naturally delicious source of fiber, vitamin C, and essential nutrients."},

                                {
                                  cardImg: img1, cardHeading: "Dried Melon",
                                rating:[4.8, 175], sizes:[["1050","250g"], ["2250","500g"], ["4350","1kg"]],
                                cardParagraph: "Soft, naturally sweet dried melon slices made from premium fruits, carefully dried to preserve their refreshing taste and nutritional value."},

                                                ],
    'Fruit Powders':[
                                {
    id: 11,
    cardImg: "greek-moussaka.jpg",
    cardHeading: "Mango Powder",
    rating: [4.7, 89],
    sizes:[["0","250g"], ["0","500g"], ["0","1kg"]],
    cardParagraph: "Made from premium ripe mangoes, this finely ground powder delivers authentic fruity flavor, perfect for smoothies, desserts, baking, and healthy recipes."
 
    
  },
  {
    id: 12,
    cardImg: "shakshuka.jpg",
    cardHeading: "Lemon Powder",
    rating: [4.7, 89],
    sizes:[["0","250g"], ["0","500g"], ["0","1kg"]],
    cardParagraph: "Pure lemon powder with a refreshing citrus taste, ideal for beverages, cooking, baking, and seasoning without artificial additives or preservatives."
 
    
  },
  {
    id: 13,
    cardImg: "hummus.jpg",
    cardHeading: "Melon Powder",
    rating: [4.7, 200],
    sizes:[["0","250g"], ["0","500g"], ["0","1kg"]],
    cardParagraph: "A naturally sweet fruit powder made from fresh melons, perfect for smoothies, desserts, yogurt, and nutritious everyday recipes."
    
   
  },
  {
    id: 14,
    cardImg: "lamb-kofta.jpg",
    cardHeading: "Watermelon Powder",
    rating: [4.8, 91],
    sizes:[["0","250g"], ["0","500g"], ["0","1kg"]],
    cardParagraph: "Crafted from fresh watermelon, this vibrant fruit powder adds refreshing natural flavor and nutrition to drinks, desserts, and healthy meals."
  
    
  },
  {
    id: 15,
    cardImg: "pasta-alla-norma.jpg",
    cardHeading: "Banana Powder",
    rating: [4.6, 77],
    sizes:[["0","250g"], ["0","500g"], ["0","1kg"]],
    cardParagraph: "Smooth, naturally sweet banana powder packed with essential nutrients, ideal for shakes, baby food, baking, and wholesome recipes."
 
    
  },
 
   ],
    
    'Snacks':[

        {
    id: 26,
    cardImg: "korean-bibimbap.jpg",
    cardHeading: "Loaded Banana Chips",
    rating: [4.8, 155],
    sizes:[["0","250g"], ["0","500g"], ["0","1kg"]],
    cardParagraph: "Crispy banana chips coated with delicious flavors for the perfect balance of crunch and taste, making every bite irresistibly satisfying."
    
   
  },
  

    ],

    'Customized Chocolate':[
    {
    cardImg: "malaysian-rendang.jpg",
    cardHeading: "Customized Chocolate",
    rating: [4.9, 145],
    sizes:[["0","250g"], ["0","500g"], ["0","1kg"]],
    cardParagraph: "Create your perfect chocolate with premium ingredients, personalized flavors, and custom toppings for a truly unique and memorable sweet experience."

   
  },
  

    ],

    'Oils':[
            {
    id: 21,
    cardImg: "jamaican-jerk-chicken.jpg",
    cardHeading: "Olive Oil (500ml)",
    rating: [4.9, 195],
    sizes:[["0","250g"], ["0","500g"], ["0","1kg"]],
    cardParagraph: "Cold-pressed extra virgin olive oil with a rich aroma and smooth flavor, perfect for cooking, salads, and supporting a healthy lifestyle."
   
   
  },
  {
    id: 22,
    cardImg: "caribbean-goat-curry.jpg",
    cardHeading: "Olive Oil (750ml)",
    rating: [4.8, 88],
    sizes:[["0","250g"], ["0","500g"], ["0","1kg"]],
    cardParagraph: "Premium extra virgin olive oil carefully extracted to preserve its natural nutrients, delivering exceptional taste and quality in every drop."
 
  },
  
    ],

  

    }
    const[currentItemPrice,setCurrentItemPrice] = useState(0)

    const allRecipeItemsArray = [... recipeItems['Dried Fruits'], ... recipeItems['Fruit Powders'], ... recipeItems['Snacks'], ... recipeItems['Customized Chocolate'], ... recipeItems['Oils']]

    const [slectedREcipeArreyItems, setSlectedREcipeArreyItems ] = useState(allRecipeItemsArray)

    const [showFullRecipePage, setShowFullRecipePage] = useState(false)
    const [fullRecipeD , setFullRecipeD] = useState({
                                cardImg: img1, cardHeading: "",
                                rating:["",""], sizes:[["0","250g"], ["0","500g"], ["0","1kg"]],
                                 uses:["Snacking", "Baking", "Smoothies"],
                                cardParagraph: ""})
    
    const [slectedRecipeCategory,setSlectedRecipeCategory] = useState('All Products')
    const [recipeHeroSectionPageBgImg, setRecipeHeroSectionPageBgImg] = useState(0)
    const heroImgsArray = [recipePageBgImg1 , recipePageBgImg2, recipePageBgImg3, recipePageBgImg2]

     useEffect(() => {
    const interval = setInterval(() => {
      setRecipeHeroSectionPageBgImg((prev) => (prev + 1) % heroImgsArray.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='recipe'>

      

        <div className= {`ShowFulldetail ${showFullRecipePage? "showFullRecipePage" : ""}`}  onClick={()=> setShowFullRecipePage(false)}>
                    {/* <div className='gobackButton' ><TiArrowLeftThick /></div> */}
                    <div className='recipeSec' >
                        {/* <h1 className='articalHeading startingH1tag'>{fullarticalD.cardHeading}</h1> */}
                        
                        <div  className='recipeDetails' onClick={(e)=>  e.stopPropagation()}>

                            <div className='detailSectionLeftSide'>
                              <div className='leftSideMainImg'></div>
                              {/* <div className='leftSideImgOptions'>
                                <span></span>
                                <span></span>
                                <span></span>
                              </div> */}
                            </div>

                            <div className='detailSectionRightSide'>
                              <div className='MobileViewImg'></div>
                              <h2>{fullRecipeD.cardHeading}</h2>
                              <div className='rightSideRating'><span><FaStar /></span>{fullRecipeD.rating[0]} - {fullRecipeD.rating[1]} Reviews</div>
                              <p className='rightSidePrice'>Price:<span>{fullRecipeD.sizes[currentItemPrice][0]}$</span></p>
                                <div className='rightSideSizeofItem'>
                                  <p>Size:</p>
                                  {fullRecipeD.sizes.map((item, index)=>{
                                    return(
                                      <span className={`${index == currentItemPrice? "active" : ""}`} key={index} onClick={()=>setCurrentItemPrice(index)}>{item[1]}</span>
                                    )
                                  })}
                                </div>
                              <p className='rightSideMainP'>{fullRecipeD.cardParagraph}</p>
                              
                              <div className='rightSideFeatures'>
                                
                                    <div>
                                      <span><GoSun /></span>
                                      <p>100% Natural</p>
                                    </div>

                                    <div>
                                      <span><BsStars /></span>
                                      <p>Premium Quality</p>
                                    </div>

                                    <div>
                                      <span><FaCanadianMapleLeaf /></span>
                                      <p>Preservative-Free</p>
                                    </div>

                                    <div>
                                      <span><MdWorkspacePremium  /></span>
                                      <p>Quality Assured</p>
                                    </div>
                                  
                              </div>
                            </div>

                        </div>

                        
                        
                    </div>
          </div>

      <div className='recipeHeroSec'>

        {/* <div className='recipeHeroSecImg' style={{backgroundImage: `url(${heroImgsArray[recipeHeroSectionPageBgImg]})`}}> */}
        <div className='recipeHeroSecImg'>
          {heroImgsArray.map((img, index) => (
            <div key={index}  className={`slide ${  index === recipeHeroSectionPageBgImg ? "active" : ""    }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        <div className='herosecHeading'>
            <h1 className='startingH1tag'>Eat Well, Live Well</h1>
            
            <p className='ptagAfterH1tag'>
                Discover nutrient-packed products that are good for your body, mind and soul.
            </p>
            <button>Contact US →</button>
            <div className='herheadindClintShowcaseSec'>
                <div className='imgSecofClinte'>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <p>Happy Healthy Eaters 50K+</p>
            </div>
        </div>

      </div>

      <div className='recipeBody'>
        <p className='catrgoryP'>Categories</p>

        <div className='categorySec'>

            <div className ={`categoryBtn ${(slectedRecipeCategory == "All Products")? 'activeBtn': ""}`} onClick={()=> {setSlectedRecipeCategory("All Products"); setSlectedREcipeArreyItems(allRecipeItemsArray)}}> 
                {/* <div><HiMiniRectangleGroup /> </div> */}
                <p>All Products</p>
            </div>

            <div className={`categoryBtn ${(slectedRecipeCategory == "Dried Fruits")? 'activeBtn': ""}`} onClick={()=> {setSlectedRecipeCategory("Dried Fruits"); setSlectedREcipeArreyItems(recipeItems['Dried Fruits'])}}> 
                {/* <div><IoIosSunny /> </div> */}
                <p>Dried Fruits</p>
            </div>
            

            <div className={`categoryBtn ${(slectedRecipeCategory == "Fruit Powders")? 'activeBtn': ""}`} onClick={()=> {setSlectedRecipeCategory("Fruit Powders"); setSlectedREcipeArreyItems(recipeItems['Fruit Powders'])}}> 
                {/* <div><GiHotMeal /> </div> */}
                <p>Fruit Powders</p>
            </div>

            <div className={`categoryBtn ${(slectedRecipeCategory == "Snacks")? 'activeBtn': ""}`} onClick={()=> {setSlectedRecipeCategory("Snacks"); setSlectedREcipeArreyItems(recipeItems['Snacks'])}}> 
                {/* <div><GiHotMeal /> </div> */}
                <p>Snacks</p>
            </div>

            <div className={`categoryBtn ${(slectedRecipeCategory == "Customized Chocolate")? 'activeBtn': ""}`} onClick={()=> {setSlectedRecipeCategory("Customized Chocolate"); setSlectedREcipeArreyItems(recipeItems['Customized Chocolate'])}}> 
                {/* <div><GiHotMeal /> </div> */}
                <p>Customized Chocolate</p>
            </div>

            <div className={`categoryBtn ${(slectedRecipeCategory == "Oils")? 'activeBtn': ""}`} onClick={()=> {setSlectedRecipeCategory("Oils"); setSlectedREcipeArreyItems(recipeItems['Oils'])}}> 
                {/* <div><GiHotMeal /> </div> */}
                <p>Oils</p>
            </div>

        </div>

        <div className='slectedCategory'>
            <div>
                <span><HiMiniRectangleGroup /> </span>
                <h3>{slectedRecipeCategory}</h3>
            </div>
            
            <p>{slectedREcipeArreyItems.length } recipes found</p>
        </div>

        <div className='recipeItemsSec'>
            
            {slectedREcipeArreyItems.map((item,index) => {
                return(

                  <div className='recipeItem'>
                    <div className='recipeItemCornerDot'></div>
                    <div className='recipeItemCornerDot'></div>
                    <div className='recipeItemCornerDot'></div>
                    <div className='recipeItemCornerDot'></div>

                    <div className='itemImg'></div>

                    <div className='itemDetalSec'>

                      <h4>{item.cardHeading}</h4>

                      <div className='itemReview'>
                        <div className='iconDiv'>
                          <FaStar /> <span>{item.rating[0]} {`(${item.rating[1]})`}</span>
                        </div>
                      </div>

                      <div className='btnSec'>
                        <button onClick={()=>{setShowFullRecipePage(true); setFullRecipeD(item)}}>Item Details</button>
                      </div>
                    </div>
                
                  </div>
                )
            })}
            

            

        </div>

        
      </div>
    </div>
  )
}

export default Recipe
