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
import { useState } from "react";
import { useDispatch } from "react-redux";
import { prependRoute, removeRoutes } from "../../features/breadcrumbs/breadcrumbSlice";
import { v4 as uuid } from "uuid";
import { Error } from "../pages/Error";
import { PlaceholderTwo } from "../pages/PlaceholderTwo";

export const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [breadcrumb, setBreadcrumb] = useState({
    route: "",
    name: ""
  });
  const dispatch = useDispatch();

  const handlePrincipalBreadc = (e) => {

    if(e.target.name == "Home" || e.target.name == "Error"){
      return dispatch(removeRoutes());
    }
    
    let breadcrumb = {
      id: uuid(),
      route: e.target.ariaLabel,
      name: e.target.name,
      type: "Principal"
    };
    setBreadcrumb(breadcrumb);

    dispatch(prependRoute(breadcrumb));
  }

  return (
    <Flex py={3} px={10} direction={["column", "row"]} justify="space-between" className="bg-basso-red">
      <Flex alignItems="center" wrap="wrap">
        <Flex flexGrow={1} justify="center">
          <Heading ml={[4, 0]}>
            <NavLink to="/" element={<Home />} name="Home" aria-label="/" onClick={handlePrincipalBreadc}>
              <img className="logoBasso" src="/img/bassosa.png" alt="Logo Basso" />
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
            <Button variant="link"  name="Home" aria-label="/" w="100%" color="white" onClick={handlePrincipalBreadc}>
              Home
            </Button>
          </NavLink>
          <NavLink to="/placeholder" element={<Placeholder />}>
            <Button variant="link" name="Placeholder" aria-label="/placeholder" w="100%" color="white" onClick={handlePrincipalBreadc}>
              Placeholder
            </Button>
          </NavLink>
          <NavLink to="/placeholder2" element={<PlaceholderTwo />}>
            <Button variant="link" name="Placeholder2" aria-label="/placeholder2" w="100%" color="white" onClick={handlePrincipalBreadc}>
              Placeholder2
            </Button>
          </NavLink>
          <NavLink to="/error" element={<Error />}>
            <Button variant="link" name="Error" aria-label="/error" w="100%" color="white" onClick={handlePrincipalBreadc}>
              Error
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
