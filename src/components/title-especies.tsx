import { View, Text } from "react-native";
import "../../global.css";

export interface titleProps {
    title: string,
    textColor: string
}

export function TitleEspecies(props: titleProps){
    return(
        <View className='w-[100%] flex-row justify-center items-center mt-5'>
          <View className='bg-mygray-500 w-[33px] h-[4px]'></View>
          <Text className={'text-[20px] font-roboto w-[70%] text-center text-' + props.textColor + ' uppercase'}>{props.title}</Text>
          <View className='bg-mygray-500 w-[33px] h-[4px]'></View>
        </View>
    )
}