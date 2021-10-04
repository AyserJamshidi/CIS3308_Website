function home () {
    
    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = `
            <!-- 1-2 paragraphs that describe the functionality proposed for website and entice viewers to visit the site. In this description, include at least one external link (href= "http://...") -->
            <div id="noticable">
                <p>
                    &emsp;Welcome to 💻<b>LaptopHub</b>💻 -- The best way for laptop seekers to find their perfect laptop, be it the most powerful, the best looking or the best bang for your buck!  There will be a basic user registration page which will grant registered users access to rate posted laptops along with access to post their own findings.  Laptops will be displayed in (possibly) some sort of a <a href="https://css-tricks.com/css-only-carousel/">scrolling carousel</a> and sorted descending by price.</p>
                </p>
                
			    <p>&emsp;This website is mainly for people who are tired of going through the internet jungle, hacking away at the leaves (terrible deals) by supplying them a one-stop shop location with all of their laptop needs.  Post your own purchased laptops and give it a rating you think is best to warn, or elate others looking to purchase it!</p>
            </div>
            
        `;
        
    var ele = document.createElement("div");
    ele.innerHTML = content;

    return ele;
}