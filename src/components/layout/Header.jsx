import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Center, Box } from "@chakra-ui/react";

export const Header = () => {
  return (
    <>
      <Center>
        <Box w="95%" bg="gray.50" alignItems="center" mt={2} p={3} borderRadius="5">
          <Breadcrumb 
            fontWeight="medium"
            fontSize="sm"
            spacing="8px"
            separator={<ChevronRightIcon color="gray.00" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">About</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Contact</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </Center>
    </>
  );
};
