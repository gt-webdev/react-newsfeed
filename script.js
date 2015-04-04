// Allows user to change rss feed that supplies articles that are shown.
var data = [
	{author: "Pete Hunt", title: "React Native goes live", visited: false},
	{author: "Pete Hunt", title: "React Native goes live", visited: true}
]
var FeedInput = React.createClass({
	render: function() {
		return(
			<input type="text" id="feed-url" placeholder="Feed URL" />
		);
	}
});

var ArticleCard = React.createClass({
	render: function() {
		var classString = this.props.article.visited ? "visited" : "";
		return (
			<li className={classString}>
				<div className="image"></div>
				<h3>{this.props.article.title}</h3>
				<p>{this.props.article.author} / <span className="url">example.com</span></p>
			</li>
		);
	}
});

// List of unread articles
var ArticleSubList = React.createClass({
	render: function() {
		var cards = this.props.articles.map(function (article) {
			return (<ArticleCard article={article} />);
		});
		return(
			<ul className="tiles">
				{cards}
			</ul>
		);
	}
});

// Lists of Articles
var ArticleLists = React.createClass({
	getInitialState: function() {
		return {read: [], unread: []};
	},
	componentDidMount: function() {
		var read = [];
		var unread = [];
		this.props.articles.forEach(function(article) {
			if (article.visited) {
				read.push(article);
			}
			else {
				unread.push(article);
			}
		});
		this.setState({read: read, unread: unread});
	},
	render: function() {
		return(
			<div>
				<ArticleSubList articles={this.state.unread} />
				<ArticleSubList articles={this.state.read} />
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
				<ArticleLists articles={data}/>
			</div>
		);
	}
});
React.render(
	<NewsFeedComponent />,
	document.getElementById('content')
);