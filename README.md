<h1>Firebase Twitter Analytics</h1>

<h2>Overview</h2>

<p>Utilizes Node.js, Express.js, Firebase, Highcharts, and the Twitter API. Streams tweets from an area roughly encompassing the continental United States, and performs sentiment analysis on those tweets. This data is analyzed over the course of time.</p>

<h2>Highlights</h2>

<ol>
<li>Able to filter all tweets down by geography, and continuously pull useful information such as name, geo-location, and tweet text.</li>
<li>Effective and asynchronous transfer of data from Twitter, to Firebase, and then finally to the browser.</li>
<li>Interesting real-time data analytics. This kind of data modeling could have implications for tracking the effectiveness of marketing campaigns hour-by-hour.</li>
<li>Effective code flow, decent GUI</li>
<li>Effective commit messages, detail for professional development standards.</li>
</ol>

<h2>Things learned</h2>
<ol>
<li>Firebase was not necessary. Given the high volume of tweets coming in, and the limits on data storage imposed by Firebase, another tool such as socket.io would have been preferable.<li>
<li>Node does not allow for in-browser userinput, this made it impossible to cleanly and effectively filter by specific word.</li>
</ol>