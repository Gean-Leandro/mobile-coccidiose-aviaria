import { View, Text, Image, TouchableOpacity } from "react-native";
import "../../global.css";
import { router } from "expo-router";

export interface previusSpeciesProps {
    name: string,
    backgroundColor: string,
    buttonColor: string,
    img: any
}

export function PreviusSpecies(props: previusSpeciesProps){
    return(
        <View className={props.backgroundColor + ' w-[95%] mt-4 py-7 mb-4 flex-row items-center justify-center rounded-[5px]'}>
          <View className='w-[50%] items-center'>
            <Image source={props.img} style={{width: 86, height:208.98}}/>
          </View>
          <View className='w-[50%] h-[208.98] items-center justify-center'>
            <View className='h-[60%] w-[100%] justify-end items-center'>
              <View>
                <Text className={'text-' + props.buttonColor + ' text-[24px] font-roboto italic'}>Eimeria</Text>
                <Text className={'text-' + props.buttonColor + ' text-[24px] italic font-medium font-robotoMedium'}>{props.name}</Text>
              </View>
            </View>
            <View className='h-[40%] justify-end'>
              <TouchableOpacity onPress={() => router.navigate({pathname:'/details'})}className='rounded-[8px] w-[154.08] h-[41] items-center justify-center'
              style={{ borderWidth: 1, borderColor: props.buttonColor, }}>
                <Text className={'text-' + props.buttonColor + ' font-roboto text-[15px] font-bold'}>VER MAIS</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    )
}