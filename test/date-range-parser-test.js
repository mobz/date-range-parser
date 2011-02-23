DateRangeParserTest = TestCase("DateRangeParserTest");

function same(s, e, exp) {
	assertEquals(s, exp.start);
	assertEquals(e, exp.end);
}

DateRangeParserTest.prototype.testParse = function() {
	var drp = window.dateRangeParser;
	drp.now = 1000 * 1000 * 1000 * 1000;
	same(999956800000, 1000043200000, drp.parse("now"));
};