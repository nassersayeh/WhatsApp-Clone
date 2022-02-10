import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {  View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ContactListItem from '../components/ContactList';
import Users from '../data/Users';
import { FlatList } from 'react-native-gesture-handler';
export default function Contacts({ navigation }: RootTabScreenProps<'Chats'>) {
  return (
    <View style={styles.container}>
      <FlatList 
      style={{width:'100%'}}
      data={Users}

      renderItem={({item})=> <ContactListItem user={item} />}

      keyExtractor={(item)=> item.id}
      
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
