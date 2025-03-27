import "../../global.css";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ActivityIndicator, } from 'react-native';
import { Link } from 'expo-router';
import { useFonts, Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import descricao_icon from '../assets/icons/descricao_icon.png';
import alvo_icon from '../assets/icons/alvo_icon.png';
import medic_icon from '../assets/icons/medico_icon.png';
import score_icon from '../assets/icons/score_icon.png';
import lupa_icon from '../assets/icons/lupa_icon.png';
import close_icon from '../assets/icons/closeblack_icon.png';
import glossario_icon from '../assets/icons/Glossário.png';
import referencias_icon from '../assets/icons/Referencia.png';
import score1 from '../assets/img/acervulina/Score 1.png';
import score2 from '../assets/img/acervulina/Score 2.png';
import score3 from '../assets/img/acervulina/Score 3.png';
import score4 from '../assets/img/acervulina/Score 4.png';
import { LinearGradient } from 'expo-linear-gradient';
import { Modalize } from "react-native-modalize";
import { useState, useEffect, useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function App() {
  const modalRef = useRef<Modalize>(null);

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
        <View className='bg-mygray-500 w-[33px] h-[4px]'/>
        <Text className={'text-[20px] w-[50%] text-center italic font-medium font-RobotoMedium'}>Eimeria acervulina</Text>
        <View className='bg-mygray-500 w-[33px] h-[4px]'/>
      </View>
      {/* Descrição Geral */}
      <View className="mb-[64px] justify-center items-center">
        <View className="flex-row items-center pl-7 mb-[13px] w-[100%]">
          <Image source={descricao_icon} style={{width:25, height:25}}/>
          <Text className="ml-5 text-[18px] font-medium font-RobotoMedium">Descrição geral</Text>
        </View>

        <View className="bg-mygray-400 rounded-[5px] py-1 px-3 w-[70%]">
          <Text className="text-[16px] font-roboto">Aves tristes (prostradas)</Text>
        </View>
      </View>

      {/* Local de ação */}
      <View className="mb-[64px] justify-center items-center">
        <View className="flex-row items-center pl-7 mb-[13px] w-[100%]">
          <Image source={alvo_icon} style={{width:25, height:25}}/>
          <Text className="ml-5 text-[18px] font-medium font-RobotoMedium">Local de ação</Text>
        </View>

        <View className="bg-mygray-400 rounded-[5px] py-1 px-3 w-[70%]">
          <Text className="text-[16px] font-roboto">Parte superior do intestino delgado e duodeno</Text>
        </View>
      </View>

      {/* Sinais clínicos e lesões macroscópicas */}
      <View className="mb-[64px] justify-center items-center">
        <View className="flex-row items-center pl-7 mb-[13px] w-[100%]">
          <Image source={medic_icon} style={{width:25, height:25}}/>
          <Text className="w-[39%] ml-5 text-[18px] font-medium font-RobotoMedium">Sinais clínicos e lesões macroscópicas</Text>
        </View>

        <View className="bg-mygray-400 rounded-[5px] py-1 px-3 w-[70%]">
          <Text className="text-[16px] font-roboto">Estrias transversais esbranquiçadas</Text>
        </View>
      </View>
      
      {/* score */}
      <View className="mb-[64px] justify-center items-center">
        <View className="flex-row items-center pl-7 mb-[13px] w-[100%]">
          <Image source={score_icon} style={{width:25, height:25}}/>
          <Text className="w-[39%] ml-5 text-[18px] font-medium font-RobotoMedium">Score</Text>
        </View>

        <View className="w-[100%] flex-row px-5">
          <View className="w-5 mx-2 rounded-[10px] border-mygray-600 border-[1px] h-[100%] items-center">
            <LinearGradient
              colors={["#FFF1BB", "#E7810C", "#CB0000"]} // Amarelo para Laranja
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ width: 16, height: 535, borderRadius:10 }}
            />
          </View>

          {/* Imagens do score */}
          <View className="w-[90%]">
            <View className="flex-row w-[100%] mb-[15px]">
              <View className="w-[10%] justify-center items-center">
                <Text className="text-[16px] font-roboto font-bold">1</Text>
              </View>
              <View className="w-[80%] justify-center items-center">
                <Image source={score1} style={{width:255, height:123}}/>
                </View>
              <View className="w-[10%] justify-center items-center">
                <Image source={lupa_icon} style={{width:25, height:25}}/>
              </View>
            </View>
              
            <View className="flex-row w-[100%] mb-[15px]">
              <View className="w-[10%] justify-center items-center">
                <Text className="text-[16px] font-roboto font-bold">2</Text>
              </View>
              <View className="w-[80%] justify-center items-center">
                <Image source={score2} style={{width:255, height:123}}/>
              </View>
              <View className="w-[10%] justify-center items-center">
                <Image source={lupa_icon} style={{width:25, height:25}}/>
              </View>
            </View>
              
            <View className="flex-row w-[100%] mb-[15px]">
              <View className="w-[10%] justify-center items-center">
                <Text className="text-[16px] font-roboto font-bold">3</Text>
              </View>
              <View className="w-[80%] justify-center items-center">
                <Image source={score3} style={{width:255, height:123}}/>
              </View>
              <View className="w-[10%] justify-center items-center">
                <Image source={lupa_icon} style={{width:25, height:25}}/>
              </View>
            </View>
              
            <View className="flex-row w-[100%]">
              <View className="w-[10%] justify-center items-center">
                <Text className="text-[16px] font-roboto font-bold">4</Text>
              </View>
              <View className="w-[80%] justify-center items-center">
                <Image source={score4} style={{width:255, height:123}}/>
              </View>
              <View className="w-[10%] justify-center items-center">
                <Image source={lupa_icon} style={{width:25, height:25}}/>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
    <View className="absolute top-[92%] left-[83%]">
      <TouchableOpacity onPress={() => modalRef.current?.open()}>
        <Image source={glossario_icon} style={{width:50, height:50}}/>
      </TouchableOpacity>
    </View>
    <View className="absolute top-[92%] left-[5%]">
      <Image source={referencias_icon} style={{width:50, height:50}}/>
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
          <Image source={close_icon} style={{width:25, height:25}}/>
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
    </GestureHandlerRootView>
    </>
  );
}

