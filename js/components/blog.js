function blog() {

	// ` this is a "back tick". Use it to define multi-line strings in JavaScript.
	var content = `
    <!-- Description of the database table proposal. You could use an unordered list (<ul> <li>) to say what fields you plan to include in your “other” database table…  -->
    <div id="noticable">
        <h2>Database</h2>
        <ul>
          <li>Auto incrementing primary key</li>
          <li>Unique name (Char[256])</li>
          <li>Model Number (Char[45])</li>
          <li>Laptop Image URL (Char[256])</li>
          <li>Laptop Release Date (<b>Nullable</b> DATE)</li>
          <li>Laptop Price (<b>Nullable</b> INT)</li>
          <li>Laptop Likes (Integer)</li>
          <li>Laptop Dislikes (Integer)</li>
          <li>Laptop Average Rating (Decimal)</li>
          <li>Foreign key to user table</li>
        </ul>
    </div>

    <!-- Describe my web design/development experience -->
    <div id="noticable">
        <h2>My Web Development Experience</h2>
        &emsp;I was first introduced to web development aspects when I tried creating a phishing website back in my early days of using the internet. I have used and understand most of HTML, JS and PHP, but I never got too in-depth with CSS. On top of this, I rarely involved myself with projects that use these languages as I typically only use it as a GUI to nicely interact and display data as opposed to creating a desktop application. I have no web design experience and I'm completely okay with it staying like that. I enjoy programming and I'm not necessarily a person that has a creative eye when it comes to making things pleasing to look at, only pleasing to use.
    </div>
    
		<!-- Describe what I found easy, hard/confusing, and valuable about Homework 01. -->
    <div id="noticable">
        <h2>HomePage Homework</h2>
        &emsp;This homework was relatively easy in the sense of doing the instructions after understanding them. The most confusing part was figuring out what exactly my website should/can be as I currently don't know just how in-depth we'll get into the databases and getting things intertwined. The hardest part, alongside the most confusing part, was actually understanding the instructions given, especially about the database structures.  I found this homework valuable as it taught me the specifics of flex and background image wonkiness, such as, having to put it in its own unique div to adjust the transparency as opposed to putting a background image in html/body and changing the opacity of everything.
    </div>
    
		<!-- Describe what I found easy, hard/confusing, and valuable about Homework 02. -->
    <div id="noticable">
        <h2>JS UI Homework</h2>
        &emsp;I think this was much easier than the first homework assignment as we didn't need to make an entire website from scratch, we were just incorperating a JS component into our current site.  It was a little confusing as first trying to understand exactly where the JS should be executed, how it gets executed, and such, but after tinkering for only 10 or so minutes I got a pretty good understanding of how it all works and went to town.  Nothing was necessarily hard or confusing once I understood exactly how the nav router creation worked.
    </div>

    <div id="noticable">
		<h2>JS Objects Homework</h2>
		  &emsp;This homework was much more complicated than the first two, mainly because of the restrictions given to us.  It's a little complicated knowing what <b>exactly</b> we should be making even though we don't have our database set up or know the entire scope/what's to change in the future.  The hardest and most confusing part of this homework was understanding how to impliment our own MakeObj as we're given free reign.  Thinking of what to do took most of the time instead of writing the code.  I didn't find much value in this step as I wouldn't doubt that things will be subject to change in the future to fit how we'll be utilizing out databases.  I wasn't stoked on how this assignment was restrictive so I deviated from OnlyPans pan pizza recipes and posts and deviated to LapHub, a website where users can find laptops within a price range, specs, or something else.
    </div>

    <div id="noticable">
    <h2>Database Homework</h2>
      &emsp;I've had experience with MySQL DB before when I worked on my own projects years ago, some for games that contained account and character information and another that was more basic, just some blog posts.  I never had to deal with foreign key constraints but I already knew about auto incrementing primary keys and such.  
      <br/></br>
      &emsp;What I found easy were the errors we had to create when attempting to delete entries that were constrained.  Nothing was necessarily hard but the only confusing part was the second to last query where we were asked to output our "descriptive field" which I just assumed was the laptop title since we were never really asked to create a descriptive field, just... fields that accompanied what our website and the table was about.  I also made changes to my "other" database to make more sense and align with what I want the website to be about.

      Click <a target="_blank" href="jamshidi_database.pdf">here</a> to see my database document.
    </div>

    
    `;

	var ele = document.createElement("div");
	ele.innerHTML = content;
	return ele;
}