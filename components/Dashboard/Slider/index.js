import { View, Text, Dimensions ,StyleSheet,Image} from 'react-native'
import React,{Component,} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Styles } from './Style';
import { scrollInterpolator,animatedStyles } from '../../../utils/animations';
import Carousel,{Pagination  } from 'react-native-snap-carousel';







const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const DATA = [
    {
        id: 1,
        name: 'React JS',
        url: 'https://www.chama254.com/f/assets/img/banner/1.jpg',
      },
      {
        id: 2,
        name: 'JavaScript',
        url: 'https://www.chama254.com/f/assets/img/banner/5.jpg',
      },

];

export default class Slider extends Component {
 state={
     index:0
 }
    get  pagination () {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
              dotsLength={DATA.length}
              activeDotIndex={this.state.index}
              containerStyle={{ backgroundColor: 'transparent',
            borderRadius:20
         }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: 'rgba(255, 255, 255, 0.92)'
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
    }


    constructor(props) {
        super(props);
        this._renderItem = this._renderItem.bind(this)
      }
    
      _renderItem({ item }) {
        return (
             <Image
  style={{ width: ITEM_WIDTH, height:  ITEM_HEIGHT ,
borderRadius:20
}}

             resizeMode='contain'
             source={{uri:item.url}}
             />
        );
      }
    render(){
        return (
            <LinearGradient
            style={Styles.maincontainer}
            colors={[ 'white','#ff5a6e']}
            >
              <Carousel
              Carousel layout={'default'}
          ref={(c) => this.carousel = c}
          data={DATA}
          renderItem={this._renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={(index) => this.setState({ index })}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          useScrollView={true}          
        />
                        { this.pagination }


            </LinearGradient>
        )
    }


}
const styles=StyleSheet.create({

    itemContainer:{
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        borderRadius:5
      },
    
});