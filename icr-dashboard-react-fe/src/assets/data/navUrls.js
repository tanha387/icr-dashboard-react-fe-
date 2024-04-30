import Investors from '../images/Icons/investors.svg'
import InvestorsActive from '../images/Icons/investorsActive.svg'
import IposActive from '../images/Icons/IposActive.svg'
import Ipos from '../images/Icons/ipos.svg'



export const navUrls = [
    {
        id: 1,
        name: 'Investors',
        icon: Investors,
        iconActive:InvestorsActive,
        subMenu: [
            {
                id: 1,
                name: 'All Investors',
                url: '/all-investors',
            },
            {
                id: 2,
                name: 'Family Office Spotlight',
                url: '/page1',
            },
        ]
    },
    {
        id: 2,
        name: 'IPOs',
        icon: Ipos,
        iconActive:IposActive,
        subMenu: [
            {
                id: 1,
                name: 'All U.S. IPOs',
                url: '/',
            },
            {
                id: 2,
                name: 'Post IPO Behavior',
                url: '/post-ipo-behavior',
            },
        ]
    },
   
]