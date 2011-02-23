DateRangeParserTest = TestCase("DateRangeParserTest");

function equal(s, e, exp) {
	assertEquals(s, exp.start);
	assertEquals(e, exp.end);

DateRangeParserTest.prototype.testParse = function() {
	var drp = window.dateRangeParser;
	drp.now = 1000 * 1000 * 1000 * 1000;
	equals(999956800000, 1000043200000, drp.parse("now"));
}