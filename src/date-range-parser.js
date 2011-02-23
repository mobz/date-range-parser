(function() {

	var drp = window.dateRangeParser = {};
	drp.defaultRange = 1000 * 60 * 60 * 24;
	drp.now = null; // set a different value for now than the time at function invocation
	drp.parse = function parse(v) {
		var now = this.now || new Date().getTime();
		var r = { start: 0, end: 0 };
		if(v === "now") {
			r.start = now - (this.defaultRange/2);
			r.end = now + (this.defaultRange/2);
		}
		return r;
	}
})();