import galinha_img from '../assets/img/Galinha.png';
import "../../global.css";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Roboto_400Regular, useFonts } from '@expo-google-fonts/roboto';

export default function App() {
  const [textoIndex, setTextoIndex] = useState(0);
  const [botaoTexto, setBotaoTexto] = useState("Próximo");

  const textos = [
    "Desenvolvido para auxiliar o médico veterinário na identificação das" + 
    " lesões ocasionadas por essa parasitose. Esse aplicativo oferece, de" + 
    " maneira fácil e acessível, informações sobre as lesões, locais" + 
    " acometidos e possíveis agentes envolvidos",
    "utilize esse ícone para abrir o dicionário de termos técnicos",
    "utilize esse ícone para ver as referências"
  ];

  const imagens = [
    null,
    require('../assets/icons/Glossário.png'),
    require('../assets/icons/Referencia.png')
  ];

  const handlePress = () => {
    if (textoIndex < textos.length - 1) {
      // Muda para o próximo texto
      setTextoIndex(textoIndex + 1);
      if (textoIndex === 1){
        setBotaoTexto("Começar");
      }
    }
  };

  const handleStart = () => {
    if (botaoTexto === "Começar") {
      router.replace({pathname:'/especies'});
    }
  };

  const [fontsLoaded] = useFonts({
    Roboto: Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View className='h-[100%] bg-white'>
      <View className='h-[60%] justify-end'>
        <Image source={galinha_img} style={{width:'100%', height:'80%'}}/>
      </View>
      <View className='bg-white rounded-tl-[46px] rounded-tr-[46px] border-[1px] w-[100%] h-[100%] -top-[6%] pt-10'>
        <View className='items-center'>
          <Text className='text-[34px] font-roboto'>GUIA ILUSTRATIVO DA</Text>
          <Text className='text-[34px] font-bold font-roboto tracking-[0.5px]'>COCCIDIOSE AVIÁRIA</Text>
        </View>
        <View className='w-[100%] h-[20%] flex-row items-center justify-center'>
          {imagens[textoIndex] ? 
            <Text className='ml-[130px] mr-5 text-[15px] uppercase font-roboto leading-[20px]' style={{ textAlign: "justify" }}>{textos[textoIndex]}</Text>
            : 
            <Text className='px-[30px] text-[15px] uppercase font-roboto leading-[22px]' style={{ textAlign: "justify" }}>{textos[textoIndex]}</Text>}
          {imagens[textoIndex] && (
            <Image className='mr-[30%]'
              source={imagens[textoIndex]} 
              style={{ width: 79, height: 79 }}
            />
          )}
        </View>
        <View className=' h-[15px] justify-center flex-row'>
          {
            textoIndex === 0? <View className='bg-mygray-700 rounded-[15px] h-[15px] w-[15px] mr-[12px]'></View>:
            <View className='bg-mygray-500 rounded-[15px] h-[15px] w-[15px] mr-[12px]'></View>
          }
          {
            textoIndex === 1? <View className='bg-mygray-700 rounded-[15px] h-[15px] w-[15px] mr-[12px]'></View>:
            <View className='bg-mygray-500 rounded-[15px] h-[15px] w-[15px] mr-[12px]'></View>
          }
          {
            textoIndex === 2? <View className='bg-mygray-700 rounded-[15px] h-[15px] w-[15px]'></View>:
            <View className='bg-mygray-500 rounded-[15px] h-[15px] w-[15px]'></View>
          }
        </View>
        <View className='mt-5 justify-center items-center'>
          <View className=' justify-center items-center'>
            <TouchableOpacity onPress={botaoTexto === "Próximo" ? handlePress : handleStart} 
            className='bg-mygray-800 w-[319px] h-[50px] pt-[2.6%] rounded-[10px]'>
              <Text className='text-center text-white text-[24px] font-roboto font-bold uppercase'>{botaoTexto}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}