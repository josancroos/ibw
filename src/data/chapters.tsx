import Link from "next/link";
import type { ReactNode } from "react";
import {
  ColorSwatch,
  DashList,
  Eyebrow,
  Grid,
  H1,
  Lead,
  SignList,
  SpecTable,
  Tile,
  TileBody,
  TileEyebrow,
  TileTitle,
  TypeSpecimen,
} from "@/components/docs/ui";

const YELLOW = "#FFDC00";
const BRAND_FONT = "'Nexa Bold','Archivo Black',Helvetica,sans-serif";

export type Chapter = { label: string; render: () => ReactNode };

function Uebersicht() {
  return (
    <>
      <Eyebrow>Kampagnen-Brandguide — ibW Höhere Fachschule Südostschweiz</Eyebrow>
      <H1>Kampagnen-Brandguide</H1>
      <Lead>
        <div>Das Regelwerk zum neuen Kampagnenlook: Leitidee, Farben, Schriften, Icons und Kachelraster.</div>
        <div>
          Ein einheitlicher Kampagnenlook mit Gelb-Schwarz-Fokus, simpler grafischer Umsetzung und einem
          einfachen Bauplan für alle Kanäle — von Plakat bis Testimonial-Clip.
        </div>
      </Lead>

      <Tile bg="#000" color="#fff" minHeight={140} style={{ marginBottom: 48 }}>
        <TileEyebrow color={YELLOW}>Leitidee</TileEyebrow>
        <TileTitle size={40}>Zuerst kommt das Machen</TileTitle>
      </Tile>

      <Grid columns={4}>
        {[
          { n: "01", t: "Leitidee", href: "leitidee" },
          { n: "02", t: "Headline-Prinzip", href: "headline-prinzip" },
          { n: "03", t: "Farben", href: "farben" },
          { n: "04", t: "Schriften", href: "schriften" },
          { n: "05", t: "Logo", href: "logo" },
          { n: "06", t: "Icons", href: "icons" },
          { n: "07", t: "Gestaltungsraster", href: "gestaltungsraster" },
          { n: "08", t: "Anwendungen", href: "plakate" },
        ].map(({ n, t, href }, i) => (
          <Link key={n} href={`/${href}`} style={{ textDecoration: "none" }}>
            <Tile bg={i % 3 === 0 ? YELLOW : "#141414"} color={i % 3 === 0 ? "#000" : "#fff"} minHeight={140}>
              <TileEyebrow color={i % 3 === 0 ? undefined : YELLOW}>{n}</TileEyebrow>
              <TileTitle size={22}>{t}</TileTitle>
            </Tile>
          </Link>
        ))}
      </Grid>
    </>
  );
}

function Ausgangslage() {
  const items: [ReactNode, string][] = [
    ["Wiedererkennung", "Ein einheitlicher Kampagnenlook mit Gelb-Schwarz-Fokus."],
    ["Spontanität", "Simple, grafische Umsetzung mit Kacheln."],
    ["Meccano", "Ein einfacher Bauplan für Testimonial-Clips in Owned und Paid."],
    ["Flexibilität", "Stockbilder auf Lehrgangsebene statt aufwändiger Shootings."],
  ];
  return (
    <>
      <Eyebrow>Ausgangslage</Eyebrow>
      <H1>Vier Eckpunkte</H1>
      <Lead>
        <div>
          Vier Eckpunkte begründen den neuen Kampagnenlook — sie gelten für jeden Kanal und jedes Format,
          von Print bis Social.
        </div>
      </Lead>
      <Grid columns={4}>
        {items.map(([title, body]) => (
          <Tile key={String(title)} bg="#141414" color="#fff" style={{ borderTop: `6px solid ${YELLOW}` }}>
            <TileTitle size={24}>{title}</TileTitle>
            <TileBody>{body}</TileBody>
          </Tile>
        ))}
      </Grid>
    </>
  );
}

function Leitidee() {
  return (
    <>
      <Eyebrow>01 — Leitidee</Eyebrow>
      <H1>Zuerst kommt das Machen</H1>
      <Lead>
        <div>
          Die ibW ist eine Schule für Macherinnen und Macher. Deshalb stellen wir das Wort «Mach» an die
          erste Stelle — in jeder Headline, in jedem Kanal.
        </div>
      </Lead>
      <Tile bg="#000" color="#fff" minHeight={260}>
        <span
          style={{
            fontFamily: BRAND_FONT,
            fontSize: "clamp(64px, 10vw, 120px)",
            lineHeight: 1,
            textTransform: "uppercase",
            color: YELLOW,
            alignSelf: "center",
            margin: "auto",
          }}
        >
          Mach
        </span>
      </Tile>
    </>
  );
}

function HeadlinePrinzip() {
  const cards: [ReactNode, string, boolean][] = [
    ["Mach dich schlau", "Mach einen von 100 Lehrgängen aus 30 Berufsrichtungen.", true],
    ["Mach Business", "Mach Wirtschaft oder einen von 100 Lehrgängen.", false],
    ["Machs genau", "Mach Bau oder einen von 100 Lehrgängen.", false],
    ["Machs nachhaltig", "Mach einen von 100 Lehrgängen aus 30 Berufsrichtungen.", true],
  ];
  return (
    <>
      <Eyebrow>02 — Headline-Prinzip</Eyebrow>
      <H1>«Mach …»</H1>
      <Lead>
        <div>
          Verb zuerst, Thema danach. Maximal drei Wörter, immer versal, Zeilenumbruch nach Sinn.
        </div>
        <div>Die Subline nennt immer das Angebot.</div>
      </Lead>
      <Grid columns={2}>
        {cards.map(([title, body, yellow]) => (
          <Tile key={String(title)} bg={yellow ? YELLOW : "#141414"} color={yellow ? "#000" : "#fff"}>
            <TileTitle size={34}>{title}</TileTitle>
            <TileBody>{body}</TileBody>
          </Tile>
        ))}
      </Grid>
    </>
  );
}

function Farben() {
  return (
    <>
      <Eyebrow>03 — Farben</Eyebrow>
      <H1>Zwei Leitfarben</H1>
      <Lead>
        <div>Der Farbschwerpunkt liegt auf Gelb und Schwarz.</div>
        <div>Weiss wird ausschliesslich für Texte eingesetzt.</div>
      </Lead>
      <Grid columns={3}>
        <ColorSwatch
          name="Gelb"
          bg={YELLOW}
          color="#000"
          specs={[
            ["CMYK", "0/10/100/0"],
            ["Pantone", "109"],
            ["RGB", "255/220/0"],
            ["Web", "#FFDC00"],
          ]}
        />
        <ColorSwatch
          name="Schwarz"
          bg="#0a0a0a"
          color="#fff"
          border="#2a2a2a"
          specs={[
            ["CMYK", "30/30/30/100"],
            ["Pantone", "Black U"],
            ["RGB", "0/0/0"],
            ["Web", "#000000"],
          ]}
        />
        <ColorSwatch
          name="Weiss"
          bg="#fff"
          color="#000"
          border="#e5e2d8"
          specs={[["Web", "#FFFFFF"]]}
        />
      </Grid>
      <p style={{ marginTop: 24, fontSize: 15, color: "#6b6b6b" }}>
        Weiss ist nur für Texte und Icon-Konturen auf dunklem Grund vorgesehen.
      </p>
    </>
  );
}

function Schriften() {
  return (
    <>
      <Eyebrow>04 — Schriften</Eyebrow>
      <H1>Zwei Schriftfamilien</H1>
      <Lead>
        <div>Nexa Bold setzt die Headlines, TStar trägt Sublines, Listen und Fliesstext.</div>
        <div>Keine weiteren Schnitte.</div>
      </Lead>
      <Grid columns={2}>
        <div
          style={{
            background: "#000",
            color: YELLOW,
            borderRadius: 10,
            padding: 28,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 13, color: "#fff" }}>Headline</span>
          <span style={{ fontFamily: BRAND_FONT, fontSize: 40, textTransform: "uppercase" }}>Nexa Bold</span>
          <span style={{ fontFamily: BRAND_FONT, fontSize: 22, lineHeight: 1.2, textTransform: "uppercase" }}>
            ABCDEFGHIJKLM
            <br />
            NOPQRSTUVWXYZ 0123456789
          </span>
          <span style={{ fontSize: 15, lineHeight: 1.4, color: "#fff" }}>
            Nur Versalien. Zeilenabstand knapp, Laufweite leicht negativ.
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <TypeSpecimen
            label="Subline"
            name="TStar Bold"
            weight={700}
            sample="ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789"
          />
          <TypeSpecimen
            label="Fliesstext"
            name="TStar Medium"
            weight={500}
            sample="ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789"
          />
        </div>
      </Grid>
    </>
  );
}

function Textstufen() {
  const rows: [string, ReactNode][] = [
    ["01", "Headline — Nexa Bold, versal, «Mach …»"],
    ["02", "Subline — TStar Medium, gemischt, nennt das Angebot"],
    ["03", "Detailzeile — TStar Bold, Datum, Ort, Abschluss"],
  ];
  return (
    <>
      <Eyebrow>04 — Schriften</Eyebrow>
      <H1>Drei Textstufen</H1>
      <Lead>
        <div>Mehr braucht ein Kampagnensujet nicht: Headline, Subline, Detailzeile.</div>
      </Lead>
      <Grid columns={2}>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {rows.map(([num, text]) => (
            <div
              key={num}
              style={{
                display: "flex",
                gap: 20,
                alignItems: "baseline",
                padding: "20px 0",
                borderTop: "1px solid #e5e2d8",
              }}
            >
              <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 14, color: "#c9a800", width: 24 }}>{num}</span>
              <span style={{ fontSize: 16, lineHeight: 1.4, color: "#3a3a3a" }}>{text}</span>
            </div>
          ))}
        </div>
        <Tile bg={YELLOW} color="#000">
          <TileTitle size={44}>
            Mach
            <br />
            weiter
          </TileTitle>
          <TileBody>Mach einen von 100 Lehrgängen aus 30 Berufsrichtungen.</TileBody>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <TileEyebrow>Start</TileEyebrow>
            <span style={{ fontWeight: 700, fontSize: 16 }}>12. Oktober 2026 — Chur &amp; Sargans</span>
          </div>
        </Tile>
      </Grid>
    </>
  );
}

function Logo() {
  return (
    <>
      <Eyebrow>05 — Logo</Eyebrow>
      <H1>Das Logo als Kachel</H1>
      <Lead>
        <div>Das quadratische Logo ist Ausgangspunkt des Kachelsystems.</div>
        <div>Immer auf eigener Kachel, nie auf Bild.</div>
      </Lead>
      <Grid columns={2} style={{ marginBottom: 24 }}>
        <PlaceholderTile bg={YELLOW} border="#000" text="ibW Logo — schwarz auf Gelb" textColor="#000" />
        <PlaceholderTile bg="#141414" border={YELLOW} text="ibW Logo — weiss auf Schwarz" textColor={YELLOW} />
      </Grid>
      <DashList
        items={[
          "Das Logo sitzt immer auf einer eigenen Kachel, nie über Bild oder Text.",
          "Die Logokachel ist quadratisch und folgt dem Raster.",
          "Schutzraum: die Hälfte der Logohöhe, allseitig.",
          "Keine Verzerrung, keine zusätzlichen Farben, kein Effekt.",
        ]}
      />
    </>
  );
}

function Icons() {
  return (
    <>
      <Eyebrow>06 — Icons</Eyebrow>
      <H1>Konturen, zweifarbig</H1>
      <Lead>
        <div>
          Die Icons bestehen nur aus Konturen und werden zweifarbig eingesetzt: weiss und gelb oder
          schwarz und gelb.
        </div>
        <div>Je nach Hintergrund positiv oder negativ.</div>
      </Lead>
      <Grid columns={2} style={{ marginBottom: 16 }}>
        <PlaceholderTile bg="#141414" border={YELLOW} text="Icon — weiss + gelb (negativ)" textColor={YELLOW} />
        <PlaceholderTile bg={YELLOW} border="#000" text="Icon — schwarz + gelb (positiv)" textColor="#000" />
      </Grid>
      <Grid columns={2}>
        <Tile bg="#141414" color="#fff">
          <TileTitle size={22}>Strichstärke</TileTitle>
          <TileBody>Eine Stärke für alle Icons, optisch auf die Schriftstärke abgestimmt. Keine Flächen, keine Füllungen.</TileBody>
        </Tile>
        <Tile bg="#141414" color="#fff">
          <TileTitle size={22}>Platzierung</TileTitle>
          <TileBody>Ein Icon pro Kachel, zentriert, mit Rand von einer halben Icon-Breite.</TileBody>
        </Tile>
      </Grid>
    </>
  );
}

function Gestaltungsraster() {
  return (
    <>
      <Eyebrow>07 — Gestaltungsraster</Eyebrow>
      <H1>Das Kachelsystem</H1>
      <Lead>
        <div>
          Ausgehend vom quadratischen Logo setzen wir auf ein Kachelsystem aus quadratischen und
          quaderförmigen Kacheln.
        </div>
      </Lead>
      <Grid columns={2} style={{ alignItems: "start" }}>
        <SpecTable
          rows={[
            ["Grundmodul", "Quadrat = Logobreite"],
            ["Kacheln", "1×1, 1×2, 2×1, 2×2"],
            ["Fugen", "Keine — Kacheln stossen an"],
          ]}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gridTemplateRows: "repeat(4,1fr)",
            gap: 4,
            aspectRatio: 1,
            outline: "2px dashed #d8d4c6",
            outlineOffset: 10,
          }}
        >
          <div style={{ background: YELLOW, gridColumn: "span 2", gridRow: "span 2", borderRadius: 4 }} />
          <div style={{ background: "#e7e3d5", borderRadius: 4 }} />
          <div style={{ background: YELLOW, borderRadius: 4 }} />
          <div style={{ background: "#e7e3d5", gridRow: "span 2", borderRadius: 4 }} />
          <div style={{ background: "#efece1", borderRadius: 4 }} />
          <div style={{ background: YELLOW, gridColumn: "span 2", borderRadius: 4 }} />
          <div style={{ background: "#e7e3d5", borderRadius: 4 }} />
          <div style={{ background: YELLOW, borderRadius: 4 }} />
          <div style={{ background: "#efece1", borderRadius: 4 }} />
          <div style={{ background: "#e7e3d5", borderRadius: 4 }} />
        </div>
      </Grid>
    </>
  );
}

function Plakate() {
  return (
    <>
      <Eyebrow>08 — Anwendungen</Eyebrow>
      <H1>Plakate F4 &amp; F12</H1>
      <Lead>
        <div>Ränder 120 mm, quadratisches Raster.</div>
        <div>Headline sitzt auf der grössten Kachel.</div>
      </Lead>
      <Grid columns={2}>
        <div>
          <Tile bg="#000" color="#fff" minHeight={320}>
            <TileTitle size={40}>
              Mach
              <br />
              dich
              <br />
              schlau
            </TileTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <TileBody>Mach einen von 100 Lehrgängen aus 30 Berufsrichtungen.</TileBody>
              <div style={{ background: YELLOW, color: "#000", padding: "12px 16px", display: "flex", justifyContent: "space-between" }}>
                <TileTitle size={18}>Infoabend</TileTitle>
                <span style={{ fontWeight: 700 }}>22.9.26</span>
              </div>
            </div>
          </Tile>
          <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 13, color: "#8a8a8a", marginTop: 10 }}>
            F4 — 895 × 1280 mm
          </p>
        </div>
        <div>
          <Tile bg={YELLOW} color="#000" minHeight={320} style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 0.8fr", gap: 0, padding: 0 }}>
            <div style={{ padding: 24, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <TileTitle size={30}>
                Machs
                <br />
                genau
              </TileTitle>
              <TileBody>Mach Bau oder einen von 100 Lehrgängen.</TileBody>
            </div>
            <div style={{ background: "#000", color: "#fff", padding: 24, display: "flex", flexDirection: "column", gap: 8, justifyContent: "center" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ fontSize: 13, fontWeight: 500 }}>
                  | Studienrichtung
                </span>
              ))}
            </div>
            <div style={{ background: "#000", display: "flex", alignItems: "center", justifyContent: "center", borderLeft: `3px solid ${YELLOW}` }}>
              <div
                style={{
                  width: "55%",
                  aspectRatio: 1,
                  border: `2px solid ${YELLOW}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 12, color: YELLOW }}>Logo</span>
              </div>
            </div>
          </Tile>
          <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 13, color: "#8a8a8a", marginTop: 10 }}>
            F12 — 2685 × 1280 mm
          </p>
        </div>
      </Grid>
    </>
  );
}

function Digital() {
  return (
    <>
      <Eyebrow>08 — Anwendungen</Eyebrow>
      <H1>Digital</H1>
      <Lead>
        <div>Ränder 90 px, quadratisches Raster.</div>
        <div>Headline auf voller Kachelbreite.</div>
      </Lead>
      <Grid columns={3}>
        <div>
          <Tile bg={YELLOW} color="#000" minHeight={260}>
            <TileTitle size={30}>
              Machs
              <br />
              nachhaltig
            </TileTitle>
            <TileBody>Mach einen von 100 Lehrgängen aus 30 Berufsrichtungen.</TileBody>
          </Tile>
          <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 13, color: "#8a8a8a", marginTop: 10 }}>1:1 — Post</p>
        </div>
        <div>
          <Tile bg="#000" color="#fff" minHeight={260} style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ flex: 1, background: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 12, color: "rgba(255,255,255,0.6)", textAlign: "center" }}>
                Stockbild
                <br />
                Lehrgangsebene
              </span>
            </div>
            <div style={{ background: YELLOW, color: "#000", padding: 20, display: "flex", flexDirection: "column", gap: 10 }}>
              <TileTitle size={28}>
                Mach
                <br />
                Holz
              </TileTitle>
              <TileBody>Mach einen von 100 Lehrgängen.</TileBody>
            </div>
          </Tile>
          <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 13, color: "#8a8a8a", marginTop: 10 }}>9:16 — Story</p>
        </div>
        <div>
          <Tile
            bg="#000"
            color="#fff"
            minHeight={260}
            style={{ padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 0 }}
          >
            <div style={{ background: YELLOW, color: "#000", padding: 18, display: "flex", alignItems: "flex-start" }}>
              <TileTitle size={22}>
                Mach
                <br />
                weiter
              </TileTitle>
            </div>
            <div style={{ background: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "rgba(255,255,255,0.6)" }}>Stockbild</span>
            </div>
            <div style={{ background: "#141414", padding: 16, display: "flex", flexDirection: "column", gap: 6, justifyContent: "center" }}>
              <span style={{ fontSize: 12, fontWeight: 500 }}>100% berufsbegleitend</span>
              <span style={{ fontSize: 12, fontWeight: 500 }}>Bahnhof Chur und Sargans</span>
            </div>
            <div style={{ background: YELLOW, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: "45%", aspectRatio: 1, border: "2px solid #000", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "#000" }}>Logo</span>
              </div>
            </div>
          </Tile>
          <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 13, color: "#8a8a8a", marginTop: 10 }}>
            6:5 — Landingpage-Banner
          </p>
        </div>
      </Grid>
    </>
  );
}

function Bildwelt() {
  return (
    <>
      <Eyebrow>08 — Anwendungen</Eyebrow>
      <H1>Bildwelt</H1>
      <Lead>
        <div>Stockbilder werden auf Lehrgangsebene gewählt: die Tätigkeit im Bild, nicht die Schule.</div>
        <div>Bilder liegen immer in einer eigenen Kachel.</div>
      </Lead>
      <Grid columns={3} style={{ marginBottom: 24 }}>
        <PlaceholderTile bg="#efece1" border="#d8d4c6" text="Bildslot 1:1 — Holzbau, Person bei der Arbeit" textColor="#6b6b6b" minHeight={200} />
        <PlaceholderTile bg="#efece1" border="#d8d4c6" text="Bildslot 1:1 — Gebäudetechnik, Detail am Objekt" textColor="#6b6b6b" minHeight={200} />
        <Tile bg={YELLOW} color="#000" minHeight={200}>
          <SignList
            sign="—"
            items={["Echte Tätigkeit statt Symbolbild.", "Ruhiger Hintergrund, klare Hauptfigur.", "Keine Farbfilter, kein Gelbstich."]}
          />
        </Tile>
      </Grid>
      <p style={{ fontSize: 15, color: "#6b6b6b" }}>Text nie direkt auf dem Bild — Headline sitzt auf der Nachbarkachel.</p>
    </>
  );
}

function TestimonialClips() {
  const steps: [string, string, string, boolean][] = [
    ["Sek. 0–2", "Hook", "Gelbe Kachel, Headline «Mach …» als Titelkarte.", true],
    ["Sek. 2–12", "Statement", "Testimonial spricht frontal, Untertitel in TStar Bold.", false],
    ["Sek. 12–20", "Beweis", "Beruf im Bild, eingeschobene Kachel mit Lehrgangsname.", false],
    ["Sek. 20–24", "Abschluss", "Logokachel, Start, Ort und Call to Action.", true],
  ];
  return (
    <>
      <Eyebrow>08 — Anwendungen</Eyebrow>
      <H1>Meccano Testimonial-Clip</H1>
      <Lead>
        <div>Vier Bausteine, gleiche Reihenfolge, für Owned und Paid.</div>
      </Lead>
      <Grid columns={4}>
        {steps.map(([time, title, body, yellow]) => (
          <Tile key={time} bg={yellow ? YELLOW : "#141414"} color={yellow ? "#000" : "#fff"}>
            <TileEyebrow color={yellow ? undefined : YELLOW}>{time}</TileEyebrow>
            <TileTitle size={24}>{title}</TileTitle>
            <TileBody>{body}</TileBody>
          </Tile>
        ))}
      </Grid>
    </>
  );
}

function DosDonts() {
  return (
    <>
      <Eyebrow>Regeln</Eyebrow>
      <H1>Do&apos;s &amp; Don&apos;ts</H1>
      <Lead>
        <div>Die häufigsten Fehler: dritte Farbe, Text auf Bild, Headline ohne «Mach».</div>
      </Lead>
      <Grid columns={2}>
        <Tile bg={YELLOW} color="#000" style={{ padding: 32 }}>
          <TileTitle size={28}>Do</TileTitle>
          <SignList
            sign="+"
            items={[
              "Headline immer mit «Mach» beginnen.",
              "Flächen sauber am Kachelraster ausrichten.",
              "Gelb und Schwarz als grosse Flächen einsetzen.",
              "Ränder einhalten: 120 mm Print, 90 px Digital.",
            ]}
          />
        </Tile>
        <Tile bg="#141414" color="#fff" style={{ padding: 32 }}>
          <TileTitle size={28}>Don&apos;t</TileTitle>
          <SignList
            sign="–"
            color={YELLOW}
            items={[
              "Keine dritte Farbe, keine Verläufe.",
              "Keine Headline über dem Bild.",
              "Keine gefüllten Icons, keine fremden Icon-Sets.",
              "Keine Schriftmischung über Nexa und TStar hinaus.",
            ]}
          />
        </Tile>
      </Grid>
    </>
  );
}

function Kontakt() {
  return (
    <>
      <Eyebrow>Kampagnen-Brandguide — Version 1.0</Eyebrow>
      <H1>Kontakt</H1>
      <Lead>
        <div>Fragen zum Look, Vorlagen und Bildfreigaben: Marketing ibW Höhere Fachschule Südostschweiz.</div>
      </Lead>
      <Tile bg={YELLOW} color="#000" minHeight={220}>
        <TileTitle size={64}>Mach mit</TileTitle>
      </Tile>
    </>
  );
}

function PlaceholderTile({
  bg,
  border,
  text,
  textColor,
  minHeight = 220,
}: {
  bg: string;
  border: string;
  text: string;
  textColor: string;
  minHeight?: number;
}) {
  return (
    <div
      style={{
        background: bg,
        border: `2px solid ${border}`,
        borderRadius: 10,
        minHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <span
        style={{
          fontFamily: "ui-monospace,Menlo,monospace",
          fontSize: 13,
          color: textColor,
          textAlign: "center",
          lineHeight: 1.5,
        }}
      >
        {text}
      </span>
    </div>
  );
}

export const CHAPTERS: Record<string, Chapter> = {
  "": { label: "Übersicht", render: Uebersicht },
  ausgangslage: { label: "Ausgangslage", render: Ausgangslage },
  leitidee: { label: "Leitidee", render: Leitidee },
  "headline-prinzip": { label: "Headline-Prinzip", render: HeadlinePrinzip },
  farben: { label: "Farben", render: Farben },
  schriften: { label: "Schriften", render: Schriften },
  textstufen: { label: "Textstufen", render: Textstufen },
  logo: { label: "Logo", render: Logo },
  icons: { label: "Icons", render: Icons },
  gestaltungsraster: { label: "Gestaltungsraster", render: Gestaltungsraster },
  plakate: { label: "Plakate", render: Plakate },
  digital: { label: "Digital", render: Digital },
  bildwelt: { label: "Bildwelt", render: Bildwelt },
  "testimonial-clips": { label: "Testimonial-Clips", render: TestimonialClips },
  "dos-donts": { label: "Do's & Don'ts", render: DosDonts },
  kontakt: { label: "Kontakt", render: Kontakt },
};
