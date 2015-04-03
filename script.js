// Allows user to change rss feed that supplies articles that are shown.
var FeedInput = React.createClass({
	render: function() {
		return(
			<input type="text" id="feed-url" placeholder="Feed URL" />
		);
	}
});

var ArticleCard = React.createClass({
	render: function() {
		return (
			<li>
				<div className="image"></div>
				<h3>React Native</h3>
				<p>Author / <span className="url">example.com</span></p>
			</li>
		);
	}
});

// List of unread articles
var UnreadArticles = React.createClass({
	render: function() {
		return(
			<ul className="tiles">
				<ArticleCard />
			</ul>
		);
	}
});

// List of read articles
var ReadArticles = React.createClass({
	render: function() {
		return(
			<ul className="tiles">
				<ArticleCard />
			</ul>
		);
	}
});

// Lists of Articles
var ArticleLists = React.createClass({
	render: function() {
		return(
			// TODO: Reduce duplication.
			<div>
				<UnreadArticles />
				<ReadArticles />
			</div>
		);
	}
});

//Main component that contains all the components for the news feed.
var NewsFeedComponent = React.createClass({
	render: function() {
		return(
			<div>
				<h1>Reading List</h1>
				<FeedInput />
				<ArticleLists />
			</div>
		);
	}
});
React.render(
	<NewsFeedComponent />,
	document.getElementById('content')
);