import { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { trimString } from '../../sharedFunctions';
import { computeStyles, showText, subscriptionMenu } from './functions';
import { style } from './styles';

const SubscriptionMenu = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <View style={style.subscription}>
      {subscriptionMenu.map((item, index) => {
        if (!showMore && index > 7) return null;

        return (
          <View
            key={index}
            style={{
              ...style.subscriptionMenu,
              ...computeStyles(index, subscriptionMenu.length, showMore),
            }}
          >
            <View style={style.subscriptionMenuImageWrapper}>
              <Image source={item.image} style={style.subscriptionMenuImage} />
            </View>
            <Text style={style.subscriptionMenuText}>
              {trimString(item.title, 15)}
            </Text>
          </View>
        );
      })}
      <TouchableOpacity
        style={style.showMore}
        onPress={() => setShowMore(!showMore)}
      >
        <Text style={style.showMoreText}>{showText(showMore)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubscriptionMenu;
