import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../context/AuthContext";

export default function HomeScreen() {
  const { session, signOut } = useAuth();

  // Get user name from Supabase user metadata or fallback
  const userName =
    session?.user?.user_metadata?.full_name ||
    session?.user?.email?.split("@")[0] ||
    "Sürücü Adayı";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Hoş Geldin 👋</Text>
            <Text style={styles.userNameText}>{userName}</Text>
          </View>
          <TouchableOpacity style={styles.logoutButton} onPress={signOut}>
            <Ionicons name="log-out-outline" size={22} color="#1E3A8A" />
          </TouchableOpacity>
        </View>

        {/* Hero Banner: Driving Course Progress */}
        <View style={styles.heroCard}>
          <View style={styles.heroHeader}>
            <View style={styles.heroTag}>
              <Text style={styles.heroTagText}>B Sınıfı Ehliyet</Text>
            </View>
            <Ionicons name="ribbon-outline" size={24} color="#93C5FD" />
          </View>

          <Text style={styles.heroTitle}>Teorik Eğitim Tamamlanma</Text>
          <Text style={styles.heroSubtitle}>
            Sınav öncesi son %35'lik kısım kaldı!
          </Text>

          {/* Progress Bar */}
          <View style={styles.progressBackground}>
            <View style={[styles.progressBar, { width: "65%" }]} />
          </View>
          <View style={styles.progressLabelRow}>
            <Text style={styles.progressPercent}>%65 Tamamlandı</Text>
            <Text style={styles.progressRemaining}>13 / 20 Ders</Text>
          </View>
        </View>

        {/* Upcoming Practice / Lesson Alert */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Yaklaşan Randevun</Text>
        </View>
        <View style={styles.appointmentCard}>
          <View style={styles.appointmentIconContainer}>
            <Ionicons name="car" size={28} color="#2563EB" />
          </View>
          <View style={styles.appointmentInfo}>
            <Text style={styles.appointmentTitle}>
              Direksiyon Uygulama Dersi
            </Text>
            <Text style={styles.appointmentDetail}>Eğitmen: Ahmet Yılmaz</Text>
            <View style={styles.appointmentTimeRow}>
              <Ionicons name="time-outline" size={14} color="#64748B" />
              <Text style={styles.appointmentTimeText}>
                Yarın, 14:30 - 15:30
              </Text>
            </View>
          </View>
        </View>

        {/* Quick Action Grid */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Hızlı Erişim</Text>
        </View>

        <View style={styles.gridContainer}>
          {/* Card 1: Exam Practice */}
          <TouchableOpacity style={styles.gridCard}>
            <View style={[styles.gridIconBox, { backgroundColor: "#EFF6FF" }]}>
              <Ionicons name="document-text" size={26} color="#2563EB" />
            </View>
            <Text style={styles.gridTitle}>Çıkmış Sorular</Text>
            <Text style={styles.gridSubtitle}>Deneme Çöz</Text>
          </TouchableOpacity>

          {/* Card 2: Video Lessons */}
          <TouchableOpacity style={styles.gridCard}>
            <View style={[styles.gridIconBox, { backgroundColor: "#F0FDF4" }]}>
              <Ionicons name="play-circle" size={26} color="#16A34A" />
            </View>
            <Text style={styles.gridTitle}>Ders Videoları</Text>
            <Text style={styles.gridSubtitle}>Konu Anlatımı</Text>
          </TouchableOpacity>

          {/* Card 3: Traffic Signs */}
          <TouchableOpacity style={styles.gridCard}>
            <View style={[styles.gridIconBox, { backgroundColor: "#FFF7ED" }]}>
              <Ionicons name="warning" size={26} color="#EA580C" />
            </View>
            <Text style={styles.gridTitle}>Trafik İşaretleri</Text>
            <Text style={styles.gridSubtitle}>Katalog & Test</Text>
          </TouchableOpacity>

          {/* Card 4: Course Info */}
          <TouchableOpacity style={styles.gridCard}>
            <View style={[styles.gridIconBox, { backgroundColor: "#F5F3FF" }]}>
              <Ionicons name="school" size={26} color="#7C3AED" />
            </View>
            <Text style={styles.gridTitle}>Kursum</Text>
            <Text style={styles.gridSubtitle}>Duyuru & Belge</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  welcomeText: {
    fontSize: 14,
    color: "#64748B",
    fontWeight: "500",
  },
  userNameText: {
    fontSize: 22,
    fontWeight: "800",
    color: "#0F172A",
    marginTop: 2,
  },
  logoutButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DBEAFE",
  },
  heroCard: {
    backgroundColor: "#1E3A8A", // Bizim kurumsal derin mavi
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    shadowColor: "#1E3A8A",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
  },
  heroHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  heroTag: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  heroTagText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  heroSubtitle: {
    color: "#93C5FD",
    fontSize: 13,
    marginBottom: 18,
  },
  progressBackground: {
    height: 8,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 8,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#60A5FA",
    borderRadius: 4,
  },
  progressLabelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressPercent: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  progressRemaining: {
    color: "#93C5FD",
    fontSize: 12,
  },
  sectionHeader: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
  },
  appointmentCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  appointmentIconContainer: {
    width: 52,
    height: 52,
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
  gridCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  gridIconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  gridTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 2,
  },
  gridSubtitle: {
    fontSize: 12,
    color: "#64748B",
  },
});
