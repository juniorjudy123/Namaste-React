import { useEffect, useState } from "react"
import Schimmer from "./Schimmer"

const RestaurantMenu = () => {
	const [resInfo, setResInfo] = useState(null)

	useEffect(() => {
		fetchMenu()
	}, [])

	const fetchMenu = async () => {
		const data = await fetch(
			"https://www.swiggy.com/restaurants/palaaram-kadavanthara-kadavanthra-kochi-121419"
		)
		const json = await data.json()
		console.log(json)
		setResInfo(json.data)
	}
	return resInfo === null ? (
		<Schimmer />
	) : (
		<div className="Menu">
			<h1></h1>
			<ul>
				<li>Biriyani</li>
				<li>Burger</li>
				<li>Broasted chicken</li>
				<li>Diet Coke</li>
			</ul>
		</div>
	)
}

export default RestaurantMenu
