import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { OnboardingTemplate } from './OnboardingTemplate';

import type { Props } from './OnboardingTemplate';

describe('OnboardingTemplate', () => {
	const onPressOnboardingBtn = jest.fn<Props['onPressOnboardingBtn'], []>();
	const onScroll = jest.fn<Props['onScroll'], []>();

	const props: Omit<Props, 'currentSlideIndex'> = {
		onboardingSlides: [
			{
				id: 1,
				title: 'Slide 1',
				description: 'Description 1',
				img: 'onboarding1',
			},
			{
				id: 2,
				title: 'Slide 2',
				description: 'Description 2',
				img: 'onboarding2',
			},
			{
				id: 3,
				title: 'Slide 3',
				description: 'Description 3',
				img: 'onboarding3',
			},
		],
		onPressOnboardingBtn,
		onScroll,
	};

	it('should match snapshot - slide 1', () => {
		const tree = testRenderer
			.create(<OnboardingTemplate {...props} currentSlideIndex={0} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - slide 2', () => {
		const tree = testRenderer
			.create(<OnboardingTemplate {...props} currentSlideIndex={1} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should match snapshot - slide 3', () => {
		const tree = testRenderer
			.create(<OnboardingTemplate {...props} currentSlideIndex={2} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render paginator with 3 indicators', () => {
		render(<OnboardingTemplate {...props} currentSlideIndex={0} />);

		const paginator = screen.getByTestId(
			'onboarding-template-paginator-test-id'
		);

		expect(paginator.children).toHaveLength(3);
	});

	it('should render slide 1 - title, description, img', () => {
		render(<OnboardingTemplate {...props} currentSlideIndex={0} />);

		const title1 = screen.getByTestId('onboarding-heading-1-test-id');
		const description1 = screen.getByTestId('onboarding-text-1-test-id');

		const img1 = screen.getByTestId('onboarding1-img-test-id');
		const img2 = screen.queryByTestId('onboarding2-img-test-id');
		const img3 = screen.queryByTestId('onboarding3-img-test-id');

		const [dot1, dot2, dot3] = screen.getByTestId(
			'onboarding-template-paginator-test-id'
		).children;

		expect(title1).toHaveTextContent('Slide 1');
		expect(description1).toHaveTextContent('Description 1');

		expect(dot1).toHaveStyle({
			opacity: 1,
		});
		expect(dot2).toHaveStyle({
			opacity: 0.2,
		});
		expect(dot3).toHaveStyle({
			opacity: 0.2,
		});

		expect(img1).not.toBeNull();
		expect(img2).toBeNull();
		expect(img3).toBeNull();
	});

	it('should render slide 2 - title, description, img', () => {
		render(<OnboardingTemplate {...props} currentSlideIndex={1} />);

		const title2 = screen.getByTestId('onboarding-heading-2-test-id');
		const description2 = screen.getByTestId('onboarding-text-2-test-id');

		const img2 = screen.getByTestId('onboarding2-img-test-id');
		const img1 = screen.queryByTestId('onboarding1-img-test-id');
		const img3 = screen.queryByTestId('onboarding3-img-test-id');

		const [dot1, dot2, dot3] = screen.getByTestId(
			'onboarding-template-paginator-test-id'
		).children;

		expect(title2).toHaveTextContent('Slide 2');
		expect(description2).toHaveTextContent('Description 2');

		expect(dot2).toHaveStyle({
			opacity: 1,
		});
		expect(dot1).toHaveStyle({
			opacity: 0.2,
		});
		expect(dot3).toHaveStyle({
			opacity: 0.2,
		});

		expect(img2).not.toBeNull();
		expect(img1).toBeNull();
		expect(img3).toBeNull();
	});

	it('should render slide 3 - title, description, img', () => {
		render(<OnboardingTemplate {...props} currentSlideIndex={2} />);

		const title3 = screen.getByTestId('onboarding-heading-3-test-id');
		const description3 = screen.getByTestId('onboarding-text-3-test-id');

		const img3 = screen.getByTestId('onboarding3-img-test-id');
		const img1 = screen.queryByTestId('onboarding1-img-test-id');
		const img2 = screen.queryByTestId('onboarding2-img-test-id');

		const [dot1, dot2, dot3] = screen.getByTestId(
			'onboarding-template-paginator-test-id'
		).children;

		expect(title3).toHaveTextContent('Slide 3');
		expect(description3).toHaveTextContent('Description 3');

		expect(dot3).toHaveStyle({
			opacity: 1,
		});
		expect(dot1).toHaveStyle({
			opacity: 0.2,
		});
		expect(dot2).toHaveStyle({
			opacity: 0.2,
		});

		expect(img3).not.toBeNull();
		expect(img1).toBeNull();
		expect(img2).toBeNull();
	});

	it("should render 'Get Started' button", () => {
		render(<OnboardingTemplate {...props} currentSlideIndex={0} />);

		const btn = screen.getByTestId('onboarding-btn-test-id');

		expect(btn).toHaveTextContent('Get Started');
	});

	it("should handle press events on 'Get Started' button", () => {
		render(<OnboardingTemplate {...props} currentSlideIndex={0} />);

		const btn = screen.getByTestId('onboarding-btn-test-id');

		fireEvent.press(btn);

		expect(onPressOnboardingBtn).toHaveBeenCalledTimes(1);
	});
});
