import { StatusBar } from 'expo-status-bar';
import { FlatList, ImageBackground, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DepositCard, MoneyboxCard } from 'components/organisms';
import { Button, Flex, Heading, IconButton, Text } from 'components/atoms';
import { bgMain } from 'assets/backgrounds';
import { colors } from 'theme';

import { styles } from './DepositsTemplate.styles';

interface DepositItem {
	id: string;
	isFinished: boolean;
	amount: number;
	currency: string;
	date: string;
	lastIncome: number;
	rate: number;
	onPressWithdrawalButton: () => void;
	onPressTopUpButton: () => void;
	onPressExtendButton: () => void;
}

interface MoneyboxItem {
	id: string;
	goal: number;
	saved: number;
	currency: string;
	title: string;
	onPressWithdrawalButton: () => void;
	onPressTopUpButton: () => void;
	onPressExtendButton: () => void;
}

interface Props {
	deposits: DepositItem[];
	moneyboxes: MoneyboxItem[];
	heading: string;
	depositsSubheading: string;
	moneyboxSubheading: string;
	primaryButtonTitle: string;
	secondaryButtonTitle: string;
	onPressPrimaryButton: () => void;
	onPressSecondaryButton: () => void;
	onPressInfoIcon: () => void;
}

export const DepositsTemplate = ({
	deposits,
	moneyboxes,
	heading,
	depositsSubheading,
	moneyboxSubheading,
	primaryButtonTitle,
	secondaryButtonTitle,
	onPressPrimaryButton,
	onPressSecondaryButton,
	onPressInfoIcon,
}: Props) => {
	return (
		<>
			<StatusBar style="dark" />
			<ImageBackground source={bgMain} style={styles.backgroundImg}>
				<SafeAreaView style={styles.container}>
					<Flex direction="row" style={styles.header}>
						<Heading size="h2" text={heading} />
						<IconButton
							iconColor={colors.white}
							iconName="info"
							iconSize={20}
							testID="deposits-template-info-icon-btn-test-id"
							onPress={onPressInfoIcon}
						/>
					</Flex>

					<View style={styles.deposits}>
						<Text style={styles.subheading} text={depositsSubheading} />
						<FlatList<DepositItem>
							data={deposits}
							renderItem={({
								item: {
									amount,
									currency,
									date,
									id,
									isFinished,
									lastIncome,
									rate,
									onPressWithdrawalButton,
									onPressExtendButton,
									onPressTopUpButton,
								},
								index,
							}) => (
								<DepositCard
									amount={amount}
									currency={currency}
									date={date}
									isFinished={isFinished}
									lastIncome={lastIncome}
									rate={rate}
									style={[index === 0 && styles.firstItem, styles.card]}
									testID={`${id}-deposit-card-test-id`}
									onPressExtendButton={onPressExtendButton}
									onPressTopUpButton={onPressTopUpButton}
									onPressWithdrawalButton={onPressWithdrawalButton}
								/>
							)}
						/>
					</View>

					<View style={styles.moneyboxes}>
						<Text style={styles.subheading} text={moneyboxSubheading} />
						<FlatList
							data={moneyboxes}
							renderItem={({
								item: {
									currency,
									goal,
									id,
									onPressExtendButton,
									onPressTopUpButton,
									onPressWithdrawalButton,
									saved,
									title,
								},
								index,
							}) => (
								<MoneyboxCard
									currency={currency}
									goal={goal}
									saved={saved}
									style={[index === 0 && styles.firstItem, styles.card]}
									testID={`${id}-moneybox-card-test-id`}
									title={title}
									onPressExtendButton={onPressExtendButton}
									onPressTopUpButton={onPressTopUpButton}
									onPressWithdrawalButton={onPressWithdrawalButton}
								/>
							)}
						/>
					</View>

					<Flex direction="row" style={styles.buttonContainer}>
						<Button
							style={styles.button}
							testID="deposits-template-secondary-btn-test-id"
							title={secondaryButtonTitle}
							type="secondary"
							onPress={onPressSecondaryButton}
						/>
						<Button
							style={styles.button}
							testID="deposits-template-primary-btn-test-id"
							title={primaryButtonTitle}
							onPress={onPressPrimaryButton}
						/>
					</Flex>
				</SafeAreaView>
			</ImageBackground>
		</>
	);
};
