import React from "react";
import Product from "./Product";

function Home() {
    return (
        <main className="flex flex-col gap-3 px-2 mt-16 sm:mt-2">
            <section className="banner h-44 sm:h-72 w-full rounded-sm shadow relative overflow-hidden">
                <img draggable="false" className="h-44 sm:h-72 w-full object-cover" src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/7d9362472788c156.jpg?q=50" alt="FlipFashion Banner" />
            </section>
            <section className="bg-white w-full shadow overflow-hidden">

                <div className="flex px-6 py-4 justify-around items-center">
                    <div className="title flex flex-col gap-0.5">
                        <Product
                            id="12321341"
                            title="Men Striped Round Neck Cotton Blend Black, White T-Shirt"
                            price={329}
                            rating={5}
                            image="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/e/k/5/m-ask-006-ausk-original-imagqajgfnmzbztg.jpeg?q=70"
                        />
                    </div>
                    <div className="title flex flex-col gap-0.5">
                        <Product
                            id="49538094"
                            title="Men Regular Mid Rise Light Blue Jeans"
                            price={429}
                            rating={4}
                            image="https://rukminim2.flixcart.com/image/612/612/xif0q/jean/l/7/q/34-jeans-metronaut-original-imags5ab2xhbbx9y.jpeg?q=70"
                        />
                    </div>


                    <div className="title flex flex-col gap-0.5">
                        <Product
                            id="4903850"
                            title="Black Embroidered Bollywood Chiffon Saree"
                            price={799}
                            rating={4}
                            image="https://rukminim2.flixcart.com/image/612/612/kshtxu80/shopsy-sari/s/g/3/free-1077-red-dhnik-creation-unstitched-original-imag6fnksfymhcza.jpeg?q=70"
                        />
                    </div>
                </div>
                <div className="flex px-6 py-4 justify-around items-center">
                    <div className="title flex flex-col gap-0.5">
                        <Product
                            id="23445930"
                            title="Women A-line Maroon, White Dress"
                            price={419}
                            rating={5}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHPMXh34qWocqmTZ6I4OdoKij6L4KPjO626p5DQQsuX1k-By9X"
                        />
                    </div>
                    <div className="title flex flex-col gap-0.5">
                        <Product
                            id="3254354345"
                            title="White Georgette Stitched Flared Gown 
                        "
                            price={829}
                            rating={4}
                            image="https://rukminim2.flixcart.com/image/612/612/xif0q/gown/1/c/m/na-5xl-full-sleeve-stitched-pal-1296-miss-clothing-na-original-imagqbxgggj98vzu.jpeg?q=70"
                        />
                    </div>
                    <div className="title flex flex-col gap-0.5">
                        <Product
                            id="90829332"
                            title="Olive Green Men's Cargos"
                            price={1020}
                            rating={4}
                            image="https://rukminim2.flixcart.com/image/612/612/kvy58y80/trouser/r/1/z/32-hltr004631-highlander-original-imag8qrnzmxyhjgt.jpeg?q=70"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;