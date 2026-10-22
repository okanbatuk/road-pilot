import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PressableCard } from "../../components/PressableCard";
import { useAuth } from "../../context/AuthContext";

export default function ProfileScreen() {
  const { session, signOut } = useAuth();

  const userName =
    session?.user?.user_metadata?.full_name ||
    session?.user?.email?.split("@")[0] ||
    "Sürücü Adayı";
  const userEmail = session?.user?.email || "";

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.pageTitle}>Profilim</Text>
        <Text style={styles.pageSubtitle}>
          Hesap ve sürücü kursu bilgilerinizi yönetin
        </Text>

        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {userName.charAt(0).toUpperCase()}
            </Text>
          </View>
          <Text style={styles.nameText}>{userName}</Text>
          <Text style={styles.emailText}>{userEmail}</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>B Sınıfı Sürücü Adayı</Text>
          </View>
        </View>

        <View style={styles.menuContainer}>
          <PressableCard>
            <View style={styles.menuItem}>
              <View style={styles.menuIconBox}>
                <Ionicons name="person-outline" size={20} color="#2563EB" />
              </View>
              <Text style={styles.menuText}>Kişisel Bilgiler</Text>
              <Ionicons name="chevron-forward" size={18} color="#94A3B8" />
            </View>
          </PressableCard>

          <PressableCard>
            <View style={styles.menuItem}>
              <View style={styles.menuIconBox}>
                <Ionicons
                  name="document-text-outline"
                  size={20}
                  color="#2563EB"
                />
              </View>
              <Text style={styles.menuText}>Sürücü Kursu Evraklarım</Text>
              <Ionicons name="chevron-forward" size={18} color="#94A3B8" />
            </View>
          </PressableCard>

          <PressableCard>
            <View style={styles.menuItem}>
              <View style={styles.menuIconBox}>
                <Ionicons
                  name="notifications-outline"
                  size={20}
                  color="#2563EB"
                />
              </View>
              <Text style={styles.menuText}>Bildirim Tercihleri</Text>
              <Ionicons name="chevron-forward" size={18} color="#94A3B8" />
            </View>
          </PressableCard>

          <PressableCard onPress={signOut}>
            <View style={[styles.menuItem, styles.lastMenuItem]}>
              <View
                style={[styles.menuIconBox, { backgroundColor: "#FEF2F2" }]}
              >
                <Ionicons name="log-out-outline" size={20} color="#EF4444" />
              </View>
              <Text style={[styles.menuText, styles.logoutText]}>
                Oturumu Kapat
              </Text>
            </View>
          </PressableCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E3A8A",
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#FFFFFF",
    marginTop: 8,
  },
  pageSubtitle: {
    fontSize: 13,
    color: "#93C5FD",
    marginBottom: 20,
    marginTop: 4,
  },
  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "800",
  },
  nameText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#0F172A",
  },
  emailText: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 2,
  },
  badge: {
    backgroundColor: "#EFF6FF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 12,
  },
  badgeText: {
    color: "#2563EB",
    fontSize: 12,
    fontWeight: "600",
  },
  menuContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  lastMenuItem: {
    borderBottomWidth: 0,
  },
  menuIconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
  },
  menuText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15,
    fontWeight: "600",
    color: "#0F172A",
  },
  logoutText: {
    color: "#EF4444",
  },
});
