import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="signup" options={{ title: "Sign up" }} />
      <Stack.Screen name="pending" options={{ title: "Pending" }} />
      <Stack.Screen name="verified" options={{ title: "Verified" }} />
    </Stack>
  );
}
