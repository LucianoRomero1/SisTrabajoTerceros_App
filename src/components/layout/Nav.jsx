import {
  Flex,
  useDisclosure,
  Stack,
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { Home } from "../pages/Home";
import { Placeholder } from "../pages/Placeholder";

export const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex py={3} px={10} direction={["column", "row"]} justify="space-between" className="bg-basso-red">
      <Flex alignItems="center" wrap="wrap">
        <Flex flexGrow={1} justify="center">
          <Heading ml={[4, 0]}>
            <NavLink to="/" element={<Home />}>
              <img src="/img/bassosa.png" alt="Logo Basso" />
            </NavLink>
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
          <NavLink to="/placeholder" element={<Placeholder />}>
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
