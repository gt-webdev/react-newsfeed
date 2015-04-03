// Allows user to change rss feed that supplies articles that are shown.
var FeedInput = React.createClass({
	render: function() {
		return(
			<h1>Feed URL input box</h1>
		);
	}
});

var ArticleCard = React.createClass({
	render: function() {
		return (
			<li>
				<div>Image</div>
				<h3>React Native</h3>
				<p>Author</p>
			</li>
		);
	}
});

// List of unread articles
var UnreadArticles = React.createClass({
	render: function() {
		return(
			<ul>
				<ArticleCard />
			</ul>
		);
	}
});

// List of read articles
var ReadArticles = React.createClass({
	render: function() {
		return(
			<ul>
				<ArticleCard />
			</ul>
		);
	}
});

// Lists of Articles
var ArticlesLists = React.createClass({
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
				<FeedInput />
				<ArticlesLists />
			</div>
		);
	}
});
React.render(
	<NewsFeedComponent />,
	document.getElementById('content')
);