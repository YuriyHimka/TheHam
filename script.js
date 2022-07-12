// Our Services
const serviceImages = [
    'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849821_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/12/14/10/23/sea-3874707__340.jpg',
    'https://cdn.pixabay.com/photo/2022/06/12/17/39/stairs-7258531__340.jpg',
    'https://cdn.pixabay.com/photo/2022/06/18/18/05/skateboard-7270418__480.jpg',
    'https://cdn.pixabay.com/photo/2021/12/10/16/04/bellflower-6860818__480.jpg',
    'https://cdn.pixabay.com/photo/2020/03/27/08/45/stone-lotus-4972881__480.jpg'
]

const serviceTabItems = document.querySelectorAll('#services .tab__item'),
      tabParent = document.querySelector('#services .tab__items'),
      content = document.querySelectorAll('.service__content');

const hideContent = () => {
    content.forEach(item => {
        item.style.display = 'none'
    })

    serviceTabItems.forEach(tab => {
        tab.classList.remove('active');
    })
}

const showTabContent = (index = 0) => {
    content[index].style.display = 'flex';
    serviceTabItems[index].classList.add('active');

    const contentImage = document.querySelectorAll('.service__content-image')
    contentImage.forEach(item => {
        item.style.backgroundImage = `url(${serviceImages[index]})`
    })
}

hideContent()
showTabContent()

tabParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('tab__item')) {
        serviceTabItems.forEach((item, index) => {
            if (target === item) {
                hideContent();
                showTabContent(index);
            }
        })
    }
})


//Portfolio
const portfolioImages = [

    {
        data: 'graphic_design',
        src: 'https://cdn.dribbble.com/users/1207383/screenshots/6292227/abstract-poster-atgc_4x.jpg'
    }, {
        data: 'web_design',
        src: 'https://cdn.dribbble.com/users/1121823/screenshots/4651311/media/ecbcd9384134c080e140c95c7671a2d8.png'
    }, {
        data: 'web_design',
        src: 'https://cdn.dribbble.com/users/1595195/screenshots/3941817/media/bfe0db968bf9fd7557e03121f69949d5.jpg'
    }, {
        data: 'landing_page',
        src: 'https://cdn.dribbble.com/users/1316608/screenshots/3997889/attachments/921000/space_3_big.jpg'
    }, {
        data: 'graphic_design',
        src: 'https://cdn.dribbble.com/users/1207383/screenshots/3620970/media/ae14ccd098bc150846d9d94c06153ad1.png'
    }, {
        data: 'landing_page',
        src: 'https://cdn.dribbble.com/users/1207383/screenshots/15006174/media/c8ed3581240075daa65d557a199005cc.jpg'
    }, {
        data: 'web_design',
        src: 'https://cdn.dribbble.com/users/1207383/screenshots/15051035/media/24e451b95b4145c075cf92c5ec462e45.png'
    }, {
        data: 'graphic_design',
        src: 'https://cdn.dribbble.com/users/16774/screenshots/4024283/tripod-lamp.png'
    }, {
        data: 'landing_page',
        src: 'https://cdn.dribbble.com/users/2417352/screenshots/7018961/media/21122635901892c8e73574ca8c002b96.png'
    }, {
        data: 'graphic_design',
        src: 'https://cdn.dribbble.com/users/1595195/screenshots/5680121/media/3a04939979c740132f39a646ad2bd546.jpg'
    }, {
        data: 'web_design',
        src: 'https://cdn.dribbble.com/users/1207383/screenshots/6005569/media/fd68a31944b63f381aa28b2d1969cf62.jpg'
    }, {
        data: 'wordpress',
        src: 'https://cdn.dribbble.com/users/1207383/screenshots/3992005/media/5a5b51df5652cd7fbc21189faabfcf28.jpg'
    }

]

const portfolioTabWrapper = document.querySelector('#portfolio .tab__items'),
      loadMoreButton = document.querySelector('#portfolio button');

let count = 0;

const showActiveTab = tabItem => {

    let menuItems = document.querySelectorAll('[data-menu]');

    menuItems.forEach(menuItem => {
        if (menuItem.classList.contains('active')) { menuItem.classList.remove('active') }
    });

    if (!tabItem.classList.contains('active')) { tabItem.classList.add('active') }
}

portfolioTabWrapper.addEventListener('click', event => {

    const galleryImages = document.querySelectorAll('.portfolio__item')

    let dataMenu = null;
    if (event.target.nodeName === 'LI') {
        dataMenu = event.target.getAttribute('data-menu');
    }

    showActiveTab(event.target)

    galleryImages.forEach(image => {
        if ( dataMenu !== image.getAttribute('data-gallery') && dataMenu !== 'all' ) {
            image.style.display = 'none'
        } else { image.style.display = 'block' }
    })

});

const createButtonElement = (element) => {

    element.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z" fill="black"/>
            </svg>
            Load more
        `
}

loadMoreButton.addEventListener('click', () => {

    count++
    loadMoreButton.innerHTML = '<img src="assets/loader.gif" alt="loader">';

    setTimeout(() => {

        if (count === 2) { loadMoreButton.remove() }

        portfolioImages.forEach((image, id) => {

            const portfolioItems = document.querySelector('.portfolio__items')

            portfolioItems.insertAdjacentHTML('beforeend',
                ` 
                <div class="portfolio__item" data-gallery="${image.data}">
                    <div class="hover__section">
                    <div class="icon__section">
                        <div class="icon__item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z" fill="black"/>
                                <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z" fill="black"/>
                                <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z" fill="black"/>
                            </svg>
                        </div>
                        <div class="icon__item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 7H17V17H7V7Z" fill="black"/>
                            </svg>
                        </div>
                    </div>
                    <div class="text__section">
                        <h5 class="green">Creative Design</h5>
                        <p>Web Design</p>
                    </div>
                </div>
                    <img class="img${id+13}" src="${image.src}" 
                         alt="portfolio">
                </div>`)
        });

        createButtonElement(loadMoreButton);

    }, 2000)
});

//gallery
const galleryImages = [
    {
        src: 'https://cdn.pixabay.com/photo/2019/05/15/19/13/flower-4205744_1280.jpg',
    }, {
        src: 'https://cdn.pixabay.com/photo/2021/04/17/18/32/car-6186528__340.jpg',
    }, {
        src: 'https://cdn.pixabay.com/photo/2022/05/18/15/44/apple-7205616__340.jpg',
    }, {
        src: 'https://cdn.pixabay.com/photo/2022/05/16/19/14/road-7201023__480.jpg',
    }, {
        src: 'https://cdn.pixabay.com/photo/2022/05/17/18/24/flowers-7203398__480.jpg',
    }, {
        src: 'https://cdn.pixabay.com/photo/2022/05/16/19/17/autumn-7201026__480.jpg',
    }, {
        src: 'https://cdn.pixabay.com/photo/2022/05/10/11/12/tree-7186835__480.jpg',
    }, {
        src: 'https://cdn.pixabay.com/photo/2022/05/13/16/22/lake-7194103__480.jpg',
    }, {
        src: 'https://cdn.pixabay.com/photo/2020/02/03/06/13/beach-4814869__480.jpg',
    }, {
        src: 'https://cdn.pixabay.com/photo/2022/04/29/00/27/puppy-7162203__480.jpg',
    }, {
        src: 'https://cdn.pixabay.com/photo/2022/05/21/04/13/flower-7210621__340.jpg',
    }, {
        src: 'https://cdn.pixabay.com/photo/2022/05/23/18/45/bee-7216939__480.jpg',
    }, {
        src: 'https://cdn.pixabay.com/photo/2022/05/11/23/51/river-7190415__480.jpg',
    }, {
        src: 'https://cdn.pixabay.com/photo/2022/07/07/13/57/stones-7307274_1280.jpg',
    }, {
        src: 'https://cdn.pixabay.com/photo/2021/04/17/18/32/car-6186528__340.jpg',
    }, {
        src: 'https://cdn.pixabay.com/photo/2022/05/18/15/44/apple-7205616__340.jpg',
    }, {
        src: 'https://cdn.pixabay.com/photo/2022/05/16/19/14/road-7201023__480.jpg',
    }, {
        src: 'https://cdn.pixabay.com/photo/2022/05/17/18/24/flowers-7203398__480.jpg',
    }, {
        src: 'https://cdn.pixabay.com/photo/2022/05/16/19/17/autumn-7201026__480.jpg',
    }, {
        src: 'https://cdn.pixabay.com/photo/2022/05/10/11/12/tree-7186835__480.jpg',
    }, {
        src: 'https://cdn.pixabay.com/photo/2022/05/13/16/22/lake-7194103__480.jpg',
    }, {
        src: 'https://cdn.pixabay.com/photo/2020/02/03/06/13/beach-4814869__480.jpg',
    }, {
        src: 'https://cdn.pixabay.com/photo/2022/04/29/00/27/puppy-7162203__480.jpg',
    }, {
        src: 'https://cdn.pixabay.com/photo/2022/05/21/04/13/flower-7210621__340.jpg',
    }, {
        src: 'https://cdn.pixabay.com/photo/2022/05/23/18/45/bee-7216939__480.jpg',
    }, {
        src: 'https://cdn.pixabay.com/photo/2022/05/11/23/51/river-7190415__480.jpg',
    }
]

document.addEventListener('DOMContentLoaded', () => {

    let count = 0;
    const galleryWrapper = document.querySelector('#gallery .content__section');

    const masonryWrapper = document.createElement('div');
    masonryWrapper.classList.add('masonry__layout');
    galleryWrapper.append(masonryWrapper)

    masonryWrapper.innerHTML = `
            <div class="column">
                <div class="column__item"></div>
            </div>
            <div class="column">
                <div class="column__item"></div>
                <div class="column__item"></div>
                <div class="column__item"></div>
            </div>
            <div class="column">

                <div class="grid__section">
                    <div class="two__columns">
                        <div class="column__item"></div>
                        <div class="column__item"></div>
                    </div>
                    <div class="th__columns">
                        <div class="column__item"></div>
                        <div class="column__item"></div>
                        <div class="column__item"></div>
                    </div>
                    <div class="th__columns">
                        <div class="column__item"></div>
                        <div class="column__item"></div>
                        <div class="column__item"></div>
                    </div>
                </div>

                <div class="column__item"></div>

            </div>
    `

    const galleryButton = document.createElement('button');
    galleryWrapper.append(galleryButton);

    galleryButton.classList.add('button__green');
    galleryButton.classList.add('icon__button');
    createButtonElement(galleryButton);

    const galleryItems = document.querySelectorAll('.column__item');
    galleryItems.forEach((item, id) => {
        item.innerHTML = `
            <div class="hover__section">
                <div class="icon__section">
                            <div class="icon__item">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.319 14.4326C19.7628 11.2941 19.542 6.75347 16.6569 3.86829C13.5327 0.744098 8.46734 0.744098 5.34315 3.86829C2.21895 6.99249 2.21895 12.0578 5.34315 15.182C8.22833 18.0672 12.769 18.2879 15.9075 15.8442C15.921 15.8595 15.9351 15.8745 15.9497 15.8891L20.1924 20.1317C20.5829 20.5223 21.2161 20.5223 21.6066 20.1317C21.9971 19.7412 21.9971 19.1081 21.6066 18.7175L17.364 14.4749C17.3493 14.4603 17.3343 14.4462 17.319 14.4326ZM15.2426 5.28251C17.5858 7.62565 17.5858 11.4246 15.2426 13.7678C12.8995 16.1109 9.1005 16.1109 6.75736 13.7678C4.41421 11.4246 4.41421 7.62565 6.75736 5.28251C9.1005 2.93936 12.8995 2.93936 15.2426 5.28251Z" fill="black"/>
                                </svg>
                            </div>
                            <div class="icon__item">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3H9V5H5V9H3V3Z" fill="black"/>
                                    <path d="M3 21H9V19H5V15H3V21Z" fill="black"/>
                                    <path d="M15 21H21V15H19V19H15V21Z" fill="black"/>
                                    <path d="M21 3H15V5H19V9H21V3Z" fill="black"/>
                                </svg>
                            </div>
                        </div>
            </div>
            <img src="${galleryImages[id].src}"
                 alt="portfolio">
        `
    })

    galleryButton.addEventListener('click', () => {
        count++
        galleryButton.innerHTML = '<img src="assets/loader.gif" alt="loader">';

        setTimeout(() => {

            const galleryColumn = document.querySelectorAll('.column')

            galleryColumn.forEach((column, id) => {

                if (id === 2) {
                    const columnGrid = document.createElement('div');
                    columnGrid.classList.add('grid__section')

                    columnGrid.innerHTML = `
                    <div class="two__columns">
                        <div class="column__item"></div>
                        <div class="column__item"></div>
                    </div>
                    <div class="th__columns">
                        <div class="column__item"></div>
                        <div class="column__item"></div>
                        <div class="column__item"></div>
                    </div>
                    <div class="th__columns">
                        <div class="column__item"></div>
                        <div class="column__item"></div>
                        <div class="column__item"></div>
                    </div>
                    `
                    column.append(columnGrid)

                } else {

                    const columnItem = document.createElement('div');
                    columnItem.classList.add('column__item')
                    column.append(columnItem);
                    createButtonElement(galleryButton);

                }

            })

            if (count === 2) { galleryButton.remove() }

            const galleryItems = document.querySelectorAll('.column__item');
            galleryItems.forEach((item, id) => {
                item.innerHTML = `
                    <div class="hover__section">
                <div class="icon__section">
                            <div class="icon__item">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.319 14.4326C19.7628 11.2941 19.542 6.75347 16.6569 3.86829C13.5327 0.744098 8.46734 0.744098 5.34315 3.86829C2.21895 6.99249 2.21895 12.0578 5.34315 15.182C8.22833 18.0672 12.769 18.2879 15.9075 15.8442C15.921 15.8595 15.9351 15.8745 15.9497 15.8891L20.1924 20.1317C20.5829 20.5223 21.2161 20.5223 21.6066 20.1317C21.9971 19.7412 21.9971 19.1081 21.6066 18.7175L17.364 14.4749C17.3493 14.4603 17.3343 14.4462 17.319 14.4326ZM15.2426 5.28251C17.5858 7.62565 17.5858 11.4246 15.2426 13.7678C12.8995 16.1109 9.1005 16.1109 6.75736 13.7678C4.41421 11.4246 4.41421 7.62565 6.75736 5.28251C9.1005 2.93936 12.8995 2.93936 15.2426 5.28251Z" fill="black"/>
                                </svg>
                            </div>
                            <div class="icon__item">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3H9V5H5V9H3V3Z" fill="black"/>
                                    <path d="M3 21H9V19H5V15H3V21Z" fill="black"/>
                                    <path d="M15 21H21V15H19V19H15V21Z" fill="black"/>
                                    <path d="M21 3H15V5H19V9H21V3Z" fill="black"/>
                                </svg>
                            </div>
                        </div>
            </div>
                    <img src="${galleryImages[id].src}"
                         alt="portfolio">
                `
            })

        }, 2000)
    })

})

//swiper
const test = new Swiper(".thumbs-slider", {
    spaceBetween: 10,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
});

const swiperMain = new Swiper(".slider", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next ",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: test,
    },
});
