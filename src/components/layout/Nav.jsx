import { useState } from "react";
import {
  Flex,
  Box,
  useDisclosure,
  Stack,
  Link,
  Text,
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { Home } from "../pages/Home";

export const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    // <Flex>
    //   <Flex position="fixed" top="1rem" right="1rem" align="center">
    //     {/* Desktop */}
    //     <Flex display={["none", "none", "flex", "flex"]}>
    //       <NavLink to="/" element={<Home />}>
    //         <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
    //           Home
    //         </Button>
    //       </NavLink>
    //     </Flex>

    //     {/* Mobile */}
    //     <IconButton
    //       aria-label="Open Menu"
    //       size="lg"
    //       mr={2}
    //       icon={<HamburgerIcon />}
    //       onClick={() => changeDisplay("flex")}
    //       display={["flex", "flex", "none", "none"]}
    //     />
    //   </Flex>

    //   {/* Mobile Content */}
    //   <Flex
    //     w="100vw"
    //     display={display}
    //     bgColor="gray.50"
    //     zIndex={20}
    //     h="100vh"
    //     pos="fixed"
    //     top="0"
    //     left="0"
    //     overflowY="auto"
    //     flexDir="column"
    //   >
    //     <Flex justify="flex-end">
    //       <IconButton
    //         mt={2}
    //         mr={2}
    //         aria-label="Open Menu"
    //         size="lg"
    //         icon={<CloseIcon />}
    //         onClick={() => changeDisplay("none")}
    //       />
    //     </Flex>

    //     <Flex flexDir="column" align="center">
    //       <NavLink to="/" element={<Home />}>
    //         <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
    //           Home
    //         </Button>
    //       </NavLink>
    //     </Flex>
    //   </Flex>
    // </Flex>
    <Flex py={3} px={5} direction={["column", "row"]} justify="space-between" className="bg-basso-red">
      <Flex alignItems="center" wrap="wrap">
        <Flex flexGrow={1} justify="center">
          <Heading ml={[4, 0]}>
            <img src="/img/bassosa.png" alt="" />
          </Heading>
        </Flex>
        <HamburgerIcon
          onClick={isOpen ? onClose : onOpen} display={["inline", "none"]}
        />
      </Flex>
      <Flex display={[isOpen ? "flex" : "none", "flex"]}>
        <Stack align="center" direction={["column", "row"]} spacing="10" mt={[isOpen ? "2" : ""]}>
          <NavLink to="/" element={<Home />}>
            <Button variant="link" aria-label="Home" w="100%" color="white">
              Home
            </Button>
          </NavLink>
          <NavLink to="/" element={<Home />}>
            <Button variant="link" aria-label="Placeholder" w="100%" color="white">
              Placeholder
            </Button>
          </NavLink>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="link" color="white">
              Username
            </MenuButton>
            <MenuList>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </Flex>
    </Flex>
  );
};
