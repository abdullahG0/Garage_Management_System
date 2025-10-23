import { ReactNode } from 'react';
import { Box, Flex, Icon, Text, VStack, Link as ChakraLink, Badge } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import {
  MdDashboard,
  MdDirectionsCar,
  MdPeople,
  MdAssignment,
  MdInventory,
  MdEngineering
} from 'react-icons/md';

type NavItem = {
  label: string;
  to: string;
  icon: typeof MdDashboard;
};

const navItems: NavItem[] = [
  { label: 'Dashboard', to: '/', icon: MdDashboard },
  { label: 'Customers', to: '/customers', icon: MdPeople },
  { label: 'Vehicles', to: '/vehicles', icon: MdDirectionsCar },
  { label: 'Work Orders', to: '/work-orders', icon: MdAssignment },
  { label: 'Inventory', to: '/inventory', icon: MdInventory },
  { label: 'Workers', to: '/workers', icon: MdEngineering }
];

type SidebarProps = {
  footer?: ReactNode;
  inventoryAlertsCount?: number;
};

export const Sidebar = ({ footer, inventoryAlertsCount }: SidebarProps) => (
  <Box
    as="nav"
    bg="white"
    borderRightWidth="1px"
    borderColor="gray.200"
    w={{ base: 'full', md: 64 }}
    minH="100vh"
    py={6}
    px={4}
    position="sticky"
    top={0}
  >
    <Text fontSize="2xl" fontWeight="bold" color="brand.600" mb={8}>
      GaragePro
    </Text>
    <VStack align="stretch" spacing={1}>
      {navItems.map((item) => {
        const showInventoryBadge = item.to === '/inventory' && (inventoryAlertsCount ?? 0) > 0;

        return (
          <ChakraLink
            key={item.to}
            as={NavLink}
            to={item.to}
            borderRadius="md"
            _hover={{ textDecoration: 'none', bg: 'gray.100' }}
            _activeLink={{ bg: 'brand.50', color: 'brand.600', fontWeight: 'semibold' }}
            px={3}
            py={2}
          >
            <Flex align="center" gap={3}>
              <Icon as={item.icon} boxSize={5} />
              <Text flex="1">{item.label}</Text>
              {showInventoryBadge ? (
                <Badge colorScheme="red" borderRadius="full">
                  {inventoryAlertsCount}
                </Badge>
              ) : null}
            </Flex>
          </ChakraLink>
        );
      })}
    </VStack>
    {footer ? (
      <Flex mt="auto" pt={8}>
        {footer}
      </Flex>
    ) : null}
  </Box>
);
