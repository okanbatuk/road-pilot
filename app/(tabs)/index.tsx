import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PressableCard } from "../../components/PressableCard";
import { useAuth } from "../../context/AuthContext";

export default function HomeScreen() {
  const { session, signOut } = useAuth();

  const userName =
    session?.user?.user_metadata?.full_name ||
    session?.user?.email?.split("@")[0] ||
    "Sürücü Adayı";

  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.userInfoRow}>
            <View style={styles.avatarContainer}>
              <Text style={styles.avatarText}>{userInitial}</Text>
            </View>
            <View>
              <Text style={styles.welcomeText}>Hoş Geldin 👋</Text>
              <Text style={styles.userNameText}>{userName}</Text>
            </View>
          </View>

          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
              <Ionicons
                name="notifications-outline"
                size={20}
                color="#FFFFFF"
              />
              <View style={styles.notificationBadge} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconButton}
              onPress={signOut}
              activeOpacity={0.7}
            >
              <Ionicons name="log-out-outline" size={20} color="#F87171" />
            </TouchableOpacity>
          </View>
        </View>

        <PressableCard style={styles.heroCardWrapper}>
          <View style={styles.heroCard}>
            <View style={styles.heroHeader}>
              <View style={styles.heroTag}>
                <Text style={styles.heroTagText}>B Sınıfı Ehliyet</Text>
              </View>
              <Ionicons name="ribbon-outline" size={24} color="#2563EB" />
            </View>

            <Text style={styles.heroTitle}>Teorik Eğitim Tamamlanma</Text>
            <Text style={styles.heroSubtitle}>
              Sınav öncesi son %35'lik kısım kaldı!
            </Text>

            <View style={styles.progressBackground}>
              <View style={[styles.progressBar, { width: "65%" }]} />
            </View>
            <View style={styles.progressLabelRow}>
              <Text style={styles.progressPercent}>%65 Tamamlandı</Text>
              <Text style={styles.progressRemaining}>13 / 20 Ders</Text>
            </View>
          </View>
        </PressableCard>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Yaklaşan Randevun</Text>
        </View>

        <PressableCard style={styles.appointmentCardWrapper}>
          <View style={styles.appointmentCard}>
            <View style={styles.appointmentIconContainer}>
              <Ionicons name="car-sport" size={26} color="#2563EB" />
            </View>
            <View style={styles.appointmentInfo}>
              <Text style={styles.appointmentTitle}>
                Direksiyon Uygulama Dersi
              </Text>
              <Text style={styles.appointmentDetail}>
                Eğitmen: Ahmet Yılmaz
              </Text>
              <View style={styles.appointmentTimeRow}>
                <Ionicons name="time-outline" size={14} color="#2563EB" />
                <Text style={styles.appointmentTimeText}>
                  Yarın, 14:30 - 15:30
                </Text>
              </View>
            </View>
          </View>
        </PressableCard>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Hızlı Erişim</Text>
        </View>

        <View style={styles.gridContainer}>
          <PressableCard style={styles.gridCardWrapper}>
            <View style={styles.gridCard}>
              <View
                style={[styles.gridIconBox, { backgroundColor: "#EFF6FF" }]}
              >
                <Ionicons
                  name="document-text-outline"
                  size={24}
                  color="#2563EB"
                />
              </View>
              <Text style={styles.gridTitle}>Çıkmış Sorular</Text>
              <Text style={styles.gridSubtitle}>Deneme Çöz</Text>
            </View>
          </PressableCard>

          <PressableCard style={styles.gridCardWrapper}>
            <View style={styles.gridCard}>
              <View
                style={[styles.gridIconBox, { backgroundColor: "#F0FDF4" }]}
              >
                <Ionicons
                  name="play-circle-outline"
                  size={24}
                  color="#16A34A"
                />
              </View>
              <Text style={styles.gridTitle}>Ders Videoları</Text>
              <Text style={styles.gridSubtitle}>Konu Anlatımı</Text>
            </View>
          </PressableCard>

          <PressableCard style={styles.gridCardWrapper}>
            <View style={styles.gridCard}>
              <View
                style={[styles.gridIconBox, { backgroundColor: "#FFF7ED" }]}
              >
                <Ionicons name="warning-outline" size={24} color="#EA580C" />
              </View>
              <Text style={styles.gridTitle}>Trafik İşaretleri</Text>
              <Text style={styles.gridSubtitle}>Katalog & Test</Text>
            </View>
          </PressableCard>

          <PressableCard style={styles.gridCardWrapper}>
            <View style={styles.gridCard}>
              <View
                style={[styles.gridIconBox, { backgroundColor: "#F5F3FF" }]}
              >
                <Ionicons name="school-outline" size={24} color="#7C3AED" />
              </View>
              <Text style={styles.gridTitle}>Kursum</Text>
              <Text style={styles.gridSubtitle}>Duyuru & Belge</Text>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 4,
  },
  userInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatarContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
  welcomeText: {
    fontSize: 12,
    color: "#93C5FD",
    fontWeight: "500",
  },
  userNameText: {
    fontSize: 18,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  headerActions: {
    flexDirection: "row",
    gap: 8,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  notificationBadge: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#EF4444",
  },
  heroCardWrapper: {
    marginBottom: 24,
  },
  heroCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
  heroHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  heroTag: {
    backgroundColor: "#EFF6FF",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  heroTagText: {
    color: "#2563EB",
    fontSize: 12,
    fontWeight: "700",
  },
  heroTitle: {
    color: "#0F172A",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 4,
  },
  heroSubtitle: {
    color: "#64748B",
    fontSize: 13,
    marginBottom: 18,
  },
  progressBackground: {
    height: 8,
    backgroundColor: "#E2E8F0",
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 8,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#2563EB",
    borderRadius: 4,
  },
  progressLabelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressPercent: {
    color: "#2563EB",
    fontSize: 12,
    fontWeight: "700",
  },
  progressRemaining: {
    color: "#64748B",
    fontSize: 12,
  },
  sectionHeader: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  appointmentCardWrapper: {
    marginBottom: 24,
  },
  appointmentCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  appointmentIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  appointmentInfo: {
    flex: 1,
  },
  appointmentTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 2,
  },
  appointmentDetail: {
    fontSize: 13,
    color: "#64748B",
    marginBottom: 6,
  },
  appointmentTimeRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  appointmentTimeText: {
    fontSize: 12,
    color: "#2563EB",
    fontWeight: "600",
    marginLeft: 4,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },
  gridCardWrapper: {
    width: "48%",
  },
  gridCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  gridIconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  gridTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 2,
  },
  gridSubtitle: {
    fontSize: 12,
    color: "#64748B",
  },
});
