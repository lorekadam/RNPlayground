import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ListItem from '../ListItem';
import {styles} from './style';

type ListType = {};

const NAMES = [
  'John Dolphin',
  'Mike Monkey',
  'Shawn Elephant',
  'Adam Lion',
  'Mark Bird',
  'Jimmy Cow',
];

type ItemElement = {
  name: string;
  id: string;
};

export const List = ({}: ListType) => {
  const [items, setItems] = useState<ItemElement[]>([]);

  const add = () => {
    const index = Math.floor(Math.random() * NAMES.length);
    setItems([...items, {name: NAMES[index], id: Date.now().toString()}]);
  };

  const remove = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <View style={styles.wrapper}>
      {items.map(({name, id}, i) => (
        <ListItem name={name} key={id} index={i} remove={() => remove(id)} />
      ))}
      <TouchableOpacity style={styles.add} onPress={add}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};
