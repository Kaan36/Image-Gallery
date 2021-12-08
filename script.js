const imageStorage = [{ img: 'img/01.jpg', favorite: false }, { img: 'img/02.jpg', favorite: false }, { img: 'img/03.jpg', favorite: false }, { img: 'img/04.jpg', favorite: false }, { img: 'img/05.jpg', favorite: false }, { img: 'img/06.jpg', favorite: false }, { img: 'img/07.jpg', favorite: false }, { img: 'img/08.jpg', favorite: false }, { img: 'img/09.jpg', favorite: false }, { img: 'img/10.jpg', favorite: false }, { img: 'img/11.jpg', favorite: false }];


const gallery = document.querySelector('[data-image-container]');
const logo = document.querySelector('[data-header-logo]');
const windowFavorites = document.querySelector('[data-window-favorites]');
const fullScreenMode = document.querySelector('[data-full-screen]');
const closeButton = document.querySelector('[data-close]');

//------- first start ------//
render();

// ----------------- start rendering the images --------------//
function render() {
    renderImages();
    renderFavorites();
};


closeButton.addEventListener('click', () => {
    gallery.classList.remove('d-none');
    fullScreenMode.classList.add('d-none');
})

//-------------------------- start fullScreenMode from gallery ---------------//
gallery.addEventListener('click', el => {
    if (el.target.tagName.toLowerCase() === 'button') {
       
        const currentImage = imageStorage.filter(image => image.img === el.target.dataset.btnFullScreenSrc);
        const currentText = currentImage[0].img;
        //------ check-control currentImage number and convert from string to type number ----------//
        let result = currentText.slice(4, 6);
        let resultCheck1 = Number(result.slice(0, 1));
        if(resultCheck1 === 0){
            current = Number(result.slice(1, 2));
        } else {
            current = result;
        }
        startSlide();
        FullScreenMode();
    }

})

//-------------------------- start fullScreenMode from favorites ---------------//
windowFavorites.addEventListener('click', el => {
    if (el.target.tagName.toLowerCase() === 'button') {
        const currentImage = imageStorage.filter(image => image.img === el.target.dataset.btnFullScreenSrc);
        const currentText = currentImage[0].img;
        //------ check-control currentImage number and convert from string to type number ----------//
        let result = currentText.slice(4, 6);
        let resultCheck1 = Number(result.slice(0, 1));
        if(resultCheck1 === 0){
            current = Number(result.slice(1, 2));
        } else {
            current = result;
        }
        startSlide();
        FullScreenMode();
    }
})


// ----------------------- open the slide bar for favorite images ----------------- //
logo.addEventListener('click', () => {
    if (windowFavorites.dataset.status === 'off') {
        windowFavorites.classList.add('transform-favorites');
        windowFavorites.dataset.status = 'on';
    } else {
        windowFavorites.classList.remove('transform-favorites');
        windowFavorites.dataset.status = 'off';
    }

})

// --------------------- checked that the clicked element-tag are from type 'img' and change the dataset.favorite = true;  ---------------//
gallery.addEventListener('click', el => {
    if (el.target.tagName.toLowerCase() === 'img') {
        el.target.dataset.favorite = true;

        //------------ checked the imageStorage by clicked object.target and change obj.favorite = true; --------/
        imageStorage.forEach(obj => {
            if (obj.img === el.target.getAttribute('src') && obj.favorite === false) {
                obj.favorite = true;
            } else if (obj.img === el.target.getAttribute('src') && obj.favorite === true) {
                obj.favorite = false;
            }
        });
        render();
    }
    return

})

//---------------------- open FullScreenMode -------------------//
function FullScreenMode() {
    gallery.classList.add('d-none');
    fullScreenMode.classList.remove('d-none');
}


//--------------------------------- render images in favoritesArray -----------------------//
function renderFavorites() {

    windowFavorites.innerHTML = '';
    imageStorage.forEach(favObject => {
        if (favObject.favorite === true) {
            let div = document.createElement('div');
            div.classList.add('imageBox');
            let image = document.createElement('img');
            image.src = `${favObject.img}`;
            div.append(image);
            let divInside = document.createElement('button');
            divInside.dataset.btnFullScreen = false;
            divInside.dataset.btnFullScreenSrc = favObject.img;
            divInside.classList.add('btn-full-screen');
            div.append(divInside);
            windowFavorites.append(div);
        }

    })

}

// --------------------------- render images in main container --------------------------//
function renderImages() {
    gallery.innerHTML = '';
    imageStorage.forEach(imgObject => {
        let div = document.createElement('div');
        div.classList.add('imageBox');
        let image = document.createElement('img');
        image.src = `${imgObject.img}`;
        image.dataset.favorite = false;
        div.append(image)
        let divInside = document.createElement('button');
        divInside.dataset.btnFullScreen = false;
        divInside.dataset.btnFullScreenSrc = imgObject.img;
        divInside.classList.add('btn-full-screen');
        div.append(divInside);
        if (imgObject.favorite === true) {
            div.classList.add('favorite');
        }
        gallery.append(div);
    })

}




