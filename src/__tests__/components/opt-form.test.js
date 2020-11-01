import { render } from "@testing-library/react";
import { OptForm } from "../../components";

describe("<OptForm />", () => {
	test("should render the <OptForm /> with populated data", () => {
		const { container, getByText, getByPlaceholderText } = render(
			<OptForm>
				<OptForm.Input placeholder="Email adress" />
				<OptForm.Button>Try it now</OptForm.Button>
				<OptForm.Text>
					Ready to watch? Enter your email to create or restart your membership
				</OptForm.Text>
			</OptForm>
		);

		expect(getByText("Try it now")).toBeTruthy();
		expect(
			getByText(
				"Ready to watch? Enter your email to create or restart your membership"
			)
		).toBeTruthy();
		expect(getByPlaceholderText("Email adress")).toBeTruthy();
		expect(container.firstChild).toMatchSnapshot();
	});
});
