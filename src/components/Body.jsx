import Restaurantcard from "./RestaurantCard"
import ResList from "../utils/mockdata"
import { useState, useEffect } from "react"

const Body = () => {
	const [listofRestaurants, setListofRestaurant] = useState(ResList)

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		)
		const json = await data.json()
		console.log(json)
	}

	return (
		<div className="body">
			<div className="filter">
				<button
					className="filter-btn"
					onClick={() => {
						const filteredList = listofRestaurants.filter(
							(res) => res.info.avgRating > 4.5
						)
						setListofRestaurant(filteredList)
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
