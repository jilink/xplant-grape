import { Flex, Image, Link } from "@chakra-ui/react";

const Logo = () => {
  return <Image p="3" h="90%" src="/images/logo.png" />;
};

const Header = () => {
  return (
    <Flex justify="space-between" h="10vh" bg="#EAE9DB" w="100%">
      <Link href="https://xplant.com">
      <Logo />
      </Link>
      <Flex w={["50%", "30%"]} align="center" justify="space-around"  h="100%">
        <Link  href="https://xplant.com">Home</Link>
        <Link href="https://xplant.com">Contact</Link>
      </Flex>
    </Flex>
  );
};

export default Header;
