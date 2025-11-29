import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/with-gluestack/components/haptic-tab';
import { IconSymbol } from '@/with-gluestack/components/ui/icon-symbol';
import { Colors } from '@/with-gluestack/constants/theme';
import { useColorScheme } from '@/with-gluestack/hooks/use-color-scheme';

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
      {/* Nuestra página personalizada */}
      <Tabs.Screen
        name="myscreen"
        options={{
          title:"Hello",
          tabBarIcon: ({color}) => <IconSymbol size={28} name="hand.wave.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
