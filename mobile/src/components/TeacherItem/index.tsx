import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whtasappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
	return (
		<View style={ styles.container }>
			<View style={ styles.profile }>
				<Image
					source={{ uri: 'https://github.com/joeldorosarioo.png' }}
					style={ styles.avatar }
				/>

				<View style={ styles.profileInfo }>
					<Text style={ styles.name}>Joel Oliveira</Text>
					<Text style={ styles.subject }>Química</Text>
				</View>
			</View>

			<Text style={ styles.bio }>
				Entusiasta das melhores tecnologias de química avançada.
				{'\n'}{'\n'}
				Apaixonado por explodir coisas em laboratório e por mudar a vida  das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
			</Text>

			<View style={ styles.footer }>
				<Text style={ styles.price }>
					Preço/hora {'   '}
					<Text style={ styles.priceValue }>R$ 20,00</Text>
				</Text>

				<View style={ styles.buttonsContainer }>
					<RectButton style={ [styles.favoriteButton, styles.favorited] }>
						{/* <Image source={ heartOutlineIcon } /> */}
						<Image source={ unFavoriteIcon } />
					</RectButton>

					<RectButton style={ styles.contacButton }>
						<Image source={ whtasappIcon } />
						<Text style={ styles.contactButtonText }>Entrar em contato</Text>
					</RectButton>
				</View>
			</View>
		</View>
	);
}

export default TeacherItem;