import { ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { Sidebar } from '../layout/Sidebar';
import { TopBar } from '../layout/TopBar';

type AppShellProps = {
  title: string;
  children: ReactNode;
  actions?: ReactNode;
  inventoryAlertsCount?: number;
};

export const AppShell = ({ title, children, actions, inventoryAlertsCount }: AppShellProps) => (
  <Flex minH="100vh" bg="gray.50">
    <Sidebar inventoryAlertsCount={inventoryAlertsCount} />
    <Box flex="1" display="flex" flexDirection="column">
      <TopBar title={title} actions={actions} />
      <Box as="main" px={6} py={6} flex="1">
        {children}
      </Box>
    </Box>
  </Flex>
);
