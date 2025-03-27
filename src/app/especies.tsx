import "../../global.css";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';
import { useFonts, Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { TitleEspecies } from '../components/title-especies';
import { PreviusSpecies } from '../components/previus_species';
import acervulina_img from '../assets/icons/acervulina.png';
import maxima_img from '../assets/icons/maxima.png';
import tenella_img from '../assets/icons/Tenella.png';
import brunetti_img from '../assets/icons/brunetti.png';
import necatrix_img from '../assets/icons/necatrix.png';
import mitis_img from '../assets/icons/mitis.png';
import praecox_img from '../assets/icons/praecox.png';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: Roboto_400Regular,
    RobotoMedium: Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView>
      <View className='h-[100%]'>
        {/* Principais especies */}
        <View className='bg-white w-[100%] items-center justify-center'>
          {/* <View className='w-[100%] flex-row justify-center items-center mt-5'>
            <View className='bg-mygray-500 w-[33px] h-[4px]'></View>
            <Text className={'text-[20px] w-[70%] text-center text-black uppercase'}>Principais espécies</Text>
            <View className='bg-mygray-500 w-[33px] h-[4px]'></View>
          </View> */}
  
          {/* <View className={'w-[95%] mt-4 py-7 mb-4 flex-row items-center justify-center rounded-[5px]'}>
            <View className='w-[50%] items-center'>
              <Image source={acervulina_img} style={{width: 86, height:208.98}}/>
            </View>
            <View className='w-[50%] h-[208.98] items-center justify-center'>
              <View className='h-[60%] w-[100%] justify-end items-center'>
                <View>
                  <Text className={'text-black text-[24px] italic'}>Eimeria</Text>
                  <Text className={'text-black text-[24px] italic font-medium'}>acervulina</Text>
                </View>
              </View>
              <View className='h-[40%] justify-end'>
                <TouchableOpacity className='rounded-[8px] w-[154.08] h-[41] items-center justify-center'
                style={{ borderWidth: 1, borderColor: 'black', }}>
                  <Text className={'text-black text-[15px] font-bold'}>Ver mais</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View> */}
          <TitleEspecies title='Principais espécies' textColor='black'/>
          <PreviusSpecies name='acervulina' backgroundColor='bg-white' buttonColor='black' img={acervulina_img}/>
          <PreviusSpecies name='maxima' backgroundColor='bg-mygray-300' buttonColor='black' img={maxima_img}/>
          <PreviusSpecies name='tenella' backgroundColor='bg-white' buttonColor='black' img={tenella_img}/>
        </View>
        
        {/* Espécies menos frequentes */}
        <View className='bg-mygray-300 w-[100%] items-center justify-center'>
          <TitleEspecies title='Espécies menos frequentes' textColor='black'/>
          <PreviusSpecies name='brunetti' backgroundColor='bg-mygray-300' buttonColor='black' img={brunetti_img}/>
          <PreviusSpecies name='necatrix' backgroundColor='bg-mygray-600' buttonColor='black' img={necatrix_img}/>
        </View>
        
        {/* Espécies menos patológicas */}
        <View className='bg-mygray-800 w-[100%] items-center justify-center'>
          <TitleEspecies title='Espécies menos patológicas' textColor='white'/>
          <PreviusSpecies name='mitis' backgroundColor='bg-mygray-800' buttonColor='white' img={mitis_img}/>
          <PreviusSpecies name='praecox' backgroundColor='bg-mygray-900' buttonColor='white' img={praecox_img}/>
        </View>
      </View>
    </ScrollView>
  );
}

