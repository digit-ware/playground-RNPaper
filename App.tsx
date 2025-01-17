/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  ScrollView,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import {
  Card,
  Text,
  Avatar,
  Button,
  Surface,
  TextInput,
  DataTable,
  ActivityIndicator,
} from 'react-native-paper';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [items] = React.useState([
    {
      key: 1,
      name: 'Cupcake',
      calories: 356,
      fat: 16,
    },
    {
      key: 2,
      name: 'Eclair',
      calories: 262,
      fat: 16,
    },
    {
      key: 3,
      name: 'Frozen yogurt',
      calories: 159,
      fat: 6,
    },
    {
      key: 4,
      name: 'Gingerbread',
      calories: 305,
      fat: 3.7,
    },
  ]);

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Surface
          mode="flat"
          elevation={5}
          style={{
            gap: 16,
            flex: 1,
            padding: 24,
            paddingBottom: 100,
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Card style={{width: '100%'}}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Dessert</DataTable.Title>
                <DataTable.Title numeric>Calories</DataTable.Title>
                <DataTable.Title numeric>Fat</DataTable.Title>
              </DataTable.Header>

              {items.map(item => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell>{item.name}</DataTable.Cell>
                  <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
                  <DataTable.Cell numeric>{item.fat}</DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </Card>
          <Card
            mode="elevated"
            theme={{dark: true}}
            style={{
              padding: 16,
              width: '100%',
              // alignItems: 'center',
              // justifyContent: 'center',
            }}>
            <TextInput label="Email" />
            <TextInput label="Password" secureTextEntry />
            <Button
              icon="camera"
              mode="contained"
              onPress={() => console.log('Login')}>
              LOGIN
            </Button>
          </Card>
          <Card mode="outlined" style={{width: '100%'}} theme={{dark: true}}>
            <Card.Title
              title="Card Title"
              subtitle="Card Subtitle"
              left={props => <Avatar.Icon {...props} size={24} icon="folder" />}
            />
            <Card.Content>
              <Text variant="titleLarge">Card title</Text>
              <Text variant="displayLarge">Display Large</Text>
              <Text variant="displayMedium">Display Medium</Text>
              <Text variant="displaySmall">Display small</Text>

              <Text variant="headlineLarge">Headline Large</Text>
              <Text variant="headlineMedium">Headline Medium</Text>
              <Text variant="headlineSmall">Headline Small</Text>

              <Text variant="titleLarge">Title Large</Text>
              <Text variant="titleMedium">Title Medium</Text>
              <Text variant="titleSmall">Title Small</Text>

              <Text variant="bodyLarge">Body Large</Text>
              <Text variant="bodyMedium">Body Medium</Text>
              <Text variant="bodySmall">Body Small</Text>

              <Text variant="labelLarge">Label Large</Text>
              <Text variant="labelMedium">Label Medium</Text>
              <Text variant="labelSmall">Label Small</Text>
              <ActivityIndicator />
            </Card.Content>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
            <Card.Actions>
              <Button
                icon="camera"
                mode="contained"
                onPress={() => console.log('Pressed')}
                theme={{fonts: {labelLarge: {letterSpacing: 3}}}}>
                Press me
              </Button>

              <Button
                uppercase
                icon="camera"
                mode="contained"
                onPress={() => console.log('Pressed 2')}
                theme={{colors: {primary: 'green'}}}>
                Press me 2
              </Button>
            </Card.Actions>
          </Card>
        </Surface>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
