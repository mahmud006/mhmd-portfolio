// Server-only PDF template. Rendered by src/app/resume.pdf/route.ts.
//
// ATS constraints, deliberately boring: single column, built-in Helvetica
// (real text layer, no embedded display fonts), standard section headings,
// no icons/tables/columns/graphics. Visual flair lives in the portfolio;
// this document exists to be parsed.

import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
} from "@react-pdf/renderer";
import { resume } from "./resume-data";

const ACCENT = "#1a1a1a";
const BODY = "#2b2b2b";
const DIM = "#555555";

const s = StyleSheet.create({
  page: {
    paddingVertical: 36,
    paddingHorizontal: 44,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: BODY,
    lineHeight: 1.35,
  },
  name: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: ACCENT,
    lineHeight: 1.2,
    marginBottom: 4,
  },
  headline: { fontSize: 10.5, color: DIM, marginBottom: 4 },
  contactRow: { fontSize: 9, color: DIM, marginBottom: 1.5 },
  section: { marginTop: 9 },
  sectionTitle: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    color: ACCENT,
    textTransform: "uppercase",
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderBottomColor: ACCENT,
    paddingBottom: 2,
    marginBottom: 4,
  },
  roleHeader: { marginTop: 7 },
  roleTitle: { fontSize: 10.5, fontFamily: "Helvetica-Bold", color: ACCENT },
  roleMeta: { fontSize: 9, color: DIM, marginBottom: 3 },
  bulletRow: { flexDirection: "row", marginBottom: 2 },
  bulletGlyph: { width: 12, fontSize: 10 },
  bulletText: { flex: 1, fontSize: 10 },
  skillRow: { flexDirection: "row", marginBottom: 1.5 },
  skillLabel: { width: 95, fontFamily: "Helvetica-Bold", fontSize: 9 },
  skillItems: { flex: 1, fontSize: 10 },
  link: { color: BODY, textDecoration: "none" },
});

function Bullet({ children }: { children: string }) {
  return (
    <View style={s.bulletRow}>
      <Text style={s.bulletGlyph}>•</Text>
      <Text style={s.bulletText}>{children}</Text>
    </View>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={s.section}>
      <Text style={s.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

export function ResumeDocument() {
  const { contact } = resume;
  return (
    <Document
      title={`${resume.name} — Resume`}
      author={resume.name}
      subject="Software Engineer Resume"
      keywords="Software Engineer, React, Next.js, Angular, TypeScript, Python, FastAPI, RAG"
    >
      <Page size="A4" style={s.page}>
        {/* Header: plain text contact info — ATS reads this directly */}
        <Text style={s.name}>{resume.name}</Text>
        <Text style={s.headline}>{resume.headline}</Text>
        <Text style={s.contactRow}>
          {contact.location}  |  {contact.phone}  |  {contact.email}
        </Text>
        <Text style={s.contactRow}>
          <Link style={s.link} src={`https://${contact.github}`}>
            {contact.github}
          </Link>
          {"  |  "}
          <Link style={s.link} src={`https://${contact.linkedin}`}>
            {contact.linkedin}
          </Link>
          {"  |  "}
          <Link style={s.link} src={`https://${contact.portfolio}`}>
            {contact.portfolio}
          </Link>
        </Text>

        <Section title="Technical Skills">
          {resume.skills.map((group) => (
            <View key={group.label} style={s.skillRow}>
              <Text style={s.skillLabel}>{group.label}</Text>
              <Text style={s.skillItems}>{group.items.join(", ")}</Text>
            </View>
          ))}
        </Section>

        <Section title="Work Experience">
          {resume.experience.map((role, i) => (
            <View key={role.dateRange} style={i === 0 ? undefined : s.roleHeader}>
              <Text style={s.roleTitle}>
                {role.title} — {role.org}
              </Text>
              <Text style={s.roleMeta}>
                {role.dateRange}  |  {role.location}
              </Text>
              {role.bullets.map((b) => (
                <Bullet key={b.slice(0, 40)}>{b}</Bullet>
              ))}
            </View>
          ))}
        </Section>

        <Section title="Education">
          <Text style={s.roleTitle}>{resume.education.degree}</Text>
          <Text style={s.roleMeta}>
            {resume.education.org}  |  {resume.education.dateRange}
          </Text>
          <Text>{resume.education.detail}</Text>
        </Section>

        <Section title="Achievements">
          {resume.achievements.map((a) => (
            <Bullet key={a.slice(0, 40)}>{a}</Bullet>
          ))}
        </Section>
      </Page>
    </Document>
  );
}
