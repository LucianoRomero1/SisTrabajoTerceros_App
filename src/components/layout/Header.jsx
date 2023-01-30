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
import { useSelector } from "react-redux";

export const Header = () => {

  const breadcrumbs = useSelector((state) => state.breadcrumbs);

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
            {breadcrumbs.map((breadcrumb) => (
              <BreadcrumbItem key={breadcrumb.id}>
                <BreadcrumbLink as={Link} to={breadcrumb.route} isCurrentPage>{breadcrumb.name}</BreadcrumbLink>
              </BreadcrumbItem>
            ))}
            {/* <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/" isCurrentPage>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem >
              <BreadcrumbLink as={Link} to="/placeholder">Placeholder</BreadcrumbLink>
            </BreadcrumbItem> */}
          </Breadcrumb>
        </Box>
      </Center>
    </>
  );
};
