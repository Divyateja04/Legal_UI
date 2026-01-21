import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import "../App.css";

function SummaryPage() {
  const { extractedText } = useContext(DataContext);

  const [summaryData, setSummaryData] = useState(null);
  const [activeTab, setActiveTab] = useState("bullet");
  const [loading, setLoading] = useState(false);

  const generateSummary = async () => {
    setLoading(true);

    const response = await fetch("http://127.0.0.1:5000/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: extractedText }),
    });

    const data = await response.json();

    setSummaryData({
      bullet: data.bullet_summary,
      paragraph: data.paragraph_summary,
      issues: data.issues_summary,
    });

    setLoading(false);
  };

  /* ================================
     EMPTY STATE — PREMIUM UI
  ================================= */
  if (!extractedText) {
    return (
      <div className="summary-wrapper">
        <div className="empty-card enhanced-empty">

          <div className="empty-icon">📄</div>

          <h2 className="empty-title">No Extracted Text Found</h2>

          <p className="empty-desc">
            You haven’t uploaded any judgment yet.  
            Upload a document to extract text and generate  
            <b> bullet summaries, detailed summaries, and legal issue insights.</b>
          </p>

          <a href="/upload" className="empty-btn pulse-btn">
            Upload a Judgment
          </a>

        </div>
      </div>
    );
  }

  /* ================================
     MAIN SUMMARY PAGE
  ================================= */

  return (
    <div className="summary-wrapper">
      <div className="summary-page-container">

        {/* Extracted Text Card */}
        <div className="summary-card">

          <h2 className="summary-title">Extracted Text</h2>

          <div className="extracted-box">{extractedText}</div>

          <button
            className="btn-generate"
            onClick={generateSummary}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Summary"}
          </button>

          {/* Tabs only after summary generated */}
          {summaryData && (
            <>
              <div className="summary-tabs">

                <button
                  className={activeTab === "bullet" ? "tab active" : "tab"}
                  onClick={() => setActiveTab("bullet")}
                >
                  Bullet Summary
                </button>

                <button
                  className={activeTab === "paragraph" ? "tab active" : "tab"}
                  onClick={() => setActiveTab("paragraph")}
                >
                  Detailed Summary
                </button>

                <button
                  className={activeTab === "issues" ? "tab active" : "tab"}
                  onClick={() => setActiveTab("issues")}
                >
                  Issues Summary
                </button>

              </div>

              {/* Output card */}
              <div className="summary-output">
                {activeTab === "bullet" && (
                  <pre className="summary-text">{summaryData.bullet}</pre>
                )}

                {activeTab === "paragraph" && (
                  <p className="summary-text">{summaryData.paragraph}</p>
                )}

                {activeTab === "issues" && (
                  <pre className="summary-text">{summaryData.issues}</pre>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SummaryPage;
