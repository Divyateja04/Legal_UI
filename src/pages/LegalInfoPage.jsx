import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import "../App.css";

function LegalInfoPage() {
  const { extractedText } = useContext(DataContext);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const extractEntities = async () => {
    if (!extractedText) return;

    setLoading(true);

    const response = await fetch("http://127.0.0.1:5000/extract_entities", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: extractedText }),
    });

    const data = await response.json();
    setInfo(data);
    setLoading(false);
  };

  /* ============= EMPTY STATE ============= */
  if (!extractedText) {
    return (
      <div className="legalinfo-wrapper">

        <div className="empty-card enhanced-empty">
          <div className="empty-icon">⚖️</div>

          <h2 className="empty-title">No Extracted Text</h2>

          <p className="empty-desc">
            Please upload a judgment to generate structured legal insights such as
            <b> metadata, issues, reasoning, arguments and final orders.</b>
          </p>

          <a href="/upload" className="pulse-btn">Go to Upload Page</a>
        </div>

      </div>
    );
  }

  const metadata = info?.metadata || {};
  const parties = metadata.parties || {};
  const argumentsInfo = info?.arguments || {};
  const compensation = info?.compensation || {};

  /* ============= MAIN CONTENT ============= */

  return (
    <div className="legalinfo-wrapper">

      <div className="legalinfo-card improved-legal-card">

        <h2 className="legalinfo-title">
          📘 Legal Information
        </h2>

        <p className="legalinfo-sub">
          Extract structured sections such as court metadata, issues, reasoning, citations and more.
        </p>

        <button
          className="btn-extract improved-btn"
          onClick={extractEntities}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Extract Legal Info"}
        </button>

        {info && (
          <div className="info-grid enhanced-info-grid">

            {/* COURT INFO */}
            <div className="info-box smooth-card">
              <h4>🏛 Court & Case</h4>
              <p><strong>Court:</strong> {metadata.court}</p>
              <p><strong>Case Title:</strong> {metadata.case_title}</p>
              <p><strong>Case No:</strong> {metadata.case_number}</p>
              <p><strong>Date:</strong> {metadata.judgment_date}</p>
              {metadata.bench?.length > 0 && (
                <p><strong>Bench:</strong> {metadata.bench.join(", ")}</p>
              )}
            </div>

            {/* PARTIES */}
            <div className="info-box smooth-card">
              <h4>👥 Parties</h4>
              <p><strong>Appellant:</strong> {parties.appellant}</p>
              <p><strong>Respondent:</strong> {parties.respondent}</p>
            </div>

            {/* SECTIONS & ACTS */}
            <div className="info-box smooth-card">
              <h4>📘 Sections & Acts</h4>
              <p><strong>Sections:</strong> {info.sections?.join(", ") || "None"}</p>
              <p><strong>Acts:</strong> {info.acts?.join(", ") || "None"}</p>
            </div>

            {/* CITATIONS */}
            <div className="info-box smooth-card">
              <h4>📑 Citations</h4>
              <p>{info.citations?.join(", ") || "None"}</p>
            </div>

            {/* FACTS */}
            <div className="info-box smooth-card">
              <h4>📄 Key Facts</h4>
              <p>{info.facts || "Not extracted."}</p>
            </div>

            {/* ISSUES */}
            <div className="info-box smooth-card">
              <h4>❓ Issues</h4>
              <p>{info.issues || "No issues extracted."}</p>
            </div>

            {/* ARGUMENTS */}
            <div className="info-box smooth-card">
              <h4>🗣 Arguments</h4>
              <p><strong>Appellant:</strong> {argumentsInfo.appellant}</p>
              <p><strong>Respondent:</strong> {argumentsInfo.respondent}</p>
            </div>

            {/* REASONING */}
            <div className="info-box smooth-card">
              <h4>⚖ Court's Reasoning</h4>
              <p>{info.reasoning || "Not extracted."}</p>
            </div>

            {/* FINAL ORDER */}
            <div className="info-box smooth-card">
              <h4>📌 Final Order</h4>
              <p>{info.final_order || "Not detected."}</p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default LegalInfoPage;
