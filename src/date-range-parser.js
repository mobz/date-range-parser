(function() {

	var drp = window.dateRangeParser = {};

	drp.defaultRange = 1000 * 60 * 60 * 24;

	drp.now = null; // set a different value for now than the time at function invocation

	drp.parse = function parse(v) {
		var now = this.now || new Date().getTime();

		function makeArray(d) {
			var da = new Date(d);
			return [ da.getUTCFullYear(), da.getUTCMonth(), da.getUTCDate(), da.getUTCHours(), da.getUTCMinutes(), da.getUTCSeconds(), da.getUTCMilliseconds() ];
		}
		function fromArray(a) {
			return Date.UTC.apply(null, a);
		}
		function zeroArray(d, p, v) {
			var da = makeArray(d);
			da[p] = v;
			for(var i = p+1; i < da.length; i++) {
				da[i] = i === 1 ? -1 : 0;
			}
			return da;
		}
		function procTerm(term) {
			var r = { type: "d", start: 0, end: 0 };
			if(term === "now") {
				r.start = now - drp.defaultRange;
				r.end = now + drp.defaultRange;
			} if(term.match(/^\d{1,2}$/)) {
				var da = zeroArray(now, 3, parseInt(term, 10));
				r.start = fromArray(da);
				da[3]++;
				r.end = fromArray(da);
			}
			return r;
		}

		var terms = v.split(/\s*([^<>\s]+)?\s*(<>?)?\s*([^<>\s]+)?\s*/);
		console.log(v, terms)
		if(terms[1] !== "") {
			op1 = procTerm(terms[1]);
		}
		if(terms[3] !== "") {
			op2 = procTerm(terms[3]);
		}
		return op1;
	}
})();