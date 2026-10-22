import { Slot, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { AuthProvider, useAuth } from "../context/AuthContext";

// Component handling auth state changes and route protection
function InitialLayout() {
  const { session, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    // Check if the user is currently in an auth-related screen (login or register)
    const inAuthGroup = segments[0] === "login" || segments[0] === "register";

    if (!session && !inAuthGroup) {
      // Redirect unauthenticated users to login screen
      router.replace("/login");
    } else if (session && inAuthGroup) {
      // Redirect authenticated users away from auth screens to the main application tabs
      router.replace("/(tabs)");
    }
  }, [session, isLoading, segments, router]);

  // Show a loading spinner while checking initial session state
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2563EB" />
      </View>
    );
  }

  return <Slot />;
}

// Root layout that wraps the app with AuthProvider
export default function RootLayout() {
  return (
    <AuthProvider>
      <InitialLayout />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
  },
});
