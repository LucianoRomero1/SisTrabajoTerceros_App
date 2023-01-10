import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Center, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

//Acá tengo que recibir como prop la ruta
//Y una segunda prop cuando sean rutas anidadas, puede ser un array y de ahi lo recorro con un map
//Anidada puede ser cuando por ejemplo es una ruta adentro de otra, que deriva de una misma digamos
//Sino va a ser siempre HOME > Ruta (prop)
export const Header = () => {
  return (
    <>
      <Center>
        <Box w="100%" bg="gray.50" alignItems="center" mt={2} mb={2} p={3} borderRadius="5">
          <Breadcrumb 
            fontWeight="medium"
            fontSize="sm"
            spacing="8px"
            separator={<ChevronRightIcon color="gray.00" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/" isCurrentPage>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem >
              <BreadcrumbLink as={Link} to="/placeholder">Placeholder</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </Center>
    </>
  );
};
