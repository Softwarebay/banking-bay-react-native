import { Logo as LogoIcon } from 'assets/icons';

interface Props {
	testID?: string;
}

export const Logo = ({ testID }: Props) => {
	return <LogoIcon testID={testID} />;
};
