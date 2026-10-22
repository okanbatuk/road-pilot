import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const lessonsData = [
  {
    id: 1,
    title: "Trafik ve Çevre Bilgisi",
    progress: 80,
    total: 10,
    completed: 8,
    icon: "compass-outline",
  },
  {
    id: 2,
    title: "İlk Yardım Bilgisi",
    progress: 50,
    total: 6,
    completed: 3,
    icon: "medkit-outline",
  },
  {
    id: 3,
    title: "Araç Tekniği (Motor)",
    progress: 30,
    total: 8,
    completed: 2,
    icon: "build-outline",
  },
  {
    id: 4,
    title: "Trafik Adabı",
    progress: 100,
    total: 4,
    completed: 4,
    icon: "heart-outline",
  },
];

export default function LessonsScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.pageTitle}>Eğitim Dersleri</Text>
        <Text style={styles.pageSubtitle}>
          Teorik ders modüllerini buradan takip edin
        </Text>

        {lessonsData.map((lesson) => (
          <TouchableOpacity key={lesson.id} style={styles.lessonCard}>
            <View style={styles.cardHeader}>
              <View style={styles.iconBox}>
                <Ionicons name={lesson.icon as any} size={22} color="#2563EB" />
              </View>
              <View style={styles.titleBox}>
                <Text style={styles.lessonTitle}>{lesson.title}</Text>
                <Text style={styles.lessonDetail}>
                  {lesson.completed} / {lesson.total} Konu Tamamlandı
                </Text>
              </View>
              <Text style={styles.percentText}>%{lesson.progress}</Text>
            </View>

            <View style={styles.progressBackground}>
              <View
                style={[styles.progressBar, { width: `${lesson.progress}%` }]}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F1F5F9" },
  scrollContent: { padding: 20, paddingBottom: 30 },
  pageTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#0F172A",
    marginTop: 10,
  },
  pageSubtitle: {
    fontSize: 14,
    color: "#64748B",
    marginBottom: 20,
    marginTop: 4,
  },
  lessonCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  cardHeader: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  titleBox: { flex: 1 },
  lessonTitle: { fontSize: 15, fontWeight: "700", color: "#0F172A" },
  lessonDetail: { fontSize: 12, color: "#64748B", marginTop: 2 },
  percentText: { fontSize: 14, fontWeight: "700", color: "#2563EB" },
  progressBackground: {
    height: 6,
    backgroundColor: "#E2E8F0",
    borderRadius: 3,
    overflow: "hidden",
  },
  progressBar: { height: "100%", backgroundColor: "#2563EB", borderRadius: 3 },
});
