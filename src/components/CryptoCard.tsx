import React, { FC } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

interface Props {
    name: string,
    symbol: string,
    currentPrice: number,
    priceChangePercentage7d: number,
    logoUrl: string
}
const CryptoCard: FC<Props> = ({name, symbol, currentPrice, priceChangePercentage7d, logoUrl}) => {
    const priceChangeColor = priceChangePercentage7d > 0 ? 'green' : 'red';
    return(
        <View style={styles.cardWrapper}>
            <View style={styles.leftWrapper}>
                <Image source={{uri: logoUrl}} style={styles.image}/>
                <View style={styles.titlesWrapper}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
                    </View>
            </View>

            <View style={styles.rightWrapper}>
                <Text style={styles.title}>${currentPrice.toLocaleString('en-US', {currency: 'USD'})}</Text>
                <Text style={[styles.subtitle, {color: priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        paddingHorizontal: 16,
        marginTop: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    leftWrapper: {
        flexDirection: "row",
        alignItems: 'center'
    },
    image: {
        height: 48,
        width: 48,
    },
    titlesWrapper: {
        marginLeft: 8,
    },
    title: {
        fontSize: 18,
        color: '#00FFF0',
    },
    subtitle: {
        fontSize: 14,
        color: '#A9ABB1',
    },
    rightWrapper: {
        alignItems: "flex-end"
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#00FFF0',
        padding: 12
    }
});
export default CryptoCard;