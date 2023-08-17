import Restaurantcard from "./RestaurantCard"
import ResList from "../utils/mockdata"
import { useState, useEffect } from "react"
import Schimmer from "./Schimmer"

const Body = () => {
	const [listofRestaurants, setListofRestaurant] = useState([])
	const [filteredRestaurant, setFilteredRestaurant] = useState([])
	const [searchText, setSearchText] = useState("")

	console.log("component rerendered")

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		)
		const json = await data.json()
		// console.log(json)
		console.log(
			"test ",
			json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
		)
		setListofRestaurant(
			json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		)
		setFilteredRestaurant(
			json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		)
	}
	if (listofRestaurants.length === 0) {
		return <Schimmer />
	}

	return listofRestaurants.length === 0 ? (
		<Schimmer />
	) : (
		<div className="body">
			<div className="filter">
				<div className="search">
					<input
						type="text"
						className="search-box"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value)
						}}
					></input>
					<button
						onClick={() => {
							console.log(searchText)
							const filteredList = listofRestaurants.filter((res) =>
								res.info.name.toLowerCase().includes(searchText.toLowerCase())
							)
							setFilteredRestaurant(filteredList)
						}}
					>
						search
					</button>
				</div>
				<button
					className="filter-btn"
					onClick={() => {
						const filteredList = listofRestaurants.filter(
							(res) => res.info.avgRating > 4.3
						)
						setFilteredRestaurant(filteredList)
					}}
				>
					Top rated restaurant
				</button>
			</div>
			<div className="res-container">
				{filteredRestaurant.map((restaurant) => (
					<Restaurantcard key={restaurant.info.id} resData={restaurant} />
				))}
			</div>
		</div>
	)
}

export default Body
