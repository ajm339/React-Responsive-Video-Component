/***

React Component Render Example:
<ResponsiveVideo source="https://www.youtube.com/embed/-CpJ61U0LFY" width="1280" height="720" />

CSS:
iframe{
  width: 100%;
}

***/

ResponsiveVideo = React.createClass({
	getInitialState () {
		return {
			constant: this.props.height/this.props.width
		};
  },

  handleResize (e) {
    this.setState({videoHeight: this.refs.iframe.getDOMNode().offsetWidth * this.state.constant});
  },

  componentWillMount () {
    window.addEventListener('resize', this.handleResize);
  },

  componentDidMount () {
		var videoWidth = this.refs.iframe.getDOMNode().offsetWidth;
		var videoHeight = videoWidth * this.state.constant;
    this.setState({videoHeight: videoHeight});
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },
	render () {
		return (
			<iframe ref="iframe" src={this.props.source} frameborder="0" height={this.state.videoHeight} allowfullscreen></iframe>
		);
	}
});