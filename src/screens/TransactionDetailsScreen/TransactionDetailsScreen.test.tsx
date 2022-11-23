import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { TransactionDetailsScreen } from './TransactionDetailsScreen';

describe('TransactionDetailsScreen', () => {
	it('should match snapshot', () => {
		const tree = testRenderer.create(<TransactionDetailsScreen />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it("should display 'Sent to' row with value 'Hillary Holmes'", () => {
		render(<TransactionDetailsScreen />);

		const [subtitle, value] = screen.getByTestId(
			'transaction-details-row-sent-to-test-id'
		).children;

		expect(subtitle).toHaveTextContent('Sent to');
		expect(value).toHaveTextContent('Hillary Holmes');
	});

	it("should display 'Card' row with value '**** 4253'", () => {
		render(<TransactionDetailsScreen />);

		const [subtitle, value] = screen.getByTestId(
			'transaction-details-row-card-test-id'
		).children;

		expect(subtitle).toHaveTextContent('Card');
		expect(value).toHaveTextContent('**** 4253');
	});

	it("should display 'Amount' row with value '10.00' and 'USD' as currency", () => {
		render(<TransactionDetailsScreen />);

		const [subtitle, value] = screen.getByTestId(
			'transaction-details-row-amount-test-id'
		).children;

		expect(subtitle).toHaveTextContent('Amount');
		expect(value).toHaveTextContent('10.00 USD');
	});

	it("should display 'Fee' row with value '0.00' and 'USD' as currency", () => {
		render(<TransactionDetailsScreen />);

		const [subtitle, value] = screen.getByTestId(
			'transaction-details-row-fee-test-id'
		).children;

		expect(subtitle).toHaveTextContent('Fee');
		expect(value).toHaveTextContent('0.00 USD');
	});

	it("should display 'Residual balance' row with value '4853.27' and 'USD' as currency", () => {
		render(<TransactionDetailsScreen />);

		const [subtitle, value] = screen.getByTestId(
			'transaction-details-row-balance-test-id'
		).children;

		expect(subtitle).toHaveTextContent('Residual balance');
		expect(value).toHaveTextContent('4853.27 USD');
	});

	it("should display 'Download PDF' as primary button title", () => {
		render(<TransactionDetailsScreen />);

		const btn = screen.getByTestId('transaction-details-btn-test-id');

		expect(btn).toHaveTextContent('Download PDF');
	});

	it("should log 'onDownloadPDF' after pressing on primary button", () => {
		render(<TransactionDetailsScreen />);
		console.log = jest.fn();

		const btn = screen.getByTestId('transaction-details-btn-test-id');

		fireEvent.press(btn);

		expect(console.log).toHaveBeenCalledWith('onDownloadPDF');
	});
});
