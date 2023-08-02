import Restaurantcard from "./RestaurantCard"
import ResList from "../utils/mockdata"

const Body = () => {
	let listofRestaurants = [
		{
			info: {
				id: "43836",
				name: "BurgerKing",
				cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
				costForTwo: "₹400 for two",
				cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
				avgRating: 3,

				sla: {
					deliveryTime: 18,
				},
			},
		},

		{
			info: {
				id: "43837",
				name: "McDonald's",
				cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
				costForTwo: "₹400 for two",
				cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
				avgRating: 4.7,

				sla: {
					deliveryTime: 18,
				},
			},
		},
		{
			info: {
				id: "43838",
				name: "kfc",
				cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
				costForTwo: "₹400 for two",
				cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
				avgRating: 4.2,

				sla: {
					deliveryTime: 18,
				},
			},
		},
	]

	return (
		<div className="body">
			<div className="filter">
				<button
					className="filter-btn"
					onClick={() => {
						listofRestaurants = listofRestaurants.filter(
							(res) => res.info.avgRating > 4
						)
						console.log(listofRestaurants)
					}}
				>
					Top rated restaurant
				</button>
			</div>
			<div className="res-container">
				{listofRestaurants.map((restaurant) => (
					<Restaurantcard key={restaurant.info.id} resData={restaurant} />
				))}
			</div>
		</div>
	)
}

export default Body
