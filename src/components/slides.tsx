import type { ReactNode } from "react";
import { css } from "@/lib/css";

/** Each slide is authored at the design's fixed canvas size (1920×1080) —
 * DeckViewer scales the whole canvas to fit the viewport, so every style
 * here is transcribed verbatim from the source .dc.html px values. */

export const SLIDE_LABELS = [
  "Cover",
  "Inhalt",
  "Eckpunkte",
  "Leitidee",
  "Headline-Prinzip",
  "Farben",
  "Schriften",
  "Typo-Hierarchie",
  "Logo",
  "Icons",
  "Gestaltungsraster",
  "Plakate",
  "Digital",
  "Bildwelt",
  "Testimonial-Clips",
  "Do's & Don'ts",
  "Abschluss",
] as const;

function Cover() {
  return (
    <section
      style={css(
        "background:#000;color:#fff;font-family:'TStar','Archivo',Helvetica,sans-serif;display:grid;grid-template-columns:1fr 620px;overflow:hidden"
      )}
    >
      <div style={css("padding:90px;display:flex;flex-direction:column;justify-content:space-between")}>
        <div
          style={css(
            "font-family:'TStar','Archivo',Helvetica,sans-serif;font-weight:600;font-size:28px;letter-spacing:0.16em;text-transform:uppercase;color:#FFDC00"
          )}
        >
          ibW Höhere Fachschule Südostschweiz
        </div>
        <div style={css("display:flex;flex-direction:column;gap:24px")}>
          <div
            style={css(
              "font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:132px;line-height:0.88;letter-spacing:-0.02em;text-transform:uppercase;color:#FFDC00"
            )}
          >
            Kampagnen-
            <br />
            Brandguide
          </div>
          <div style={css("font-size:34px;line-height:1.35;font-weight:500;max-width:760px;color:#fff")}>
            Das Regelwerk zum neuen Kampagnenlook: Leitidee, Farben, Schriften, Icons und Kachelraster.
          </div>
        </div>
        <div style={css("font-family:ui-monospace,Menlo,monospace;font-size:24px;letter-spacing:0.08em;color:rgba(255,255,255,0.55)")}>
          Version 1.0 — 2026
        </div>
      </div>
      <div style={css("display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr 1fr;gap:0")}>
        <div style={css("background:#FFDC00")} />
        <div style={css("background:#111")} />
        <div style={css("background:#111")} />
        <div style={css("background:#FFDC00")} />
        <div style={css("background:#FFDC00;display:flex;align-items:center;justify-content:center")}>
          <span style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:96px;color:#000;text-transform:uppercase")}>
            Mach
          </span>
        </div>
        <div style={css("background:#111")} />
      </div>
    </section>
  );
}

function tileNumberSpan(n: string, color?: string) {
  return (
    <span style={css(`font-family:ui-monospace,Menlo,monospace;font-size:26px${color ? `;color:${color}` : ""}`)}>{n}</span>
  );
}

function tileTitleSpan(text: ReactNode) {
  return (
    <span style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:42px;line-height:1.02;text-transform:uppercase")}>
      {text}
    </span>
  );
}

function Inhalt() {
  const items: [string, ReactNode, boolean][] = [
    ["01", "Leitidee", true],
    ["02", "Headline-Prinzip", false],
    ["03", "Farben", false],
    ["04", "Schriften", true],
    ["05", "Logo", false],
    ["06", "Icons", true],
    ["07", "Gestaltungsraster", true],
    ["08", "Anwendungen", false],
  ];
  return (
    <section
      style={css(
        "background:#000;color:#fff;font-family:'TStar','Archivo',Helvetica,sans-serif;padding:90px;display:flex;flex-direction:column;gap:52px"
      )}
    >
      <div style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:64px;text-transform:uppercase;letter-spacing:-0.01em;color:#FFDC00")}>
        Inhalt
      </div>
      <div style={css("display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:1fr 1fr;gap:20px;flex:1")}>
        {items.map(([num, title, yellow]) => (
          <div
            key={num}
            style={css(
              yellow
                ? "background:#FFDC00;color:#000;padding:36px;display:flex;flex-direction:column;justify-content:space-between"
                : "background:#141414;color:#fff;padding:36px;display:flex;flex-direction:column;justify-content:space-between"
            )}
          >
            {tileNumberSpan(num, yellow ? undefined : "#FFDC00")}
            {tileTitleSpan(title)}
          </div>
        ))}
      </div>
    </section>
  );
}

function Eckpunkte() {
  const items: [ReactNode, string][] = [
    [
      <>
        Wieder-
        <br />
        erkennung
      </>,
      "Ein einheitlicher Kampagnenlook mit Gelb-Schwarz-Fokus.",
    ],
    ["Spontanität", "Simple, grafische Umsetzung mit Kacheln."],
    ["Meccano", "Ein einfacher Bauplan für Testimonial-Clips in Owned und Paid."],
    ["Flexibilität", "Stockbilder auf Lehrgangsebene statt aufwändiger Shootings."],
  ];
  return (
    <section
      style={css(
        "background:#000;color:#fff;font-family:'TStar','Archivo',Helvetica,sans-serif;padding:90px;display:flex;flex-direction:column;gap:52px"
      )}
    >
      <div style={css("display:flex;flex-direction:column;gap:16px")}>
        <div style={css("font-family:ui-monospace,Menlo,monospace;font-size:26px;letter-spacing:0.1em;color:#FFDC00")}>Ausgangslage</div>
        <div style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:64px;text-transform:uppercase;letter-spacing:-0.01em")}>
          Vier Eckpunkte
        </div>
      </div>
      <div style={css("display:grid;grid-template-columns:repeat(4,1fr);gap:20px;flex:1")}>
        {items.map(([title, body], i) => (
          <div
            key={i}
            style={css(
              "background:#141414;padding:44px;display:flex;flex-direction:column;justify-content:space-between;border-top:10px solid #FFDC00"
            )}
          >
            <span style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:40px;line-height:1.05;text-transform:uppercase;color:#FFDC00")}>
              {title}
            </span>
            <span style={css("font-size:30px;line-height:1.4")}>{body}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Leitidee() {
  return (
    <section
      style={css(
        "background:#FFDC00;color:#000;font-family:'TStar','Archivo',Helvetica,sans-serif;display:grid;grid-template-columns:1.15fr 1fr;overflow:hidden"
      )}
    >
      <div style={css("padding:90px;display:flex;flex-direction:column;justify-content:space-between")}>
        <div style={css("font-family:ui-monospace,Menlo,monospace;font-size:26px;letter-spacing:0.1em")}>01 — Leitidee</div>
        <div style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:96px;line-height:0.92;text-transform:uppercase;letter-spacing:-0.02em")}>
          Zuerst kommt das Machen
        </div>
        <div style={css("font-size:34px;line-height:1.4;max-width:720px;font-weight:500")}>
          Die ibW ist eine Schule für Macherinnen und Macher. Deshalb stellen wir das Wort «Mach» an die erste Stelle — in jeder Headline, in jedem Kanal.
        </div>
      </div>
      <div style={css("background:#000;display:flex;align-items:center;justify-content:center")}>
        <span style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:200px;line-height:1;text-transform:uppercase;color:#FFDC00")}>
          Mach
        </span>
      </div>
    </section>
  );
}

function HeadlinePrinzip() {
  const cards: [ReactNode, string, boolean][] = [
    [
      <>
        Mach
        <br />
        dich
        <br />
        schlau
      </>,
      "Mach einen von 100 Lehrgängen aus 30 Berufsrichtungen.",
      true,
    ],
    [
      <>
        Mach
        <br />
        Business
      </>,
      "Mach Wirtschaft oder einen von 100 Lehrgängen.",
      false,
    ],
    [
      <>
        Machs
        <br />
        genau
      </>,
      "Mach Bau oder einen von 100 Lehrgängen.",
      false,
    ],
    [
      <>
        Machs
        <br />
        nach-
        <br />
        haltig
      </>,
      "Mach einen von 100 Lehrgängen aus 30 Berufsrichtungen.",
      true,
    ],
  ];
  return (
    <section
      style={css(
        "background:#000;color:#fff;font-family:'TStar','Archivo',Helvetica,sans-serif;padding:90px;display:flex;flex-direction:column;gap:44px"
      )}
    >
      <div style={css("display:flex;justify-content:space-between;align-items:flex-end;gap:40px")}>
        <div style={css("display:flex;flex-direction:column;gap:16px")}>
          <div style={css("font-family:ui-monospace,Menlo,monospace;font-size:26px;letter-spacing:0.1em;color:#FFDC00")}>02 — Headline-Prinzip</div>
          <div style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:64px;text-transform:uppercase;letter-spacing:-0.01em")}>
            «Mach …»
          </div>
        </div>
        <div style={css("font-size:30px;line-height:1.4;max-width:660px;color:rgba(255,255,255,0.85)")}>
          Verb zuerst, Thema danach. Maximal drei Wörter, immer versal, Zeilenumbruch nach Sinn. Die Subline nennt immer das Angebot.
        </div>
      </div>
      <div style={css("display:grid;grid-template-columns:repeat(4,1fr);gap:20px;flex:1")}>
        {cards.map(([title, body, yellow], i) => (
          <div
            key={i}
            style={css(
              yellow
                ? "background:#FFDC00;color:#000;padding:40px;display:flex;flex-direction:column;justify-content:space-between"
                : "background:#141414;color:#fff;padding:40px;display:flex;flex-direction:column;justify-content:space-between"
            )}
          >
            <span
              style={css(
                `font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:60px;line-height:0.95;text-transform:uppercase${
                  yellow ? "" : ";color:#FFDC00"
                }`
              )}
            >
              {title}
            </span>
            <span style={css("font-size:26px;line-height:1.35;font-weight:500")}>{body}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Farben() {
  return (
    <section
      style={css(
        "background:#000;color:#fff;font-family:'TStar','Archivo',Helvetica,sans-serif;padding:90px;display:flex;flex-direction:column;gap:44px"
      )}
    >
      <div style={css("display:flex;justify-content:space-between;align-items:flex-end;gap:40px")}>
        <div style={css("display:flex;flex-direction:column;gap:16px")}>
          <div style={css("font-family:ui-monospace,Menlo,monospace;font-size:26px;letter-spacing:0.1em;color:#FFDC00")}>03 — Farben</div>
          <div style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:64px;text-transform:uppercase;letter-spacing:-0.01em")}>
            Zwei Leitfarben
          </div>
        </div>
        <div style={css("font-size:30px;line-height:1.4;max-width:660px;color:rgba(255,255,255,0.85)")}>
          Der Farbschwerpunkt liegt auf Gelb und Schwarz. Weiss wird ausschliesslich für Texte eingesetzt.
        </div>
      </div>
      <div style={css("display:grid;grid-template-columns:1.2fr 1.2fr 0.9fr;gap:20px;flex:1")}>
        <div style={css("background:#FFDC00;color:#000;padding:48px;display:flex;flex-direction:column;justify-content:space-between")}>
          <span style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:52px;text-transform:uppercase")}>Gelb</span>
          <div style={css("display:grid;grid-template-columns:1fr 1fr;gap:12px 32px;font-family:ui-monospace,Menlo,monospace;font-size:26px")}>
            <span>CMYK</span>
            <span>0/10/100/0</span>
            <span>Pantone</span>
            <span>109</span>
            <span>RGB</span>
            <span>255/220/0</span>
            <span>Web</span>
            <span>#FFDC00</span>
          </div>
        </div>
        <div
          style={css(
            "background:#0a0a0a;color:#fff;padding:48px;display:flex;flex-direction:column;justify-content:space-between;outline:2px solid #2a2a2a;outline-offset:-2px"
          )}
        >
          <span style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:52px;text-transform:uppercase")}>Schwarz</span>
          <div style={css("display:grid;grid-template-columns:1fr 1fr;gap:12px 32px;font-family:ui-monospace,Menlo,monospace;font-size:26px")}>
            <span>CMYK</span>
            <span>30/30/30/100</span>
            <span>Pantone</span>
            <span>Black U</span>
            <span>RGB</span>
            <span>0/0/0</span>
            <span>Web</span>
            <span>#000000</span>
          </div>
        </div>
        <div style={css("background:#fff;color:#000;padding:48px;display:flex;flex-direction:column;justify-content:space-between")}>
          <span style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:52px;text-transform:uppercase")}>Weiss</span>
          <div style={css("display:flex;flex-direction:column;gap:18px")}>
            <span style={css("font-size:26px;line-height:1.35;font-weight:500")}>Nur für Texte und Icon-Konturen auf dunklem Grund.</span>
            <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:26px")}>#FFFFFF</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Schriften() {
  return (
    <section
      style={css(
        "background:#FFDC00;color:#000;font-family:'TStar','Archivo',Helvetica,sans-serif;padding:90px;display:flex;flex-direction:column;gap:40px"
      )}
    >
      <div style={css("display:flex;justify-content:space-between;align-items:flex-end;gap:40px")}>
        <div style={css("display:flex;flex-direction:column;gap:16px")}>
          <div style={css("font-family:ui-monospace,Menlo,monospace;font-size:26px;letter-spacing:0.1em")}>04 — Schriften</div>
          <div style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:64px;text-transform:uppercase;letter-spacing:-0.01em")}>
            Zwei Schriftfamilien
          </div>
        </div>
        <div style={css("font-size:30px;line-height:1.4;max-width:600px;font-weight:500")}>
          Nexa Bold setzt die Headlines, TStar trägt Sublines, Listen und Fliesstext. Keine weiteren Schnitte.
        </div>
      </div>
      <div style={css("display:grid;grid-template-columns:1fr 1fr;gap:20px;flex:1")}>
        <div
          style={css(
            "background:#000;color:#FFDC00;padding:48px;display:flex;flex-direction:column;justify-content:space-between;grid-row:span 2"
          )}
        >
          <div style={css("display:flex;flex-direction:column;gap:12px")}>
            <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:26px;color:#fff")}>Headline</span>
            <span style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:76px;line-height:1;text-transform:uppercase")}>
              Nexa Bold
            </span>
          </div>
          <span style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:56px;line-height:1.1;text-transform:uppercase;word-break:break-all")}>
            ABCDEFGHIJKLM NOPQRSTUVWXYZ 0123456789
          </span>
          <span style={css("font-size:28px;line-height:1.4;color:#fff")}>Nur Versalien. Zeilenabstand knapp, Laufweite leicht negativ.</span>
        </div>
        <div style={css("background:#000;color:#fff;padding:44px;display:flex;flex-direction:column;gap:20px")}>
          <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:26px;color:#FFDC00")}>Subline</span>
          <span style={css("font-weight:700;font-size:52px;line-height:1.05")}>TStar Bold</span>
          <span style={css("font-weight:700;font-size:30px;line-height:1.3;color:rgba(255,255,255,0.85)")}>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
          </span>
        </div>
        <div style={css("background:#000;color:#fff;padding:44px;display:flex;flex-direction:column;gap:20px")}>
          <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:26px;color:#FFDC00")}>Fliesstext</span>
          <span style={css("font-weight:500;font-size:52px;line-height:1.05")}>TStar Medium</span>
          <span style={css("font-weight:500;font-size:30px;line-height:1.3;color:rgba(255,255,255,0.85)")}>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
          </span>
        </div>
      </div>
    </section>
  );
}

function TypoHierarchie() {
  const rows: [string, ReactNode, boolean][] = [
    ["01", "Headline — Nexa Bold, versal, «Mach …»", true],
    ["02", "Subline — TStar Medium, gemischt, nennt das Angebot", true],
    ["03", "Detailzeile — TStar Bold, Datum, Ort, Abschluss", false],
  ];
  return (
    <section
      style={css(
        "background:#000;color:#fff;font-family:'TStar','Archivo',Helvetica,sans-serif;padding:90px;display:grid;grid-template-columns:1fr 1fr;gap:20px"
      )}
    >
      <div style={css("display:flex;flex-direction:column;gap:40px;padding-right:40px")}>
        <div style={css("display:flex;flex-direction:column;gap:16px")}>
          <div style={css("font-family:ui-monospace,Menlo,monospace;font-size:26px;letter-spacing:0.1em;color:#FFDC00")}>04 — Schriften</div>
          <div style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:64px;text-transform:uppercase;letter-spacing:-0.01em")}>
            Drei Textstufen
          </div>
        </div>
        <div style={css("display:flex;flex-direction:column;gap:28px")}>
          {rows.map(([num, text, hasBorder]) => (
            <div
              key={num}
              style={css(
                hasBorder
                  ? "display:flex;gap:28px;align-items:baseline;border-bottom:2px solid #222;padding-bottom:24px"
                  : "display:flex;gap:28px;align-items:baseline"
              )}
            >
              <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:26px;color:#FFDC00;width:60px")}>{num}</span>
              <span style={css("font-size:30px;line-height:1.35")}>{text}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={css("background:#FFDC00;color:#000;padding:64px;display:flex;flex-direction:column;justify-content:space-between")}>
        <span style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:104px;line-height:0.92;text-transform:uppercase")}>
          Mach
          <br />
          weiter
        </span>
        <span style={css("font-size:34px;line-height:1.35;font-weight:500")}>Mach einen von 100 Lehrgängen aus 30 Berufsrichtungen.</span>
        <div style={css("display:flex;flex-direction:column;gap:8px")}>
          <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:24px")}>Start</span>
          <span style={css("font-weight:700;font-size:32px")}>12. Oktober 2026 — Chur &amp; Sargans</span>
        </div>
      </div>
    </section>
  );
}

function Logo() {
  const bullets = [
    "Das Logo sitzt immer auf einer eigenen Kachel, nie über Bild oder Text.",
    "Die Logokachel ist quadratisch und folgt dem Raster.",
    "Schutzraum: die Hälfte der Logohöhe, allseitig.",
    "Keine Verzerrung, keine zusätzlichen Farben, kein Effekt.",
  ];
  return (
    <section
      style={css(
        "background:#000;color:#fff;font-family:'TStar','Archivo',Helvetica,sans-serif;padding:90px;display:flex;flex-direction:column;gap:44px"
      )}
    >
      <div style={css("display:flex;flex-direction:column;gap:16px")}>
        <div style={css("font-family:ui-monospace,Menlo,monospace;font-size:26px;letter-spacing:0.1em;color:#FFDC00")}>05 — Logo</div>
        <div style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:64px;text-transform:uppercase;letter-spacing:-0.01em")}>
          Das Logo als Kachel
        </div>
      </div>
      <div style={css("display:grid;grid-template-columns:1fr 1fr 1.3fr;gap:20px;flex:1")}>
        <div style={css("background:#FFDC00;display:flex;align-items:center;justify-content:center;padding:40px")}>
          <div
            style={css(
              "width:100%;aspect-ratio:1;background:repeating-linear-gradient(135deg,rgba(0,0,0,0.14) 0 12px,transparent 12px 24px);display:flex;align-items:center;justify-content:center;border:3px solid #000"
            )}
          >
            <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:24px;color:#000;text-align:center;line-height:1.4")}>
              ibW Logo
              <br />
              schwarz auf Gelb
            </span>
          </div>
        </div>
        <div style={css("background:#141414;display:flex;align-items:center;justify-content:center;padding:40px")}>
          <div
            style={css(
              "width:100%;aspect-ratio:1;background:repeating-linear-gradient(135deg,rgba(255,255,255,0.12) 0 12px,transparent 12px 24px);display:flex;align-items:center;justify-content:center;border:3px solid #FFDC00"
            )}
          >
            <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:24px;color:#FFDC00;text-align:center;line-height:1.4")}>
              ibW Logo
              <br />
              weiss auf Schwarz
            </span>
          </div>
        </div>
        <div style={css("background:#141414;padding:48px;display:flex;flex-direction:column;gap:28px;justify-content:center")}>
          {bullets.map((b, i) => (
            <div key={i} style={css("display:flex;gap:24px")}>
              <span style={css("color:#FFDC00;font-size:30px")}>—</span>
              <span style={css("font-size:30px;line-height:1.4")}>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Icons() {
  return (
    <section
      style={css(
        "background:#000;color:#fff;font-family:'TStar','Archivo',Helvetica,sans-serif;padding:90px;display:flex;flex-direction:column;gap:44px"
      )}
    >
      <div style={css("display:flex;justify-content:space-between;align-items:flex-end;gap:40px")}>
        <div style={css("display:flex;flex-direction:column;gap:16px")}>
          <div style={css("font-family:ui-monospace,Menlo,monospace;font-size:26px;letter-spacing:0.1em;color:#FFDC00")}>06 — Icons</div>
          <div style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:64px;text-transform:uppercase;letter-spacing:-0.01em")}>
            Konturen, zweifarbig
          </div>
        </div>
        <div style={css("font-size:30px;line-height:1.4;max-width:700px;color:rgba(255,255,255,0.85)")}>
          Die Icons bestehen nur aus Konturen und werden zweifarbig eingesetzt: weiss und gelb oder schwarz und gelb. Je nach Hintergrund positiv oder negativ.
        </div>
      </div>
      <div style={css("display:grid;grid-template-columns:repeat(4,1fr);gap:20px;flex:1")}>
        <div style={css("background:#141414;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;padding:36px")}>
          <div
            style={css(
              "width:100%;aspect-ratio:1;background:repeating-linear-gradient(135deg,rgba(255,255,255,0.1) 0 10px,transparent 10px 20px);border:3px solid #FFDC00;display:flex;align-items:center;justify-content:center"
            )}
          >
            <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:24px;color:#FFDC00;text-align:center;line-height:1.4")}>
              Icon
              <br />
              weiss + gelb
            </span>
          </div>
          <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:24px;color:rgba(255,255,255,0.6)")}>negativ</span>
        </div>
        <div style={css("background:#FFDC00;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;padding:36px")}>
          <div
            style={css(
              "width:100%;aspect-ratio:1;background:repeating-linear-gradient(135deg,rgba(0,0,0,0.14) 0 10px,transparent 10px 20px);border:3px solid #000;display:flex;align-items:center;justify-content:center"
            )}
          >
            <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:24px;color:#000;text-align:center;line-height:1.4")}>
              Icon
              <br />
              schwarz + gelb
            </span>
          </div>
          <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:24px;color:rgba(0,0,0,0.65)")}>positiv</span>
        </div>
        <div style={css("background:#141414;padding:44px;display:flex;flex-direction:column;justify-content:space-between")}>
          <span style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:38px;line-height:1.05;text-transform:uppercase;color:#FFDC00")}>
            Strichstärke
          </span>
          <span style={css("font-size:30px;line-height:1.4")}>
            Eine Stärke für alle Icons, optisch auf die Schriftstärke abgestimmt. Keine Flächen, keine Füllungen.
          </span>
        </div>
        <div style={css("background:#141414;padding:44px;display:flex;flex-direction:column;justify-content:space-between")}>
          <span style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:38px;line-height:1.05;text-transform:uppercase;color:#FFDC00")}>
            Platzierung
          </span>
          <span style={css("font-size:30px;line-height:1.4")}>Ein Icon pro Kachel, zentriert, mit Rand von einer halben Icon-Breite.</span>
        </div>
      </div>
    </section>
  );
}

function Gestaltungsraster() {
  return (
    <section
      style={css(
        "background:#000;color:#fff;font-family:'TStar','Archivo',Helvetica,sans-serif;padding:90px;display:grid;grid-template-columns:1fr 1.15fr;gap:60px"
      )}
    >
      <div style={css("display:flex;flex-direction:column;justify-content:space-between")}>
        <div style={css("display:flex;flex-direction:column;gap:16px")}>
          <div style={css("font-family:ui-monospace,Menlo,monospace;font-size:26px;letter-spacing:0.1em;color:#FFDC00")}>07 — Gestaltungsraster</div>
          <div style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:64px;line-height:1;text-transform:uppercase;letter-spacing:-0.01em")}>
            Das Kachelsystem
          </div>
        </div>
        <div style={css("font-size:34px;line-height:1.4")}>
          Ausgehend vom quadratischen Logo setzen wir auf ein Kachelsystem aus quadratischen und quaderförmigen Kacheln.
        </div>
        <div style={css("display:flex;flex-direction:column;gap:0")}>
          <div style={css("display:flex;gap:28px;padding:22px 0;border-top:2px solid #222")}>
            <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:24px;color:#FFDC00;width:180px")}>Grundmodul</span>
            <span style={css("font-size:28px")}>Quadrat = Logobreite</span>
          </div>
          <div style={css("display:flex;gap:28px;padding:22px 0;border-top:2px solid #222")}>
            <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:24px;color:#FFDC00;width:180px")}>Kacheln</span>
            <span style={css("font-size:28px")}>1×1, 1×2, 2×1, 2×2</span>
          </div>
          <div style={css("display:flex;gap:28px;padding:22px 0;border-top:2px solid #222;border-bottom:2px solid #222")}>
            <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:24px;color:#FFDC00;width:180px")}>Fugen</span>
            <span style={css("font-size:28px")}>Keine — Kacheln stossen an</span>
          </div>
        </div>
      </div>
      <div
        style={css(
          "display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(4,1fr);gap:0;outline:3px dashed #333;outline-offset:14px"
        )}
      >
        <div style={css("background:#FFDC00;grid-column:span 2;grid-row:span 2;display:flex;align-items:flex-end;padding:28px")}>
          <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:24px;color:#000")}>2 × 2</span>
        </div>
        <div style={css("background:#1b1b1b;display:flex;align-items:flex-end;padding:20px")}>
          <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:24px;color:#777")}>1×1</span>
        </div>
        <div style={css("background:#FFDC00")} />
        <div style={css("background:#1b1b1b;grid-row:span 2;display:flex;align-items:flex-end;padding:20px")}>
          <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:24px;color:#777")}>1×2</span>
        </div>
        <div style={css("background:#0a0a0a")} />
        <div style={css("background:#FFDC00;grid-column:span 2;display:flex;align-items:flex-end;padding:20px")}>
          <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:24px;color:#000")}>2×1</span>
        </div>
        <div style={css("background:#1b1b1b")} />
        <div style={css("background:#FFDC00")} />
        <div style={css("background:#0a0a0a")} />
        <div style={css("background:#1b1b1b")} />
      </div>
    </section>
  );
}

function Plakate() {
  return (
    <section
      style={css(
        "background:#FFDC00;color:#000;font-family:'TStar','Archivo',Helvetica,sans-serif;padding:90px;display:flex;flex-direction:column;gap:40px"
      )}
    >
      <div style={css("display:flex;justify-content:space-between;align-items:flex-end;gap:40px")}>
        <div style={css("display:flex;flex-direction:column;gap:16px")}>
          <div style={css("font-family:ui-monospace,Menlo,monospace;font-size:26px;letter-spacing:0.1em")}>08 — Anwendungen</div>
          <div style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:64px;text-transform:uppercase;letter-spacing:-0.01em")}>
            Plakate F4 &amp; F12
          </div>
        </div>
        <div style={css("font-family:ui-monospace,Menlo,monospace;font-size:26px;line-height:1.5;text-align:right")}>
          Ränder 120 mm
          <br />
          Quadratisches Raster
        </div>
      </div>
      <div style={css("display:flex;gap:40px;align-items:flex-start;flex:1")}>
        <div style={css("display:flex;flex-direction:column;gap:20px")}>
          <div style={css("width:294px;height:420px;overflow:hidden;background:#000")}>
            <div
              style={css(
                "width:700px;height:1000px;transform:scale(0.42);transform-origin:top left;background:#000;padding:60px;display:flex;flex-direction:column;justify-content:space-between;box-sizing:border-box"
              )}
            >
              <span style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:110px;line-height:0.9;text-transform:uppercase;color:#FFDC00")}>
                Mach
                <br />
                dich
                <br />
                schlau
              </span>
              <div style={css("display:flex;flex-direction:column;gap:20px")}>
                <span style={css("font-size:40px;line-height:1.3;color:#fff;font-weight:500")}>
                  Mach einen von 100 Lehrgängen aus 30 Berufsrichtungen.
                </span>
                <div style={css("background:#FFDC00;color:#000;padding:28px 32px;display:flex;justify-content:space-between;align-items:baseline")}>
                  <span style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:44px;text-transform:uppercase")}>
                    Infoabend
                  </span>
                  <span style={css("font-weight:700;font-size:40px")}>22.9.26</span>
                </div>
              </div>
            </div>
          </div>
          <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:24px")}>F4 — 895 × 1280 mm</span>
        </div>
        <div style={css("display:flex;flex-direction:column;gap:20px;flex:1")}>
          <div style={css("width:100%;height:296px;overflow:hidden;background:#000")}>
            <div
              style={css(
                "width:1240px;height:592px;transform:scale(0.5);transform-origin:top left;background:#FFDC00;display:grid;grid-template-columns:1.2fr 1fr 0.8fr;box-sizing:border-box"
              )}
            >
              <div style={css("padding:56px;display:flex;flex-direction:column;justify-content:space-between")}>
                <span style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:92px;line-height:0.92;text-transform:uppercase;color:#000")}>
                  Machs
                  <br />
                  genau
                </span>
                <span style={css("font-size:32px;line-height:1.3;font-weight:500;color:#000")}>
                  Mach Bau oder einen von 100 Lehrgängen aus 30 Berufsrichtungen.
                </span>
              </div>
              <div style={css("background:#000;padding:48px;display:flex;flex-direction:column;gap:14px;justify-content:center")}>
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={i} style={css("font-weight:500;font-size:30px;color:#fff")}>
                    | Studienrichtung
                  </span>
                ))}
              </div>
              <div style={css("background:#000;display:flex;align-items:center;justify-content:center;border-left:4px solid #FFDC00")}>
                <div
                  style={css(
                    "width:60%;aspect-ratio:1;border:4px solid #FFDC00;background:repeating-linear-gradient(135deg,rgba(255,255,255,0.12) 0 12px,transparent 12px 24px);display:flex;align-items:center;justify-content:center"
                  )}
                >
                  <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:26px;color:#FFDC00;text-align:center")}>Logo</span>
                </div>
              </div>
            </div>
          </div>
          <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:24px")}>F12 — 2685 × 1280 mm</span>
        </div>
      </div>
    </section>
  );
}

function Digital() {
  return (
    <section
      style={css(
        "background:#000;color:#fff;font-family:'TStar','Archivo',Helvetica,sans-serif;padding:90px;display:flex;flex-direction:column;gap:40px"
      )}
    >
      <div style={css("display:flex;justify-content:space-between;align-items:flex-end;gap:40px")}>
        <div style={css("display:flex;flex-direction:column;gap:16px")}>
          <div style={css("font-family:ui-monospace,Menlo,monospace;font-size:26px;letter-spacing:0.1em;color:#FFDC00")}>08 — Anwendungen</div>
          <div style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:64px;text-transform:uppercase;letter-spacing:-0.01em")}>
            Digital
          </div>
        </div>
        <div style={css("font-family:ui-monospace,Menlo,monospace;font-size:26px;line-height:1.5;text-align:right;color:#FFDC00")}>
          Ränder 90 px
          <br />
          Quadratisches Raster
        </div>
      </div>
      <div style={css("display:flex;gap:40px;align-items:flex-start;flex:1")}>
        <div style={css("display:flex;flex-direction:column;gap:20px")}>
          <div style={css("width:400px;height:400px;overflow:hidden")}>
            <div
              style={css(
                "width:1000px;height:1000px;transform:scale(0.4);transform-origin:top left;background:#FFDC00;padding:90px;display:flex;flex-direction:column;justify-content:space-between;box-sizing:border-box"
              )}
            >
              <span style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:150px;line-height:0.9;text-transform:uppercase;color:#000")}>
                Machs
                <br />
                nach-
                <br />
                haltig
              </span>
              <span style={css("font-size:48px;line-height:1.3;font-weight:500;color:#000")}>
                Mach einen von 100 Lehrgängen aus 30 Berufsrichtungen.
              </span>
            </div>
          </div>
          <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:24px;color:rgba(255,255,255,0.6)")}>1:1 — Post</span>
        </div>
        <div style={css("display:flex;flex-direction:column;gap:20px")}>
          <div style={css("width:225px;height:400px;overflow:hidden")}>
            <div
              style={css(
                "width:562px;height:1000px;transform:scale(0.4);transform-origin:top left;background:#000;display:flex;flex-direction:column;box-sizing:border-box"
              )}
            >
              <div
                style={css(
                  "flex:1;background:repeating-linear-gradient(135deg,rgba(255,255,255,0.1) 0 16px,transparent 16px 32px);display:flex;align-items:center;justify-content:center"
                )}
              >
                <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:30px;color:rgba(255,255,255,0.7);text-align:center")}>
                  Stockbild
                  <br />
                  Lehrgangsebene
                </span>
              </div>
              <div style={css("background:#FFDC00;padding:60px;display:flex;flex-direction:column;gap:24px")}>
                <span style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:96px;line-height:0.9;text-transform:uppercase;color:#000")}>
                  Mach
                  <br />
                  Holz
                </span>
                <span style={css("font-size:36px;line-height:1.3;font-weight:500;color:#000")}>Mach einen von 100 Lehrgängen.</span>
              </div>
            </div>
          </div>
          <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:24px;color:rgba(255,255,255,0.6)")}>9:16 — Story</span>
        </div>
        <div style={css("flex:1;min-width:0;display:flex;flex-direction:column;gap:20px")}>
          <div style={css("width:100%;min-width:0;height:400px;overflow:hidden")}>
            <div
              style={css(
                "width:1200px;height:1000px;transform:scale(0.4);transform-origin:top left;background:#000;padding:90px;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:0;box-sizing:border-box"
              )}
            >
              <div style={css("background:#FFDC00;padding:56px;display:flex;align-items:flex-start")}>
                <span style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:96px;line-height:0.9;text-transform:uppercase;color:#000")}>
                  Mach
                  <br />
                  weiter
                </span>
              </div>
              <div
                style={css(
                  "background:repeating-linear-gradient(135deg,rgba(255,255,255,0.12) 0 16px,transparent 16px 32px);display:flex;align-items:center;justify-content:center"
                )}
              >
                <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:30px;color:rgba(255,255,255,0.7);text-align:center")}>
                  Stockbild
                </span>
              </div>
              <div style={css("background:#141414;padding:56px;display:flex;flex-direction:column;gap:20px;justify-content:center")}>
                <span style={css("font-weight:500;font-size:34px;color:#fff;line-height:1.3")}>100% berufsbegleitend</span>
                <span style={css("font-weight:500;font-size:34px;color:#fff;line-height:1.3")}>direkt am Bahnhof Chur und Sargans</span>
                <span style={css("font-weight:500;font-size:34px;color:#fff;line-height:1.3")}>anerkannte Schule aus der Region</span>
              </div>
              <div style={css("background:#FFDC00;display:flex;align-items:center;justify-content:center")}>
                <div
                  style={css(
                    "width:50%;aspect-ratio:1;border:4px solid #000;background:repeating-linear-gradient(135deg,rgba(0,0,0,0.14) 0 12px,transparent 12px 24px);display:flex;align-items:center;justify-content:center"
                  )}
                >
                  <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:28px;color:#000")}>Logo</span>
                </div>
              </div>
            </div>
          </div>
          <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:24px;color:rgba(255,255,255,0.6)")}>6:5 — Landingpage-Banner</span>
        </div>
      </div>
    </section>
  );
}

function Bildwelt() {
  const bullets = [
    "Echte Tätigkeit statt Symbolbild.",
    "Ruhiger Hintergrund, klare Hauptfigur.",
    "Keine Farbfilter, kein Gelbstich.",
    "Text nie direkt auf dem Bild — Headline sitzt auf der Nachbarkachel.",
  ];
  return (
    <section
      style={css(
        "background:#000;color:#fff;font-family:'TStar','Archivo',Helvetica,sans-serif;padding:90px;display:flex;flex-direction:column;gap:40px"
      )}
    >
      <div style={css("display:flex;justify-content:space-between;align-items:flex-end;gap:40px")}>
        <div style={css("display:flex;flex-direction:column;gap:16px")}>
          <div style={css("font-family:ui-monospace,Menlo,monospace;font-size:26px;letter-spacing:0.1em;color:#FFDC00")}>08 — Anwendungen</div>
          <div style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:64px;text-transform:uppercase;letter-spacing:-0.01em")}>
            Bildwelt
          </div>
        </div>
        <div style={css("font-size:30px;line-height:1.4;max-width:700px;color:rgba(255,255,255,0.85)")}>
          Stockbilder werden auf Lehrgangsebene gewählt: die Tätigkeit im Bild, nicht die Schule. Bilder liegen immer in einer eigenen Kachel.
        </div>
      </div>
      <div style={css("display:grid;grid-template-columns:repeat(3,1fr);gap:20px;flex:1")}>
        <div
          style={css(
            "background:repeating-linear-gradient(135deg,rgba(255,255,255,0.1) 0 14px,transparent 14px 28px);border:3px solid #222;display:flex;flex-direction:column;justify-content:flex-end;padding:36px;gap:12px"
          )}
        >
          <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:26px;color:#FFDC00")}>Bildslot 1:1</span>
          <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:24px;color:rgba(255,255,255,0.7);line-height:1.4")}>
            Holzbau — Person bei der Arbeit
          </span>
        </div>
        <div
          style={css(
            "background:repeating-linear-gradient(135deg,rgba(255,255,255,0.1) 0 14px,transparent 14px 28px);border:3px solid #222;display:flex;flex-direction:column;justify-content:flex-end;padding:36px;gap:12px"
          )}
        >
          <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:26px;color:#FFDC00")}>Bildslot 1:1</span>
          <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:24px;color:rgba(255,255,255,0.7);line-height:1.4")}>
            Gebäudetechnik — Detail am Objekt
          </span>
        </div>
        <div style={css("background:#FFDC00;color:#000;padding:44px;display:flex;flex-direction:column;gap:26px;justify-content:center")}>
          {bullets.map((b, i) => (
            <div key={i} style={css("display:flex;gap:20px")}>
              <span style={css("font-size:30px")}>—</span>
              <span style={css("font-size:30px;line-height:1.4")}>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
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
    <section
      style={css(
        "background:#000;color:#fff;font-family:'TStar','Archivo',Helvetica,sans-serif;padding:90px;display:flex;flex-direction:column;gap:44px"
      )}
    >
      <div style={css("display:flex;flex-direction:column;gap:16px")}>
        <div style={css("font-family:ui-monospace,Menlo,monospace;font-size:26px;letter-spacing:0.1em;color:#FFDC00")}>08 — Anwendungen</div>
        <div style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:64px;text-transform:uppercase;letter-spacing:-0.01em")}>
          Meccano Testimonial-Clip
        </div>
      </div>
      <div style={css("display:grid;grid-template-columns:repeat(4,1fr);gap:20px;flex:1")}>
        {steps.map(([time, title, body, yellow]) => (
          <div
            key={time}
            style={css(
              yellow
                ? "background:#FFDC00;color:#000;padding:40px;display:flex;flex-direction:column;justify-content:space-between"
                : "background:#141414;padding:40px;display:flex;flex-direction:column;justify-content:space-between"
            )}
          >
            <span style={css(`font-family:ui-monospace,Menlo,monospace;font-size:26px${yellow ? "" : ";color:#FFDC00"}`)}>{time}</span>
            <span
              style={css(
                `font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:44px;line-height:1;text-transform:uppercase${
                  yellow ? "" : ";color:#FFDC00"
                }`
              )}
            >
              {title}
            </span>
            <span style={css(`font-size:28px;line-height:1.4${yellow ? ";font-weight:500" : ""}`)}>{body}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function DosDonts() {
  const dos = [
    "Headline immer mit «Mach» beginnen.",
    "Flächen sauber am Kachelraster ausrichten.",
    "Gelb und Schwarz als grosse Flächen einsetzen.",
    "Ränder einhalten: 120 mm Print, 90 px Digital.",
  ];
  const donts = [
    "Keine dritte Farbe, keine Verläufe.",
    "Keine Headline über dem Bild.",
    "Keine gefüllten Icons, keine fremden Icon-Sets.",
    "Keine Schriftmischung über Nexa und TStar hinaus.",
  ];
  return (
    <section
      style={css(
        "background:#000;color:#fff;font-family:'TStar','Archivo',Helvetica,sans-serif;padding:90px;display:flex;flex-direction:column;gap:44px"
      )}
    >
      <div style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:64px;text-transform:uppercase;letter-spacing:-0.01em")}>
        Do&apos;s &amp; Don&apos;ts
      </div>
      <div style={css("display:grid;grid-template-columns:1fr 1fr;gap:20px;flex:1")}>
        <div style={css("background:#FFDC00;color:#000;padding:56px;display:flex;flex-direction:column;gap:28px")}>
          <span style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:48px;text-transform:uppercase")}>Do</span>
          {dos.map((d, i) => (
            <div key={i} style={css("display:flex;gap:20px")}>
              <span style={css("font-size:30px")}>+</span>
              <span style={css("font-size:30px;line-height:1.4")}>{d}</span>
            </div>
          ))}
        </div>
        <div style={css("background:#141414;padding:56px;display:flex;flex-direction:column;gap:28px")}>
          <span style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:48px;text-transform:uppercase;color:#FFDC00")}>
            Don&apos;t
          </span>
          {donts.map((d, i) => (
            <div key={i} style={css("display:flex;gap:20px")}>
              <span style={css("font-size:30px;color:#FFDC00")}>–</span>
              <span style={css("font-size:30px;line-height:1.4")}>{d}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Abschluss() {
  return (
    <section
      style={css(
        "background:#FFDC00;color:#000;font-family:'TStar','Archivo',Helvetica,sans-serif;display:grid;grid-template-columns:1fr 560px;overflow:hidden"
      )}
    >
      <div style={css("padding:90px;display:flex;flex-direction:column;justify-content:space-between")}>
        <div style={css("font-family:ui-monospace,Menlo,monospace;font-size:26px;letter-spacing:0.1em")}>Kampagnen-Brandguide — Version 1.0</div>
        <div style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:132px;line-height:0.9;text-transform:uppercase;letter-spacing:-0.02em")}>
          Mach mit
        </div>
        <div style={css("font-size:34px;line-height:1.4;max-width:720px;font-weight:500")}>
          Fragen zum Look, Vorlagen und Bildfreigaben: Marketing ibW Höhere Fachschule Südostschweiz.
        </div>
      </div>
      <div style={css("background:#000;display:grid;grid-template-rows:1fr 1fr")}>
        <div style={css("display:flex;align-items:center;justify-content:center;padding:70px")}>
          <div
            style={css(
              "width:70%;aspect-ratio:1;border:4px solid #FFDC00;background:repeating-linear-gradient(135deg,rgba(255,255,255,0.12) 0 14px,transparent 14px 28px);display:flex;align-items:center;justify-content:center"
            )}
          >
            <span style={css("font-family:ui-monospace,Menlo,monospace;font-size:26px;color:#FFDC00")}>Logo</span>
          </div>
        </div>
        <div style={css("background:#FFDC00;display:flex;align-items:center;justify-content:center")}>
          <span style={css("font-family:'Nexa Bold','Archivo Black',Helvetica,sans-serif;font-size:120px;text-transform:uppercase;color:#000")}>
            Mach
          </span>
        </div>
      </div>
    </section>
  );
}

export const SLIDES: { label: (typeof SLIDE_LABELS)[number]; Component: () => ReactNode }[] = [
  { label: "Cover", Component: Cover },
  { label: "Inhalt", Component: Inhalt },
  { label: "Eckpunkte", Component: Eckpunkte },
  { label: "Leitidee", Component: Leitidee },
  { label: "Headline-Prinzip", Component: HeadlinePrinzip },
  { label: "Farben", Component: Farben },
  { label: "Schriften", Component: Schriften },
  { label: "Typo-Hierarchie", Component: TypoHierarchie },
  { label: "Logo", Component: Logo },
  { label: "Icons", Component: Icons },
  { label: "Gestaltungsraster", Component: Gestaltungsraster },
  { label: "Plakate", Component: Plakate },
  { label: "Digital", Component: Digital },
  { label: "Bildwelt", Component: Bildwelt },
  { label: "Testimonial-Clips", Component: TestimonialClips },
  { label: "Do's & Don'ts", Component: DosDonts },
  { label: "Abschluss", Component: Abschluss },
];
