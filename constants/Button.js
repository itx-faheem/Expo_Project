import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants'
 const CircleButton = ( {imgUrl, handlePress, ...props} ) => {
  return (
    <TouchableOpacity 
  
    style={{
        width:40,height:40,
        backgroundColor:COLORS.white,
        position:"absolute",
        borderRadius:SIZES.extraLarge,
        alignItems:"center",
        justifyContent:"center",
        ...SHADOWS.light,
        ...props 
    }}
    onPress={handlePress}
     >
      <Image  source={imgUrl} resizeMode='contain'  
      style={{width:24, height:24,}}
       />
    </TouchableOpacity>
  )
}



const ReactButton = ( {handlePress, minWidth, fontSize, style}  ) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
    style={[{backgroundColor:COLORS.primary,borderRadius:SIZES.extraLarge,minWidth:minWidth,padding:SIZES.small}, style]}
    > 
    <Text style={{
      textAlign:"center",
      color:COLORS.white,
      fontFamily:FONTS.semiBold
    }} >Place a bidsssss</Text>
  </TouchableOpacity>
  )
}


export {ReactButton,CircleButton};
// export const ReactButton = (  minWidth, fontSize, handlePress, ...props  ) => {
//   return (
//     <TouchableOpacity 
  
//     style={{
//         backgroundColor:COLORS.primary,
//         borderRadius:SIZES.extraLarge,
//         minWidth:minWidth,
//         padding:SIZES.small,
//         ...props
//       }}
//     onPress={handlePress}
//      >
//       <Text style={{
//         fontFamily:FONTS.semiBold,
//         fontSize:14,
//         color:COLORS.white,
//         textAlign:"center",
//       }} > Place a bid </Text>
//     </TouchableOpacity>
//   )
// }