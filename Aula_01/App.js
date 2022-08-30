import React from 'react';
import{View, Text, Image, ScrollView, TextInput} from 'react-native';

const ONDA = () => {
  return(
    <ScrollView>
        <View>
          <Text
            style={{
              fontSize:45,
              alignSelf: "center",
              color: "green",
            }}
          >
            O coringão é maior que essa esfera que você tá vendo ai!
            </Text>
            <Image
              source={{
                uri: 'https://wall.alphacoders.com/by_sub_category.php?id=124024&name=Paisagem+Pap%C3%A9is+de+Parede&filter=4K+Ultra+HD&lang=Portuguese',
              }}
              style={{ width:200, height:210, alignSelf: 'center'}}
              />
          </View>
          <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                padding: 5,
                margin: 15,
              }}
              defaultValue="DIGITE AQUI !!!"
              />
        </ScrollView>
        );
}

export default ONDA; 