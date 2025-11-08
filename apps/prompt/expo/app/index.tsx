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
  Input,
  InputField,
} from '@gluestack-ui/themed';

export default function PromptHome() {
  return (
    <View className="flex-1 bg-white">
      <Box className="flex-1 items-center justify-center p-6">
        <VStack space="xl" className="w-full max-w-md">
          {/* Header */}
          <VStack space="sm" className="items-center">
            <Heading size="3xl" className="text-primary-600">
              Prompt App
            </Heading>
            <HStack space="sm" className="items-center">
              <Badge action="warning" variant="solid">
                <BadgeText>Expo Mobile</BadgeText>
              </Badge>
              <Badge action="success" variant="outline">
                <BadgeText>NativeWind</BadgeText>
              </Badge>
            </HStack>
          </VStack>

          {/* Input Card */}
          <Card className="p-6 bg-primary-50">
            <VStack space="md">
              <Text className="text-lg font-semibold text-primary-700">
                Enter your prompt ✨
              </Text>
              <Input variant="outline" size="lg">
                <InputField placeholder="Type something..." />
              </Input>
            </VStack>
          </Card>

          {/* Action Buttons */}
          <VStack space="md">
            <Button size="lg" className="bg-primary-600">
              <ButtonText>Submit Prompt</ButtonText>
            </Button>
            <Button variant="outline" size="lg">
              <ButtonText>View History</ButtonText>
            </Button>
          </VStack>

          {/* Footer */}
          <Text className="text-center text-gray-500 text-sm">
            Powered by Gluestack UI + Tailwind
          </Text>
        </VStack>
      </Box>
      <StatusBar style="auto" />
    </View>
  );
}

