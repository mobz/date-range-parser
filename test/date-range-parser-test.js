DateRangeParserTest = TestCase("DateRangeParserTest");

function same(s, e, exp) {
	assertEquals(s, exp.start);
	assertEquals(e, exp.end);
}

DateRangeParserTest.prototype.testParse = function() {
	var now = 1000000000000;
	var sec = 1000;
	var min = sec * 60;
	var hr = min * 60;
	var day = hr * 24;
	var drp = window.dateRangeParser;
	drp.now = 1000 * 1000 * 1000 * 1000;
	same(999956800000, 1000043200000, drp.parse("now"));
	same(now, now + hr, drp.parse("0"));
	same(now + hr, now + 2*hr, drp.parse("1"));
	same(now + 23*hr, now + 24*hr, drp.parse("23"));
};