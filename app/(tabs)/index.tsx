import {Image, StyleSheet, Platform, View} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


const newsData = [
    {
        title: 'Breaking News',
        image: require('@/assets/images/news1.jpg'),
        summary: 'This is a short summary of the breaking news.',
    },
    {
        title: 'Tech Update',
        image: require('@/assets/images/news2.jpg'),
        summary: 'Latest advancements in technology you should know.',
    },
    {
        title: 'Sports Highlights',
        image: require('@/assets/images/news3.jpg'),
        summary: 'Top moments from recent sports events.',
    },
];



export default function HomeScreen() {
    return (
        <ParallaxScrollView headerBackgroundColor={{light: '#A1CEDC', dark: '#1D3D47'}} headerImage={<Image
            source={require('@/assets/images/partial-react-logo.png')}
            style={styles.reactLogo}
        />}>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">News</ThemedText>
            </ThemedView>
            <ThemedView style={styles.newsContainer}>
                {newsData.map((news, index) => (
                    <View key={index} style={styles.newsItem}>
                        <Image source={news.image} style={styles.newsImage} />
                        <ThemedText style={styles.colorBlack} type="subtitle">{news.title}</ThemedText>
                        <ThemedText style={styles.colorBlack}>{news.summary}</ThemedText>
                    </View>
                ))}
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    newsContainer: {
        flexDirection: 'column',
        gap: 16,
        paddingHorizontal: 16,
    },
    newsItem: {
        backgroundColor: 'rgba(13,46,71,0.65)',
        padding: 16,
        borderRadius: 8,

    },
    newsImage: {
        width: '100%',
        height: 250,
        borderRadius: 8,
        marginBottom: 8,
        objectFit:'cover'
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    colorBlack:{
        color:'#ffffff'
    }
});

