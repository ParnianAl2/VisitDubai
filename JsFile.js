' use strict '

const show_window = setTimeout (() => {
    document.querySelector('.window').classList.add('window_active')
},3000)

const close_window = document.querySelector('.close_window') 
close_window.addEventListener('click' , () => {
    document.querySelector('.window').classList.remove('window_active')
})
 
const suggestsPart = document.querySelectorAll('.categories_suggest>div') 
const categoryButtons = document.querySelectorAll('.categories_sectionFour ul li')
categoryButtons.forEach(button => {
    button.addEventListener('click' , () => {
        categoryButtons.forEach (item => {
            item.querySelector('div').classList.remove('activeBtn')
        })
        button.querySelector('div').classList.add('activeBtn')
        const selected = button.textContent.trim() ;
        if (selected === "All" || selected === "Sights & Attraction") {
            suggestsPart[0].querySelector('.image_container_sectionFour>div:nth-child(1) div').style.backgroundImage ="url('assets/image/male-skier-skiing-downhill-trough-deep-snow-mountains.jpg')"
            suggestsPart[1].querySelector('.image_container_sectionFour>div:nth-child(1) div').style.backgroundImage ="url('assets/image/portrait-woman-visiting-luxurious-city-dubai.jpg')"
            suggestsPart[2].querySelector('.image_container_sectionFour>div:nth-child(1) div').style.backgroundImage ="url('assets/image/dario-ciraulo-W2rJ3RaCBxw-unsplash.jpg')"
            suggestsPart[0].querySelectorAll('span')[0].textContent = "Sights & Attractions" ;
            suggestsPart[1].querySelectorAll('span')[0].textContent = "Sights & Attractions" ;
            suggestsPart[2].querySelectorAll('span')[0].textContent = "Shopping" ;
            suggestsPart[0].querySelector('h3').textContent = "Ski Dubai"
            suggestsPart[1].querySelector('h3').textContent = "At The Top,Burj Khalifa"
            suggestsPart[2].querySelector('h3').textContent = "Dubai Mall"
            suggestsPart[0].querySelectorAll('span')[1].textContent = "Play in the snow and go skiiing in Dubai"
            suggestsPart[1].querySelectorAll('span')[1].textContent = "Enjoy the highest view of Dubai from up to 555 metres in the sky"
            suggestsPart[2].querySelectorAll('span')[1].textContent = "The world's largest shopping, entertainment and leisure destination"
        }
        else if (selected === "Adventure") {
            suggestsPart[0].querySelector('.image_container_sectionFour>div:nth-child(1) div').style.backgroundImage ="url('assets/image/radek-skrzypczak-MrzxlFtcaTA-unsplash.jpg')"
            suggestsPart[1].querySelector('.image_container_sectionFour>div:nth-child(1) div').style.backgroundImage ="url('assets/image/ivo-lukacovic-0Ta4jVOTA_g-unsplash.jpg')"
            suggestsPart[2].querySelector('.image_container_sectionFour>div:nth-child(1) div').style.backgroundImage ="url('assets/image/igor-sporynin-wDftb1C5hu4-unsplash.jpg')"
            for(let i=0 ; i<3 ; i++)
                suggestsPart[i].querySelectorAll('span')[0].textContent = "Adventure" ;
            suggestsPart[0].querySelector('h3').textContent = "Tour Dubai"
            suggestsPart[1].querySelector('h3').textContent = "TFT Aero"
            suggestsPart[2].querySelector('h3').textContent = "Balloon Adventure Dubai"
            suggestsPart[0].querySelectorAll('span')[1].textContent = "High quality, well-organised group tours of the city"
            suggestsPart[1].querySelectorAll('span')[1].textContent = "Soar above the city in a virtual plane"
            suggestsPart[2].querySelectorAll('span')[1].textContent = "Rise above the desert with a hot air balloon adventure"

        }
        else if (selected === "Art & Culture") {
            suggestsPart[0].querySelector('.image_container_sectionFour>div:nth-child(1) div').style.backgroundImage ="url('assets/image/redd-francisco-c7xBEFBJhkg-unsplash.jpg')"
            suggestsPart[1].querySelector('.image_container_sectionFour>div:nth-child(1) div').style.backgroundImage ="url('assets/image/abdul-raheem-kannath-WWPz9kQR6VA-unsplash.jpg')"
            suggestsPart[2].querySelector('.image_container_sectionFour>div:nth-child(1) div').style.backgroundImage ="url('assets/image/ayush-pappini-fADoaDp1KEk-unsplash.jpg')"
            for (let i=0 ; i<3 ; i++)
                suggestsPart[i].querySelectorAll('span')[0].textContent = "Art & culture" ;
            suggestsPart[0].querySelector('h3').textContent = "Theatre of Digital Art"
            suggestsPart[1].querySelector('h3').textContent = "Saruq AI-Hadid Museum"
            suggestsPart[2].querySelector('h3').textContent = "The Courtyard"
            suggestsPart[0].querySelectorAll('span')[1].textContent = "See the works of celebrated artists like never before"
            suggestsPart[1].querySelectorAll('span')[1].textContent = "Unlock the mysteries of the Iron Age at this interactive museum"
            suggestsPart[2].querySelectorAll('span')[1].textContent = "A creative hub with a gallery, theatre, café and boutiques"
        }
        else if (selected === "Spas"){
            suggestsPart[0].querySelector('.image_container_sectionFour>div:nth-child(1) div').style.backgroundImage ="url('assets/image/nelemson-guevarra-NW4-snJoZTs-unsplash.jpg')"
            suggestsPart[1].querySelector('.image_container_sectionFour>div:nth-child(1) div').style.backgroundImage ="url('assets/image/katalin-salles-Cv_C0UFyt74-unsplash.jpg')"
            suggestsPart[2].querySelector('.image_container_sectionFour>div:nth-child(1) div').style.backgroundImage ="url('assets/image/chaps-co-BX8OTlmHOaI-unsplash.jpg')"
            for (let i=0 ; i<3 ; i++)
                suggestsPart[i].querySelectorAll('span')[0].textContent = "Spas" ;
            suggestsPart[0].querySelector('h3').textContent = "The Westin Dubai Mina Seyahi"
            suggestsPart[1].querySelector('h3').textContent = "Sohum Wellness Sanctuart"
            suggestsPart[2].querySelector('h3').textContent = "Blended Wellness"
            suggestsPart[0].querySelectorAll('span')[1].textContent = "A neoclassical-style 5-star beach resort overlooking the Arabian Gulf"
            suggestsPart[1].querySelectorAll('span')[1].textContent = "A peaceful space to unwind, recharge and treat yourself"
            suggestsPart[2].querySelectorAll('span')[1].textContent = "A complete wellness destination offering health, fitness and beauty solutions"
        }
        else if (selected === "Entertainment"){
            suggestsPart[0].querySelector('.image_container_sectionFour>div:nth-child(1) div').style.backgroundImage ="url('assets/image/albert-hyseni-u_4_e9-UPBw-unsplash.jpg')"
            suggestsPart[1].querySelector('.image_container_sectionFour>div:nth-child(1) div').style.backgroundImage ="url('assets/image/myles-tan-WNAO036c6FM-unsplash.jpg')"
            suggestsPart[2].querySelector('.image_container_sectionFour>div:nth-child(1) div').style.backgroundImage ="url('assets/image/pexels-duren-williams-29414623-22814094.jpg')"
            for (let i=0 ; i<3 ; i++)
                suggestsPart[i].querySelectorAll('span')[0].textContent = "Entertainment" ;
            suggestsPart[0].querySelector('h3').textContent = "GLITCH"
            suggestsPart[1].querySelector('h3').textContent = "Oli Oli"
            suggestsPart[2].querySelector('h3').textContent = "AYA"
            suggestsPart[0].querySelectorAll('span')[1].textContent = "An indoor entertainment centre for all ages"
            suggestsPart[1].querySelectorAll('span')[1].textContent = "Learn with fun at this interactive play museum for kids"
            suggestsPart[2].querySelectorAll('span')[1].textContent = "Enjoy a unique and immersive entertainment experience"
        }
    })
})

const Part = document.querySelector('.slider')
window.addEventListener('scroll',() => {
    let trigger = (window.innerHeight/5)*3
    let PartTop=Part.getBoundingClientRect().top 
    if (trigger>PartTop){
        const divs = Part.querySelectorAll('.slider>div') ;
        divs.forEach((div,c) => {
            setTimeout(() => {
                div.classList.add('show')
            },c*400)
        })
    }
})
const categories_part = document.querySelector('.categories_suggest')
window.addEventListener('scroll' , () => {
    let trigger=(window.innerHeight/5)*4 
    let categories_part_top =categories_part.getBoundingClientRect().top 
    if (trigger>categories_part_top) {
        const divs = categories_part.querySelectorAll('.categories_suggest>div')
        divs.forEach((div,c) => {
            setTimeout(() => {
                div.classList.add('show')
            },c*400)
        })
    }
})
const titles = document.querySelectorAll('.sectionTwo h1 , .sectionThree h1 , .sectionFour h1 , .categories_sectionFour>ul')
window.addEventListener('scroll' , () => {
    let trigger = (window.innerHeight/5)*4 
    titles.forEach(title => {
        let titleTop = title.getBoundingClientRect().top
        if (trigger>titleTop){
            setTimeout(() => {
                title.classList.add('show')
            },50)
        }
    })
})

const sectionThree_Part = document.querySelector('.sectionThree_main') 
window.addEventListener('scroll' , () => {
    let trigger = (window.innerHeight/5)*4
    let sectionThree_Part_Top = sectionThree_Part.getBoundingClientRect().top 
    if(trigger>sectionThree_Part_Top) {
        setTimeout(() => {
            sectionThree_Part.classList.add('show')
        },400)
    }
})

const slides =document.querySelectorAll('.sectionFive_slider>div')
const prevBtn = document.querySelector('.prev_btn')
const nextBtn = document.querySelector('.next_btn')
let countSlide = 0
nextBtn.addEventListener('click' , slideToNext)
function slideToNext(){
    countSlide = (countSlide+1) % slides.length
    changeSlide()
    resetTime()
}
prevBtn.addEventListener('click' , slideToPrev)
function slideToPrev(){
    if (countSlide == 0) {
        countSlide=slides.length -1 
    }
    else {
        countSlide-- 
    }
    changeSlide()
    resetTime()
}
function changeSlide() {
    for (let i =0 ; i<slides.length ; i++){
        slides[i].classList.remove('active')
    }
    slides[countSlide].classList.add('active')
}
function resetTime(){
    clearInterval(timer)
    timer = setInterval(slideToNext,3000)
}
let timer = setInterval(slideToNext,3000)

const weatherHolder = document.querySelector('.weather_holder') ;
(async () => {
    try {
        const res = await fetch('https://open-weather13.p.rapidapi.com/city?city=Dubai&lang=EN', {
            method: 'GET',
	        headers: {
                'x-rapidapi-key': 'ed8843ea39msh8dd60ae25f984c8p1eda55jsn1992cfebd961',
                'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	        }   
        })
        const data = await res.json()
        console.log(data);
        weatherHolder.innerHTML = `<div>
                <h1>${data.main.temp}°</h1>
                <p>${data.weather[0].main}</p>
            </div>
            <div>
                <ul>
                    <li>
                        <p>feels like</p>
                        <p>${data.main.feels_like}</p>
                    </li>
                    <li>
                        <p>sunrise</p>
                        <p>${data.sys.sunrise}</p>
                    </li>
                    <li>
                        <p>sunset</p>
                        <p>${data.sys.sunset}</p>
                    </li>
                    
                    <li>
                        <p>wind speed</p>
                        <p>${data.wind.speed}</p>
                    </li>
                    <li>
                        <p>humidity</p>
                        <p>${data.main.humidity}</p>
                    </li>
                    <li>
                        <p></p>
                        <p></p>
                    </li>
                    
                </ul>
                <a href="#">Learn more</a>
            </div>`
    }
    catch (error) {
        console.log(error);
    }
})()

const Menu = document.querySelector('.berger_menu')
const scndMenu = document.querySelector('.show_berger_menu')

function openMenu() {
    scndMenu.classList.toggle('activeMenu')
}
Menu.addEventListener('click', openMenu) 




