import React from 'react';
import * as UI from '@/components/common';
import {Image, StyleSheet} from 'react-native';
import {Rating} from 'react-native-ratings';
import {useTheme} from '@/contexts/ThemeContext';

interface RateMerchantProps {}

const RateMerchant: React.FC<RateMerchantProps> = () => {
  const {colors} = useTheme();

  const [comment, setComment] = React.useState<string>('');
  const [rating, setRating] = React.useState<number>(0);

  const ratingCompleted = (rate: any) => {
    setRating(rate);
    console.log(rating);
  };

  return (
    <UI.Block>
      <UI.Spacer large />

      <UI.Block center>
        <Image
          style={styles.image}
          source={{uri: 'https://placekitten.com/200'}}
        />
      </UI.Block>

      <UI.Spacer />

      <UI.Text h2 style={{textAlign: 'center'}}>
        How was your experience with Nnamani Kester?
      </UI.Text>

      <UI.Spacer medium />

      <Rating
        showRating={false}
        startingValue={rating}
        onFinishRating={ratingCompleted}
        style={{paddingVertical: 10}}
      />

      <UI.Spacer large />

      <UI.Block>
        <UI.Text>Write a comment</UI.Text>
        <UI.TextInput value={comment} onChangeText={setComment} />
      </UI.Block>

      <UI.Spacer large />

      <UI.Button primary>
        <UI.Text color={colors.white} bold>
          SUBMIT
        </UI.Text>
      </UI.Button>
    </UI.Block>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
});

export default RateMerchant;
