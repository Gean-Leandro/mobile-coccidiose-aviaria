import "../../global.css";
import { Text, View, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import { useFonts, Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import arrowback_icon from '../assets/icons/arrowback_icon.png';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: Roboto_400Regular,
    RobotoMedium: Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView className="bg-white">
      <View className='w-[100%] flex-row justify-center items-center mt-5 mb-[32px]'>
        <View className="absolute left-5">
          <TouchableOpacity onPress={() => router.back()}>
            <Image source={arrowback_icon} style={{width:25, height:25}}/>
          </TouchableOpacity>
        </View>
        <View className='bg-mygray-500 w-[33px] h-[4px]'/>
          <Text className={'text-[20px] w-[50%] text-center font-medium font-RobotoMedium'}>Referências</Text>
        <View className='bg-mygray-500 w-[33px] h-[4px]'/>
      </View>

      <View className="mx-5">
        <View>
          <View className="bg-mygray-200 rounded-t-[8px] px-3 pt-3 pb-4">
            <Text className="text-[15px] font-robotoMedium">Brunetti imagem do score 1 - Foto 8, página 4</Text>
          </View>
          <View className="h-5 -top-2 rounded-[8px] border"/>
          <View className="bg-mygray-400 -top-[21%] rounded-[8px] border-t-full p-3">
            <Text className="text-[14px] font-roboto underline">https://www.scielo.br/j/pvb/a/8dy9gzMWrMHWVtBhVmqkCzm/?format=pdf&lang=en</Text>
          </View>
        </View>
        
        <View>
          <View className="bg-mygray-200 rounded-t-[8px] px-3 pt-3 pb-4">
            <Text className="text-[15px] font-robotoMedium">Brunetti imagem do score 1 - Foto 8, página 4</Text>
          </View>
          <View className="h-5 -top-2 rounded-[8px] border"/>
          <View className="bg-mygray-400 -top-[21%] rounded-[8px] border-t-full p-3">
            <Text className="text-[14px] font-roboto underline">https://www.scielo.br/j/pvb/a/8dy9gzMWrMHWVtBhVmqkCzm/?format=pdf&lang=en</Text>
          </View>
        </View>
        <View>
          <View className="bg-mygray-200 rounded-t-[8px] px-3 pt-3 pb-4">
            <Text className="text-[15px] font-robotoMedium">Brunetti imagem do score 1 - Foto 8, página 4</Text>
          </View>
          <View className="h-5 -top-2 rounded-[8px] border"/>
          <View className="bg-mygray-400 -top-[21%] rounded-[8px] border-t-full p-3">
            <Text className="text-[14px] font-roboto underline">https://www.scielo.br/j/pvb/a/8dy9gzMWrMHWVtBhVmqkCzm/?format=pdf&lang=en</Text>
          </View>
        </View>
        <View>
          <View className="bg-mygray-200 rounded-t-[8px] px-3 pt-3 pb-4">
            <Text className="text-[15px] font-robotoMedium">Brunetti imagem do score 1 - Foto 8, página 4</Text>
          </View>
          <View className="h-5 -top-2 rounded-[8px] border"/>
          <View className="bg-mygray-400 -top-[21%] rounded-[8px] border-t-full p-3">
            <Text className="text-[14px] font-roboto underline">https://www.scielo.br/j/pvb/a/8dy9gzMWrMHWVtBhVmqkCzm/?format=pdf&lang=en</Text>
          </View>
        </View>
        <View>
          <View className="bg-mygray-200 rounded-t-[8px] px-3 pt-3 pb-4">
            <Text className="text-[15px] font-robotoMedium">Brunetti imagem do score 1 - Foto 8, página 4</Text>
          </View>
          <View className="h-5 -top-2 rounded-[8px] border"/>
          <View className="bg-mygray-400 -top-[21%] rounded-[8px] border-t-full p-3">
            <Text className="text-[14px] font-roboto underline">https://www.scielo.br/j/pvb/a/8dy9gzMWrMHWVtBhVmqkCzm/?format=pdf&lang=en</Text>
          </View>
        </View>
        <View>
          <View className="bg-mygray-200 rounded-t-[8px] px-3 pt-3 pb-4">
            <Text className="text-[15px] font-robotoMedium">Brunetti imagem do score 1 - Foto 8, página 4</Text>
          </View>
          <View className="h-5 -top-2 rounded-[8px] border"/>
          <View className="bg-mygray-400 -top-[21%] rounded-[8px] border-t-full p-3">
            <Text className="text-[14px] font-roboto underline">https://www.scielo.br/j/pvb/a/8dy9gzMWrMHWVtBhVmqkCzm/?format=pdf&lang=en</Text>
          </View>
        </View>
        <View>
          <View className="bg-mygray-200 rounded-t-[8px] px-3 pt-3 pb-4">
            <Text className="text-[15px] font-robotoMedium">Brunetti imagem do score 1 - Foto 8, página 4</Text>
          </View>
          <View className="h-5 -top-2 rounded-[8px] border"/>
          <View className="bg-mygray-400 -top-[21%] rounded-[8px] border-t-full p-3">
            <Text className="text-[14px] font-roboto underline">https://www.scielo.br/j/pvb/a/8dy9gzMWrMHWVtBhVmqkCzm/?format=pdf&lang=en</Text>
          </View>
        </View>
        <View>
          <View className="bg-mygray-200 rounded-t-[8px] px-3 pt-3 pb-4">
            <Text className="text-[15px] font-robotoMedium">Brunetti imagem do score 1 - Foto 8, página 4</Text>
          </View>
          <View className="h-5 -top-2 rounded-[8px] border"/>
          <View className="bg-mygray-400 -top-[21%] rounded-[8px] border-t-full p-3">
            <Text className="text-[14px] font-roboto underline">https://www.scielo.br/j/pvb/a/8dy9gzMWrMHWVtBhVmqkCzm/?format=pdf&lang=en</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

