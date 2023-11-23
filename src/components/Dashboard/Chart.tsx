import { useContext } from "react";
import { ActivityIndicator, View } from "react-native";
import { VictoryAxis, VictoryChart, VictoryGroup, VictoryLine, VictoryScatter, VictoryTheme, VictoryTooltip, VictoryVoronoiContainer, VictoryLabel } from "victory-native";
import { AuthContext } from "../../Contexts/auth";
import { Loading } from "../Loading";

export function ChartDashboard () {
  const { chart30 } = useContext(AuthContext)

  return (
    chart30 ? (
      <VictoryChart
        width={499}
        height={455}
        theme={VictoryTheme.material}>
          <VictoryGroup
            color="#eeeeee"
            labels={({ datum }) => `+R$: ${datum.y} dia: ${datum.x}`}
            labelComponent={
              <VictoryTooltip
                style={{ fontSize: 20 }}
                renderInPortal={false}
              />
            }
            data={chart30}
          >
            <VictoryLine  />
            <VictoryAxis style={{ 
              axis: {stroke: "transparent"}, 
              ticks: {stroke: "transparent"},
              tickLabels: { fill:"transparent"}  
               }}
                />
               <VictoryAxis dependentAxis 
                style={{ 
                  axis: {stroke: "transparent"}, 
                  ticks: {stroke: "transparent"},
                  tickLabels: { fill:"transparent"}  
                   }} />
            <VictoryScatter
              size={({ active }) => active ? 8 : 5}
            />
          </VictoryGroup>
        </VictoryChart>
    ):(
      <View className=" justify-center items-center" >
        <ActivityIndicator color="#fff" size={100} />
      </View>
    )
  )
}