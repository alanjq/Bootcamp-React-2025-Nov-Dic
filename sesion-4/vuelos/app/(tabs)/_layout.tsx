import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      {/* Mis tabs */}
      <Tabs.Screen
        name="buscar"
        options={{
          title: 'Buscar vuelo',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="airplane.circle.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name='acerca'
        options={{
          title: "Acerca de",
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="info.square.fill" color={color} />
        }}
      />
    </Tabs>
  );
}
