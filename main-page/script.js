document.addEventListener("DOMContentLoaded", () => {
    const carouselImg = document.querySelector(".carousel-inner img");
    const prevBtn = document.querySelector("#prev");
    const nextBtn = document.querySelector("#next");

    const content = [
        {
            img: "./images/images-Form/tg.svg",
            title: "Заголовок 1",
        },
        {
            img: "./images/images-Form/vk.svg",
            title: "Заголовок 2",
        },
        {
            img: "./images/images-Form/whats.svg",
            title: "Заголовок 3",
        }
    ];

    let cnt = 0;

    const setImg = () => {
        cnt = (cnt + content.length) % content.length;

        carouselImg.src = content[cnt].img;
        carouselImg.alt = content[cnt].title;
    };

    nextBtn.addEventListener("click", () => {
        cnt++;
        setImg();
    });

    prevBtn.addEventListener("click", () => {
        cnt--;
        setImg();
    });

    setInterval(() => {
        cnt++;
        setImg();
    }, 5000);

    setImg();
});