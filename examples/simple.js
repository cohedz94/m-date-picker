webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(183);


/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	/* eslint no-console:0 */
	
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	var _rmcDatePicker = __webpack_require__(184);
	
	var _rmcDatePicker2 = _interopRequireDefault(_rmcDatePicker);
	
	var _gregorianCalendarFormat = __webpack_require__(6);
	
	var _gregorianCalendarFormat2 = _interopRequireDefault(_gregorianCalendarFormat);
	
	var _gregorianCalendar = __webpack_require__(7);
	
	var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);
	
	var _gregorianCalendarFormatLibLocaleZh_CN = __webpack_require__(14);
	
	var _gregorianCalendarFormatLibLocaleZh_CN2 = _interopRequireDefault(_gregorianCalendarFormatLibLocaleZh_CN);
	
	var _gregorianCalendarLibLocaleZh_CN = __webpack_require__(16);
	
	var _gregorianCalendarLibLocaleZh_CN2 = _interopRequireDefault(_gregorianCalendarLibLocaleZh_CN);
	
	var _react = __webpack_require__(17);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(173);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var formatter = _gregorianCalendarFormat2['default'].getDateTimeInstance(_gregorianCalendarFormat2['default'].Style.FULL, _gregorianCalendarFormat2['default'].Style.FULL, _gregorianCalendarFormatLibLocaleZh_CN2['default']);
	
	function format(v) {
	  return formatter.format(v);
	}
	
	var now = new _gregorianCalendar2['default'](_gregorianCalendarLibLocaleZh_CN2['default']);
	now.setTime(Date.now());
	
	var Demo = _react2['default'].createClass({
	  displayName: 'Demo',
	
	  propTypes: {
	    mode: _react2['default'].PropTypes.string
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      mode: 'datetime',
	      locale: __webpack_require__(15)
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      date: null
	    };
	  },
	  onDateChange: function onDateChange(date) {
	    this.setState({
	      date: date
	    });
	  },
	  render: function render() {
	    var props = this.props;
	    var date = this.state.date;
	
	    return _react2['default'].createElement(
	      'div',
	      { style: { margin: '10px 30px' } },
	      _react2['default'].createElement(
	        'h2',
	        null,
	        'date picker'
	      ),
	      _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'span',
	          null,
	          date && format(date) || format(now)
	        ),
	        _react2['default'].createElement(_rmcDatePicker2['default'], { defaultDate: date || now,
	          mode: props.mode,
	          locale: props.locale,
	          onDateChange: this.onDateChange })
	      )
	    );
	  }
	});
	
	_reactDom2['default'].render(_react2['default'].createElement(Demo, null), document.getElementById('__react-content'));

/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	// export this package's api
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcDatePicker = __webpack_require__(175);
	
	var _srcDatePicker2 = _interopRequireDefault(_srcDatePicker);

	exports['default'] = _srcDatePicker2['default'];
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=simple.js.map