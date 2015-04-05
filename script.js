// Allows user to change rss feed that supplies articles that are shown.
var data = [
	{author: "Pete Hunt", title: "React Native goes live", visited: false},
	{author: "Jennifer Hwang", title: "This demo works!!!", visited: true}
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
				<div className="image" onClick={this.props.onToggleRead(this.props.article)}></div>
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
			return (<ArticleCard article={article} onToggleRead={this.props.onToggleRead} />);
		}.bind(this));
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
	setSubLists: function() {
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
	componentDidMount: function() {
		this.setSubLists();
	},
	handleToggleRead: function(article) {
		return function(e) {
			e.preventDefault();
			article.visited = !article.visited;
			this.setSubLists();
		}.bind(this);
	},
	render: function() {
		return(
			<div>
				<ArticleSubList parent={this} articles={this.state.unread} onToggleRead={this.handleToggleRead} />
				<ArticleSubList parent={this} articles={this.state.read} onToggleRead={this.handleToggleRead} />
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