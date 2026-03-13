import React, { memo } from "react";
import { Skeleton } from "moti/skeleton";
import { DimensionValue, useColorScheme, View } from "react-native";
import { Sizes } from "@theme/sizes";

export type SkeletonTextProps = {
  width?: DimensionValue;
  height: number;
};

const SkeletonText = ({ width = "100%", height }: SkeletonTextProps) => {
  const colorScheme = useColorScheme();
  const colorMode = colorScheme === "dark" ? "light" : "light";

  return (
   <View style={{marginTop:Sizes.mr_4}}>
     <Skeleton
      colorMode={colorMode}
      width={width} 
      height={height} 
    />
   </View>
  );
};

export default memo(SkeletonText);