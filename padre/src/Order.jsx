import Pizza from "./Pizza";
import { useState } from "react";

export default function Order() {
    // This is static
    // const pizzaType = "pepperoni";
    // This is static
    // const pizzaSize = "M"
    const [pizzaType, setPizzaType] = useState("pepperoni");
    const [pizzaSize, setPizzaSize] = useState("M");

    return (
        <div className="order">
            <h2>Create Order</h2>
            <form>
                <div>
                    <div>
                        <label htmlFor="pizza-type">Pizza Type</label>
                        <select onChange={(e)=>setPizzaType(e.target.value)} name="pizza-type" value={pizzaType}>
                            <option value="pepperoni">Pepperoni</option>
                            <option value="hawaiian">Hawaiian</option>
                            <option value="bi_meat">BigMeat</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="pizza-size">Pizza Size</label>
                        <div>
                            <span>
                            <input onChange={(e)=>setPizzaSize(e.target.value)} type="radio" id="pizza-s" name="pizza-size" value="S" checked={pizzaSize === "S"} />
                            <label htmlFor="pizza-s">Small</label>
                            </span>
                            <span>
                            <input onChange={(e)=>setPizzaSize(e.target.value)} id="pizza-m" type="radio" name="pizza-size" value="M" checked={pizzaSize === "M"} />
                            <label htmlFor="pizza-m">Medium</label>
                            </span>
                            <span>
                            <input onChange={(e)=>setPizzaSize(e.target.value)} id="pizza-l" type="radio" name="pizza-size" value="L" checked={pizzaSize === "L"} />
                            <label htmlFor="pizza-l">Large</label>
                            </span>
                        </div>
                    </div>
                    <button type="submit">Add to Cart</button>
                </div>
                <div className="order-pizza">
                    <Pizza name="Pepperoni"
                    description="Pepperoni, cheese, tomato sauce"
                    image="/public/pizzas/pepperoni.webp"
                    />
                    <p>$13.37</p>
                </div>
            </form>
        </div>
    );
}