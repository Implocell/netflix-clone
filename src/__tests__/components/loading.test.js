import { render } from "@testing-library/react";

import { Loading } from "../../components";

describe("<Loading />", () => {
	test("should render the loading component", () => {
		const { container, getByTestId } = render(
			<Loading src="/iamges/karl.png" data-testid="loading" />
		);
		expect(getByTestId("loading")).toBeTruthy();
		expect(getByTestId("loading-picture")).toBeTruthy();
		expect(container.firstChild).toMatchSnapshot();
	});

	test("should render the loading releasebody", () => {
		const { container } = render(
			<Loading.ReleaseBody  />
		);
		expect(container.firstChild).toMatchSnapshot();
	});
});
