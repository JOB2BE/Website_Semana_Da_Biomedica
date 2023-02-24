import React from 'react';
import { Column, Row, Text } from 'native-base';
import StyledBox from '../components/information/StyledBox';
import theme from '../theme';
import { Platform, StyleSheet } from 'react-native';

export default function ActivitiesPage() {
	const styles = StyleSheet.create({
		aboutBox: {
			paddingTop: '7%',
		},
	});

	return (
		<Column flex={0.6} space={30}>
			<Row justifyContent={'center'} style={styles.aboutBox}>
				<StyledBox
					flex={Platform.OS === ('ios' || 'android') ? 0.6 : 0.4}
					stackSpace={'30'}
					className={'NetworkingContainer'}
					bg={theme.colors.medYellow}
					borderRadius={25}
					backgroundColor={theme.colors.medYellow[0]}
					headingText={'Networking Sessions'} // can't get it in the center, the way it is on figma
					childrenJustifyContent={'center'}
				>
					<Column
						borderRadius={20}
						flex={1}
						backgroundColor={theme.colors.medYellow.pastel} // can't make the margins between the outside box and the interior one disapear so that it corresponds to what is in figma
					>
						<Text margin={'3'} fontSize={'md'}>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
							illo inventore veritatis et quasi architecto beatae vitae dicta sunt
							explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
							odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
							voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus
							error sit voluptatem accusantium doloremque laudantium, totam rem
							aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
							beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
							voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
							dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis
							unde omnis iste natus error sit voluptatem accusantium doloremque
							laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
							veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
							enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
							sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
							nesciunt.
						</Text>
					</Column>
				</StyledBox>
			</Row>
		</Column>
	);
}
