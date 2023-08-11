import { Text } from "@chakra-ui/react";
import "./Title.css"

const Title = ({ text, img }: { text: string; img: string }) => {
  return (
      <Text className="bg-image"
       backgroundImage={`url(${img})`}
       fontSize={["7xl", "100px"]}
       p="7"
      >
        {text}
      </Text>
  );
};

export default Title;
