import React from 'react';
import { VStack, HStack, Heading, Badge, BadgeText } from '@gluestack-ui/themed';

interface AppHeaderProps {
  title: string;
  badges?: Array<{
    text: string;
    action?: 'info' | 'success' | 'warning' | 'error' | 'muted';
    variant?: 'solid' | 'outline';
  }>;
}

export function AppHeader({ title, badges = [] }: AppHeaderProps) {
  return (
    <VStack space="sm" className="items-center">
      <Heading size="3xl" className="text-primary-600">
        {title}
      </Heading>
      {badges.length > 0 && (
        <HStack space="sm" className="items-center">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              action={badge.action || 'info'}
              variant={badge.variant || 'solid'}
            >
              <BadgeText>{badge.text}</BadgeText>
            </Badge>
          ))}
        </HStack>
      )}
    </VStack>
  );
}

