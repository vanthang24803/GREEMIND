import Logo from '../src/assets/Logo.svg';
import MainImage from '../src/assets/Main.svg';
import Left from '../src/assets/VectorLeft.svg';
import Right from '../src/assets/VectorRight.svg';
import Item1 from '../src/assets/Item1.svg';
import Item2 from '../src/assets/Item2.svg';
import Item3 from '../src/assets/Item3.svg';
import About1 from '../src/assets/About1.svg';
import About2 from '../src/assets/About2.svg';
import About3 from '../src/assets/About3.svg';
import Cate1 from '../src/assets/Cate1.svg';
import Cate2 from '../src/assets/Cate2.svg';
import Cate3 from '../src/assets/Cate3.svg';

export const logo = {
    logo: Logo,
};

export const home = {
    title: "Buy your dream plants",
    subtitle1: "50+",
    text1: "Plant Species",
    subtitle2: "100+",
    text2: "Customers",
    left: Left,
    right: Right,
    image: MainImage,
}

export const sell = {
    title: "Best Selling Plants",
    subtitle: "Easiest way to healthy life by buying your favorite plants",
    btnText: "See more",
    brand: [
        {
            id: 1,
            image: Item1,
            name: "Natural Plants",
            price: "₱ 1,400.00",
        },
        {
            id: 2,
            image: Item2,
            name: "Artificial Plants",
            price: "₱ 900.00"
        },
        {
            id: 3,
            image: Item3,
            name: "Artificial Plants",
            price: "₱ 3,500.00"
        }
    ]
};

export const about = {
    title: "About us",
    subtitle: "Order now and appreciate the beauty of nature",
    brand: [
        {
            id: 1,
            image: About1,
            name: "Large Assortment",
            decs: "we offer many different types of products with fewer variations in each category."
        },
        {
            id: 2,
            image: About2,
            name: "Fast & Free Shipping",
            desc: "4-day or less delivery time, free shipping and an expedited delivery option."
        }, 
        {
            id: 3,
            image: About3,
            name : "24/7 Support",
            desc : "answers to any business related inquiry 24/7 and in real-time."
        }
    ],
};

export const category = {
    title: "Category",
    subtitle: "Find what you are looking for",
    brand : [
        {
            id: 1,
            image: Cate1,
            name : "Natural Plants"
        },
        {
            id: 2,
            image: Cate2,
            name : "Plant Accessories"
        },
        {
            id: 3,
            image: Cate3,
            name : "Artificial Plants"
        }
    ],

    desc : "Horem ipsum dolor sit amet, consectetur adipiscing elit.",
    btnText : "Explore"
};









