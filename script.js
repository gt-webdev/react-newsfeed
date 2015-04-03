var ArticleComponent = React.createClass({
	render: function() {
		return(
			<h1>Hello World</h1>
		);
	}
});
React.render(
	<ArticleComponent />,
	document.getElementById('content')
);