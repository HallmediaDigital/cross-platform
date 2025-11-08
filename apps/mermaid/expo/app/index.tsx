import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  ButtonText,
  Card,
  Badge,
  BadgeText,
} from '@gluestack-ui/themed';

export default function MermaidHome() {
  return (
    <View className="flex-1 bg-white">
      <Box className="flex-1 items-center justify-center p-6">
        <VStack space="xl" className="w-full max-w-md">
          {/* Header */}
          <VStack space="sm" className="items-center">
            <Heading size="3xl" className="text-primary-600">
              Mermaid App
            </Heading>
            <HStack space="sm" className="items-center">
              <Badge action="info" variant="solid">
                <BadgeText>Expo Mobile</BadgeText>
              </Badge>
              <Badge action="success" variant="outline">
                <BadgeText>Gluestack UI</BadgeText>
              </Badge>
            </HStack>
          </VStack>

          {/* Info Card */}
          <Card className="p-6 bg-primary-50">
            <VStack space="md">
              <Text className="text-lg font-semibold text-primary-700">
                Welcome to Mermaid! 🧜‍♀️
              </Text>
              <Text className="text-gray-600">
                Built with Expo, Gluestack UI, and NativeWind. This is a demo of
                cross-platform UI components.
              </Text>
            </VStack>
          </Card>

          {/* Action Buttons */}
          <VStack space="md">
            <Button size="lg" className="bg-primary-600">
              <ButtonText>Get Started</ButtonText>
            </Button>
            <Button variant="outline" size="lg">
              <ButtonText>Learn More</ButtonText>
            </Button>
          </VStack>

          {/* Footer */}
          <Text className="text-center text-gray-500 text-sm">
            Using Turborepo + Yarn Workspaces
          </Text>
        </VStack>
      </Box>
      <StatusBar style="auto" />
    </View>
  );
}

