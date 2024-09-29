"use client";
import { useState, useEffect } from 'react';
import Carousel from './Carousel';

const Home = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(false);
    const [activeButton, setActiveButton] = useState('All');

    const handleScroll = () => {
        const container = document.getElementById('scroll-container');
        if (container) {
        setScrollPosition(container.scrollLeft);
        setShowLeftButton(container.scrollLeft > 0);
        setShowRightButton(container.scrollLeft < container.scrollWidth - container.clientWidth);
        }
    };

    const handleScrollButton = (direction: 'left' | 'right') => {
        const container = document.getElementById('scroll-container');
        if (container) {
        const scrollAmount = direction === 'left' ? -100 : 100;
        container.scrollLeft += scrollAmount;
        handleScroll(); // Update button visibility after scrolling
        }
    };

    const handleButtonClick = (button: string) => {
        setActiveButton(button);
        
        // Scroll to the corresponding section
        const section = document.getElementById(button);
        if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const container = document.getElementById('scroll-container');
        if (container) {
        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

  return (
    <>
        <div className="container my-4">
            <div className="fixed md:sticky left-0 right-0 z-50 bg-white top-0 p-2">
                <div className="flex items-center rounded-full bg-gray-200 max-w-2xl mx-auto pl-4 mb-6">
                    <svg width={20} hanging={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m20.006 17.354-.804-.804-.804-.804c-.661-.661-.988-.967-1.079-1.33-.09-.364.054-.785.336-1.677A7.422 7.422 0 0 0 18 10.5c0-2.071-.84-3.946-2.197-5.303A7.477 7.477 0 0 0 10.5 3c-2.071 0-3.946.84-5.303 2.197A7.477 7.477 0 0 0 3 10.5c0 2.071.84 3.946 2.197 5.303a7.477 7.477 0 0 0 7.543 1.852c.89-.282 1.312-.427 1.675-.336.364.091.67.418 1.331 1.079l.804.803.804.805c.663.662.994.994 1.326.994.331 0 .663-.332 1.326-.994.663-.663.994-.995.994-1.326 0-.332-.331-.663-.994-1.326M10.5 15.75a5.233 5.233 0 0 1-3.712-1.538A5.234 5.234 0 0 1 5.25 10.5c0-1.45.588-2.762 1.538-3.712A5.234 5.234 0 0 1 10.5 5.25c1.45 0 2.762.588 3.712 1.538A5.234 5.234 0 0 1 15.75 10.5c0 1.45-.588 2.762-1.538 3.712A5.234 5.234 0 0 1 10.5 15.75"></path></svg>
                    <input placeholder="Search creators or topics" className="p-2 w-full bg-transparent outline-0" value="" />
                </div>
                <div className="flex items-center overflow-x-auto nober space-x-4" id="scroll-container">
                    {showLeftButton && (
                    <button
                        className="flex-none"
                        onClick={() => handleScrollButton('left')}
                    >
                        &lt; {/* Left Arrow */}
                    </button>
                    )}
                    <button
                        className={`flex-none py-1.5 px-4 rounded-md ${activeButton === 'All' ? 'bg-black text-white' : 'bg-gray-200'}`}
                        onClick={() => handleButtonClick('All')}
                    >
                    All
                    </button>
                    <button
                        className={`flex-none py-1.5 px-4 rounded-md ${activeButton === '1' ? 'bg-black text-white' : 'bg-gray-200'}`}
                        onClick={() => handleButtonClick('1')}
                    >
                        Recently visited
                    </button>
                    <button
                        className={`flex-none py-1.5 px-4 rounded-md ${activeButton === '2' ? 'bg-black text-white' : 'bg-gray-200'}`}
                        onClick={() => handleButtonClick('2')}
                    >
                        Popular this week
                    </button>
                    <button
                        className={`flex-none py-1.5 px-4 rounded-md ${activeButton === '3' ? 'bg-black text-white' : 'bg-gray-200'}`}
                        onClick={() => handleButtonClick('3')}
                    >
                        Explore topics
                    </button>
                    <button
                        className={`flex-none py-1.5 px-4 rounded-md ${activeButton === '4' ? 'bg-black text-white' : 'bg-gray-200'}`}
                        onClick={() => handleButtonClick('4')}
                    >
                        Popular this week
                    </button>
                    {showRightButton && (
                    <button
                        className="flex-none"
                        onClick={() => handleScrollButton('right')}
                    >
                        &gt; {/* Right Arrow */}
                    </button>
                    )}
                </div>
            </div>
            <div id="1">
                <Carousel
                    title="Recently visited"
                    img=""
                    link="/"
                    left={0}
                    desktops={5}
                    tablets={3}
                    mobile={2}
                    slider={2}
                    limit={10}
                    items={[
                    {
                        img: "/product/1.jpg",
                        link: "/1",
                        title: "Supply a Four",
                        featured: "the patreon to the crossover podcast that no one asked for!",
                    },
                    {
                        img: "/product/2.jpg",
                        link: "/1",
                        title: "China Wholesale",
                        featured: "the patreon to the crossover podcast that no one asked for!",
                    },
                    {
                        img: "/product/3.jpg",
                        link: "/1",
                        title: "Natural Bone",
                        featured: "the patreon to the crossover podcast that no one asked for",
                    },
                    {
                        img: "/product/4.jpg",
                        link: "/1",
                        title: "Floral Blue",
                        featured: "the patreon to the crossover podcast that no one asked for",
                    },
                    {
                        img: "/product/5.jpg",
                        link: "/1",
                        title: "Xuchang Hair",
                        featured: "the patreon to the crossover podcast that no one asked for",
                    },
                    {
                        img: "/product/6.jpg",
                        link: "/1",
                        title: "Straight Kinky",
                        featured: "the patreon to the crossover podcast that no one asked for",
                    },
                    {
                        img: "/product/7.jpg",
                        link: "/1",
                        title: "Wigs Full",
                        featured: "the patreon to the crossover podcast that no one asked for",
                    },
                    {
                        img: "/product/8.jpg",
                        link: "/1",
                        title: "8 Inch to",
                        featured: "the patreon to the crossover podcast that no one asked for",
                    },
                    {
                        img: "/product/9.jpg",
                        link: "/1",
                        title: "Natural Raw",
                        featured: "the patreon to the crossover podcast that no one asked for",
                    },
                    {
                        img: "/product/10.jpg",
                        link: "/1",
                        title: "Super Soft",
                        featured: "the patreon to the crossover podcast that no one asked for",
                    },
                    ]}
                />
            </div>
            <div id="2">
                <Carousel
                    title="Popular this week"
                    img=""
                    link="/"
                    left={0}
                    desktops={5}
                    tablets={3}
                    mobile={2}
                    slider={1}
                    limit={10}
                    items={[
                    {
                        img: "/product/1.jpg",
                        link: "/1",
                        title: "Supply a Four",
                        featured: "the patreon to the crossover podcast that no one asked for!",
                    },
                    {
                        img: "/product/2.jpg",
                        link: "/1",
                        title: "China Wholesale",
                        featured: "the patreon to the crossover podcast that no one asked for!",
                    },
                    {
                        img: "/product/3.jpg",
                        link: "/1",
                        title: "Natural Bone",
                        featured: "the patreon to the crossover podcast that no one asked for",
                    },
                    {
                        img: "/product/4.jpg",
                        link: "/1",
                        title: "Floral Blue",
                        featured: "the patreon to the crossover podcast that no one asked for",
                    },
                    {
                        img: "/product/5.jpg",
                        link: "/1",
                        title: "Xuchang Hair",
                        featured: "the patreon to the crossover podcast that no one asked for",
                    },
                    {
                        img: "/product/6.jpg",
                        link: "/1",
                        title: "Straight Kinky",
                        featured: "the patreon to the crossover podcast that no one asked for",
                    },
                    {
                        img: "/product/7.jpg",
                        link: "/1",
                        title: "Wigs Full",
                        featured: "the patreon to the crossover podcast that no one asked for",
                    },
                    {
                        img: "/product/8.jpg",
                        link: "/1",
                        title: "8 Inch to",
                        featured: "the patreon to the crossover podcast that no one asked for",
                    },
                    {
                        img: "/product/9.jpg",
                        link: "/1",
                        title: "Natural Raw",
                        featured: "the patreon to the crossover podcast that no one asked for",
                    },
                    {
                        img: "/product/10.jpg",
                        link: "/1",
                        title: "Super Soft",
                        featured: "the patreon to the crossover podcast that no one asked for",
                    },
                    ]}
                />
            </div>
            <div id="3">
                <Carousel
                    title="Explore topics"
                    img=""
                    link="/"
                    left={0}
                    desktops={5}
                    tablets={3}
                    mobile={2}
                    slider={3}
                    limit={10}
                    items={[
                    {
                        img: "/1.png",
                        link: "/1",
                        title: "Supply a Four",
                        featured: "bg-gradient-to-t from-fuchsia-500 to-cyan-500",
                    },
                    {
                        img: "/1.png",
                        link: "/1",
                        title: "China Wholesale",
                        featured: "bg-gradient-to-t from-blue-200 to-cyan-200",
                    },
                    {
                        img: "/1.png",
                        link: "/1",
                        title: "Natural Bone",
                        featured: "bg-gradient-to-t from-blue-600 to-violet-600",
                    },
                    {
                        img: "/1.png",
                        link: "/1",
                        title: "Floral Blue",
                        featured: "bg-gradient-to-t from-fuchsia-600 to-pink-600",
                    },
                    {
                        img: "/1.png",
                        link: "/1",
                        title: "Xuchang Hair",
                        featured: "bg-gradient-to-t from-purple-500 to-purple-900",
                    },
                    {
                        img: "/1.png",
                        link: "/1",
                        title: "Straight Kinky",
                        featured: "bg-gradient-to-t from-violet-600 to-indigo-600",
                    },
                    {
                        img: "/1.png",
                        link: "/1",
                        title: "Wigs Full",
                        featured: "bg-gradient-to-t from-emerald-500 to-emerald-900",
                    },
                    {
                        img: "/1.png",
                        link: "/1",
                        title: "8 Inch to",
                        featured: "bg-gradient-to-t from-indigo-400 to-cyan-400",
                    },
                    {
                        img: "/1.png",
                        link: "/1",
                        title: "Natural Raw",
                        featured: "bg-gradient-to-t from-violet-200 to-pink-200",
                    },
                    {
                        img: "/1.png",
                        link: "/1",
                        title: "Super Soft",
                        featured: "bg-gradient-to-t from-amber-500 to-pink-500",
                    },
                    ]}
                />
            </div>
            <div id="4">
                <Carousel
                    title="Creators for you"
                    img=""
                    link="/"
                    left={0}
                    desktops={5}
                    tablets={3}
                    mobile={2}
                    slider={1}
                    limit={10}
                    items={[
                    {
                        img: "/product/1.jpg",
                        link: "/1",
                        title: "Supply a Four",
                        featured: "the patreon to the crossover podcast that no one asked for!",
                    },
                    {
                        img: "/product/2.jpg",
                        link: "/1",
                        title: "China Wholesale",
                        featured: "the patreon to the crossover podcast that no one asked for!",
                    },
                    {
                        img: "/product/3.jpg",
                        link: "/1",
                        title: "Natural Bone",
                        featured: "the patreon to the crossover podcast that no one asked for",
                    },
                    {
                        img: "/product/4.jpg",
                        link: "/1",
                        title: "Floral Blue",
                        featured: "the patreon to the crossover podcast that no one asked for",
                    },
                    {
                        img: "/product/5.jpg",
                        link: "/1",
                        title: "Xuchang Hair",
                        featured: "the patreon to the crossover podcast that no one asked for",
                    },
                    {
                        img: "/product/6.jpg",
                        link: "/1",
                        title: "Straight Kinky",
                        featured: "the patreon to the crossover podcast that no one asked for",
                    },
                    {
                        img: "/product/7.jpg",
                        link: "/1",
                        title: "Wigs Full",
                        featured: "the patreon to the crossover podcast that no one asked for",
                    },
                    {
                        img: "/product/8.jpg",
                        link: "/1",
                        title: "8 Inch to",
                        featured: "the patreon to the crossover podcast that no one asked for",
                    },
                    {
                        img: "/product/9.jpg",
                        link: "/1",
                        title: "Natural Raw",
                        featured: "the patreon to the crossover podcast that no one asked for",
                    },
                    {
                        img: "/product/10.jpg",
                        link: "/1",
                        title: "Super Soft",
                        featured: "the patreon to the crossover podcast that no one asked for",
                    },
                    ]}
                />
            </div>
        </div>
    </>
  );
};

export default Home;