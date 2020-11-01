import { render } from "@testing-library/react";
import { Feature } from "../../components";

describe("<Feature />", () => {
	test("should render the feature with populated data", () => {
		const { container, getByText } = render(
			<Feature>
				<Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
				<Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
			</Feature>
		);
		expect(getByText("Unlimited films, TV programmes and more.")).toBeTruthy();
		expect(getByText("Watch anywhere. Cancel at any time.")).toBeTruthy();
		expect(container.firstChild).toMatchSnapshot();
	});

	test("should render the feature with just title", () => {
		const { container, queryByText } = render(
			<Feature>
				<Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
			</Feature>
		);
		expect(
			queryByText("Unlimited films, TV programmes and more.")
		).toBeTruthy();
		expect(queryByText("Watch anywhere. Cancel at any time.")).toBeFalsy();
		expect(container.firstChild).toMatchSnapshot();
	});
});
