import { Box, Grid, Heading, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import indexImage from "../../public/1e9fa1f6-faf7-4b87-a4c8-df46a6497313.jpg";

export function IndexView() {
  const [loaded, setLoaded] = useState(false);
  return (
    <Box
      paddingX={{ base: 4, lg: 0 }}
      paddingY={{ base: 0, lg: 16 }}
      marginY={8}
      position="relative"
      maxW="960px"
      marginX="auto"
    >
      <Grid columnGap={16} templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
        <Image
          src={indexImage}
          width="500px"
          height="500px"
          objectFit="cover"
          placeholder="blur"
          className={loaded ? "unblur" : ""}
          onLoadingComplete={() => setLoaded(true)}
        />
        <style jsx global>{`
          .unblur {
            animation: unblur 0.5s linear;
          }

          @keyframes unblur {
            from {
              filter: blur(20px);
            }
            to {
              filter: blur(0);
            }
          }
        `}</style>

        <Flex
          paddingRight={8}
          direction="column"
          justifyContent="space-between"
        >
          <Heading
            as="h1"
            size="4xl"
            fontWeight="normal"
            fontFamily="Antic Didone"
            lineHeight="0.95"
            letterSpacing="-2px"
            marginY={{ base: 4, lg: 0 }}
          >
            Lorem Ipsum Dolor Sit Amet
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dui
            elit, tempus sit amet est at, dignissim fermentum justo. Maecenas
            vitae faucibus mauris. Quisque lobortis purus lectus, at efficitur
            sapien posuere quis. Nunc et nisi eget orci auctor venenatis. Fusce
            tempus nisl sed ex viverra, a tempor quam sollicitudin. Morbi vel
            leo ligula
          </Text>
        </Flex>
      </Grid>
      <Box
        position="absolute"
        borderColor="teal.700"
        display={{ base: "none", lg: "block" }}
        borderWidth="1px"
        borderStyle="solid"
        width="calc(100% - 72px)"
        height="100%"
        top="0"
        left="72px"
      />
    </Box>
  );
}
