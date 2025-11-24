import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Animated,
  Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const { width } = Dimensions.get('window');

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [city, setCity] = useState('');
  const [activeTab, setActiveTab] = useState('home');
  const [weatherResult, setWeatherResult] = useState('');
  const [menuAnimation] = useState(new Animated.Value(-250));

  const toggleMenu = () => {
    const toValue = isMenuOpen ? -250 : 0;
    Animated.timing(menuAnimation, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCheckWeather = () => {
    if (city.trim()) {
      setWeatherResult(`Checking weather for ${city}...`);
      // Replace with actual weather API call
    } else {
      setWeatherResult('Please enter a city name');
    }
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'today', label: 'Today' },
    { id: 'weekly', label: 'Weekly' },
    { id: 'settings', label: 'Settings' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Background */}
      <View style={styles.background} />

      {/* Hamburger Button */}
      <TouchableOpacity
        style={styles.hamburger}
        onPress={toggleMenu}
        activeOpacity={0.7}
      >
        <Text style={styles.hamburgerIcon}>☰</Text>
      </TouchableOpacity>

      {/* Side Menu */}
      <Animated.View
        style={[
          styles.menu,
          { transform: [{ translateX: menuAnimation }] }
        ]}
      >
        <View style={styles.menuContent}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.menuItem,
                activeTab === item.id && styles.menuItemActive
              ]}
              onPress={() => {
                setActiveTab(item.id);
                toggleMenu();
              }}
            >
              <Text
                style={[
                  styles.menuText,
                  activeTab === item.id && styles.menuTextActive
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>

      {/* Overlay */}
      {isMenuOpen && (
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={toggleMenu}
        />
      )}

      {/* Main Content */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <Text style={styles.title}>☁ SkyCheck ☀</Text>
          <Text style={styles.tagline}>Your mood-friendly weather buddy!</Text>

          <TextInput
            style={styles.input}
            placeholder="Type a city..."
            placeholderTextColor="#aaa"
            value={city}
            onChangeText={setCity}
            onSubmitEditing={handleCheckWeather}
            returnKeyType="search"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleCheckWeather}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Check Weather</Text>
          </TouchableOpacity>

          {weatherResult ? (
            <View style={styles.resultBox}>
              <Text style={styles.resultText}>{weatherResult}</Text>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#87CEEB',
  },
  hamburger: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1000,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  hamburgerIcon: {
    fontSize: 24,
    color: '#333',
  },
  menu: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 250,
    height: '100%',
    backgroundColor: 'white',
    zIndex: 999,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  menuContent: {
    marginTop: 100,
    paddingHorizontal: 15,
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 8,
  },
  menuItemActive: {
    backgroundColor: '#1E88E5',
  },
  menuText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1E88E5',
  },
  menuTextActive: {
    color: 'white',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 998,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 100,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 40,
    width: width - 40,
    maxWidth: 600,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    padding: 18,
    fontSize: 18,
    borderWidth: 4,
    borderColor: '#1E88E5',
    borderRadius: 15,
    marginBottom: 25,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#1E88E5',
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#1E88E5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultBox: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#E3F2FD',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#1E88E5',
  },
  resultText: {
    fontSize: 16,
    color: '#1565C0',
    textAlign: 'center',
  },
});