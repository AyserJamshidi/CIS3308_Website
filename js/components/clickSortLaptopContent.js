function clickSortLaptopContent() {

	// ` this is a "back tick". Use it to define multi-line strings in JavaScript.
	var content = `
		<div id="noticable">
		<h2>Example for HW05</h2>
		<div id="laptopList" class="clickSort"></div>
		</div>
    `;

	ajax("json/laptops.json", processLaptops, document.getElementById("laptopList"));

	// TODO: Make the CSS for this
	/**
	 * Numbers must be right justified
	 * Characters must be left justified
	 * Images can be centered
	 * Dates can be centered
	 * Numbers that are currency must be formatted as currency
	 * Image file names shall be converted to HTML image tags that are not too large width-wise
	 * 
	 */
	function processLaptops(laptopList) {
		var newLaptopList = [];

		for (var i = 0; i < laptopList.length; i++) {
			newLaptopList[i] = [];
			newLaptopList[i].Image = SortableTableUtils.makeImage(laptopList[i].imageURL, "10rem");
			newLaptopList[i].Name = SortableTableUtils.makeText(laptopList[i].name);
			newLaptopList[i].Price = SortableTableUtils.makeNumber(laptopList[i].price, true);
		}
		
		document.getElementById("laptopList").appendChild(MakeClickSortTable("Laptops", newLaptopList, "Price", ""));
	}


	var ele = document.createElement("div");
	ele.innerHTML = content;
	return ele;
}