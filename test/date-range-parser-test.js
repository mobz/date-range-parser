DateRangeParserTest = TestCase("DateRangeParserTest");

function same(s, e, exp) {
	assertEquals(s, exp.start);
	assertEquals(e, exp.end);
}

DateRangeParserTest.prototype.testParse = function() {
	var now = 1000000000000;
	var nowSD = 999993600000;
	var sec = 1000;
	var min = sec * 60;
	var hr = min * 60;
	var day = hr * 24;
	var drp = window.dateRangeParser;
	drp.now = 1000 * 1000 * 1000 * 1000;
	same(now - day, now + day, drp.parse("now"));
	same(nowSD, nowSD + hr, drp.parse("0"));
	same(nowSD + hr, nowSD + 2*hr, drp.parse("1"));
	same(nowSD + 23*hr, nowSD + 24*hr, drp.parse("23"));
};