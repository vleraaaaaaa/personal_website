document.addEventListener('DOMContentLoaded', () => {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    const prevBtn = document.querySelector('#prev');
    const nextBtn = document.querySelector('#next');

    const content = [
        {
            img: './images/carousel-main/1.png',
            title: 'Заголовок 1',
        },
        {
            img: './images/carousel-main/2.png',
            title: 'Заголовок 2',
        },
        {
            img: './images/carousel-main/3.png',
            title: 'Заголовок 3',
        },
        {
            img: './images/carousel-main/4.png',
            title: 'Заголовок 4',
        },
        {
            img: './images/carousel-main/5.png',
            title: 'Заголовок 5',
        },
        {
            img: './images/carousel-main/6.png',
            title: 'Заголовок 6',
        },
        {
            img: './images/carousel-main/7.png',
            title: 'Заголовок 7',
        },
        {
            img: './images/carousel-main/8.png',
            title: 'Заголовок 8',
        },
    ];

    let cnt = 0;

    const setImages = () => {
        const index1 = cnt % content.length;
        const index2 = (cnt + 1) % content.length;
        const index3 = (cnt + 2) % content.length;

        img1.src = content[index1].img;
        img1.alt = content[index1].title;

        img2.src = content[index2].img;
        img2.alt = content[index2].title;

        img3.src = content[index3].img;
        img3.alt = content[index3].title;
    };

    nextBtn.addEventListener('click', () => {
        cnt++;
        setImages();
    });

    prevBtn.addEventListener('click', () => {
        cnt--;
        setImages();
    });

    setInterval(() => {
        cnt++;
        setImages();
    }, 5000);

    setImages(); // инициализация
});
