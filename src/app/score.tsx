import "../../global.css";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ActivityIndicator, Modal, Dimensions } from 'react-native';
import { Link, router } from 'expo-router';
import { useFonts, Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import details_icon from '../assets/icons/details_icon.png';
import lupa_icon from '../assets/icons/lupawhite_icon.png';
import closewhite_icon from '../assets/icons/closewhite_icon.png';
import closeblack_icon from '../assets/icons/closeblack_icon.png';
import glossario_icon from '../assets/icons/Glossário.png';
import referencias_icon from '../assets/icons/Referencia.png';
import score1 from '../assets/img/acervulina/Score 1.png';
import arrowback_icon from '../assets/icons/arrowback_icon.png';

import { LinearGradient } from 'expo-linear-gradient';
import { Modalize } from "react-native-modalize";
import { useState, useEffect, useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function App() {
  const modalRef = useRef<Modalize>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const { width, height } = Dimensions.get("window"); // Obtém o tamanho da tela

  const [fontsLoaded] = useFonts({
    Roboto: Roboto_400Regular,
    RobotoMedium: Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <>
    <GestureHandlerRootView>
    <ScrollView className="bg-white">
      <View className='w-[100%] flex-row justify-center items-center mt-5 mb-[38px]'>
        <View className="absolute left-5">
          <TouchableOpacity onPress={() => router.back()}>
            <Image source={arrowback_icon} style={{width:25, height:25}}/>
          </TouchableOpacity>
        </View>
        <View className='bg-mygray-500 w-[33px] h-[4px]'/>
          <Text className={'text-[20px] w-[50%] text-center font-medium font-RobotoMedium'}>SCORE 1</Text>
        <View className='bg-mygray-500 w-[33px] h-[4px]'/>
      </View>

      {/* Imagem score */}

      <View className="justify-center items-center mb-[35px]">
        <Image source={score1} style={{width:347, height:167, borderRadius: 10}}/>
        <View className="absolute top-[80%] left-[85%]">
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image source={lupa_icon} style={{width:25, height:25}}/>
          </TouchableOpacity>
        </View>
      </View>

      {/* Descrição Geral */}
      <View className="mb-[64px] justify-center items-center">
        <View className="flex-row items-center pl-7 mb-[13px] w-[100%]">
          <Image source={details_icon} style={{width:25, height:25}}/>
          <Text className="ml-5 text-[18px] font-medium font-RobotoMedium">Detalhes</Text>
        </View>

        <View className="bg-mygray-400 rounded-[5px] py-1 px-3 w-[70%] mb-2">
          <Text className="text-[16px] font-roboto">Estrias brancas, com orientação transversal em relação às paredes intestinais</Text>
        </View>
        <View className="bg-mygray-400 rounded-[5px] py-1 px-3 w-[70%]">
          <Text className="text-[16px] font-roboto">Até 5 lesões por cm</Text>
        </View>
      </View>
    </ScrollView>
    <View className="absolute top-[92%] left-[83%]">
      <TouchableOpacity onPress={() => modalRef.current?.open()}>
        <Image source={glossario_icon} style={{width:50, height:50}}/>
      </TouchableOpacity>
    </View>
    <View className="absolute top-[92%] left-[5%]">
      <TouchableOpacity onPress={() => router.push({pathname:'/references'})}>
        <Image source={referencias_icon} style={{width:50, height:50}}/>
      </TouchableOpacity>
    </View>
    <Modalize ref={modalRef} 
      adjustToContentHeight        
      childrenStyle={{ height: 800, borderRadius: 10, backgroundColor: "#CECECE" }}
      scrollViewProps={{ showsVerticalScrollIndicator: false }}>
      <View className="py-5">
            <Text className="text-[20px] uppercase font-bold text-center">Dicionário de termos técnicos</Text>
      </View>
      <View className="absolute top-5 left-[90%]">
        <TouchableOpacity onPress={() => modalRef.current?.close()}>
          <Image source={closeblack_icon} style={{width:25, height:25}}/>
        </TouchableOpacity>
      </View>
      <ScrollView className="bg-mygray-400 rounded-t-10">
        <View className="bg-white rounded-[15px] mx-5 p-4 mb-2 ">
          <Text className="text-[16px]"><Text className="font-bold">Caseosa</Text>: O termo é comumente usado para se referir a 
          "substância caseosa" que é uma secreção espessa, esbranquiçada, e pastosa.</Text>
        </View>
        <View className="bg-white rounded-[15px] mx-5 p-4 mb-2 ">
          <Text className="text-[16px]"><Text className="font-bold">Coalecente</Text>: que se refere a algo que se une, funde ou combina em um único todo.</Text>
        </View>
        <View className="bg-white rounded-[15px] mx-5 p-4 mb-2 ">
          <Text className="text-[16px]"><Text className="font-bold">Divertículo do saco vitelínico</Text>: é um remanescente do pedúnculo vitelínico 
          ( tubo que liga o saco vitelínico ao intestino médio do embrião de aves) que se encontra na maioria das aves, e é mais desenvolvido 
          nas mais jovens</Text>
        </View>
        <View className="bg-white rounded-[15px] mx-5 p-4 mb-2 ">
          <Text className="text-[16px]"><Text className="font-bold">Embalonamento</Text>: É um termo usado para descrever a distensão 
          ou aumento de volume de uma região do corpo, muitas vezes relacionada a gases ou líquidos</Text>
        </View>
        <View className="bg-white rounded-[15px] mx-5 p-4 mb-2 ">
          <Text className="text-[16px]"><Text className="font-bold">Exudato</Text>: líquidos, células ou outras substâncias
           celulares eliminados vagarosamente dos VASOS SANGUÍNEOS.</Text>
        </View>
        <View className="bg-white rounded-[15px] mx-5 p-4 mb-2 ">
          <Text className="text-[16px]"><Text className="font-bold">Morbidade</Text>: é o termo usado para indicar a frequência ou 
          proporção de indivíduos que apresentam uma determinada enfermidade dentro de um grupo específico. Diferentemente de 
          Mortalidade, que é o numero de mortes causados por uma doença.</Text>
        </View>
        <View className="bg-white rounded-[15px] mx-5 p-4 mb-2 ">
          <Text className="text-[16px]"><Text className="font-bold">Período pré-patente</Text>: é o intervalo entre a 
          infecção e o aparecimento dos primeiros sinais de uma doença.</Text>
        </View>
        <View className="bg-white rounded-[15px] mx-5 p-4 mb-2 ">
          <Text className="text-[16px]"><Text className="font-bold">Petéquias</Text>: pequenos pontos vermelhos
           ou marrons causadas por pequenos sangramentos</Text>
        </View>
        <View className="bg-white rounded-[15px] mx-5 p-4 mb-2 ">
          <Text className="text-[16px]"><Text className="font-bold">Serosa</Text>: tecido conjuntivo que reveste as 
          cavidades do corpo, secretando um líquido claro que lubrifica as superfícies dos órgãos.</Text>
        </View>
        <View className="bg-white rounded-[15px] mx-5 p-4 mb-2 ">
          <Text className="text-[16px]"><Text className="font-bold">Tonsilas</Text>: são estruturas do tecido linfático, 
          localizadas na região da garganta e da cavidade oral, que fazem parte do sistema imunológico. Elas ajudam a 
          combater infecções ao atuar como uma barreira contra microrganismos que entram pelo nariz e pela boca.</Text>
        </View>
        <View className="bg-white rounded-[15px] mx-5 p-4 mb-2 ">
          <Text className="text-[16px]"><Text className="font-bold">Trabéculas</Text>: refere-se a pequenas estruturas em forma de feixes ou redes dentro de tecidos, especialmente em ossos, coração e alguns órgãos.</Text>
        </View>
      </ScrollView>
    </Modalize>

    <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View className="flex-1 justify-center items-center bg-black/80">
          <Image 
          source={score1}
          resizeMode="contain" 
          style={{ 
            position: 'absolute',
            transform: [{ rotate: "90deg" }],
            width: height, 
            height: width,
            }} />
          
          {/* Botão de Fechar */}
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            className="absolute top-10 right-5 p-3 rounded-full"
          >
            <Image source={closewhite_icon} style={{height:25, width:25}}/>
          </TouchableOpacity>
        </View>
      </Modal>
    </GestureHandlerRootView>
    </>
  );
}

