import React from 'react';
import { Card, VStack, Text } from '@gluestack-ui/themed';

interface WelcomeCardProps {
  title: string;
  description: string;
  className?: string;
}

export function WelcomeCard({ title, description, className }: WelcomeCardProps) {
  return (
    <Card className={`p-6 ${className || ''}`}>
      <VStack space="md">
        <Text className="text-lg font-semibold">
          {title}
        </Text>
        <Text className="text-gray-600">
          {description}
        </Text>
      </VStack>
    </Card>
  );
}

