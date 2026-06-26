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
                                rating:[4.8, 80], sizes:["2500g", "500g", "1kg"],
                                price:"24$", storage:"Store in a cool and dry place",
                                cookingTime: "40",uses:["Snacking", "Baking", "Smoothies"],
                                features:["100% Natural","Preservative-Free","Clean Ingredients","Premium Quality"],
                                cardParagraph: "Aromatic and spicy Pakistani chicken karahi made with BORI ROOTS Balochi Spice Infused Olive Oil. Rich, flavorful, and authentically spiced."},

                                {
                                  cardImg: img1, cardHeading: "Dried Mango",
                                rating:[4.9, 120], calories:'480', cookingLevel:"Hard", perfectWith:["Naan", "Khamiri Roti", "Lemon"],
                                cookingTime: "180", ingredients: ["1 kg beef shank", "3 tbsp nihari masala", "2 tbsp wheat flour", "1 tbsp ginger-garlic paste", "1/2 cup ghee", "Salt to taste", "Fresh ginger, green chilies for garnish"],
                                numberOfPeople:"", steps:["Heat ghee and fry ginger-garlic paste.","Add beef and nihari masala, brown well.","Add water and slow cook for 2.5 hours.","Mix flour with water and add to thicken.","Garnish with ginger, chilies and fresh coriander."],
                                cardParagraph: "A slow-cooked, deeply aromatic Pakistani beef stew that has warmed mornings for centuries. Meltingly tender with a rich, spiced broth."},

                                {
                                  cardImg: img1, cardHeading: "Dried Banana",
                                rating:[4.9, 210], calories:'520', cookingLevel:"Hard", perfectWith:["Raita","Salad","Chutney"],
                                cookingTime: "90", ingredients: ["1 kg mutton", " 3 cups basmati rice", " 2 onions (fried golden)", "1 cup yogurt", "Whole spices (cloves, cardamom, bay leaves)", "Saffron soaked in milk", "1/2 cup ghee", "Biryani masala"],
                                numberOfPeople:"", steps:["Marinate mutton in yogurt, spices and fried onion for 2 hours.","Parboil rice with whole spices to 70%.","Layer rice and mutton alternately in heavy pot.","Pour saffron milk and ghee on top.","Seal with dough or foil, cook on dum for 40 min."],
                                cardParagraph: "The crown jewel of subcontinental cuisine. Fragrant basmati rice layered with tender mutton, saffron and caramelized onions."},

                                {
                                  cardImg: img1, cardHeading: "Dried Cherry",
                                rating:[4.7, 95], calories:'290', cookingLevel:"Medium", perfectWith:["Naan","Rice","Papadom"],
                                cookingTime: "60", ingredients: ["1 cup black lentils (urad dal)", "1/4 cup kidney beans", "2 tomatoes pureed", "1 tbsp butter", "1 cup cream", "Cumin, garam masala, red chili", "Ginger-garlic paste"],
                                numberOfPeople:"4", steps:["Soak lentils and beans overnight, pressure cook.","Saute ginger-garlic in butter, add tomato puree.","Add spices and cook masala until oil separates.","Add lentils and simmer for 30 min.","Finish with cream and butter."],
                                cardParagraph: "Velvety slow-cooked black lentils enriched with butter and cream. A restaurant classic that belongs on every home table."},

                                {
                                  cardImg: img1, cardHeading: "Dried Melon",
                                rating:[4.8, 175], calories:'380', cookingLevel:"Medium", perfectWith:["Naan","Basmati Rice","Raita"],
                                cookingTime: "50", ingredients: ["800g chicken breast", "1 cup yogurt", "Tikka masala spice blend", "400g crushed tomatoes", "1 cup heavy cream", " 2 onions", "Ginger-garlic paste", "Fresh coriander"],
                                numberOfPeople:"4", steps:["Marinate chicken in yogurt and tikka spices for 2 hours.","Grill or broil chicken until charred.","Saute onions, add ginger-garlic and tomatoes.","Add spices and simmer 15 min.","Add chicken and cream, cook 10 more min."],
                                cardParagraph: "Smoky grilled chicken pieces swimming in a luscious, spiced tomato-cream sauce. A global icon of South Asian flavors."},

                                                ],
    'Fruit Powders':[
                                {
    id: 11,
    cardImg: "greek-moussaka.jpg",
    cardHeading: "Mango Powder",
    rating: [4.8, 112],
    calories: "450",
    cookingTime: "90",
    ingredients: [
      "2 large eggplants",
      "500g ground lamb",
      "2 onions",
      "400g crushed tomatoes",
      "Cinnamon, allspice, nutmeg",
      "BÃ©chamel sauce (butter, flour, milk)",
      "Parmesan cheese"
    ],
    steps: [
      "Slice and salt eggplant, fry until golden.",
      "Cook lamb with onions, tomatoes and spices.",
      "Layer eggplant then meat in baking dish.",
      "Prepare bÃ©chamel and pour over top.",
      "Bake at 180Â°C for 40 min until golden."
    ],
    cardParagraph: "Greece's greatest casserole â€” layers of silky eggplant, spiced lamb and creamy bÃ©chamel baked to golden perfection.",
    numberOfPeople: 6,
    cookingLevel: "Hard",
    perfectWith: ["Greek Salad", "Red Wine", "Crusty Bread"],
    cuisine: "Greek"
  },
  {
    id: 12,
    cardImg: "shakshuka.jpg",
    cardHeading: "Lemon Powder",
    rating: [4.7, 89],
    calories: "280",
    cookingTime: "25",
    ingredients: [
      "6 eggs",
      "400g crushed tomatoes",
      "1 red bell pepper",
      "2 onions",
      "Cumin, paprika, cayenne",
      "Garlic",
      "Fresh parsley",
      "Olive oil"
    ],
    steps: [
      "SautÃ© onions and peppers in olive oil.",
      "Add garlic and spices, cook 2 min.",
      "Pour in tomatoes, simmer 10 min.",
      "Make wells and crack eggs into sauce.",
      "Cover and cook until whites are set. Garnish with parsley."
    ],
    cardParagraph: "Eggs poached in a spiced, vibrant tomato sauce. A North African and Middle Eastern morning ritual that works at any hour.",
    numberOfPeople: 4,
    cookingLevel: "Easy",
    perfectWith: ["Crusty Bread", "Feta Cheese", "Olives"],
    cuisine: "Mediterranean"
  },
  {
    id: 13,
    cardImg: "hummus.jpg",
    cardHeading: "Melon Powder",
    rating: [4.7, 200],
    calories: "180",
    cookingTime: "15",
    ingredients: [
      "2 cans chickpeas",
      "4 tbsp tahini",
      "2 lemons (juice)",
      "3 garlic cloves",
      "Ice cold water",
      "Olive oil",
      "Salt, cumin",
      "Paprika for garnish"
    ],
    steps: [
      "Blend chickpeas with tahini and lemon juice.",
      "Add garlic, salt and cumin.",
      "Drizzle in cold water while blending until super smooth.",
      "Taste and adjust seasoning.",
      "Serve with olive oil, paprika and whole chickpeas."
    ],
    cardParagraph: "The ancient dip that has conquered the world. Silky smooth, lemony, and impossibly easy to make at home â€” far better than store-bought.",
    numberOfPeople: 6,
    cookingLevel: "Easy",
    perfectWith: ["Pita Bread", "Falafel", "Veggies"],
    cuisine: "Lebanese"
  },
  {
    id: 14,
    cardImg: "lamb-kofta.jpg",
    cardHeading: "Watermelon Powder",
    rating: [4.8, 91],
    calories: "340",
    cookingTime: "35",
    ingredients: [
      "500g ground lamb",
      "1 onion (grated)",
      "Parsley, mint",
      "Cumin, paprika, coriander",
      "Greek yogurt, cucumber, dill (for tzatziki)",
      "Garlic",
      "Lemon"
    ],
    steps: [
      "Mix lamb with grated onion, herbs and spices.",
      "Shape into oval patties or cylinders.",
      "Grill on high heat for 4 min per side.",
      "Make tzatziki: yogurt, cucumber, dill, garlic, lemon.",
      "Serve kofta with tzatziki and warm pita."
    ],
    cardParagraph: "Herb-laden spiced lamb patties grilled to juicy perfection, paired with cool, tangy tzatziki. The Mediterranean's favorite street food.",
    numberOfPeople: 4,
    cookingLevel: "Easy",
    perfectWith: ["Pita Bread", "Salad", "Tzatziki"],
    cuisine: "Greek"
  },
  {
    id: 15,
    cardImg: "pasta-alla-norma.jpg",
    cardHeading: "Banana Powder",
    rating: [4.6, 77],
    calories: "390",
    cookingTime: "40",
    ingredients: [
      "400g rigatoni",
      "2 large eggplants",
      "400g crushed tomatoes",
      "4 garlic cloves",
      "Fresh basil",
      "Ricotta salata",
      "Olive oil",
      "Salt, red pepper flakes"
    ],
    steps: [
      "Cube and fry eggplant in olive oil until golden.",
      "SautÃ© garlic, add tomatoes, simmer 20 min.",
      "Cook pasta al dente.",
      "Combine pasta with sauce and eggplant.",
      "Top with torn basil and grated ricotta salata."
    ],
    cardParagraph: "Sicily's operatic pasta. Fried eggplant and sweet tomato sauce crowned with salty ricotta â€” a simple recipe that hits every note perfectly.",
    numberOfPeople: 4,
    cookingLevel: "Easy",
    perfectWith: ["White Wine", "Salad", "Garlic Bread"],
    cuisine: "Italian"
  },
 
   ],
    
    'Snacks':[

        {
    id: 26,
    cardImg: "korean-bibimbap.jpg",
    cardHeading: "Loaded Banana Chips",
    rating: [4.8, 155],
    calories: "430",
    cookingTime: "45",
    ingredients: [
      "2 cups cooked rice",
      "Beef bulgogi (thinly sliced marinated beef)",
      "Spinach, bean sprouts, carrots, mushrooms",
      "Fried egg",
      "Gochujang (red chili paste)",
      "Sesame oil",
      "Soy sauce, garlic"
    ],
    steps: [
      "SautÃ© each vegetable separately with garlic.",
      "Marinate and cook beef in soy, sesame, sugar.",
      "Put rice in hot stone bowl or regular bowl.",
      "Arrange vegetables and beef around the bowl.",
      "Top with fried egg and gochujang, mix before eating."
    ],
    cardParagraph: "Korea's beautiful bowl of contrast and harmony. Mixed rice with vibrant vegetables, spiced beef and a runny egg â€” eat it with a generous swirl of gochujang.",
    numberOfPeople: 2,
    cookingLevel: "Medium",
    perfectWith: ["Kimchi", "Doenjang Jjigae", "Barley Tea"],
    cuisine: "Korean"
  },
  

    ],

    'Customized Chocolate':[
    {
    cardImg: "malaysian-rendang.jpg",
    cardHeading: "Customized Chocolate",
    rating: [4.9, 145],
    calories: "460",
    cookingTime: "150",
    ingredients: [
      "1 kg beef (short rib or chuck)",
      "400ml coconut milk",
      "Lemongrass, galangal, ginger",
      "Kaffir lime leaves",
      "Toasted coconut (kerisik)",
      "Chilies, turmeric",
      "Shallots, garlic"
    ],
    steps: [
      "Blend shallots, garlic, ginger, galangal and chilies.",
      "Fry paste until fragrant.",
      "Add beef and coconut milk.",
      "Simmer until liquid reduces completely â€” can take 2 hours.",
      "Add kerisik and kaffir lime, continue until beef is dark and dry-fried."
    ],
    cardParagraph: "Malaysia and Indonesia's greatest achievement. Beef slow-cooked until the coconut milk has completely absorbed, leaving intensely flavored, caramelized, tender meat.",
    numberOfPeople: 6,
    cookingLevel: "Hard",
    perfectWith: ["Nasi Lemak", "Ketupat", "Acar"],
    cuisine: "Malaysian"
  },
  

    ],

    'Oils':[
            {
    id: 21,
    cardImg: "jamaican-jerk-chicken.jpg",
    cardHeading: "Olive Oil (500ml)",
    rating: [4.9, 195],
    calories: "380",
    cookingTime: "60",
    ingredients: [
      "1 kg chicken pieces",
      "Scotch bonnet peppers",
      "Allspice (pimento)",
      "Thyme, garlic, ginger",
      "Soy sauce, brown sugar",
      "Cinnamon, nutmeg",
      "Green onions",
      "Lime juice"
    ],
    steps: [
      "Blend all jerk marinade ingredients.",
      "Coat chicken deeply and marinate overnight.",
      "Grill over charcoal on low-medium heat.",
      "Cook slow, turning often, 45â€“50 min.",
      "Serve with rice and peas and festival bread."
    ],
    cardParagraph: "Jamaica's fiery, smoky grilled chicken â€” marinated in a complex blend of scotch bonnet and allspice. Addictive beyond reason.",
    numberOfPeople: 4,
    cookingLevel: "Medium",
    perfectWith: ["Rice & Peas", "Festival", "Coleslaw"],
    cuisine: "Jamaican"
  },
  {
    id: 22,
    cardImg: "caribbean-goat-curry.jpg",
    cardHeading: "Olive Oil (750ml)",
    rating: [4.8, 88],
    calories: "420",
    cookingTime: "120",
    ingredients: [
      "1 kg goat meat",
      "Caribbean curry powder",
      "Scotch bonnet pepper",
      "Thyme, garlic, ginger",
      "2 onions",
      "Potato",
      "Coconut milk",
      "Green onions"
    ],
    steps: [
      "Marinate goat in curry powder, garlic and thyme overnight.",
      "Brown in oil with onions.",
      "Add water and scotch bonnet, slow cook 1.5 hours.",
      "Add potato and coconut milk.",
      "Simmer until thick and meat is tender."
    ],
    cardParagraph: "A rich, intoxicating goat curry with deep Caribbean soul. The slow cooking transforms tough goat into something transcendently tender.",
    numberOfPeople: 6,
    cookingLevel: "Hard",
    perfectWith: ["Roti", "Rice", "Plantain"],
    cuisine: "Jamaican"
  },
  
    ],

  

    }

    const allRecipeItemsArray = [... recipeItems['Dried Fruits'], ... recipeItems['Fruit Powders'], ... recipeItems['Snacks'], ... recipeItems['Customized Chocolate'], ... recipeItems['Oils']]

    const [slectedREcipeArreyItems, setSlectedREcipeArreyItems ] = useState(allRecipeItemsArray)

    const [showFullRecipePage, setShowFullRecipePage] = useState(false)
    const [fullRecipeD , setFullRecipeD] = useState({
                                cardImg: img1, cardHeading: "",
                                rating:["",""], sizes:["", "", ""],
                                price:"", storage:"Store in a cool and dry place",
                                cookingTime: "",uses:["Snacking", "Baking", "Smoothies"],
                                features:["","",""],
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
                              <h2>{fullRecipeD.cardHeading}</h2>
                              <div className='rightSideRating'><span><FaStar /></span>{fullRecipeD.rating[0]} - {fullRecipeD.rating[1]} Reviews</div>
                              <p className='rightSidePrice'>Price:<span>{fullRecipeD.price}</span></p>
                                <div className='rightSideSizeofItem'>
                                  <p>Size:</p>
                                  {fullRecipeD.sizes.map((item, index)=>{
                                    return(
                                      <span key={index}>{item}</span>
                                    )
                                  })}
                                </div>
                              <p className='rightSideMainP'>{fullRecipeD.cardParagraph}</p>
                              <div className='MobileViewImg'></div>
                              <div className='rightSideFeatures'>
                                
                                    <div>
                                      <span><GoSun /></span>
                                      <p>{fullRecipeD.features[0]}</p>
                                    </div>

                                    <div>
                                      <span><BsStars /></span>
                                      <p>{fullRecipeD.features[1]}</p>
                                    </div>

                                    <div>
                                      <span><FaCanadianMapleLeaf /></span>
                                      <p>{fullRecipeD.features[2]}</p>
                                    </div>

                                    <div>
                                      <span><MdWorkspacePremium  /></span>
                                      <p>{fullRecipeD.features[3]}</p>
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
