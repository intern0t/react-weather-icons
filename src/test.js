import { DirectionUp, NightCloudyGusts, NightCloudyHigh } from "./index";

describe("Testing couple icon(s).", () => {
	it("has SVG component.", () => {
		expect(DirectionUp.toString()).toContain("svg");
	});

	it("has no style tags.", () => {
		expect(DirectionUp.toString()).not.toContain("<style");
		expect(NightCloudyGusts.toString()).not.toContain("<style");
		expect(NightCloudyHigh.toString()).not.toContain("<style");
	});

	it("has default size & color properties.", () => {
		expect(DirectionUp.toString()).toContain(
			"_objectWithoutProperties(props, ['color', 'size']);"
		);
		expect(NightCloudyGusts.toString()).toContain(
			"_objectWithoutProperties(props, ['color', 'size']);"
		);
		expect(NightCloudyHigh.toString()).toContain(
			"_objectWithoutProperties(props, ['color', 'size']);"
		);
	});
});
